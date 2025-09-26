const fetch = require('node-fetch');
const fs = require('fs');

const STRAPI_URL = 'https://special-nurture-955505aa13.strapiapp.com';
const API_TOKEN = 'f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59';

async function restoreData() {
  console.log('🔄 Restaurando datos desde backup a Strapi Cloud...');

  try {
    // Leer archivos de backup
    const farmaciaData = JSON.parse(fs.readFileSync('./backup-farmacias.json', 'utf8'));
    const promocionesData = JSON.parse(fs.readFileSync('./backup-promociones.json', 'utf8'));

    // Restaurar medicamentos (adaptando al nuevo content type)
    console.log('📦 Restaurando medicamentos...');

    if (farmaciaData.data && farmaciaData.data.length > 0) {
      for (const farmacia of farmaciaData.data) {
        if (farmacia.Medicamentos && farmacia.Medicamentos.length > 0) {
          for (const medicamento of farmacia.Medicamentos) {
            const medicamentoData = {
              data: {
                Medicamento: medicamento.Nombremedicamento,
                compuestoActivo: medicamento.Categoria, // Usando categoría como compuesto activo temporalmente
                contenido: medicamento.Descripcion,
                presentacion: 'Tableta', // Valor por defecto
                publishedAt: new Date().toISOString()
              }
            };

            const response = await fetch(`${STRAPI_URL}/api/medicamentos`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(medicamentoData)
            });

            if (response.ok) {
              const result = await response.json();
              console.log(`✅ Medicamento "${medicamento.Nombremedicamento}" creado exitosamente`);
            } else {
              const error = await response.text();
              console.error(`❌ Error creando medicamento "${medicamento.Nombremedicamento}":`, error);
            }
          }
        }
      }
    }

    // Restaurar médicos de muestra (ya que no había backup de médicos)
    console.log('👨‍⚕️ Creando médicos de muestra...');

    const medicosEjemplo = [
      { NombreDoctor: 'Dr. Juan Pérez', Especialidad: 'Medicina General' },
      { NombreDoctor: 'Dra. María González', Especialidad: 'Pediatría' },
      { NombreDoctor: 'Dr. Carlos Rodríguez', Especialidad: 'Cardiología' },
      { NombreDoctor: 'Dra. Ana Martínez', Especialidad: 'Gineco-Obstetricia' },
      { NombreDoctor: 'Dr. Luis Fernández', Especialidad: 'Traumatología y Ortopedia' }
    ];

    for (const medico of medicosEjemplo) {
      const medicoData = {
        data: {
          NombreDoctor: medico.NombreDoctor,
          Especialidad: medico.Especialidad,
          publishedAt: new Date().toISOString()
        }
      };

      const response = await fetch(`${STRAPI_URL}/api/medicos`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(medicoData)
      });

      if (response.ok) {
        console.log(`✅ Médico "${medico.NombreDoctor}" creado exitosamente`);
      } else {
        const error = await response.text();
        console.error(`❌ Error creando médico "${medico.NombreDoctor}":`, error);
      }
    }

    // Restaurar promociones
    console.log('🎁 Restaurando promociones...');

    if (promocionesData.data && promocionesData.data.length > 0) {
      for (const promo of promocionesData.data) {
        if (promo.detallepromocion && promo.detallepromocion.length > 0) {
          for (const detalle of promo.detallepromocion) {
            const promoData = {
              data: {
                detallepromo: detalle.detallepromo,
                publishedAt: new Date().toISOString()
              }
            };

            const response = await fetch(`${STRAPI_URL}/api/promocionmeds`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${API_TOKEN}`,
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(promoData)
            });

            if (response.ok) {
              console.log(`✅ Promoción "${detalle.detallepromo}" creada exitosamente`);
            } else {
              const error = await response.text();
              console.error(`❌ Error creando promoción "${detalle.detallepromo}":`, error);
            }
          }
        }
      }
    }

    console.log('🎉 Restauración completada exitosamente!');

  } catch (error) {
    console.error('❌ Error durante la restauración:', error);
  }
}

restoreData();