#!/bin/bash

STRAPI_URL="https://special-nurture-955505aa13.strapiapp.com"
API_TOKEN="f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59"

echo "👨‍⚕️ Cargando todos los doctores del Centro Médico Apaseo..."

# DR. ALBERTO DURÁN - GINECO-OBSTETRICIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Alberto Durán",
      "Especialidad": "Gineco-Obstetricia",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Alberto Durán - Gineco-Obstetricia"

# DRA. CECILIA AYALA - GINECO-OBSTETRICIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Cecilia Ayala",
      "Especialidad": "Gineco-Obstetricia",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dra. Cecilia Ayala - Gineco-Obstetricia"

# DR. MARIO RENTERÍA - PEDIATRIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Mario Rentería",
      "Especialidad": "Pediatría",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Mario Rentería - Pediatría"

# DR. JOSE ALFREDO CASTILLO - ODONTOLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. José Alfredo Castillo",
      "Especialidad": "Odontología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. José Alfredo Castillo - Odontología"

# DR. RENÉ PEÑAFLOR - OTORRINOLARINGOLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. René Peñaflor",
      "Especialidad": "Otorrinolaringología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. René Peñaflor - Otorrinolaringología"

# DR. IVAN PAEZ - OFTALMOLOGO (adaptado a Oftalmología)
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Iván Páez",
      "Especialidad": "Oftalmología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Iván Páez - Oftalmología"

# DRA. CLAUDIA MANDUJANO - ODONTOPEDIATRA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Claudia Mandujano",
      "Especialidad": "Odontopediatría",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dra. Claudia Mandujano - Odontopediatría"

# DR. DANIEL LARA - MEDICOS GENERALES
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Daniel Lara",
      "Especialidad": "Medicina General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Daniel Lara - Medicina General"

# DR. MAX CHAVEZ - MEDICOS GENERALES
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Max Chávez",
      "Especialidad": "Medicina General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Max Chávez - Medicina General"

# DRA. MÓNICA GONZALE - MEDICOS GENERALES
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Mónica González",
      "Especialidad": "Medicina General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dra. Mónica González - Medicina General"

# DR. JOSE LUIS ALCOLTZI - MEDICOS GENERALES
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. José Luis Alcoltzi",
      "Especialidad": "Medicina General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. José Luis Alcoltzi - Medicina General"

# DRA. DALIA CAZARES - DERMATOLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Dalia Cazares",
      "Especialidad": "Dermatología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dra. Dalia Cazares - Dermatología"

# LIC. AUDELIA CARDENAS - PSICOLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Lic. Audelia Cárdenas",
      "Especialidad": "Psicología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Lic. Audelia Cárdenas - Psicología"

# LIC.EDUARDO FIGUEROA - NUTRICION (adaptado a Nutriología)
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Lic. Eduardo Figueroa",
      "Especialidad": "Nutriología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Lic. Eduardo Figueroa - Nutriología"

# DR. IVAN GARCIA - TRAUMATOLOGIA Y ORTOPEDIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Iván García",
      "Especialidad": "Traumatología y Ortopedia",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Iván García - Traumatología y Ortopedia"

# DRA. ANA RAMIREZ - ONCOLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Ana Ramírez",
      "Especialidad": "Oncología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dra. Ana Ramírez - Oncología"

# DR. ABNER DANIEL PEREZ - GASTROENTREROLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Abner Daniel Pérez",
      "Especialidad": "Gastroenterología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Abner Daniel Pérez - Gastroenterología"

# DR. RICARDO URBINA - NEFROLOGÍA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Ricardo Urbina",
      "Especialidad": "Nefrología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Ricardo Urbina - Nefrología"

# DR. ARMANDO TAPIA - UROLOGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Armando Tapia",
      "Especialidad": "Urología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Armando Tapia - Urología"

# DR. ARTURO MAHO - NEUROCIRUGIA
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Arturo Maho",
      "Especialidad": "Neurocirugía",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Arturo Maho - Neurocirugía"

# DR JESUS MENDOZA - CIRUJANO (adaptado a Cirugía General)
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Jesús Mendoza",
      "Especialidad": "Cirugía General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dr. Jesús Mendoza - Cirugía General"

echo ""
echo "🎉 ¡Todos los doctores del Centro Médico Apaseo han sido cargados exitosamente!"
echo "📊 Total: 21 doctores agregados con especialidades adaptadas al sistema"