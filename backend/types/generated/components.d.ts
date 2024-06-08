import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuDropdown extends Schema.Component {
  collectionName: 'components_menu_dropdowns';
  info: {
    displayName: 'Dropdown';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    otrocampo: Attribute.String;
    paginas: Attribute.Relation<
      'menu.dropdown',
      'oneToMany',
      'api::pagina.pagina'
    >;
  };
}

export interface MenuLink extends Schema.Component {
  collectionName: 'components_menu_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    sedes: Attribute.String;
  };
}

export interface MenuSingle extends Schema.Component {
  collectionName: 'components_menu_singles';
  info: {
    displayName: 'Single';
    description: '';
  };
  attributes: {
    titulo: Attribute.String;
    url: Attribute.String;
  };
}

export interface MultimediaImagen extends Schema.Component {
  collectionName: 'components_multimedia_imagens';
  info: {
    displayName: 'Imagen';
    icon: 'picture';
    description: '';
  };
  attributes: {
    Archivo: Attribute.Media;
    Ancho: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 200;
          max: 1000;
        },
        number
      > &
      Attribute.DefaultTo<300>;
    Alto: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 300;
          max: 2000;
        },
        number
      > &
      Attribute.DefaultTo<400>;
    Descripcion: Attribute.String;
    url: Attribute.String & Attribute.DefaultTo<'#'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.single': MenuSingle;
      'multimedia.imagen': MultimediaImagen;
    }
  }
}
