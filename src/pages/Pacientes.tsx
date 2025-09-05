import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Bed, Utensils, Users as Nurses, MessageCircle, MapPin, Sparkles } from "lucide-react";
import LocationMap from "@/components/LocationMap";
import InsuranceCarousel from "@/components/InsuranceCarousel";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Pacientes = () => {
  const whatsappLink = "https://wa.me/524131651301?text=Me%20interesa%20saber%20mas%20del%20hospital,%20mi%20nombre%20es:";
  
  // Referencias para GSAP
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const titlePart1Ref = useRef<HTMLHeadingElement>(null);
  const titlePart2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const decorElement1Ref = useRef<HTMLDivElement>(null);
  const decorElement2Ref = useRef<HTMLDivElement>(null);

  // URL del video hero
  const heroVideo = "https://res.cloudinary.com/djkt9hofl/video/upload/v1757115620/hero-pacientes_tck9jo.mp4";

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Configurar estados iniciales - texto invisible excepto el primer título
      gsap.set([titlePart2Ref.current, subtitleRef.current, buttonRef.current], { 
        opacity: 0, 
        y: 60,
        scale: 0.8
      });
      gsap.set([decorElement1Ref.current, decorElement2Ref.current], { 
        opacity: 0, 
        scale: 0,
        rotation: -90
      });

      // Animación inicial del video hero y primer título
      gsap.fromTo(heroVideoRef.current, 
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
      );

      gsap.fromTo(titlePart1Ref.current, 
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, delay: 0.3, ease: "back.out(1.7)" }
      );

      gsap.fromTo(decorElement1Ref.current, {
        opacity: 0,
        scale: 0,
        rotation: -90
      }, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        delay: 0.8,
        ease: "elastic.out(1, 0.5)"
      });

      // ScrollTrigger para el contenido de texto
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "400% bottom",
        scrub: 0.5,
        pin: true,
        onUpdate: (self) => {
          const progress = self.progress;
          
          // SCROLL 1: Mostrar segunda parte del título (25% del scroll)
          if (progress >= 0.25) {
            gsap.to(titlePart2Ref.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
            
            // Mostrar segundo elemento decorativo
            gsap.to(decorElement2Ref.current, {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1,
              ease: "back.out(1.7)"
            });
          } else {
            gsap.to(titlePart2Ref.current, {
              opacity: 0,
              y: 60,
              scale: 0.8,
              duration: 0.4
            });
            gsap.to(decorElement2Ref.current, { opacity: 0, scale: 0, duration: 0.6 });
          }
          
          // SCROLL 2: Mostrar subtítulo (50% del scroll)
          if (progress >= 0.5) {
            gsap.to(subtitleRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });
          } else {
            gsap.to(subtitleRef.current, {
              opacity: 0,
              y: 60,
              scale: 0.8,
              duration: 0.4
            });
          }
          
          // SCROLL 3: Mostrar botón (75% del scroll)
          if (progress >= 0.75) {
            gsap.to(buttonRef.current, {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)"
            });
          } else {
            gsap.to(buttonRef.current, {
              opacity: 0,
              y: 60,
              scale: 0.8,
              duration: 0.4
            });
          }
        }
      });

      // Animaciones continuas para elementos decorativos
      gsap.to(decorElement1Ref.current, {
        rotation: "+=360",
        duration: 25,
        ease: "none",
        repeat: -1
      });

      gsap.to(decorElement2Ref.current, {
        rotation: "-=360",
        duration: 30,
        ease: "none",
        repeat: -1
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="pt-16">
      {/* Dynamic Interactive Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-primary/20">
        {/* Content Layer */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Side - Text Content */}
              <div className="text-left text-white space-y-8 lg:pr-8">
                <div className="space-y-6">
                  {/* Primera parte del título */}
                  <h1 
                    ref={titlePart1Ref}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                    style={{fontFamily: 'Poppins, Inter, sans-serif'}}
                  >
                    El mejor lugar para
                  </h1>
                  
                  {/* Segunda parte del título */}
                  <h1 
                    ref={titlePart2Ref}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
                    style={{fontFamily: 'Poppins, Inter, sans-serif'}}
                  >
                    atender mi salud
                  </h1>
                  
                  {/* Subtítulo */}
                  <p 
                    ref={subtitleRef}
                    className="text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-2xl mt-8"
                    style={{fontFamily: 'Inter, Poppins, sans-serif'}}
                  >
                    Hospital equipado con equipos de calidad, médicos especialistas y personal atento para ayudarte a mejorar tu salud.
                  </p>
                </div>

                {/* Botón */}
                <div ref={buttonRef} className="pt-6">
                  <Button asChild variant="medical-white" size="lg" className="text-xl px-16 py-6 font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3">
                      <MessageCircle className="w-6 h-6" />
                      <span>Recibir informes</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side - Hero Video Content */}
              <div className="relative flex items-center justify-center lg:justify-end">
                {/* Hero Video Container */}
                <div className="relative w-full max-w-lg">
                  {/* Single Hero Video */}
                  <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    <video 
                      ref={heroVideoRef}
                      className="absolute inset-0 w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      <source src={heroVideo} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/25 via-transparent to-primary/15" />
                  </div>

                  {/* Floating decorative elements */}
                  <div 
                    ref={decorElement1Ref}
                    className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-blue-400/40 to-cyan-300/40 rounded-full backdrop-blur-sm border border-white/30 shadow-lg"
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-white/90" />
                    </div>
                  </div>

                  <div 
                    ref={decorElement2Ref}
                    className="absolute -bottom-4 -left-6 w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-300/40 rounded-xl backdrop-blur-sm border border-white/30 shadow-lg rotate-12"
                  >
                    <div className="w-full h-full flex items-center justify-center -rotate-12">
                      <Sparkles className="w-8 h-8 text-white/90" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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