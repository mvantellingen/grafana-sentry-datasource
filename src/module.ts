import { SentryDatasource } from './datasource';
import { SentryQueryCtrl } from './query_ctrl';

class SentryConfigCtrl {
  static templateUrl = 'partials/config.html';
}

class SentryQueryOptionsCtrl {
  static templateUrl = 'partials/query.options.html';
}

class SentryAnnotationsQueryCtrl {
  static templateUrl = 'partials/annotations.editor.html'
}

export {
  SentryDatasource as Datasource,
  SentryQueryCtrl as QueryCtrl,
  SentryConfigCtrl as ConfigCtrl,
  SentryQueryOptionsCtrl as QueryOptionsCtrl,
  SentryAnnotationsQueryCtrl as AnnotationsQueryCtrl
};
