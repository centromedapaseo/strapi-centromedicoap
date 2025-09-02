import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Centro Médico Apaseo" className="h-12 w-auto" />
              <div>
                <div className="text-xl font-bold">Centro Médico</div>
                <div className="text-sm text-white/80">Apaseo el Alto</div>
              </div>
            </div>
            <p className="text-white/80">
              Hospital con +20 años de experiencia, ofreciendo servicios de salud de calidad
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/medicos" className="text-white/80 hover:text-white transition-colors">
                  Médicos
                </Link>
              </li>
              <li>
                <Link to="/pacientes" className="text-white/80 hover:text-white transition-colors">
                  Pacientes
                </Link>
              </li>
              <li>
                <Link to="/directorio" className="text-white/80 hover:text-white transition-colors">
                  Directorio Médico
                </Link>
              </li>
              <li>
                <Link to="/farmacia" className="text-white/80 hover:text-white transition-colors">
                  Farmacia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-white/80">(413) 165-1301</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-white/80">
                  Av. Independencia 304 A<br />
                  Zona Centro, Apaseo el Alto, Gto.
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-white/80">info@centromedicoapaseo.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-3">
                <Clock className="w-4 h-4" />
                <div className="text-white/80">
                  <div>Emergencias: 24/7</div>
                  <div>Consultas: 8:00 - 20:00</div>
                  <div>Farmacia: 7:00 - 22:00</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">
            © 2024 Centro Médico Apaseo. Todos los derechos reservados.
          </p>
          <p className="text-white/60 mt-2">
            +20 años cuidando tu salud en Apaseo el Alto, Guanajuato.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;