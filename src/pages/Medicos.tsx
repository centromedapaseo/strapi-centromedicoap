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
  const heroVideo = "https://res.cloudinary.com/djkt9hofl/video/upload/v1757111404/medicos-hero_kkrnyc.mp4";
  
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
  const emailLink = "mailto:info@centromedicoapaseo.com?subject=Solicitud%20de%20información%20médica&body=Estimado%20equipo,%0A%0AMe%20interesa%20recibir%20más%20información%20sobre%20los%20servicios%20médicos%20del%20hospital.%0A%0AGracias";

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video 
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        
        {/* Blue Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-primary/80 to-blue-800/90" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
              Quirófanos modernos para tu próxima cirugía
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/95 max-w-3xl mx-auto font-light leading-relaxed" style={{fontFamily: 'Inter, Poppins, sans-serif'}}>
              Equipo médico de calidad y personal calificado para cirugías de excelencia
            </p>
            
            <Button asChild variant="medical-white" size="lg" className="text-lg px-12 py-4 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Me interesa conocer más
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50/30 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Excelencia médica respaldada por resultados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="medical-card text-center group hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-10">
                <div className="p-5 bg-gradient-to-br from-blue-100 to-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:from-blue-200 group-hover:to-primary/20 transition-all duration-300">
                  <Award className="w-12 h-12 text-blue-700" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-primary bg-clip-text text-transparent mb-3">+20</div>
                <h3 className="text-lg font-semibold text-foreground">Años de experiencia</h3>
                <p className="text-muted-foreground text-sm mt-2">Dos décadas cuidando la salud</p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center group hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-10">
                <div className="p-5 bg-gradient-to-br from-emerald-100 to-accent/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:from-emerald-200 group-hover:to-accent/20 transition-all duration-300">
                  <Users className="w-12 h-12 text-emerald-700" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-accent bg-clip-text text-transparent mb-3">+5,000</div>
                <h3 className="text-lg font-semibold text-foreground">Cirugías exitosas</h3>
                <p className="text-muted-foreground text-sm mt-2">Procedimientos con excelencia</p>
              </CardContent>
            </Card>

            <Card className="medical-card text-center group hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-xl">
              <CardContent className="p-10">
                <div className="p-5 bg-gradient-to-br from-indigo-100 to-primary/10 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:from-indigo-200 group-hover:to-primary/20 transition-all duration-300">
                  <Building className="w-12 h-12 text-indigo-700" />
                </div>
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-primary bg-clip-text text-transparent mb-3">3</div>
                <h3 className="text-lg font-semibold text-foreground">Quirófanos modernos</h3>
                <p className="text-muted-foreground text-sm mt-2">Tecnología de vanguardia</p>
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
        ctaLink={emailLink}
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