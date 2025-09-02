import React from "react";
import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <div className="w-full bg-white rounded-xl shadow-[var(--shadow-card)] overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="p-2 bg-primary/10 rounded-lg">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg text-foreground">Nuestra Ubicación</h3>
            <p className="text-muted-foreground">Av. Independencia 304 A, Zona Centro. Apaseo el Alto, Gto.</p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3730.4878845568877!2d-100.62001062460537!3d20.456847881024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d35b0b0b0b0b0b%3A0x1234567890!2sAv.%20Independencia%20304%2C%20Zona%20Centro%2C%20Apaseo%20el%20Alto%2C%20Gto.%2C%20Mexico!5e0!3m2!1sen!2smx!4v1234567890"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Centro Médico Apaseo Ubicación"
          className="w-full"
        />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent" />
      </div>
    </div>
  );
};

export default LocationMap;