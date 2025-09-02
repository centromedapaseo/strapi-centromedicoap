import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Baby, Heart, Bone, Filter } from "lucide-react";

const Directorio = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("Todas");

  const specialties = [
    { name: "Todas", icon: Filter },
    { name: "Pediatría", icon: Baby },
    { name: "Ginecología", icon: Heart },
    { name: "Traumatología", icon: Bone },
  ];

  const doctors = [
    {
      name: "Dra. María Elena Rodríguez",
      specialty: "Pediatría",
      experience: 15,
      id: 1
    },
    {
      name: "Dr. Carlos Alberto Méndez",
      specialty: "Pediatría", 
      experience: 12,
      id: 2
    },
    {
      name: "Dra. Ana Patricia Herrera",
      specialty: "Pediatría",
      experience: 18,
      id: 3
    },
    {
      name: "Dra. Laura Isabel Castillo",
      specialty: "Ginecología",
      experience: 20,
      id: 4
    },
    {
      name: "Dr. Roberto Alejandro Torres",
      specialty: "Ginecología",
      experience: 16,
      id: 5
    },
    {
      name: "Dra. Carmen Rosa Jiménez",
      specialty: "Ginecología",
      experience: 14,
      id: 6
    },
    {
      name: "Dr. Miguel Ángel Vázquez",
      specialty: "Traumatología",
      experience: 22,
      id: 7
    },
    {
      name: "Dr. Fernando José Ramírez",
      specialty: "Traumatología",
      experience: 17,
      id: 8
    },
    {
      name: "Dra. Patricia Guadalupe Morales",
      specialty: "Traumatología",
      experience: 19,
      id: 9
    }
  ];

  const filteredDoctors = selectedSpecialty === "Todas" 
    ? doctors 
    : doctors.filter(doctor => doctor.specialty === selectedSpecialty);

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty) {
      case "Pediatría":
        return Baby;
      case "Ginecología":
        return Heart;
      case "Traumatología":
        return Bone;
      default:
        return Stethoscope;
    }
  };

  const getSpecialtyColor = (specialty: string) => {
    switch (specialty) {
      case "Pediatría":
        return "bg-accent/10 text-accent border-accent/20";
      case "Ginecología":
        return "bg-pink-100 text-pink-700 border-pink-200";
      case "Traumatología":
        return "bg-primary/10 text-primary border-primary/20";
      default:
        return "bg-muted text-muted-foreground border-border";
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Directorio Médico
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Conoce a nuestros especialistas de alta calidad, comprometidos con tu bienestar
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {specialties.map((specialty) => {
              const IconComponent = specialty.icon;
              const isSelected = selectedSpecialty === specialty.name;
              
              return (
                <Button
                  key={specialty.name}
                  variant={isSelected ? "medical-primary" : "medical-secondary"}
                  onClick={() => setSelectedSpecialty(specialty.name)}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{specialty.name}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {filteredDoctors.map((doctor) => {
              const IconComponent = getSpecialtyIcon(doctor.specialty);
              
              return (
                <Card key={doctor.id} className="medical-card group hover:scale-[1.02] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-center">
                      {/* Doctor Icon */}
                      <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-10 h-10 text-primary" />
                      </div>
                      
                      {/* Doctor Info */}
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {doctor.name}
                      </h3>
                      
                      <Badge 
                        variant="secondary" 
                        className={`mb-3 ${getSpecialtyColor(doctor.specialty)}`}
                      >
                        {doctor.specialty}
                      </Badge>
                      
                      <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                        <Stethoscope className="w-4 h-4" />
                        <span className="font-medium">
                          {doctor.experience} años de experiencia
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          {filteredDoctors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No hay médicos disponibles para la especialidad seleccionada
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              ¿Necesitas una cita médica?
            </h2>
            <p className="text-muted-foreground mb-8">
              Nuestros especialistas están listos para atenderte. Contáctanos para agendar tu consulta
            </p>
            
            <Button 
              asChild 
              variant="medical-primary" 
              size="lg" 
              className="text-lg px-8"
            >
              <a 
                href="https://wa.me/524131651301?text=Me%20interesa%20agendar%20una%20cita,%20mi%20nombre%20es:" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Agendar Cita
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Directorio;