// Configuración del servicio Strapi
const STRAPI_URL = 'https://special-nurture-955505aa13.strapiapp.com';
const API_TOKEN = 'f0b6cd97a4471c8e1ae78d17b73eb76a99def67b67a0e5db8302a9b433478997f4fdcc3186941a9b5cb6d89a5f125180919e3af4b1c2539ae495b1796b20776f99014550cf8fe8e0d288b1c9657643f7ff4b5e7713c63a64ed19a1d397ed978e196fbc29a256e70b5bce88a1bea0acec733b979164e76608144ddd15f245fc59';

console.log('🔧 Strapi Service Config:', {
  STRAPI_URL_ENV: import.meta.env.VITE_STRAPI_URL,
  STRAPI_URL_FINAL: STRAPI_URL,
  API_TOKEN_ENV: import.meta.env.VITE_STRAPI_API_TOKEN ? import.meta.env.VITE_STRAPI_API_TOKEN.substring(0, 20) + '...' : 'NOT SET',
  API_TOKEN_FINAL: API_TOKEN ? API_TOKEN.substring(0, 20) + '...' : 'NOT SET',
  MODE: import.meta.env.MODE,
  PROD: import.meta.env.PROD,
  ALL_ENV: import.meta.env
});

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

// Interface para los medicamentos de Strapi
export interface StrapiMedicamento {
  id: number;
  documentId: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Medicamentos: Array<{
    id: number;
    Nombremedicamento: string;
    Categoria: 'Analgesicos' | 'Antinflamatorios' | 'Vitaminas' | 'Antibiotico';
    Descripcion: string;
    Precio: number;
    Imagen: Array<{
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
  }>;
}

// Interface para el formato usado en el componente
export interface Medicamento {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  image?: string;
  inStock: boolean;
}

class StrapiService {
  private baseURL: string;
  private apiToken: string;

  constructor() {
    this.baseURL = getSecureUrl(STRAPI_URL);
    this.apiToken = API_TOKEN;
  }

  private async fetchFromStrapi(endpoint: string) {
    const url = `${this.baseURL}/api${endpoint}`;

    console.log('🚀 Fetching from Strapi:', {
      url,
      hasToken: !!this.apiToken,
      tokenLength: this.apiToken?.length || 0,
      baseURL: this.baseURL
    });

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        },
      });

      console.log('📡 Response status:', response.status, response.statusText);

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ Response error:', {
          status: response.status,
          statusText: response.statusText,
          body: errorText
        });
        throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('✅ Response data:', data);
      return data;
    } catch (error) {
      console.error('❌ Error fetching from Strapi:', error);
      throw error;
    }
  }

  // Obtener todos los medicamentos
  async getMedicamentos(): Promise<Medicamento[]> {
    try {
      const data = await this.fetchFromStrapi('/farmacias?populate=Medicamentos.Imagen');

      // Transformar datos de Strapi al formato del componente
      const medicamentos: Medicamento[] = [];

      data.data.forEach((farmacia: StrapiMedicamento) => {
        if (farmacia.Medicamentos && farmacia.Medicamentos.length > 0) {
          farmacia.Medicamentos.forEach((med) => {
            const imageUrl = med.Imagen && med.Imagen.length > 0
              ? (med.Imagen[0].url.startsWith('http')
                  ? med.Imagen[0].url
                  : `${this.baseURL}${med.Imagen[0].url}`)
              : undefined;

            medicamentos.push({
              id: med.id,
              name: med.Nombremedicamento,
              price: med.Precio,
              category: this.mapCategory(med.Categoria),
              description: med.Descripcion,
              image: imageUrl,
              inStock: true // Por defecto, consideramos que está en stock
            });
          });
        }
      });

      return medicamentos;
    } catch (error) {
      console.error('Error getting medicamentos:', error);
      // Retornar datos de fallback en caso de error
      return this.getFallbackMedicamentos();
    }
  }

  // Mapear categorías de Strapi al formato del componente
  private mapCategory(category: string): string {
    const categoryMap: { [key: string]: string } = {
      'Analgesicos': 'Analgésicos',
      'Antinflamatorios': 'Antiinflamatorios',
      'Vitaminas': 'Vitaminas',
      'Antibiotico': 'Antibióticos'
    };

    return categoryMap[category] || category;
  }

  // Datos de fallback si Strapi no está disponible
  private getFallbackMedicamentos(): Medicamento[] {
    return [
      {
        id: 1,
        name: "Paracetamol 500mg",
        price: 45.00,
        category: "Analgésicos",
        description: "Alivia dolor y reduce fiebre",
        inStock: true
      },
      {
        id: 2,
        name: "Ibuprofeno 400mg",
        price: 55.00,
        category: "Antiinflamatorios",
        description: "Reduce inflamación y dolor",
        inStock: true
      },
      {
        id: 3,
        name: "Vitamina C 1000mg",
        price: 120.00,
        category: "Vitaminas",
        description: "Fortalece el sistema inmune",
        inStock: true
      }
    ];
  }

  // Obtener promociones
  async getPromociones(): Promise<string[]> {
    try {
      const data = await this.fetchFromStrapi('/promocionmeds?populate=detallepromocion');

      // Transformar datos de Strapi al formato del componente
      const promociones: string[] = [];

      data.data.forEach((promocionGroup: StrapiPromocion) => {
        if (promocionGroup.detallepromocion && promocionGroup.detallepromocion.length > 0) {
          promocionGroup.detallepromocion.forEach((promo) => {
            if (promo.detallepromo && promo.detallepromo.trim()) {
              promociones.push(promo.detallepromo);
            }
          });
        }
      });

      return promociones.length > 0 ? promociones : this.getFallbackPromociones();
    } catch (error) {
      console.error('Error getting promociones:', error);
      // Retornar datos de fallback en caso de error
      return this.getFallbackPromociones();
    }
  }

  // Datos de fallback para promociones
  private getFallbackPromociones(): string[] {
    return [
      "20% de descuento en vitaminas",
      "Envío gratis en compras mayores a $500",
      "2x1 en analgésicos seleccionados"
    ];
  }

  // Verificar si Strapi está disponible
  async checkConnection(): Promise<boolean> {
    try {
      console.log('🔍 Checking Strapi connection...', {
        url: `${this.baseURL}/api/farmacias`,
        hasToken: !!this.apiToken
      });

      const response = await fetch(`${this.baseURL}/api/farmacias`, {
        method: 'HEAD',
        headers: {
          ...(this.apiToken && { Authorization: `Bearer ${this.apiToken}` }),
        },
      });

      console.log('🔗 Connection check result:', {
        ok: response.ok,
        status: response.status,
        statusText: response.statusText
      });

      return response.ok;
    } catch (error) {
      console.error('❌ Connection check failed:', error);
      return false;
    }
  }
}

export const strapiService = new StrapiService();