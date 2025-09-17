import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Heart, Bed, Utensils, Users as Nurses, MessageCircle, MapPin, Sparkles, Play, Stethoscope, Activity } from "lucide-react";
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
  
  // Referencias para los beneficios
  const benefit1Ref = useRef<HTMLDivElement>(null);
  const benefit2Ref = useRef<HTMLDivElement>(null);
  const benefit3Ref = useRef<HTMLDivElement>(null);
  const benefit4Ref = useRef<HTMLDivElement>(null);
  
  // Estado del video
  const [videoLoaded, setVideoLoaded] = React.useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = React.useState(false);
  const [isSlowConnection, setIsSlowConnection] = React.useState(false);

  // URLs del video hero optimizadas
  const heroVideoWebM = "https://res.cloudinary.com/djkt9hofl/video/upload/q_auto,f_webm,w_800,h_600,c_fill/v1757115620/hero-pacientes_tck9jo.webm";
  const heroVideoMP4 = "https://res.cloudinary.com/djkt9hofl/video/upload/q_auto,f_mp4,w_800,h_600,c_fill/v1757115620/hero-pacientes_tck9jo.mp4";
  const heroVideoPoster = "https://res.cloudinary.com/djkt9hofl/image/upload/q_auto,f_auto,w_800,h_600,c_fill/v1757115620/hero-pacientes_tck9jo.jpg";

  useEffect(() => {
    if (!heroRef.current) return;

    // Detectar conexión lenta
    const checkConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as Navigator & { connection?: { effectiveType: string; downlink: number } }).connection;
        if (connection) {
          const slowConnections = ['slow-2g', '2g', '3g'];
          const isSlowNetwork = slowConnections.includes(connection.effectiveType) || connection.downlink < 1.5;
          setIsSlowConnection(isSlowNetwork);
          
          // Si no es conexión lenta, cargar video automáticamente
          if (!isSlowNetwork) {
            setShouldLoadVideo(true);
          }
        } else {
          // Si no podemos detectar, asumir buena conexión
          setShouldLoadVideo(true);
        }
      } else {
        // Fallback: asumir buena conexión
        setShouldLoadVideo(true);
      }
    };

    checkConnection();

    // Lazy load del video solo si debe cargarse
    const loadVideo = () => {
      if (heroVideoRef.current && shouldLoadVideo) {
        heroVideoRef.current.load();
      }
    };
    
    if (shouldLoadVideo) {
      setTimeout(loadVideo, 500);
    }

    const ctx = gsap.context(() => {
      // Ensure ScrollTrigger works on mobile
      ScrollTrigger.config({ ignoreMobileResize: true });
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
        end: "+=300vh",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
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

      // Animaciones para los beneficios
      const benefits = [
        { ref: benefit1Ref, direction: 'left' },
        { ref: benefit2Ref, direction: 'right' },
        { ref: benefit3Ref, direction: 'left' },
        { ref: benefit4Ref, direction: 'right' }
      ];

      benefits.forEach(({ ref, direction }) => {
        if (!ref.current) return;
        
        const isLeft = direction === 'left';
        const content = ref.current.querySelector('.benefit-content');
        const image = ref.current.querySelector('.benefit-image');
        
        // Animación para contenido
        gsap.fromTo(content,
          {
            opacity: 0,
            x: isLeft ? -80 : 80,
            y: 40
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
        
        // Animación para imagen con delay
        gsap.fromTo(image,
          {
            opacity: 0,
            x: isLeft ? 80 : -80,
            scale: 0.95
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            delay: 0.3,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ref.current,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

    }, heroRef);

    // Refresh ScrollTrigger on resize for mobile compatibility
    const handleResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    
    // Initial refresh after component mount
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return (
    <div className="pt-16">
      {/* Dynamic Interactive Hero Section */}
      <section ref={heroRef} className="relative min-h-screen h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-primary/20">
        {/* Content Layer */}
        <div className="relative z-20 h-full flex items-end justify-center pb-16 sm:pb-20 md:pb-24 pt-20 sm:pt-24 md:pt-28">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
              
              {/* Left Side - Text Content */}
              <div className="text-center lg:text-left text-white space-y-4 sm:space-y-6 lg:space-y-8 lg:pr-8 mt-8 sm:mt-12 lg:mt-16">
                <div className="space-y-4 sm:space-y-6">
                  {/* Primera parte del título */}
                  <h1 
                    ref={titlePart1Ref}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
                    style={{fontFamily: 'Poppins, Inter, sans-serif'}}
                  >
                    El mejor lugar para
                  </h1>
                  
                  {/* Segunda parte del título */}
                  <h1 
                    ref={titlePart2Ref}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-blue-200 via-cyan-300 to-blue-300 bg-clip-text text-transparent"
                    style={{fontFamily: 'Poppins, Inter, sans-serif'}}
                  >
                    atender mi salud
                  </h1>
                  
                  {/* Subtítulo */}
                  <p 
                    ref={subtitleRef}
                    className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-white/90 leading-relaxed max-w-2xl mt-4 sm:mt-6 lg:mt-8"
                    style={{fontFamily: 'Inter, Poppins, sans-serif'}}
                  >
                    Hospital con equipo y médicos de calidad
                  </p>
                </div>

                {/* Botón */}
                <div ref={buttonRef} className="pt-4 sm:pt-6">
                  <Button asChild variant="medical-white" size="lg" className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-12 py-3 sm:py-4 lg:py-5 font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-500 transform hover:scale-105">
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                      <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Recibir informes</span>
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Side - Hero Video Content */}
              <div className="relative flex items-center justify-center lg:justify-end mt-6 sm:mt-8 lg:mt-0 order-first lg:order-last">
                {/* Hero Video Container */}
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  {/* Single Hero Video */}
                  <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                    {shouldLoadVideo ? (
                      <video 
                        ref={heroVideoRef}
                        className="absolute inset-0 w-full h-full object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        poster={heroVideoPoster}
                        onLoadedData={() => setVideoLoaded(true)}
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center'
                        }}
                      >
                        <source src={heroVideoWebM} type="video/webm" />
                        <source src={heroVideoMP4} type="video/mp4" />
                        Tu navegador no soporta video HTML5.
                      </video>
                    ) : (
                      <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url(${heroVideoPoster})`
                        }}
                      />
                    )}
                    
                    {!videoLoaded && shouldLoadVideo && (
                      <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                        <div className="animate-pulse text-white/60">Cargando...</div>
                      </div>
                    )}
                    
                    {isSlowConnection && !shouldLoadVideo && (
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          onClick={() => {
                            setShouldLoadVideo(true);
                            setTimeout(() => {
                              if (heroVideoRef.current) {
                                heroVideoRef.current.load();
                              }
                            }, 100);
                          }}
                          className="bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-sm"
                        >
                          <Play className="w-5 h-5 mr-2" />
                          Cargar video
                        </Button>
                      </div>
                    )}
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
                  pacientes han mejorado su salud con nosotros
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tu recuperación es nuestra prioridad
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Cuidamos cada detalle para que tu estancia sea cómoda y tu recuperación sea exitosa
            </p>
          </div>

          <div className="space-y-24 max-w-7xl mx-auto">
            {/* Beneficio 1 - Cuartos cómodos (Izquierda) */}
            <div ref={benefit1Ref} className="benefit-item-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="benefit-content space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Bed className="w-8 h-8 text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Cuartos cómodos
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Cama amplia, privacidad y frecuera
                </p>
              </div>
              <div className="benefit-image lg:order-last">
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637472/Cuarto_Hospital_dvapbl.webp" 
                      alt="Cuarto de hospital cómodo" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* Beneficio 2 - Comida Rica (Derecha) */}
            <div ref={benefit2Ref} className="benefit-item-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="benefit-image lg:order-first">
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637582/Cafeteria_ynwys6.webp" 
                      alt="Cafetería del hospital" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card>
              </div>
              <div className="benefit-content space-y-6 lg:text-right">
                <div className="flex items-center space-x-4 mb-4 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <Utensils className="w-8 h-8 text-accent" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent lg:bg-gradient-to-r"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Cafetería 4to Piso
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Alimentos de calidad y comida rica
                </p>
              </div>
            </div>

            {/* Beneficio 3 - Quirófanos con Tecnología (Izquierda) */}
            <div ref={benefit3Ref} className="benefit-item-3 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="benefit-content space-y-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="p-4 bg-primary/10 rounded-2xl">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Quirófanos con Tecnología
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Serás atendido con equipo médico de alta calidad
                </p>
              </div>
              <div className="benefit-image lg:order-last">
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637478/Quirofano_phltwn.webp" 
                      alt="Quirófano con tecnología avanzada" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* Beneficio 4 - Clínica de Hemodialisis (Derecha) */}
            <div ref={benefit4Ref} className="benefit-item-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="benefit-image lg:order-first">
                <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637479/Hemodialisis_bmoaoo.webp" 
                      alt="Clínica de hemodiálisis" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </Card>
              </div>
              <div className="benefit-content space-y-6 lg:text-right">
                <div className="flex items-center space-x-4 mb-4 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4">
                  <div className="p-4 bg-accent/10 rounded-2xl">
                    <Activity className="w-8 h-8 text-accent" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent lg:bg-gradient-to-r"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Clínica Hemmovil
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Hemodialisis con sillones reclinables y supervisión médica
                </p>
              </div>
            </div>
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