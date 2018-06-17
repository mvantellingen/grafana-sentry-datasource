export declare class SentryDatasource {
    private $q;
    private backendSrv;
    private templateSrv;
    type: string;
    url: string;
    name: string;
    authToken: string;
    organization: string;
    /** @ngInject */
    constructor(instanceSettings: any, $q: any, backendSrv: any, templateSrv: any);
    query(options: any): Promise<{
        'data': any[];
    }>;
    annotationQuery(options: any): void;
    metricFindQuery(query: any): any;
    doRequest(options: any): any;
    testDatasource(): any;
}
