import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoSeoInformation extends Schema.Component {
  collectionName: 'components_seo_seo_informations';
  info: {
    displayName: 'SeoInformation';
    icon: 'paperPlane';
  };
  attributes: {
    SeoTitle: Attribute.String;
    SeoDescription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.seo-information': SeoSeoInformation;
    }
  }
}
