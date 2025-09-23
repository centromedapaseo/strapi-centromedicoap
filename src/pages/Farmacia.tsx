import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Pill, Heart, Zap, Shield, Loader2, AlertCircle, MessageCircle } from "lucide-react";
import { strapiService, type Medicamento } from "@/services/strapi";

interface Medication extends Medicamento {}

const Farmacia = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<Medication[]>([]);
  const [medications, setMedications] = useState<Medication[]>([]);
  const [promotions, setPromotions] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [strapiConnected, setStrapiConnected] = useState(false);

  // Cargar medicamentos y promociones desde Strapi
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);

        console.log('🔄 Iniciando carga de datos de farmacia...');
        console.log('🌐 Environment:', {
          STRAPI_URL: import.meta.env.VITE_STRAPI_URL,
          HAS_TOKEN: !!import.meta.env.VITE_STRAPI_API_TOKEN,
          TOKEN_LENGTH: import.meta.env.VITE_STRAPI_API_TOKEN?.length || 0
        });

        // Verificar conexión con Strapi
        console.log('🔍 Verificando conexión con Strapi...');
        const isConnected = await strapiService.checkConnection();
        console.log('📡 Conexión Strapi:', isConnected ? '✅ Conectado' : '❌ Desconectado');
        setStrapiConnected(isConnected);

        // Cargar medicamentos y promociones en paralelo
        console.log('📦 Cargando medicamentos y promociones...');
        const [medicamentosData, promocionesData] = await Promise.all([
          strapiService.getMedicamentos(),
          strapiService.getPromociones()
        ]);

        console.log('💊 Medicamentos obtenidos:', medicamentosData.length);
        console.log('🎯 Promociones obtenidas:', promocionesData.length);
        console.log('📋 Datos de medicamentos:', medicamentosData);
        console.log('🏷️ Datos de promociones:', promocionesData);

        setMedications(medicamentosData);
        setPromotions(promocionesData);

        if (!isConnected) {
          setError("Conectado con datos de respaldo - Strapi no disponible");
        }
      } catch (err) {
        console.error('❌ Error loading data:', err);
        setError("Error al cargar datos");
        // En caso de error, mostrar datos de fallback del servicio
        const [fallbackMedications, fallbackPromotions] = await Promise.all([
          strapiService.getMedicamentos(),
          strapiService.getPromociones()
        ]);
        setMedications(fallbackMedications);
        setPromotions(fallbackPromotions);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const filteredMedications = medications.filter(med =>
    med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    med.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (medication: Medication) => {
    setCart(prev => [...prev, medication]);
  };

  const removeFromCart = (index: number) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const sendWhatsAppOrder = () => {
    // Crear mensaje para WhatsApp
    const mensaje = `Hola, me interesan estos medicamentos de su farmacia:

${cart.map(item =>
  `${item.name} $${item.price}`
).join(', ')}

¿Podrían confirmarme precios y disponibilidad?`;

    // Codificar para URL
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = "524131651301";
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

    // Abrir WhatsApp
    window.open(whatsappURL, '_blank');
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
    <div className="pt-16 relative">
      {/* Floating Cart Indicator */}
      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <div className="bg-primary text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-primary/90 transition-colors"
               onClick={() => {
                 const cartSection = document.querySelector('#cart-section');
                 cartSection?.scrollIntoView({ behavior: 'smooth' });
               }}>
            <div className="flex items-center space-x-2">
              <ShoppingCart className="w-5 h-5" />
              <span className="font-semibold">{cart.length}</span>
            </div>
          </div>
        </div>
      )}
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Farmacia Centro Médico
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              Medicamentos de calidad a precios accesibles. Tu salud es nuestra prioridad.
            </p>


            {/* Debug Info - Mostrar en desarrollo y temporalmente en producción */}
            <div className="max-w-4xl mx-auto mb-4 p-4 bg-gray-100 rounded-lg text-sm">
              <h3 className="font-bold mb-2">🔧 Debug Info (Temporal)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong>Environment:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• URL: {import.meta.env.VITE_STRAPI_URL || 'No configurada'}</li>
                    <li>• Token: {import.meta.env.VITE_STRAPI_API_TOKEN ? `${import.meta.env.VITE_STRAPI_API_TOKEN.substring(0, 20)}...` : 'No configurado'}</li>
                    <li>• Mode: {import.meta.env.MODE}</li>
                    <li>• Prod: {import.meta.env.PROD ? 'true' : 'false'}</li>
                  </ul>
                </div>
                <div>
                  <strong>Status:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Conectado: {strapiConnected ? '✅' : '❌'}</li>
                    <li>• Medicamentos: {medications.length}</li>
                    <li>• Promociones: {promotions.length}</li>
                    <li>• Loading: {loading ? 'true' : 'false'}</li>
                  </ul>
                </div>
              </div>
            </div>

            {error && (
              <div className="max-w-md mx-auto mb-4">
                <div className="flex items-center space-x-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              </div>
            )}
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
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Cargando medicamentos...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredMedications.map((medication) => {
                  const IconComponent = getCategoryIcon(medication.category);

                  return (
                    <Card key={medication.id} className="medical-card group hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                      <CardHeader className="p-0">
                        <div className="relative">
                          <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                            {medication.image ? (
                              <img
                                src={medication.image}
                                alt={medication.name}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <IconComponent className="w-16 h-16 text-primary" />
                            )}
                          </div>

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
                              </div>
                            </div>

                            <Button
                              variant={medication.inStock ? "medical-primary" : "outline"}
                              disabled={!medication.inStock}
                              onClick={() => {
                                addToCart(medication);
                              }}
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
            </>
          )}
        </div>
      </section>

      {/* Cart Section */}
      {cart.length > 0 && (
        <section id="cart-section" className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
                Consultar medicamentos por whatsapp
              </h2>

              {/* Cart Items */}
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b border-gray-200 pb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                          {getCategoryIcon(item.category) && React.createElement(getCategoryIcon(item.category), { className: "w-8 h-8 text-primary" })}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-lg font-bold text-primary">${item.price}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFromCart(index)}
                          className="text-red-600 hover:text-red-700"
                        >
                          Quitar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-primary">${cart.reduce((total, item) => total + item.price, 0)}</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Order Button */}
              <div className="text-center">
                <Button
                  onClick={sendWhatsAppOrder}
                  variant="medical-primary"
                  size="lg"
                  className="text-lg px-8"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar por WhatsApp
                </Button>
                <p className="text-sm text-muted-foreground mt-2">
                  Se enviará la lista de medicamentos para consultar precios y disponibilidad
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Farmacia;