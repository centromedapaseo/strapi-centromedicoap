const fs = require('fs');

async function importMedicamentos() {
  const STRAPI_URL = process.env.STRAPI_URL || 'https://your-strapi-instance.strapiapp.com';
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

  if (!STRAPI_TOKEN) {
    console.error('❌ Error: STRAPI_TOKEN environment variable is required');
    process.exit(1);
  }

  // Read JSON file
  const medicamentos = JSON.parse(fs.readFileSync('./medicamentos-data.json', 'utf-8'));

  console.log(`📦 Encontrados ${medicamentos.length} medicamentos para importar\n`);

  // First, delete all existing medicamentos
  console.log('🗑️  Eliminando medicamentos existentes...\n');
  try {
    const response = await fetch(`${STRAPI_URL}/api/medicamentos?pagination[pageSize]=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${STRAPI_TOKEN}`
      }
    });

    if (response.ok) {
      const result = await response.json();
      const existing = result.data;

      for (const med of existing) {
        await fetch(`${STRAPI_URL}/api/medicamentos/${med.documentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${STRAPI_TOKEN}`
          }
        });
        console.log(`   Eliminado: ${med.Medicamento}`);
      }
      console.log(`\n✅ Eliminados ${existing.length} medicamentos\n`);
    }
  } catch (err) {
    console.log('⚠️  No se pudieron eliminar medicamentos existentes, continuando...\n');
  }

  // Import new medicamentos
  let count = 0;
  let errors = 0;

  for (const med of medicamentos) {
    try {
      const response = await fetch(`${STRAPI_URL}/api/medicamentos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            Medicamento: med.Medicamento,
            compuestoActivo: med.compuestoActivo || null,
            contenido: med.contenido || null,
            presentacion: med.presentacion || null,
            Precio: med.Precio
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP ${response.status}: ${JSON.stringify(errorData)}`);
      }

      count++;
      console.log(`✓ ${count}. ${med.Medicamento} - $${med.Precio}`);
    } catch (err) {
      errors++;
      console.error(`✗ Error: ${med.Medicamento}`, err.message);
    }
  }

  console.log(`\n✅ Importados ${count} de ${medicamentos.length} medicamentos`);
  if (errors > 0) {
    console.log(`⚠️  ${errors} errores encontrados`);
  }
}

importMedicamentos();
