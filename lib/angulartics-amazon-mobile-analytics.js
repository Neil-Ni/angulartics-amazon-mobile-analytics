(function(window, angular, undefined) {'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.amazon
   */
  angular.module('angulartics.amazon', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {
      $analyticsProvider.registerSetUserProperties(function (event, properties, options, callback) {
        try {
          mobileAnalyticsClient.submitEvents({
            options: {
              event: event,
              properties: properties,
              options: options
            },
            submitCallback: callback
          });
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      });
    }]);

})(window, window.angular);