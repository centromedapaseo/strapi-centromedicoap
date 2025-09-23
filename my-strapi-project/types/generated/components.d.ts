import type { Schema, Struct } from '@strapi/strapi';

export interface NombreMedicamentoFarmacia extends Struct.ComponentSchema {
  collectionName: 'components_nombre_medicamento_farmacias';
  info: {
    displayName: 'Farmacia';
    icon: 'earth';
  };
  attributes: {
    Categoria: Schema.Attribute.Enumeration<
      ['Analgesicos', 'Antinflamatorios', 'Vitaminas', 'Antibiotico']
    >;
    CompuestoActivo: Schema.Attribute.String;
    Contenido: Schema.Attribute.String;
    Imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Nombremedicamento: Schema.Attribute.String;
    Presentacion: Schema.Attribute.Enumeration<
      ['Tableta', 'Spray', 'Crema', 'Gel', 'Solucion', 'Suspencion']
    >;
  };
}

export interface NombreMedicosMedicos extends Struct.ComponentSchema {
  collectionName: 'components_nombre_medicos_medicos';
  info: {
    displayName: 'Medicos';
    icon: 'handHeart';
  };
  attributes: {
    Especialidad: Schema.Attribute.Enumeration<
      [
        'Cirug\u00EDa General',
        'Dermatolog\u00EDa',
        'Gastrointerolog\u00EDa',
        'Gineco-Obstetricia',
        'Medicina General',
        'Nefrolog\u00EDa',
        'Nutriolog\u00EDa',
        'Odontolog\u00EDa',
        'Odontopediatr\u00EDa',
        'Oncolog\u00EDa',
        'Otorrinolaringolog\u00EDa',
        'Pediatr\u00EDa',
        'Psicolog\u00EDa',
        'Traumatolog\u00EDa y Ortopedia',
        'Urologia',
      ]
    >;
    Nombre: Schema.Attribute.String;
  };
}

export interface NombrePromocionNomprepromocion extends Struct.ComponentSchema {
  collectionName: 'components_nombre_promocion_nomprepromocions';
  info: {
    displayName: 'nomprepromocion';
  };
  attributes: {
    detallepromo: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'nombre-medicamento.farmacia': NombreMedicamentoFarmacia;
      'nombre-medicos.medicos': NombreMedicosMedicos;
      'nombre-promocion.nomprepromocion': NombrePromocionNomprepromocion;
    }
  }
}
