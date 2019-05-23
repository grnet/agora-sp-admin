import { field } from 'ember-gen';
import { fileField } from '../../lib/common';


/********************************************
                DETAILS VIEW
********************************************/

const DETAILS_FIELDSETS = [{
  label: 'service_category.cards.basic_information',
  text: 'service_category.cards.basic_hint',
  layout: {
    flex: [100, 100]
  },
  fields: [
    field(
      'name', {
        'label': 'service_category.fields.name',
        'hint': 'service_category.hints.name'
      }
    ),
    fileField(
      'icon', 'service-category', 'icon', {
        readonly: true,
        label: 'service_category.fields.icon',
        hint: 'service_category.hints.icon',
      }, {
        img: true
      }
    ),
  ]
}]


/********************************************
                EDIT VIEW
********************************************/

const EDIT_FIELDSETS = [{
  label: 'service_category.cards.basic_information',
  text: 'service_category.cards.basic_hint',
  layout: {
    flex: [100, 100]
  },
  fields: [
    field(
      'name', {
        'label': 'service_category.fields.name',
        'hint': 'service_category.hints.name'
      }
    ),
    fileField(
      'icon', 'service-category', 'icon', {
        readonly: false,
        label: 'service_category.fields.icon',
        hint: 'service_category.hints.icon',
      }, {
        replace: true,
        img: true
      }
    ),
  ]
}]


/********************************************
                CREATE  VIEW
********************************************/

const CREATE_FIELDSETS = [{
  label: 'service_category.cards.basic_information',
  text: 'service_category.cards.basic_hint',
  layout: {
    flex: [100, 100]
  },
  fields: [
    field(
      'name', {
        'label': 'service_category.fields.name',
        'hint': 'service_category.hints.name'
      }
    ),
  ]
}]


export {
  DETAILS_FIELDSETS,
  EDIT_FIELDSETS,
  CREATE_FIELDSETS
};
