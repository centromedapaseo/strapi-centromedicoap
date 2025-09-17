import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Baby, Bone, Scissors, Heart } from "lucide-react";

interface Surgery {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  bgGradient: string;
}

const surgeries: Surgery[] = [
  {
    id: "ginecologia",
    title: "Ginecología",
    subtitle: "Realiza partos, cesáreas y cirugías ginecológicas",
    icon: Baby,
    color: "text-pink-600",
    bgGradient: "from-pink-100 to-rose-100"
  },
  {
    id: "traumatologia",
    title: "Traumatología",
    subtitle: "Equipo médico listo para cirugías de rodilla, cadera y clavícula",
    icon: Bone,
    color: "text-blue-600",
    bgGradient: "from-blue-100 to-indigo-100"
  },
  {
    id: "generales",
    title: "Cirugías Generales",
    subtitle: "Cirugía de vesícula, hernias, apendicitis y más",
    icon: Scissors,
    color: "text-emerald-600",
    bgGradient: "from-emerald-100 to-teal-100"
  }
];

const SurgeriesCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % surgeries.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + surgeries.length) % surgeries.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Animación CSS para el elemento gráfico
  const AnimatedGraphic = ({ surgery }: { surgery: Surgery }) => {
    const IconComponent = surgery.icon;
    
    return (
      <div className="relative h-32 w-32 mx-auto mb-6">
        {/* Círculo de fondo animado */}
        <div className={`absolute inset-0 bg-gradient-to-br ${surgery.bgGradient} rounded-full animate-pulse`}></div>
        
        {/* Anillos concéntricos animados */}
        <div className="absolute inset-2 border-2 border-current opacity-20 rounded-full animate-ping"></div>
        <div className="absolute inset-4 border border-current opacity-30 rounded-full animate-bounce"></div>
        
        {/* Icono central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <IconComponent className={`w-12 h-12 ${surgery.color} animate-pulse`} />
        </div>
        
        {/* Partículas flotantes */}
        <div className="absolute -top-2 -right-2 w-3 h-3 bg-current opacity-40 rounded-full animate-bounce"></div>
        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-current opacity-30 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 -left-3 w-1.5 h-1.5 bg-current opacity-50 rounded-full animate-pulse"></div>
      </div>
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Equipados para múltiples cirugías
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carrousel Container */}
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {surgeries.map((surgery, index) => (
                <div key={surgery.id} className="w-full flex-shrink-0 px-4">
                  <Card className="medical-card text-center group hover:scale-105 transition-all duration-500 border-0 shadow-lg hover:shadow-xl min-h-[400px]">
                    <CardContent className="p-12">
                      {/* Elemento gráfico animado */}
                      <div className={surgery.color}>
                        <AnimatedGraphic surgery={surgery} />
                      </div>
                      
                      {/* Contenido */}
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                        {surgery.title}
                      </h3>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-md mx-auto">
                        {surgery.subtitle}
                      </p>
                      
                      {/* Decoración inferior */}
                      <div className="mt-8 flex justify-center space-x-2">
                        <div className={`w-2 h-2 ${surgery.color.replace('text-', 'bg-')} rounded-full animate-pulse`}></div>
                        <div className={`w-1.5 h-1.5 ${surgery.color.replace('text-', 'bg-')} rounded-full animate-ping opacity-60`}></div>
                        <div className={`w-1 h-1 ${surgery.color.replace('text-', 'bg-')} rounded-full animate-bounce opacity-40`}></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="lg"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-2 border-primary/20 hover:bg-primary hover:text-white shadow-lg transition-all duration-300"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 border-2 border-primary/20 hover:bg-primary hover:text-white shadow-lg transition-all duration-300"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {surgeries.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurgeriesCarousel;