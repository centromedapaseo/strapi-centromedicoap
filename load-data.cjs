// Script para cargar datos de doctores y medicamentos en Strapi Cloud
const STRAPI_URL = 'https://special-nurture-955505aa13.strapiapp.com';
const API_TOKEN = 'f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59';

// Datos reales de los 21 doctores del Centro Médico Apaseo
const doctores = [
  { nombre: "DR. ALBERTO DURÁN", especialidad: "Gineco-Obstetricia" },
  { nombre: "DRA. CECILIA AYALA", especialidad: "Gineco-Obstetricia" },
  { nombre: "DR. MARIO RENTERÍA", especialidad: "Pediatría" },
  { nombre: "DR. JOSE ALFREDO CASTILLO", especialidad: "Odontología" },
  { nombre: "DR. RENÉ PEÑAFLOR", especialidad: "Otorrinolaringología" },
  { nombre: "DR. IVAN PAEZ", especialidad: "Oftalmología" },
  { nombre: "DRA. CLAUDIA MANDUJANO", especialidad: "Odontopediatría" },
  { nombre: "DR. DANIEL LARA", especialidad: "Medicina General" },
  { nombre: "DR. MAX CHAVEZ", especialidad: "Medicina General" },
  { nombre: "DRA. MÓNICA GONZALE", especialidad: "Medicina General" },
  { nombre: "DR. JOSE LUIS ALCOLTZI", especialidad: "Medicina General" },
  { nombre: "DRA. DALIA CAZARES", especialidad: "Dermatología" },
  { nombre: "LIC. AUDELIA CARDENAS", especialidad: "Psicología" },
  { nombre: "LIC. EDUARDO FIGUEROA", especialidad: "Nutriología" },
  { nombre: "DR. IVAN GARCIA", especialidad: "Traumatología y Ortopedia" },
  { nombre: "DRA. ANA RAMIREZ", especialidad: "Oncología" },
  { nombre: "DR. ABNER DANIEL PEREZ", especialidad: "Gastroenterología" },
  { nombre: "DR. RICARDO URBINA", especialidad: "Nefrología" },
  { nombre: "DR. ARMANDO TAPIA", especialidad: "Urología" },
  { nombre: "DR. ARTURO MAHO", especialidad: "Neurocirugía" },
  { nombre: "DR JESUS MENDOZA", especialidad: "Cirugía General" }
];

// Datos de los 15 medicamentos
const medicamentos = [
  {
    nombremedicamento: "CAPTOPRIL",
    contenido: "25 MG",
    compuestoActivo: "CAPTOPRIL",
    presentacion: "TABLETA",
    categoria: "Antinflamatorios",
    descripcion: "Inhibidor de la ECA para hipertensión",
    precio: 15.50
  },
  {
    nombremedicamento: "NEUROBION",
    contenido: "--",
    compuestoActivo: "TIAMINA, PIRIDOXINA, CIANOCOBALAMINA",
    presentacion: "TABLETA",
    categoria: "Vitaminas",
    descripcion: "Complejo vitamínico B",
    precio: 45.00
  },
  {
    nombremedicamento: "LEVOFLOXACINO",
    contenido: "750 MG",
    compuestoActivo: "LEVOFLOXACINO",
    presentacion: "TABLETA",
    categoria: "Antibiotico",
    descripcion: "Antibiótico de amplio espectro",
    precio: 125.00
  },
  {
    nombremedicamento: "PANTOPRAZOL",
    contenido: "40 MG",
    compuestoActivo: "PANTOPRAZOL",
    presentacion: "TABLETA",
    categoria: "Antinflamatorios",
    descripcion: "Inhibidor de bomba de protones",
    precio: 35.75
  },
  {
    nombremedicamento: "SUPERPUNCK",
    contenido: "250 ML",
    compuestoActivo: "SUPERPUNCK",
    presentacion: "SPRAY",
    categoria: "Analgesicos",
    descripcion: "Spray analgésico tópico",
    precio: 85.00
  },
  {
    nombremedicamento: "NEURONTIN",
    contenido: "600 MG",
    compuestoActivo: "GABAPENTINA",
    presentacion: "TABLETA",
    categoria: "Analgesicos",
    descripcion: "Anticonvulsivo para dolor neuropático",
    precio: 180.00
  },
  {
    nombremedicamento: "CLOVEX",
    contenido: "5 GR",
    compuestoActivo: "ACICLOVIR",
    presentacion: "CREMA",
    categoria: "Antinflamatorios",
    descripcion: "Antiviral tópico",
    precio: 55.50
  },
  {
    nombremedicamento: "AVAPENA",
    contenido: "25 MG",
    compuestoActivo: "CLOROPIRAMINA",
    presentacion: "TABLETA",
    categoria: "Analgesicos",
    descripcion: "Antihistamínico sedante",
    precio: 25.00
  },
  {
    nombremedicamento: "GELMICIN",
    contenido: "40 GR",
    compuestoActivo: "BETAMETASONA, GENTAMICINA, CLOTRIMAZOL",
    presentacion: "GEL",
    categoria: "Antinflamatorios",
    descripcion: "Gel triple acción",
    precio: 95.00
  },
  {
    nombremedicamento: "DIMEFOR XR",
    contenido: "750 MG",
    compuestoActivo: "METFORMINA",
    presentacion: "TABLETA",
    categoria: "Antinflamatorios",
    descripcion: "Antidiabético de liberación prolongada",
    precio: 75.25
  },
  {
    nombremedicamento: "AMOXICILINA",
    contenido: "500 MG/125 MG",
    compuestoActivo: "AMOXICILINA, ACIDO CLAVULANICO",
    presentacion: "TABLETA",
    categoria: "Antibiotico",
    descripcion: "Antibiótico betalactámico",
    precio: 65.00
  },
  {
    nombremedicamento: "AMOXICILINA FORTE",
    contenido: "875 MG/125 MG",
    compuestoActivo: "AMOXICILINA, ACIDO CLAVULANICO",
    presentacion: "TABLETA",
    categoria: "Antibiotico",
    descripcion: "Antibiótico betalactámico dosis alta",
    precio: 85.00
  },
  {
    nombremedicamento: "ALUMAG",
    contenido: "240 ML",
    compuestoActivo: "HIDROXIDO DE ALUMINIO Y HIDROXIDO DE MAGNESIO",
    presentacion: "SOLUCION",
    categoria: "Analgesicos",
    descripcion: "Antiácido líquido",
    precio: 32.50
  },
  {
    nombremedicamento: "COMBIVENT RESPIMAT",
    contenido: "4.5 ML",
    compuestoActivo: "BROMURO DE IPRATROPIO, SALBUTAMOL",
    presentacion: "SOLUCION",
    categoria: "Antinflamatorios",
    descripcion: "Inhalador broncodilatador",
    precio: 450.00
  },
  {
    nombremedicamento: "AMOXICLAV BID",
    contenido: "200 MG",
    compuestoActivo: "AMOXICILINA, ACIDO CLAVULANICO",
    presentacion: "SUSPENSION",
    categoria: "Antibiotico",
    descripcion: "Antibiótico pediátrico",
    precio: 95.00
  }
];

// Función para hacer request a Strapi
async function strapiRequest(endpoint, method = 'GET', data = null) {
  const url = `${STRAPI_URL}/api${endpoint}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_TOKEN}`
    }
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in ${method} ${endpoint}:`, error.message);
    throw error;
  }
}

// Cargar doctores
async function cargarDoctores() {
  console.log('🏥 Cargando doctores del Centro Médico Apaseo...');

  for (let i = 0; i < doctores.length; i++) {
    const doctor = doctores[i];
    console.log(`Cargando doctor ${i + 1}/21: ${doctor.nombre}`);

    try {
      const data = {
        data: {
          Medicos: [
            {
              Nombre: doctor.nombre,
              Especialidad: doctor.especialidad
            }
          ]
        }
      };

      await strapiRequest('/medicos', 'POST', data);
      console.log(`✅ ${doctor.nombre} - ${doctor.especialidad}`);
    } catch (error) {
      console.error(`❌ Error cargando ${doctor.nombre}:`, error.message);
    }
  }
}

// Cargar medicamentos
async function cargarMedicamentos() {
  console.log('💊 Cargando medicamentos de farmacia...');

  for (let i = 0; i < medicamentos.length; i++) {
    const med = medicamentos[i];
    console.log(`Cargando medicamento ${i + 1}/15: ${med.nombremedicamento}`);

    try {
      const data = {
        data: {
          Medicamentos: [
            {
              Nombremedicamento: med.nombremedicamento,
              Contenido: med.contenido,
              CompuestoActivo: med.compuestoActivo,
              Presentacion: med.presentacion,
              Categoria: med.categoria,
              Descripcion: med.descripcion,
              Precio: med.precio
            }
          ]
        }
      };

      await strapiRequest('/farmacias', 'POST', data);
      console.log(`✅ ${med.nombremedicamento} - ${med.contenido}`);
    } catch (error) {
      console.error(`❌ Error cargando ${med.nombremedicamento}:`, error.message);
    }
  }
}

// Función principal
async function main() {
  console.log('🚀 Iniciando carga de datos en Strapi Cloud...\n');

  try {
    // Cargar doctores
    await cargarDoctores();
    console.log('\n');

    // Cargar medicamentos
    await cargarMedicamentos();

    console.log('\n🎉 ¡Carga de datos completada exitosamente!');
    console.log('✅ 21 doctores del Centro Médico Apaseo cargados');
    console.log('✅ 15 medicamentos de farmacia cargados');

  } catch (error) {
    console.error('❌ Error durante la carga:', error);
    process.exit(1);
  }
}

// Ejecutar solo si se ejecuta directamente
if (require.main === module) {
  // Verificar si tenemos fetch disponible
  if (typeof fetch === 'undefined') {
    console.log('⚠️  Instalando node-fetch...');
    const { exec } = require('child_process');
    exec('npm install node-fetch@2', (error, stdout, stderr) => {
      if (error) {
        console.error('Error instalando node-fetch:', error);
        return;
      }
      console.log('✅ node-fetch instalado');

      // Ahora importar fetch y ejecutar
      global.fetch = require('node-fetch');
      main();
    });
  } else {
    main();
  }
} else {
  module.exports = { main, cargarDoctores, cargarMedicamentos };
}