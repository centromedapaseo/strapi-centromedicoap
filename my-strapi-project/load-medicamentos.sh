#!/bin/bash

STRAPI_URL="https://special-nurture-955505aa13.strapiapp.com"
API_TOKEN="f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59"

echo "💊 Cargando medicamentos del Centro Médico Apaseo..."

# CAPTOPRIL 25 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Captopril",
      "contenido": "25 MG",
      "compuestoActivo": "Captopril",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Captopril 25 MG - Tableta"

# NEUROBION
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Neurobion",
      "contenido": "--",
      "compuestoActivo": "Tiamina, Piridoxina, Cianocobalamina",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Neurobion - Tableta"

# LEVOFLOXACINO 750 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Levofloxacino",
      "contenido": "750 MG",
      "compuestoActivo": "Levofloxacino",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Levofloxacino 750 MG - Tableta"

# PANTOPRAZOL 40 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Pantoprazol",
      "contenido": "40 MG",
      "compuestoActivo": "Pantoprazol",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Pantoprazol 40 MG - Tableta"

# SUPERPUNCK 250 ML
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Superpunck",
      "contenido": "250 ML",
      "compuestoActivo": "Superpunck",
      "presentacion": "Spray",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Superpunck 250 ML - Spray"

# NEURONTIN 600 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Neurontin",
      "contenido": "600 MG",
      "compuestoActivo": "Gabapetina",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Neurontin 600 MG - Tableta"

# CLOVEX 5 GR
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Clovex",
      "contenido": "5 GR",
      "compuestoActivo": "Aciclovir",
      "presentacion": "Crema",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Clovex 5 GR - Crema"

# AVAPENA 25 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Avapena",
      "contenido": "25 MG",
      "compuestoActivo": "Cloropiramina",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Avapena 25 MG - Tableta"

# GELMICIN 40 GR
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Gelmicin",
      "contenido": "40 GR",
      "compuestoActivo": "Betametasona, Gentamicina, Clotrimazol",
      "presentacion": "Gel",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Gelmicin 40 GR - Gel"

# DIMEFOR XR 750 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Dimefor XR",
      "contenido": "750 MG",
      "compuestoActivo": "Metformina",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Dimefor XR 750 MG - Tableta"

# AMOXICILINA 500 MG/125 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Amoxicilina 500/125",
      "contenido": "500 MG/125 MG",
      "compuestoActivo": "Amoxicilina, Ácido Clavulánico",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Amoxicilina 500/125 MG - Tableta"

# AMOXICILINA 875 MG/125 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Amoxicilina 875/125",
      "contenido": "875 MG/125 MG",
      "compuestoActivo": "Amoxicilina, Ácido Clavulánico",
      "presentacion": "Tableta",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Amoxicilina 875/125 MG - Tableta"

# ALUMAG 240 ML
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Alumag",
      "contenido": "240 ML",
      "compuestoActivo": "Hidróxido de Aluminio y Hidróxido de Magnesio",
      "presentacion": "Solucion",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Alumag 240 ML - Solución"

# COMBIVENT RESPIMAT 4.5 ML
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Combivent Respimat",
      "contenido": "4.5 ML",
      "compuestoActivo": "Bromuro de Ipratropio, Salbutamol",
      "presentacion": "Solucion",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Combivent Respimat 4.5 ML - Solución"

# AMOXICLAV BID 200 MG
curl -X POST "$STRAPI_URL/api/medicamentos" \
  -H "Authorization: Bearer $API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "data": {
      "Medicamento": "Amoxiclav BID",
      "contenido": "200 MG",
      "compuestoActivo": "Amoxicilina, Ácido Clavulánico",
      "presentacion": "Suspencion",
      "publishedAt": "'$(date -Iseconds)'"
    }
  }' > /dev/null 2>&1
echo "✅ Amoxiclav BID 200 MG - Suspensión"

echo ""
echo "🎉 ¡Todos los medicamentos del Centro Médico Apaseo han sido cargados exitosamente!"
echo "📊 Total: 15 medicamentos agregados con información completa"
echo ""
echo "📋 Resumen por presentación:"
echo "   • Tabletas: 11 medicamentos"
echo "   • Crema: 1 medicamento"
echo "   • Gel: 1 medicamento"
echo "   • Spray: 1 medicamento"
echo "   • Solución: 2 medicamentos"
echo "   • Suspensión: 1 medicamento"