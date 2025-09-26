import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, X } from "lucide-react";
import logo from "@/assets/imagotipo.png";

const Footer = () => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const emailProviders = [
    {
      name: 'Gmail',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=contacto@centromedicopaseo.com',
      icon: '📧'
    },
    {
      name: 'Outlook',
      url: 'https://outlook.live.com/owa/?path=/mail/action/compose&to=contacto@centromedicopaseo.com',
      icon: '📨'
    },
    {
      name: 'Yahoo Mail',
      url: 'https://compose.mail.yahoo.com/?to=contacto@centromedicopaseo.com',
      icon: '✉️'
    },
    {
      name: 'Cliente por defecto',
      url: 'mailto:contacto@centromedicopaseo.com',
      icon: '📮'
    }
  ];

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleProviderSelect = (url: string) => {
    window.open(url, '_blank');
    setShowEmailModal(false);
  };

  return (
    <footer className="bg-gradient-to-br from-slate-800 via-primary to-slate-900 text-white py-16">
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
                <span className="text-white/80">4131663755</span>
              </li>
              <li className="flex items-center space-x-3">
                <MessageCircle className="w-4 h-4" />
                <a href="https://wa.me/524131651301" className="text-white/80 hover:text-white transition-colors">4131651301</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" />
                <a
                  href="https://maps.app.goo.gl/PXBhVJPyZwU6j5EHA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Av. Independencia 304 A<br />
                  Zona Centro, Apaseo el Alto, Gto.
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <button onClick={handleEmailClick} className="text-white/80 hover:text-white transition-colors text-left">contacto@centromedicopaseo.com</button>
              </li>
              <li className="flex items-center space-x-3">
                <Facebook className="w-4 h-4" />
                <a href="https://www.facebook.com/p/Centro-M%C3%A9dico-Apaseo-el-Alto-61560180565970/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Facebook</a>
              </li>
              <li className="flex items-center space-x-3">
                <Instagram className="w-4 h-4" />
                <a href="https://www.instagram.com/centromedicoapaseo/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors">Instagram</a>
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
                  <div>Atención 24 horas</div>
                  <div>Consultas: 7:00 am - 9:00 pm</div>
                  <div>Farmacia: 24 horas</div>
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

      {/* Email Provider Modal */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowEmailModal(false)}>
          <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Enviar correo</h3>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 mb-4">Elige tu proveedor de correo preferido:</p>
            <div className="grid grid-cols-1 gap-3">
              {emailProviders.map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => handleProviderSelect(provider.url)}
                  className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-primary transition-colors text-left"
                >
                  <span className="text-xl">{provider.icon}</span>
                  <span className="text-gray-900 font-medium">{provider.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;