import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Bed, Utensils, Users as Nurses, MessageCircle, MapPin } from "lucide-react";
import hospitalRoom from "@/assets/hospital-room.jpg";
import LocationMap from "@/components/LocationMap";
import InsuranceCarousel from "@/components/InsuranceCarousel";

const Pacientes = () => {
  const whatsappLink = "https://wa.me/524131651301?text=Me%20interesa%20saber%20mas%20del%20hospital,%20mi%20nombre%20es:";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${hospitalRoom})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-primary/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              El mejor lugar para atender mi salud
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Hospital equipado con equipos de calidad. Personal atento para ayudarte a mejorar tu salud.
            </p>
            
            <Button asChild variant="medical-white" size="lg" className="text-xl px-12 py-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Recibir informes
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Card className="medical-card">
              <CardContent className="p-12">
                <div className="p-6 bg-accent/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-accent" />
                </div>
                <div className="text-5xl font-bold text-accent mb-4">+5,000</div>
                <p className="text-xl text-foreground font-semibold">
                  Hemos ayudado a +5,000 pacientes a mejorar su salud
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Tu recuperación es nuestra prioridad
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cuidamos cada detalle para que tu estancia sea cómoda y tu recuperación sea exitosa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Cuartos cómodos */}
            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Bed className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Cuartos cómodos</h3>
                <p className="text-muted-foreground">
                  Habitaciones amplias con camas hospitalarias de primera calidad, diseñadas para tu comodidad y recuperación
                </p>
              </CardContent>
            </Card>

            {/* Comida rica */}
            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Utensils className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Comida rica</h3>
                <p className="text-muted-foreground">
                  Menús nutritivos y deliciosos preparados especialmente para apoyar tu proceso de recuperación
                </p>
              </CardContent>
            </Card>

            {/* Personal amable */}
            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Nurses className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">Personal amable</h3>
                <p className="text-muted-foreground">
                  Enfermeras y personal médico altamente capacitado, siempre dispuesto a atenderte con calidez humana
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Te esperamos en el centro de Apaseo
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fácil acceso y ubicación estratégica en el corazón de Apaseo el Alto
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <InsuranceCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Dónde están ubicados?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Apaseo el Alto, Guanajuato. Av. Independencia 304 A, Zona Centro</span>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Qué tan cómodas son las camas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Contamos con camas hospitalarias amplias, un sofá cama para tu cuidador/a, un baño completo y televisión
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Puedo recibir más visitas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Sí, durante el día puedes recibir 2 visitas por habitación
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿En qué horario terminan las visitas?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Las visitas terminan a las 9 pm
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12">
              <Button asChild variant="medical-primary" size="lg" className="text-lg px-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Recibir informes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pacientes;