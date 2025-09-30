// Configuración del servicio Strapi
const STRAPI_URL = 'https://special-nurture-955505aa13.strapiapp.com';
const API_TOKEN = '1157478ae9d5ab126eda15ed84c9e815bb50444ae4ec52b23cc52197bfe2df2422884044ca49fdbe8a02d6ebe155b44e5811b4e2d41b9543a66cd2c179e777b514b485ebe6d11070d911e55a2f5d5045c25b2d5b70f0ed841688b639f989c4ce9fc5487849f887e63872807b7fd1b5554f111a3391e50c5935ea264b41702c98';

// Configuración para Strapi local (medicamentos y doctores)
const LOCAL_STRAPI_URL = 'http://localhost:1337';
const LOCAL_API_TOKEN = ''; // Configurar después de crear el token en admin


// Función para asegurar HTTPS en producción
const getSecureUrl = (url: string): string => {
  if (url.includes('localhost') || url.includes('127.0.0.1')) {
    return url; // Mantener HTTP en desarrollo local
  }
  return url.replace(/^http:/, 'https:'); // Forzar HTTPS en producción
};

// Interface para las promociones de Strapi
export interface StrapiPromocion {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  detallepromocion: Array<{
    id: number;
    detallepromo: string;
  }>;
}

// Interface para los medicamentos de Strapi (nuevo content type)
export interface StrapiMedicamento {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Medicamento: string;
  compuestoActivo: string;
  contenido: string;
  presentacion: string;
  Precio?: number;
  Imagen?: Array<{
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  }>;
}

// Interface para el formato usado en el componente
export interface Medicamento {
  id: number;
  name: string;
  content: string;
  activeCompound: string;
  presentation: string;
  price?: number;
  image?: string;
  inStock: boolean;
}

// Interfaces para Doctores (nuevo content type)
export interface StrapiMedico {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  NombreDoctor: string;
  Especialidad: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
}

class StrapiService {
  private baseURL: string;
  private apiToken: string;

  constructor() {
    // Siempre usar Strapi Cloud (tanto en desarrollo como producción)
    this.baseURL = getSecureUrl(STRAPI_URL);
    this.apiToken = API_TOKEN;
  }

  // Función para hacer fetch desde Strapi local (doctores)
  private async fetchFromLocalStrapi(endpoint: string) {
    const url = `${LOCAL_STRAPI_URL}/api${endpoint}`;

    try {
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };

      if (LOCAL_API_TOKEN) {
        headers.Authorization = `Bearer ${LOCAL_API_TOKEN}`;
      }

      const response = await fetch(url, { headers });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching from local Strapi:', error);
      throw error;
    }
  }

  private async fetchFromStrapi(endpoint: string) {
    const url = `${this.baseURL}/api${endpoint}`;

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching from Strapi:', error);
      throw error;
    }
  }

  // Obtener todos los medicamentos desde Strapi Cloud (nuevo content type)
  async getMedicamentos(): Promise<Medicamento[]> {
    try {
      const data = await this.fetchFromStrapi('/medicamentos?populate=Imagen');

      // Transformar datos del nuevo content type al formato del componente
      const medicamentos: Medicamento[] = data.data.map((med: StrapiMedicamento) => {
        const imageUrl = med.Imagen && med.Imagen.length > 0
          ? (med.Imagen[0].url.startsWith('http')
              ? med.Imagen[0].url
              : `${this.baseURL}${med.Imagen[0].url}`)
          : undefined;

        return {
          id: med.id,
          name: med.Medicamento,
          content: med.contenido || "Consultar",
          activeCompound: med.compuestoActivo || "No especificado",
          presentation: med.presentacion || "Tableta",
          price: med.Precio,
          image: imageUrl,
          inStock: true // Por defecto, consideramos que está en stock
        };
      });

      return medicamentos.length > 0 ? medicamentos : this.getFallbackMedicamentos();
    } catch (error) {
      console.error('Error getting medicamentos:', error);
      // Retornar datos de fallback en caso de error
      return this.getFallbackMedicamentos();
    }
  }


  // Datos de fallback si Strapi no está disponible
  private getFallbackMedicamentos(): Medicamento[] {
    return [
      {
        id: 1,
        name: "CAPTOPRIL",
        content: "25 MG",
        activeCompound: "CAPTOPRIL",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 2,
        name: "NEUROBION",
        content: "--",
        activeCompound: "TIAMINA, PIRIDOXINA, CIANOCOBALAMINA",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 3,
        name: "LEVOFLOXACINO",
        content: "750 MG",
        activeCompound: "LEVOFLOXACINO",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 4,
        name: "PANTOPRAZOL",
        content: "40 MG",
        activeCompound: "PANTOPRAZOL",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 5,
        name: "SUPERPUNCK",
        content: "250 ML",
        activeCompound: "SUPERPUNCK",
        presentation: "SPRAY",
        inStock: true
      },
      {
        id: 6,
        name: "NEURONTIN",
        content: "600 MG",
        activeCompound: "GABAPETINA",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 7,
        name: "CLOVEX",
        content: "5 GR",
        activeCompound: "ACICLOVIR",
        presentation: "CREMA",
        inStock: true
      },
      {
        id: 8,
        name: "AVAPENA",
        content: "25 MG",
        activeCompound: "CLOROPIRAMINA",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 9,
        name: "GELMICIN",
        content: "40 GR",
        activeCompound: "BETAMETASONA, GENTAMICINA, CLOTRIMAZOL",
        presentation: "GEL",
        inStock: true
      },
      {
        id: 10,
        name: "DIMEFOR XR",
        content: "750 MG",
        activeCompound: "METFORMINA",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 11,
        name: "AMOXICILINA",
        content: "500 MG/125 MG",
        activeCompound: "AMOXICILINA, ACIDO CLAVULANICO",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 12,
        name: "AMOXICILINA",
        content: "875 MG/125 MG",
        activeCompound: "AMOXICILINA, ACIDO CLAVULANICO",
        presentation: "TABLETA",
        inStock: true
      },
      {
        id: 13,
        name: "ALUMAG",
        content: "240 ML",
        activeCompound: "HIDROXIDO DE ALUMINIO Y HIDROXIDO DE MAGNESIO",
        presentation: "SOLUCION",
        inStock: true
      },
      {
        id: 14,
        name: "COMBIVENT RESPIMAT",
        content: "4.5 ML",
        activeCompound: "BROMURO DE IPRATROPIO, SALBUTAMOL",
        presentation: "SOLUCION",
        inStock: true
      },
      {
        id: 15,
        name: "AMOXICLAV BID",
        content: "200 MG",
        activeCompound: "AMOXICILINA, ACIDO CLAVULANICO",
        presentation: "SUSPENSION",
        inStock: true
      }
    ];
  }

  // Obtener promociones (usando campos del nuevo schema)
  async getPromociones(): Promise<string[]> {
    try {
      const data = await this.fetchFromStrapi('/promocionmeds?populate=*');

      // Transformar datos usando los campos correctos del schema
      const promociones: string[] = data.data.map((promo: any) => {
        return promo.TextoPromocion || promo.NombrePromocion || "Promoción disponible";
      }).filter(Boolean);

      return promociones;
    } catch (error) {
      console.error('Error getting promociones:', error);
      // Retornar array vacío en caso de error
      return [];
    }
  }

  // Verificar si Strapi está disponible
  async checkConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseURL}/api/medicamentos`, {
        method: 'HEAD',
        headers: {
          ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        },
      });

      return response.ok;
    } catch (error) {
      return false;
    }
  }

  // Obtener doctores desde Strapi Cloud (nuevo content type)
  async getDoctores(): Promise<Doctor[]> {
    try {
      const data = await this.fetchFromStrapi('/medicos?populate=*');

      // Transformar datos del nuevo content type al formato del componente
      const doctores: Doctor[] = data.data.map((medico: StrapiMedico) => ({
        id: medico.id,
        name: medico.NombreDoctor,
        specialty: medico.Especialidad || 'General',
      }));

      return doctores.length > 0 ? doctores : this.getFallbackDoctores();
    } catch (error) {
      console.warn('Medicos endpoint error, using fallback data:', error);
      // Retornar datos de fallback si hay error
      return this.getFallbackDoctores();
    }
  }

  // Datos de fallback para doctores
  private getFallbackDoctores(): Doctor[] {
    return [
      {
        id: 1,
        name: "Dra. María Elena Rodríguez",
        specialty: "Pediatría"
      },
      {
        id: 2,
        name: "Dr. Carlos Alberto Méndez",
        specialty: "Pediatría"
      },
      {
        id: 3,
        name: "Dra. Ana Patricia Herrera",
        specialty: "Pediatría"
      },
      {
        id: 4,
        name: "Dra. Laura Isabel Castillo",
        specialty: "Ginecología"
      },
      {
        id: 5,
        name: "Dr. Roberto Alejandro Torres",
        specialty: "Ginecología"
      },
      {
        id: 6,
        name: "Dra. Carmen Rosa Jiménez",
        specialty: "Ginecología"
      },
      {
        id: 7,
        name: "Dr. Miguel Ángel Vázquez",
        specialty: "Traumatología"
      },
      {
        id: 8,
        name: "Dr. Fernando José Ramírez",
        specialty: "Traumatología"
      },
      {
        id: 9,
        name: "Dra. Patricia Guadalupe Morales",
        specialty: "Traumatología"
      }
    ];
  }
}

export const strapiService = new StrapiService();