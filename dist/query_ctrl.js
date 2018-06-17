///<reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
System.register(['app/plugins/sdk', './css/query-editor.css!'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var sdk_1;
    var SentryQueryCtrl;
    return {
        setters:[
            function (sdk_1_1) {
                sdk_1 = sdk_1_1;
            },
            function (_1) {}],
        execute: function() {
            SentryQueryCtrl = (function (_super) {
                __extends(SentryQueryCtrl, _super);
                /** @ngInject **/
                function SentryQueryCtrl($scope, $injector) {
                    _super.call(this, $scope, $injector);
                }
                SentryQueryCtrl.prototype.getProjects = function (query) {
                    return this.datasource.metricFindQuery(query || '');
                };
                SentryQueryCtrl.prototype.onChangeInternal = function () {
                    this.panelCtrl.refresh(); // Asks the panel to refresh data.
                };
                SentryQueryCtrl.templateUrl = 'partials/query.editor.html';
                return SentryQueryCtrl;
            })(sdk_1.QueryCtrl);
            exports_1("SentryQueryCtrl", SentryQueryCtrl);
        }
    }
});
//# sourceMappingURL=query_ctrl.js.map