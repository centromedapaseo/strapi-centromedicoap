import fetch from 'node-fetch';
import fs from 'fs';

const STRAPI_URL = 'https://special-nurture-955505aa13.strapiapp.com';
const API_TOKEN = 'f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59';

async function backupData() {
  console.log('🔄 Haciendo backup de datos actuales en Strapi Cloud...');

  try {
    // Backup farmacias
    const farmaciaResponse = await fetch(`${STRAPI_URL}/api/farmacias?populate=*`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (farmaciaResponse.ok) {
      const farmaciaData = await farmaciaResponse.json();
      fs.writeFileSync('./backup-farmacias.json', JSON.stringify(farmaciaData, null, 2));
      console.log('✅ Backup de farmacias guardado');
    }

    // Backup promociones
    const promoResponse = await fetch(`${STRAPI_URL}/api/promocionmeds?populate=*`, {
      headers: {
        'Authorization': `Bearer ${API_TOKEN}`,
        'Content-Type': 'application/json'
      }
    });

    if (promoResponse.ok) {
      const promoData = await promoResponse.json();
      fs.writeFileSync('./backup-promociones.json', JSON.stringify(promoData, null, 2));
      console.log('✅ Backup de promociones guardado');
    }

    console.log('✅ Backup completado exitosamente');

  } catch (error) {
    console.error('❌ Error haciendo backup:', error);
  }
}

backupData();