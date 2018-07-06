import Ember from 'ember';
import { AgoraGen } from '../lib/common';
import { field } from 'ember-gen';
import {
  CREATE_FIELDSETS,
  TABLE_FIELDS,
  SORT_FIELDS,
  DETAILS_FIELDSETS,
  BASIC_INFO_FIELDS
} from '../utils/common/service-version';

export default AgoraGen.extend({
  modelName: 'service_version',
  order: 2,
  path: 'service-versions',
  resourceName: 'api/v2/service-versions',
  list: {
    page: {
      title: 'service_version.menu'
    },
    menu: {
      label: 'service_version.menu'
    },
    sort: {
      serverSide: false,
      active: true,
      fields: SORT_FIELDS
    },
    filter: {
      active: true,
      serverSide: true,
      search: false,
      meta: {
        fields: [
          field(
            'id_service', {
              modelName:'service_item',
              type: 'model',
              label: 'Service Name',
              displayAttr: 'name'
            }
          ),
          field(
            'status', {
              modelName:'service_status',
              type: 'model',
              label: 'Service Status',
              displayAttr: 'value'
            }
          ),
        ]
      }
    },
    row: {
      actions: ['gen:details', 'gen:edit', 'remove'],
      fields: TABLE_FIELDS,
    }
  },
  create: {
    //provide url params with this magic trick
    routeMixins: {
      queryParams: {'service': { refreshModel: true }}
    },
    //prepopulate a field from a query param
    getModel(params) {
      const store = Ember.get(this, 'store');
      //prepopulate field only if query param exists
      if(params.service) {
        //save the service id in order to use it in onSubmit
        //model.set('param_service', params.service);
        //get the service item from the id provided from query param
        let service = store.findRecord('service-item', params.service);
        return service.then(function(service){
          //create a record with the model field prepopulated
          return store.createRecord('service-version', {
            id_service: service,
            param_service: params.service
          });
        })
      }

      return store.createRecord('service-version', {});
    },
    fieldsets: CREATE_FIELDSETS,
    onSubmit(model) {
      const param = model.get('param_service');
      if(param) {
        this.transitionTo(`/services/${param}`);
      }
    }
  },
  edit: {
    fieldsets: CREATE_FIELDSETS
  },
  details: {
    preloadModels: ['service-item'],
    fieldsets: DETAILS_FIELDSETS,
  }
});
