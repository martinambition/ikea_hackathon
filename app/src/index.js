import dva from 'dva';
import './index.css';

// Monitor Notification.
var bridge = {
  // Application Constructor
  initialize: function() {
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
      //this.receivedEvent('deviceready');
      //document.isDeviceReady = true;
      this.bindNotificationEvents();
      //this.rangeBeaconsInRegion();
  },
  bindNotificationEvents: function () {
    try{
      cordova.plugins.notification.local.on('click', function (obj) {
          //alert(obj.major)
      });
    }
    catch(err)
    {
      alert(err);
    }
  },
 
};




bridge.initialize();

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
