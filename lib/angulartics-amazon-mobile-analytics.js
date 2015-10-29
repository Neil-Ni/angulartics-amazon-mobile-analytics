(function(window, angular, undefined) {'use strict';

  /**
   * @ngdoc overview
   * @name angulartics.amazon
   */
  angular.module('angulartics.amazon', ['angulartics'])
    .config(['$analyticsProvider', function ($analyticsProvider) {

      $analyticsProvider.registerPageTrack(function (path, properties) {
        try {
          mobileAnalyticsClient.recordEvent('page', Object.assign({ path: path }, properties));
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      });

      $analyticsProvider.registerEventTrack(function (event, properties, options, callback) {
        try {
          mobileAnalyticsClient.recordEvent('track', Object.assign({ event: event }, properties));
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      });

      $analyticsProvider.registerSetUserProperties(function (event, properties, options, callback) {
        try {
          mobileAnalyticsClient.recordEvent('identity', properties);
        } catch (e) {
          if (!(e instanceof ReferenceError)) {
            throw e;
          }
        }
      });
    }]);

})(window, window.angular);