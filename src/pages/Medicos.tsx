import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Award, Users, Building, MessageCircle, Play } from "lucide-react";
import LocationMap from "@/components/LocationMap";
import InsuranceCarousel from "@/components/InsuranceCarousel";
import ProcessSection from "@/components/ProcessStep";
import SurgeriesCarousel from "@/components/SurgeriesCarousel";
import HospitalBenefits from "@/components/HospitalBenefits";

const Medicos = () => {
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // URLs del video hero optimizadas - Hospital storage
  const heroVideoWebM = "https://res.cloudinary.com/dciqzuzxv/video/upload/q_auto,f_webm,w_1200,h_800,c_fill/v1758838561/Hero-Medicos_e4pliw.webm";
  const heroVideoMP4 = "https://res.cloudinary.com/dciqzuzxv/video/upload/v1758838561/Hero-Medicos_e4pliw.mp4";

  // URLs optimizadas para móvil (menor resolución y bitrate)
  const heroVideoWebM_Mobile = "https://res.cloudinary.com/dciqzuzxv/video/upload/q_auto:low,f_webm,w_800,h_600,c_fill,br_800k/v1758838561/Hero-Medicos_e4pliw.webm";
  const heroVideoMP4_Mobile = "https://res.cloudinary.com/dciqzuzxv/video/upload/q_auto:low,f_auto,w_800,h_600,c_fill,br_800k/v1758838561/Hero-Medicos_e4pliw.mp4";

  // Poster generado automáticamente desde el video (frame del segundo 2)
  const heroVideoPoster = "https://res.cloudinary.com/dciqzuzxv/video/upload/so_2,q_auto,f_auto,w_1200,h_800,c_fill/v1758838561/Hero-Medicos_e4pliw.jpg";
  
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

  useEffect(() => {
    // Detectar si es móvil
    const checkIfMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
      setIsMobile(isMobileDevice);
    };

    // Detectar conexión lenta
    const checkConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection) {
          const slowConnections = ['slow-2g', '2g', '3g'];
          const isSlowNetwork = slowConnections.includes(connection.effectiveType) || connection.downlink < 1.5;
          setIsSlowConnection(isSlowNetwork);

          // En móvil con conexión lenta, no cargar automáticamente
          const currentIsMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 768;
          if (currentIsMobile && isSlowNetwork) {
            setShouldLoadVideo(false);
          } else if (!isSlowNetwork) {
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

    checkIfMobile();
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

    // Listener para cambios de tamaño de pantalla
    const handleResize = () => {
      checkIfMobile();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [shouldLoadVideo]);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        {shouldLoadVideo ? (
          <video 
            ref={heroVideoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster={heroVideoPoster || undefined}
            onLoadedData={() => setVideoLoaded(true)}
            style={{
              objectFit: 'cover',
              objectPosition: 'center'
            }}
          >
            <source src={isMobile ? heroVideoWebM_Mobile : heroVideoWebM} type="video/webm" />
            <source src={isMobile ? heroVideoMP4_Mobile : heroVideoMP4} type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        ) : (
          heroVideoPoster ? (
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroVideoPoster})`
              }}
            />
          ) : null
        )}
        
        {!videoLoaded && shouldLoadVideo && (
          <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
            <div className="animate-pulse text-white/60 text-lg">Cargando video...</div>
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

      {/* Surgeries Available Section */}
      <SurgeriesCarousel />

      {/* Hospital Benefits Section */}
      <HospitalBenefits />

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Estamos listos para atenderte
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
                  Uso de la sala, 1 hora de oxigeno, uso de todos los equipos en quirófano desde la mesa de cirugía hasta el fluoroscopio, bultos de cirugía, instrumental, 1 enfermera durante la cirugía.
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