import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const InsuranceCarousel = () => {
  const insuranceCompanies = [
    { name: "MetLife", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Seguros Monterrey", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "GNP", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Banorte", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "Zurich", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
    { name: "AXA", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop" },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Red de Aseguradoras</h2>
        <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
          En construcción
        </div>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Trabajamos con las principales aseguradoras para garantizar la mejor atención médica
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {insuranceCompanies.map((company, index) => (
          <Card key={index} className="medical-card hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-bold text-lg">
                    {company.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-semibold text-sm text-foreground">{company.name}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InsuranceCarousel;