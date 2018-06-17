import _ from "lodash";

export class SentryDatasource {
  type: string;
  url: string;
  name: string;
  authToken: string;
  organization: string;


  /** @ngInject */
  constructor(instanceSettings, private $q, private backendSrv, private templateSrv) {
    this.type = instanceSettings.type;
    this.url = instanceSettings.url;
    this.name = instanceSettings.name;
    this.authToken = instanceSettings.jsonData.AuthToken;
    this.organization = instanceSettings.jsonData.organization;
  }

  query(options) {
    var params = {
      'since': options.range.from._d.getTime() / 1000,
      'until': options.range.to._d.getTime() / 1000,
      'stat': 'received',
    }

    var requests = [];
    options.targets.forEach(target => {
      var url, request;
      if (target.projectName === "__all__") {
        url = '/organizations/'+ this.organization +'/stats//';
      }
      else {
        url = '/projects/'+ this.organization +'/' + target.projectName + '/stats//';
      }

      request = this.doRequest({
        url: url,
        params: params,
        method: 'GET'
      }).then(data => {
        return {
          "target": target.projectName,
          "datapoints": data.data.map(item => ([item[1], item[0] * 1000]))
        }
      });
      requests.push(request);
    });

    return Promise.all(requests).then(values => {
      return {
        'data': values
      }
    });
  }


  annotationQuery(options) {
  }

  metricFindQuery(query) {
    return this.doRequest({
      url: '/projects//',
      method: 'GET',
    }).then(result => {
      var items = result.data.map(item => ({text: item.name, value: item.slug}));
      items = _.orderBy(items, ['text'], ['asc']);
      items.unshift({text: "All projects", value: "__all__"})
      return items;
    });
  }

  doRequest(options) {
    options.headers = {
      'Authorization': 'Bearer ' + this.authToken
    }
    options.url = this.url + options.url;

    return this.backendSrv.datasourceRequest(options);
  }

  testDatasource() {
    return this.doRequest({
      url: '/',
      method: 'GET',
    }).then(response => {
      if (response.status === 200) {
        return { status: "success", message: "Data source is working", title: "Success" };
      }
    });
  }
}
