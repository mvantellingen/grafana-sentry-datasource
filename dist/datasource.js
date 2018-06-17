System.register(["lodash"], function(exports_1) {
    var lodash_1;
    var SentryDatasource;
    return {
        setters:[
            function (lodash_1_1) {
                lodash_1 = lodash_1_1;
            }],
        execute: function() {
            SentryDatasource = (function () {
                /** @ngInject */
                function SentryDatasource(instanceSettings, $q, backendSrv, templateSrv) {
                    this.$q = $q;
                    this.backendSrv = backendSrv;
                    this.templateSrv = templateSrv;
                    this.type = instanceSettings.type;
                    this.url = instanceSettings.url;
                    this.name = instanceSettings.name;
                    this.authToken = instanceSettings.jsonData.AuthToken;
                    this.organization = instanceSettings.jsonData.organization;
                }
                SentryDatasource.prototype.query = function (options) {
                    var _this = this;
                    var params = {
                        'since': options.range.from._d.getTime() / 1000,
                        'until': options.range.to._d.getTime() / 1000,
                        'stat': 'received',
                    };
                    var requests = [];
                    options.targets.forEach(function (target) {
                        var url, request;
                        if (target.projectName === "__all__") {
                            url = '/organizations/' + _this.organization + '/stats//';
                        }
                        else {
                            url = '/projects/' + _this.organization + '/' + target.projectName + '/stats//';
                        }
                        request = _this.doRequest({
                            url: url,
                            params: params,
                            method: 'GET'
                        }).then(function (data) {
                            return {
                                "target": target.projectName,
                                "datapoints": data.data.map(function (item) { return ([item[1], item[0] * 1000]); })
                            };
                        });
                        requests.push(request);
                    });
                    return Promise.all(requests).then(function (values) {
                        return {
                            'data': values
                        };
                    });
                };
                SentryDatasource.prototype.annotationQuery = function (options) {
                };
                SentryDatasource.prototype.metricFindQuery = function (query) {
                    return this.doRequest({
                        url: '/projects//',
                        method: 'GET',
                    }).then(function (result) {
                        var items = result.data.map(function (item) { return ({ text: item.name, value: item.slug }); });
                        items = lodash_1.default.orderBy(items, ['text'], ['asc']);
                        items.unshift({ text: "All projects", value: "__all__" });
                        return items;
                    });
                };
                SentryDatasource.prototype.doRequest = function (options) {
                    options.headers = {
                        'Authorization': 'Bearer ' + this.authToken
                    };
                    options.url = this.url + options.url;
                    return this.backendSrv.datasourceRequest(options);
                };
                SentryDatasource.prototype.testDatasource = function () {
                    return this.doRequest({
                        url: '/',
                        method: 'GET',
                    }).then(function (response) {
                        if (response.status === 200) {
                            return { status: "success", message: "Data source is working", title: "Success" };
                        }
                    });
                };
                return SentryDatasource;
            })();
            exports_1("SentryDatasource", SentryDatasource);
        }
    }
});
//# sourceMappingURL=datasource.js.map