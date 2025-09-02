import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Pill, Heart, Zap, Shield } from "lucide-react";

const Farmacia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const promotions = [
    "20% de descuento en vitaminas",
    "Envío gratis en compras mayores a $500",
    "2x1 en analgésicos seleccionados"
  ];

  const medications = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      price: 45.00,
      originalPrice: 60.00,
      category: "Analgésicos",
      description: "Alivia dolor y reduce fiebre",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 25,
      inStock: true
    },
    {
      id: 2,
      name: "Ibuprofeno 400mg",
      price: 55.00,
      originalPrice: 70.00,
      category: "Antiinflamatorios",
      description: "Reduce inflamación y dolor",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 21,
      inStock: true
    },
    {
      id: 3,
      name: "Vitamina C 1000mg",
      price: 120.00,
      originalPrice: 150.00,
      category: "Vitaminas",
      description: "Fortalece el sistema inmune",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 20,
      inStock: true
    },
    {
      id: 4,
      name: "Omeprazol 20mg",
      price: 85.00,
      originalPrice: 110.00,
      category: "Digestivos",
      description: "Protector gástrico",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 23,
      inStock: true
    },
    {
      id: 5,
      name: "Loratadina 10mg",
      price: 35.00,
      originalPrice: 45.00,
      category: "Antihistamínicos",
      description: "Alivia síntomas de alergia",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 22,
      inStock: false
    },
    {
      id: 6,
      name: "Complejo B",
      price: 95.00,
      originalPrice: 130.00,
      category: "Vitaminas",
      description: "Mejora energía y metabolismo",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=200&h=200&fit=crop",
      discount: 27,
      inStock: true
    }
  ];

  const filteredMedications = medications.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medication: any) => {
    setCart(prev => [...prev, medication]);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Analgésicos":
        return Zap;
      case "Vitaminas":
        return Shield;
      case "Antiinflamatorios":
        return Heart;
      default:
        return Pill;
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Farmacia Centro Médico
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Medicamentos de calidad a precios accesibles. Tu salud es nuestra prioridad.
            </p>
          </div>
        </div>
      </section>

      {/* Promotions Banner */}
      <section className="py-8 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">🎉 Promociones del Mes</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {promotions.map((promo, index) => (
                <Badge key={index} variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  {promo}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar medicamentos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredMedications.map((medication) => {
              const IconComponent = getCategoryIcon(medication.category);
              
              return (
                <Card key={medication.id} className="medical-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                        <IconComponent className="w-16 h-16 text-primary" />
                      </div>
                      
                      {medication.discount && (
                        <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                          -{medication.discount}%
                        </Badge>
                      )}
                      
                      {!medication.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary" className="bg-red-100 text-red-800">
                            Agotado
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">
                          {medication.name}
                        </h3>
                        
                        <Badge variant="outline" className="mb-2">
                          {medication.category}
                        </Badge>
                        
                        <p className="text-sm text-muted-foreground">
                          {medication.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-primary">
                              ${medication.price}
                            </span>
                            {medication.originalPrice && (
                              <span className="text-sm text-muted-foreground line-through">
                                ${medication.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                        
                        <Button
                          variant={medication.inStock ? "medical-primary" : "outline"}
                          disabled={!medication.inStock}
                          onClick={() => addToCart(medication)}
                          className="flex items-center space-x-2"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span>{medication.inStock ? "Agregar" : "Agotado"}</span>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredMedications.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No se encontraron medicamentos para tu búsqueda
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Necesitas ayuda con tu pedido?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nuestro equipo está listo para ayudarte a encontrar los medicamentos que necesitas
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                variant="medical-primary" 
                size="lg" 
                className="text-lg px-8"
              >
                <a 
                  href="https://wa.me/524131651301?text=Me%20interesa%20información%20sobre%20medicamentos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Consultar por WhatsApp
                </a>
              </Button>
              
              <Button 
                variant="medical-secondary" 
                size="lg" 
                className="text-lg px-8"
              >
                Llamar a Farmacia
              </Button>
            </div>
            
            {cart.length > 0 && (
              <div className="mt-8 p-4 bg-white rounded-lg shadow-md">
                <p className="text-primary font-semibold">
                  Tienes {cart.length} medicamento(s) en tu carrito
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Farmacia;