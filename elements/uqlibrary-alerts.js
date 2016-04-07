(function () {
  Polymer({
    is: 'uqlibrary-alerts',

    properties: {
      /**
       * Application name for google analytics records
       */
      gaAppName: {
        type: String,
        value: 'alerts'
      },

      /**
       * Whether the Spotlights component should auto load spotlights from the API
       * @type Boolean
       */
      autoLoad: {
        type: Object,
        value: true
      },

      /**
       * List of alerts to display
       */
      alerts: {
        type: Array
      }
    },

    _getAlertType: function(isUrgent) {
      return isUrgent ? "urgent" : "notice";
    },

    _alertsLoaded: function(response) {
      this.alerts = [];
      if (response.detail)
        this.alerts = response.detail;
    },

    _hideAlerts: function(e) {
      
      this.$.ga.addEvent('Hide alert');

      if (document.cookie.indexOf("UQL-Hide-Alerts=1") <= -1) {
        //set cookie for 24 hours not to show tooltip on load
        var date = new Date();
        date.setTime(date.getTime()+(24*60*60*1000));

        // production
        document.cookie = 'UQL-Hide-Alerts=1;expires=' + date.toGMTString() + ';domain=.library.uq.edu.au;path=/';

        var alerts = this.querySelector('.alerts-container');
        alerts.className += ' fadeout';
        this.async(function(){
          this.alerts = [];
        }, 2000);
      }
    },

    _linkClicked: function (e) {
      this.$.ga.addEvent("Alert clicked", e.target.dataTitle);
    },

    ready: function() {
      var that = this;

      var hideAlerts = document.cookie.indexOf("UQL-Hide-Alerts=1") >= 0;
      if (this.autoLoad && !hideAlerts) {
        this.$.alertsApi.get();
      }
    }

  });
})();