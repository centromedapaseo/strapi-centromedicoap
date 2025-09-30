const fs = require('fs');

async function deleteOldMedicamentos() {
  // Strapi Cloud API configuration
  const STRAPI_URL = process.env.STRAPI_URL || 'https://your-strapi-instance.strapiapp.com';
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

  if (!STRAPI_TOKEN) {
    console.error('❌ Error: STRAPI_TOKEN environment variable is required');
    process.exit(1);
  }

  try {
    // Get all medicamentos
    console.log('📋 Obteniendo todos los medicamentos...\n');
    const response = await fetch(`${STRAPI_URL}/api/medicamentos?pagination[pageSize]=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const result = await response.json();
    const medicamentos = result.data;

    console.log(`📦 Encontrados ${medicamentos.length} medicamentos\n`);

    // Read the imported CSV to get the new medicamento names
    const csvPath = '/Users/chims/Downloads/Catalogos CentroMed - Medicamentos.csv';
    const content = fs.readFileSync(csvPath, 'utf-8');
    const lines = content.split('\n');
    const dataLines = lines.slice(1).filter(line => line.trim());

    const newMedicamentoNames = new Set();
    for (const line of dataLines) {
      const regex = /(".*?"|[^,]+)(?=\s*,|\s*$)/g;
      const values = [];
      let match;
      while ((match = regex.exec(line)) !== null) {
        values.push(match[1].replace(/^"|"$/g, '').trim());
      }
      if (values.length > 0) {
        newMedicamentoNames.add(values[0]);
      }
    }

    console.log(`🆕 Medicamentos nuevos: ${newMedicamentoNames.size}\n`);

    // Debug: Check structure
    if (medicamentos.length > 0) {
      console.log('📋 Estructura del primer medicamento:', JSON.stringify(medicamentos[0], null, 2));
    }

    // Delete medicamentos that are NOT in the new list
    let deletedCount = 0;
    for (const med of medicamentos) {
      const nombre = med.attributes?.Medicamento || med.Medicamento;

      if (!newMedicamentoNames.has(nombre)) {
        try {
          const deleteResponse = await fetch(`${STRAPI_URL}/api/medicamentos/${med.id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${STRAPI_TOKEN}`
            }
          });

          if (!deleteResponse.ok) {
            console.error(`✗ Error eliminando: ${nombre}`);
          } else {
            deletedCount++;
            console.log(`🗑️  ${deletedCount}. Eliminado: ${nombre}`);
          }
        } catch (err) {
          console.error(`✗ Error eliminando ${nombre}:`, err.message);
        }
      }
    }

    console.log(`\n✅ Se eliminaron ${deletedCount} medicamentos antiguos`);
    console.log(`📋 Medicamentos restantes: ${medicamentos.length - deletedCount}`);

  } catch (err) {
    console.error('❌ Error:', err.message);
    process.exit(1);
  }
}

deleteOldMedicamentos();
