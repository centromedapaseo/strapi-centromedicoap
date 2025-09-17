import React, { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Stethoscope, Activity, TestTube } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HospitalBenefits = () => {
  // Referencias para animaciones GSAP
  const benefit1Ref = useRef<HTMLDivElement>(null);
  const benefit2Ref = useRef<HTMLDivElement>(null);
  const benefit3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Configuración de animaciones similares a la página de pacientes
      const benefits = [
        { ref: benefit1Ref, direction: 'left' },
        { ref: benefit2Ref, direction: 'right' },
        { ref: benefit3Ref, direction: 'left' }
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
    });

    // Cleanup
    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50/50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conoce más del hospital
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Equipos modernos y servicios especializados para brindar la mejor atención médica
          </p>
        </div>

        <div className="space-y-24 max-w-7xl mx-auto">
          {/* Quirófanos Modernos - Izquierda */}
          <div ref={benefit1Ref} className="benefit-item-1 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="benefit-content space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Stethoscope className="w-8 h-8 text-primary" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Quirófanos Modernos
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Equipo médico y personal de calidad
              </p>
              
              {/* Elementos decorativos animados */}
              <div className="flex space-x-3 mt-6">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
              </div>
            </div>
            <div className="benefit-image lg:order-last">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637478/Quirofano_phltwn.webp" 
                    alt="Quirófano moderno con tecnología avanzada" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            </div>
          </div>

          {/* Laboratorio Accesible - Derecha */}
          <div ref={benefit2Ref} className="benefit-item-2 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="benefit-image lg:order-first">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/djkt9hofl/image/upload/v1758071356/Comunilab_tmuluf.webp" 
                    alt="Laboratorio Comunilab moderno" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{objectPosition: 'center 40%', transform: 'scale(1.2)'}}
                  />
                  {/* Overlay con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-accent/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            </div>
            <div className="benefit-content space-y-6 lg:text-right">
              <div className="flex items-center space-x-4 mb-4 lg:flex-row-reverse lg:space-x-reverse lg:space-x-4">
                <div className="p-4 bg-accent/10 rounded-2xl">
                  <TestTube className="w-8 h-8 text-accent" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-accent/30 to-transparent lg:bg-gradient-to-r"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Laboratorio Comunilab
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Realiza pruebas y estudios fácilmente
              </p>
              
              {/* Elementos decorativos animados */}
              <div className="flex space-x-3 mt-6 lg:justify-end">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-accent/60 rounded-full animate-ping"></div>
                <div className="w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Clínica Hemmovil - Izquierda */}
          <div ref={benefit3Ref} className="benefit-item-3 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="benefit-content space-y-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                Clínica Hemmovil
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Clínica de hemmodiálisis equipada
              </p>
              
              {/* Elementos decorativos animados */}
              <div className="flex space-x-3 mt-6">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
                <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
              </div>
            </div>
            <div className="benefit-image lg:order-last">
              <Card className="overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border-0 group">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src="https://res.cloudinary.com/djkt9hofl/image/upload/v1757637479/Hemodialisis_bmoaoo.webp" 
                    alt="Clínica de hemodiálisis Hemmovil" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay con gradiente sutil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HospitalBenefits;