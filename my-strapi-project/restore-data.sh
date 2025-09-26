#!/bin/bash

STRAPI_URL="https://special-nurture-955505aa13.strapiapp.com"
API_TOKEN="f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59"

echo "🔄 Restaurando datos desde backup a Strapi Cloud..."

echo "📦 Restaurando medicamentos..."

# Crear medicamentos desde el backup
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Tums",
      "compuestoActivo": "Antinflamatorios",
      "contenido": "Ayuda a las agruras",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Medicamento Tums creado"

curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Omeprazol",
      "compuestoActivo": "Antinflamatorios",
      "contenido": "Ayuda a reducir la gastritis",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Medicamento Omeprazol creado"

curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Advil",
      "compuestoActivo": "Analgesicos",
      "contenido": "Ayuda con el dolor de cabeza",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Medicamento Advil creado"

curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Ketorolaco",
      "compuestoActivo": "Antibiotico",
      "contenido": "Ayuda con el dolor",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Medicamento Ketorolaco creado"

curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Afrin",
      "compuestoActivo": "Antinflamatorios",
      "contenido": "Ayuda a los resfriados",
      "presentacion": "Spray",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Medicamento Afrin creado"

echo "👨‍⚕️ Creando médicos de muestra..."

# Crear médicos
curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Juan Pérez",
      "Especialidad": "Medicina General",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Médico Dr. Juan Pérez creado"

curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. María González",
      "Especialidad": "Pediatría",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Médico Dra. María González creado"

curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Carlos Rodríguez",
      "Especialidad": "Cardiología",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Médico Dr. Carlos Rodríguez creado"

curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dra. Ana Martínez",
      "Especialidad": "Gineco-Obstetricia",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Médico Dra. Ana Martínez creado"

curl -X POST "$STRAPI_URL/api/medicos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "NombreDoctor": "Dr. Luis Fernández",
      "Especialidad": "Traumatología y Ortopedia",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Médico Dr. Luis Fernández creado"

echo "🎁 Restaurando promociones..."

# Crear promociones
curl -X POST "$STRAPI_URL/api/promocionmeds" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "detallepromo": "20% en Advil",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Promoción Advil creada"

curl -X POST "$STRAPI_URL/api/promocionmeds" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "detallepromo": "$200 a $150 en tums",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }'
echo "✅ Promoción Tums creada"

echo "🎉 Restauración completada exitosamente!"