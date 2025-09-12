import React, { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InsuranceCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  const insuranceCompanies = [
    { name: "MetLife", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Seguros Monterrey", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "GNP", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Banorte", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Zurich", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "AXA", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
  ];

  // Duplicar items para scroll infinito
  const duplicatedCompanies = [...insuranceCompanies, ...insuranceCompanies];

  useEffect(() => {
    if (!carouselTrackRef.current) return;

    const track = carouselTrackRef.current;
    const items = track.children;
    
    if (items.length === 0) return;

    // Obtener el ancho de un item
    const itemWidth = (items[0] as HTMLElement).offsetWidth + 24; // 24px = gap
    const totalWidth = itemWidth * insuranceCompanies.length;

    // Configurar scroll infinito
    const tl = gsap.timeline({ repeat: -1 });
    timelineRef.current = tl;
    
    tl.to(track, {
      x: -totalWidth,
      duration: 12,
      ease: "none",
    });

    // Animación de entrada stagger para los items
    gsap.fromTo(items,
      { 
        opacity: 0, 
        y: 50, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: carouselRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      tl.kill();
    };
  }, []);


  return (
    <div className="w-full" ref={carouselRef}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Red de Aseguradoras</h2>
        <div className="inline-block bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 px-6 py-3 rounded-full text-base font-semibold mb-4 border-2 border-yellow-300 shadow-lg">
          🚧 Cerrando alianzas con: 🚧
        </div>
      </div>
      
      {/* Carrusel Dinámico */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        
        <div 
          className="flex gap-6 w-fit pointer-events-none"
          ref={carouselTrackRef}
        >
          {duplicatedCompanies.map((company, index) => (
            <div key={index} className="flex-shrink-0 w-48">
              <Card className="medical-card">
                <CardContent className="p-6 flex items-center justify-center h-32">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold text-xl">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm text-foreground">{company.name}</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsuranceCarousel;