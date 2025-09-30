const fs = require('fs');

async function importMedicamentos() {
  // Read CSV file
  const csvPath = '/Users/chims/Downloads/Catalogos CentroMed - Medicamentos.csv';
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n');

  // Skip header
  const dataLines = lines.slice(1).filter(line => line.trim());

  console.log(`📦 Encontrados ${dataLines.length} medicamentos para importar\n`);

  // Strapi Cloud API configuration
  const STRAPI_URL = process.env.STRAPI_URL || 'https://your-strapi-instance.strapiapp.com';
  const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

  if (!STRAPI_TOKEN) {
    console.error('❌ Error: STRAPI_TOKEN environment variable is required');
    process.exit(1);
  }

  let count = 0;
  let errors = 0;

  for (const line of dataLines) {
    // Simple CSV parser (handles quoted values)
    const regex = /(".*?"|[^,]+)(?=\s*,|\s*$)/g;
    const values = [];
    let match;
    while ((match = regex.exec(line)) !== null) {
      values.push(match[1].replace(/^"|"$/g, '').trim());
    }

    if (values.length < 5) continue;

    const [Medicamento, compuestoActivo, contenido, presentacion, precioStr] = values;
    const Precio = precioStr ? parseFloat(precioStr.replace(/\$/g, '').replace(/,/g, '')) : 0;

    try {
      const response = await fetch(`${STRAPI_URL}/api/medicamentos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${STRAPI_TOKEN}`
        },
        body: JSON.stringify({
          data: {
            Medicamento,
            compuestoActivo: compuestoActivo || null,
            contenido: contenido || null,
            presentacion: presentacion || null,
            Precio
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`HTTP ${response.status}: ${JSON.stringify(errorData)}`);
      }

      count++;
      console.log(`✓ ${count}. ${Medicamento} - $${Precio}`);
    } catch (err) {
      errors++;
      console.error(`✗ Error: ${Medicamento}`, err.message);
    }
  }

  console.log(`\n✅ Importados ${count} de ${dataLines.length} medicamentos`);
  if (errors > 0) {
    console.log(`⚠️  ${errors} errores encontrados`);
  }
}

importMedicamentos();