///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />

import {QueryCtrl} from 'app/plugins/sdk';
import './css/query-editor.css!'

export class SentryQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';

   /** @ngInject **/
  constructor($scope, $injector)  {
    super($scope, $injector);
  }

  getProjects(query) {
    return this.datasource.metricFindQuery(query || '');
  }

  onChangeInternal() {
    this.panelCtrl.refresh(); // Asks the panel to refresh data.
  }
}


