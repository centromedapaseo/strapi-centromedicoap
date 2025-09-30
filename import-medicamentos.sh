#!/bin/bash

API_URL="http://localhost:1337/api/medicamentos"

echo "📦 Importando medicamentos..."

# ANTIFLU- DES JR
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"ANTIFLU- DES JR","compuestoActivo":"AMANTADINA, CLORFENAMINA, PARACETAMOL","contenido":"60 ML","presentacion":"JARABE INFANTI","Precio":100.00}}' > /dev/null && echo "✓ 1. ANTIFLU- DES JR"

# AMOXILINA
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"AMOXILINA","compuestoActivo":null,"contenido":"500MG","presentacion":"12 CAPSULAS","Precio":35.00}}' > /dev/null && echo "✓ 2. AMOXILINA"

# CLAMOXIN
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"CLAMOXIN","compuestoActivo":"AMOXICILINA/ACIDO CLAVULANICO","contenido":"875MG/125MG","presentacion":"10 TABLETA","Precio":70.00}}' > /dev/null && echo "✓ 3. CLAMOXIN"

# SYNTHROID
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"SYNTHROID","compuestoActivo":"LEVOTIROXINA SODICA","contenido":"50 MG","presentacion":"30 TABLETA","Precio":155.00}}' > /dev/null && echo "✓ 4. SYNTHROID"

# MAVIGLIN
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"MAVIGLIN","compuestoActivo":"METFORMINA/GLIBENCLAMIDA","contenido":"500MG/5MG","presentacion":"60 TABLETA","Precio":65.00}}' > /dev/null && echo "✓ 5. MAVIGLIN"

# ISORBID
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"ISORBID","compuestoActivo":"DINITRATO DE ISOSORBIDA","contenido":"10MG","presentacion":"40 TABLETAS","Precio":356.00}}' > /dev/null && echo "✓ 6. ISORBID"

# GREMITAL
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"GREMITAL","compuestoActivo":"OSELTAMIVIR","contenido":"45MG","presentacion":"10 CAPSULAS","Precio":400.00}}' > /dev/null && echo "✓ 7. GREMITAL"

# FIRAC
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"FIRAC","compuestoActivo":"CLONIXINATO DE LISINA","contenido":"250MG","presentacion":"10 TABLETA","Precio":299.00}}' > /dev/null && echo "✓ 8. FIRAC"

# CICLOFERON
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"CICLOFERON","compuestoActivo":"ACICLOVIR","contenido":"400 MG","presentacion":"35 TABLETAS","Precio":960.00}}' > /dev/null && echo "✓ 9. CICLOFERON"

# CORPOTASIN CL
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"CORPOTASIN CL","compuestoActivo":"BICARBONATO POTASICO, CLORURO DE POTASIO, LISINA","contenido":"500.560 MG,372.750 MG","presentacion":"EFERVESCENTE","Precio":526.00}}' > /dev/null && echo "✓ 10. CORPOTASIN CL"

# FEBRAX
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"FEBRAX","compuestoActivo":"NAPROXENO, PARACETAMOL","contenido":"100MG/200MG","presentacion":"SUPOSITORIOS","Precio":76.00}}' > /dev/null && echo "✓ 11. FEBRAX"

# ANTIGRAM
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"ANTIGRAM","compuestoActivo":"ACETILSALICILATO DE LISINA, METOCLOPRAMIDA","contenido":"1.62G/ 10MG","presentacion":"POLVO","Precio":730.00}}' > /dev/null && echo "✓ 12. ANTIGRAM"

# CAPSIFLU TOTAL
curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d '{"data":{"Medicamento":"CAPSIFLU TOTAL","compuestoActivo":null,"contenido":null,"presentacion":"12 CAPSULAS","Precio":47.00}}' > /dev/null && echo "✓ 13. CAPSIFLU TOTAL"

echo ""
echo "✅ Importación completa"