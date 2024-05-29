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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menu.dropdown': MenuDropdown;
      'menu.link': MenuLink;
      'menu.single': MenuSingle;
    }
  }
}
