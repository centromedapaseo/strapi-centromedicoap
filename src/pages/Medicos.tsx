import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Users, Building, MessageCircle } from "lucide-react";
import heroDoctors from "@/assets/hero-doctors.jpg";
import LocationMap from "@/components/LocationMap";
import InsuranceCarousel from "@/components/InsuranceCarousel";
import ProcessSection from "@/components/ProcessStep";

const Medicos = () => {
  const processSteps = [
    {
      title: "Agenda tu cirugía por whatsapp",
      subtitle: "Tenemos una agenda flexible"
    },
    {
      title: "Realiza tu operación cómodamente",
      subtitle: "Nos encargamos de tener el material y el personal listo"
    },
    {
      title: "Hacemos los trámites sencillos",
      subtitle: "Somos claros con los cobros y pagos"
    },
    {
      title: "Dale a tu paciente la mejor atención",
      subtitle: "Consultorios y camas hospitalarias que darán la mejor experiencia"
    }
  ];

  const whatsappLink = "https://wa.me/524131651301?text=Me%20interesa%20saber%20mas%20del%20hospital,%20soy%20el%20Dr:";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroDoctors})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/80" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Quirófanos modernos para tu próxima cirugía
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
              Equipo médico de calidad y personal calificado para cirugías
            </p>
            
            <Button asChild variant="medical-white" size="lg" className="text-xl px-12 py-4">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Me interesa
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">20</div>
                <h3 className="text-lg font-semibold text-foreground">Años de experiencia</h3>
              </CardContent>
            </Card>

            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <Users className="w-10 h-10 text-accent" />
                </div>
                <div className="text-4xl font-bold text-accent mb-2">+5,000</div>
                <h3 className="text-lg font-semibold text-foreground">Cirugías realizadas</h3>
              </CardContent>
            </Card>

            <Card className="medical-card text-center group hover:scale-105 transition-all duration-300">
              <CardContent className="p-8">
                <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <Building className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <h3 className="text-lg font-semibold text-foreground">Quirófanos equipados</h3>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Aumenta tu volumen de pacientes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Nuestra ubicación nos permite recibir pacientes de Apaseo, Celaya, Querétaro y municipios aledaños
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          <InsuranceCarousel />
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection
        title="Seamos equipo"
        steps={processSteps}
        ctaText="Más información"
        ctaLink={whatsappLink}
      />

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
                  ¿Qué incluye la renta de quirófano?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  1 sala equipada con cámara, 2 enfermeras, materiales básicos
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Por qué debería elegirnos?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Hemos realizado con éxito más de 5,000 cirugías, nos encantará apoyarte con tu cirugía
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cómo empiezo el proceso?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Envía un mensaje al siguiente whatsapp
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="medical-card border-0 px-6">
                <AccordionTrigger className="text-left text-lg font-semibold">
                  ¿Cuánto cuesta la renta de quirófano?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-4">
                  Te daremos una cotización personalizada
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="text-center mt-12">
              <Button asChild variant="medical-primary" size="lg" className="text-lg px-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quiero informes
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Medicos;