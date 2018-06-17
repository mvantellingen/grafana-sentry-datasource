System.register(['./datasource', './query_ctrl'], function(exports_1) {
    var datasource_1, query_ctrl_1;
    var SentryConfigCtrl, SentryQueryOptionsCtrl, SentryAnnotationsQueryCtrl;
    return {
        setters:[
            function (datasource_1_1) {
                datasource_1 = datasource_1_1;
            },
            function (query_ctrl_1_1) {
                query_ctrl_1 = query_ctrl_1_1;
            }],
        execute: function() {
            SentryConfigCtrl = (function () {
                function SentryConfigCtrl() {
                }
                SentryConfigCtrl.templateUrl = 'partials/config.html';
                return SentryConfigCtrl;
            })();
            SentryQueryOptionsCtrl = (function () {
                function SentryQueryOptionsCtrl() {
                }
                SentryQueryOptionsCtrl.templateUrl = 'partials/query.options.html';
                return SentryQueryOptionsCtrl;
            })();
            SentryAnnotationsQueryCtrl = (function () {
                function SentryAnnotationsQueryCtrl() {
                }
                SentryAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html';
                return SentryAnnotationsQueryCtrl;
            })();
            exports_1("Datasource", datasource_1.SentryDatasource);
            exports_1("QueryCtrl", query_ctrl_1.SentryQueryCtrl);
            exports_1("ConfigCtrl", SentryConfigCtrl);
            exports_1("QueryOptionsCtrl", SentryQueryOptionsCtrl);
            exports_1("AnnotationsQueryCtrl", SentryAnnotationsQueryCtrl);
        }
    }
});
//# sourceMappingURL=module.js.map