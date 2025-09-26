import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Stethoscope, Baby, Heart, Bone, MessageCircle, Loader2, AlertCircle, Search, Brain, Eye, Scissors, Activity, UserCheck, Smile, Pill, ChevronDown, X } from "lucide-react";
import { strapiService, type Doctor } from "@/services/strapi";

const Directorio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [specialtySearchTerm, setSpecialtySearchTerm] = useState("");
  const [isSpecialtyDropdownOpen, setIsSpecialtyDropdownOpen] = useState(false);
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Obtener especialidades únicas de los doctores
  const uniqueSpecialties = [...new Set(doctors.map(doctor => doctor.specialty))].sort();

  // Filtrar especialidades basado en la búsqueda
  const filteredSpecialties = uniqueSpecialties.filter(specialty =>
    specialty.toLowerCase().includes(specialtySearchTerm.toLowerCase())
  );


  // Cargar doctores desde Strapi local
  useEffect(() => {
    const loadDoctors = async () => {
      try {
        setLoading(true);
        setError(null);
        const doctorsData = await strapiService.getDoctores();
        setDoctors(doctorsData);
      } catch (err) {
        console.error('❌ Error loading doctors:', err);
        setError("Error al cargar doctores - mostrando datos de respaldo");
        // Los datos de fallback ya se manejan en el servicio
        const fallbackDoctors = await strapiService.getDoctores();
        setDoctors(fallbackDoctors);
      } finally {
        setLoading(false);
      }
    };

    loadDoctors();
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchTerm === "" ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialties.length === 0 || selectedSpecialties.includes(doctor.specialty);
    return matchesSearch && matchesSpecialty;
  }).sort((a, b) => {
    // Remove "Dr.", "Dra.", "Lic." from names for sorting
    const cleanNameA = a.name.replace(/^(Dr\.?\s+|Dra\.?\s+|Lic\.?\s+)/i, '').trim();
    const cleanNameB = b.name.replace(/^(Dr\.?\s+|Dra\.?\s+|Lic\.?\s+)/i, '').trim();

    // Extract first name for alphabetical sorting by first name
    const firstNameA = cleanNameA.split(' ')[0] || cleanNameA;
    const firstNameB = cleanNameB.split(' ')[0] || cleanNameB;

    return firstNameA.localeCompare(firstNameB, 'es', { sensitivity: 'base' });
  });

  // Funciones para manejar especialidades
  const toggleSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev =>
      prev.includes(specialty)
        ? prev.filter(s => s !== specialty)
        : [...prev, specialty]
    );
  };

  const removeSpecialty = (specialty: string) => {
    setSelectedSpecialties(prev => prev.filter(s => s !== specialty));
  };

  const clearAllSpecialties = () => {
    setSelectedSpecialties([]);
  };

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.specialty-dropdown')) {
        setIsSpecialtyDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getSpecialtyIcon = (specialty: string) => {
    const specialtyMap: Record<string, any> = {
      pediatr: Baby, ginecol: Heart, traumat: Bone, ortoped: Bone,
      cardiol: Activity, dermato: UserCheck, neurol: Brain,
      oftalm: Eye, cirug: Scissors, odonto: Smile, dental: Smile,
      general: Pill, intern: Pill, familiar: Pill
    };

    const specialtyLower = specialty.toLowerCase();
    const match = Object.keys(specialtyMap).find(key => specialtyLower.includes(key));
    return match ? specialtyMap[match] : Stethoscope;
  };

  const getSpecialtyColor = (specialty: string) => {
    const colorMap: Record<string, string> = {
      pediatr: "bg-accent/10 text-accent border-accent/20",
      ginecol: "bg-pink-100 text-pink-700 border-pink-200",
      traumat: "bg-primary/10 text-primary border-primary/20",
      ortoped: "bg-primary/10 text-primary border-primary/20",
      cardiol: "bg-red-100 text-red-700 border-red-200",
      dermato: "bg-orange-100 text-orange-700 border-orange-200",
      neurol: "bg-purple-100 text-purple-700 border-purple-200",
      oftalm: "bg-blue-100 text-blue-700 border-blue-200",
      cirug: "bg-gray-100 text-gray-700 border-gray-200",
      odonto: "bg-cyan-100 text-cyan-700 border-cyan-200",
      dental: "bg-cyan-100 text-cyan-700 border-cyan-200",
      general: "bg-green-100 text-green-700 border-green-200",
      intern: "bg-green-100 text-green-700 border-green-200",
      familiar: "bg-green-100 text-green-700 border-green-200"
    };

    const specialtyLower = specialty.toLowerCase();
    const match = Object.keys(colorMap).find(key => specialtyLower.includes(key));
    return match ? colorMap[match] : "bg-muted text-muted-foreground border-border";
  };

  const sendWhatsAppAppointment = (doctorName: string) => {
    const mensaje = `Hola me gustaría agendar cita con el Doctor/a ${doctorName}`;
    const mensajeCodificado = encodeURIComponent(mensaje);
    const numeroWhatsApp = "524131651301";
    const whatsappURL = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Directorio Médico
            </h1>
            <p className="text-xl text-muted-foreground mb-0">
              Conoce a nuestros especialistas de alta calidad, comprometidos con tu bienestar
            </p>

            {error && (
              <div className="max-w-md mx-auto mb-4">
                <div className="flex items-center space-x-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <AlertCircle className="w-4 h-4" />
                  <span>{error}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>


      {/* Search Section */}
      <section className="py-8 bg-gray-50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Busca por especialidad o nombre del doctor"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-14 text-lg w-full"
            />
          </div>

          {/* Specialty Filter Selector */}
          <div className="max-w-3xl mx-auto mt-6">
            {/* Selected Specialties Tags */}
            {selectedSpecialties.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {selectedSpecialties.map((specialty) => (
                  <div key={specialty} className="flex items-center bg-primary text-white px-3 py-1 rounded-full text-sm">
                    <span>{specialty}</span>
                    <button
                      onClick={() => removeSpecialty(specialty)}
                      className="ml-2 hover:bg-white/20 rounded-full p-1"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={clearAllSpecialties}
                  className="text-sm text-gray-500 hover:text-gray-700 underline"
                >
                  Limpiar filtros
                </button>
              </div>
            )}

            {/* Specialty Dropdown */}
            <div className="relative specialty-dropdown">
              <div
                className="w-full h-12 border border-gray-300 rounded-lg px-4 flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors"
                onClick={() => setIsSpecialtyDropdownOpen(!isSpecialtyDropdownOpen)}
              >
                <span className="text-gray-600">
                  {selectedSpecialties.length === 0
                    ? "Filtrar por especialidad..."
                    : `${selectedSpecialties.length} especialidad${selectedSpecialties.length !== 1 ? 'es' : ''} seleccionada${selectedSpecialties.length !== 1 ? 's' : ''}`
                  }
                </span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${
                  isSpecialtyDropdownOpen ? 'rotate-180' : ''
                }`} />
              </div>

              {isSpecialtyDropdownOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10 mt-1">
                  {/* Search inside dropdown */}
                  <div className="p-3 border-b border-gray-200">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        type="text"
                        placeholder="Buscar especialidad..."
                        value={specialtySearchTerm}
                        onChange={(e) => setSpecialtySearchTerm(e.target.value)}
                        className="pl-10 h-10"
                      />
                    </div>
                  </div>

                  {/* Specialty options */}
                  <div className="max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    {filteredSpecialties.map((specialty) => (
                      <label
                        key={specialty}
                        className="flex items-center p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <input
                          type="checkbox"
                          checked={selectedSpecialties.includes(specialty)}
                          onChange={() => toggleSpecialty(specialty)}
                          className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary focus:ring-2 mr-3"
                        />
                        <span className={`flex-1 text-sm ${
                          selectedSpecialties.includes(specialty) ? 'text-primary font-medium' : 'text-gray-700'
                        }`}>
                          {specialty}
                        </span>
                      </label>
                    ))}
                    {filteredSpecialties.length === 0 && (
                      <div className="p-3 text-gray-500 text-center text-sm">
                        No se encontraron especialidades
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16">
              <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Cargando doctores...</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredDoctors.map((doctor) => {
                  const IconComponent = getSpecialtyIcon(doctor.specialty);

                  return (
                    <Card key={doctor.id} className="medical-card group hover:scale-[1.02] transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="text-center space-y-4">
                          {/* Doctor Icon */}
                          <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-10 h-10 text-primary" />
                          </div>

                          {/* Doctor Info */}
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-2">
                              {doctor.name}
                            </h3>

                            <Badge
                              variant="secondary"
                              className={`mb-3 ${getSpecialtyColor(doctor.specialty)}`}
                            >
                              {doctor.specialty}
                            </Badge>
                          </div>

                          {/* WhatsApp Button */}
                          <Button
                            onClick={() => sendWhatsAppAppointment(doctor.name)}
                            variant="medical-primary"
                            className="w-full flex items-center space-x-2"
                          >
                            <MessageCircle className="w-4 h-4" />
                            <span>Agendar Cita</span>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {filteredDoctors.length === 0 && !loading && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">
                    No hay médicos disponibles para la especialidad seleccionada
                  </p>
                </div>
              )}
            </>
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