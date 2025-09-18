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
    Descripcion: Schema.Attribute.String;
    Imagen: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Nombremedicamento: Schema.Attribute.String;
    Precio: Schema.Attribute.Decimal;
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
      'nombre-promocion.nomprepromocion': NombrePromocionNomprepromocion;
    }
  }
}
