import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Stethoscope, 
  Heart, 
  Users, 
  Pill,
  Award,
  MapPin,
  Clock,
  Star,
  Play
} from "lucide-react";
// URLs del video hero optimizadas
const heroVideoWebM = "https://res.cloudinary.com/djkt9hofl/video/upload/q_auto,f_webm,w_1200,h_800,c_fill/v1757034412/video-hero-principal_ao73ab.webm";
const heroVideoMP4 = "https://res.cloudinary.com/djkt9hofl/video/upload/q_auto,f_mp4,w_1200,h_800,c_fill/v1757034412/video-hero-principal_ao73ab.mp4";
const heroVideoPoster = "https://res.cloudinary.com/djkt9hofl/image/upload/q_auto,f_auto,w_1200,h_800,c_fill/v1757034412/video-hero-principal_ao73ab.jpg";
import LocationMap from "@/components/LocationMap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAPScrollAnimation } from "@/hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);
  const locationRef = useGSAPScrollAnimation(
    undefined,
    (element) => {
      gsap.fromTo(element.children, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
      );
    }
  );
  const servicesRef = useGSAPScrollAnimation(
    undefined,
    (element) => {
      gsap.fromTo(element.querySelectorAll('.medical-card'), 
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, stagger: 0.15 }
      );
    }
  );
  const statsRef = useGSAPScrollAnimation(
    undefined,
    (element) => {
      gsap.fromTo(element.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 }
      );
    }
  );

  useEffect(() => {
    // Detectar conexión lenta
    const checkConnection = () => {
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
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

    if (heroRef.current) {
      gsap.fromTo(heroRef.current.children,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.2, stagger: 0.3, ease: "power2.out" }
      );
    }
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
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-accent/50" />
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto" ref={heroRef}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight" style={{fontFamily: 'Poppins, Inter, sans-serif'}}>
              El mejor hospital de Apaseo
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto font-light leading-relaxed" style={{fontFamily: 'Inter, Poppins, sans-serif'}}>
              Somos un hospital con +20 años de experiencia, ofreciendo servicios de salud de calidad
            </p>
            
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center items-center">
              <Button asChild variant="medical-white" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto">
                <Link to="/medicos">Soy médico/a</Link>
              </Button>
              <Button asChild variant="medical-white" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto">
                <Link to="/pacientes">Soy paciente</Link>
              </Button>
              <Button asChild variant="medical-white" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto">
                <Link to="/directorio">Directorio Médico</Link>
              </Button>
              <Button asChild variant="medical-white" size="lg" className="text-sm sm:text-base lg:text-lg px-6 sm:px-8 py-3 sm:py-4 font-semibold w-full sm:w-auto hidden sm:flex">
                <Link to="/farmacia">Medicamentos Baratos</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4" ref={locationRef}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Contamos con una excelente ubicación
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              En el corazón de Apaseo el Alto, fácil acceso desde cualquier punto de la ciudad
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <LocationMap />
          </div>
        </div>
      </section>

      {/* General Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Conoce más del hospital
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Servicios profesionales y instalaciones de primera calidad para toda la familia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto" ref={servicesRef}>
            {/* Capa 1 - Médicos */}
            <Card className="medical-card group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Stethoscope className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Para médicos</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Quirófanos bien equipados para tu próxima cirugía
                    </h3>
                    <Button asChild variant="medical-primary">
                      <Link to="/medicos">Descubre más</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capa 2 - Pacientes */}
            <Card className="medical-card group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Para pacientes</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Cuida de tu salud en las mejores camas de hospital de apaseo
                    </h3>
                    <Button asChild variant="medical-primary">
                      <Link to="/pacientes">Conoce más</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capa 3 - Directorio */}
            <Card className="medical-card group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-2">Conoce a los médicos</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Contamos con especialistas de Alta Calidad
                    </h3>
                    <Button asChild variant="medical-primary">
                      <Link to="/directorio">Directorio médico</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Capa 4 - Farmacia */}
            <Card className="medical-card group hover:scale-[1.02] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors duration-300">
                    <Pill className="w-8 h-8 text-accent" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-accent uppercase tracking-wider mb-2">Medicamentos a Buen Precio</p>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                      Ofertas en medicamentos de nuestra farmacia
                    </h3>
                    <Button asChild variant="medical-primary">
                      <Link to="/farmacia">Ir a farmacia</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto" ref={statsRef}>
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">+20</div>
              <p className="text-muted-foreground">Años de experiencia</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">+5,000</div>
              <p className="text-muted-foreground">Cirugías realizadas</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-muted-foreground">Atención disponible</p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-accent" />
              </div>
              <div className="text-3xl font-bold text-accent mb-2">5★</div>
              <p className="text-muted-foreground">Calificación promedio</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;