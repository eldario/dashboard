import Vue from "vue";
import App from "./App";
import router from "./router/index";

import PaperDashboard from "./plugins/paperDashboard";
import "vue-notifyjs/themes/default.css";

Vue.use(PaperDashboard);

Pace.on('done', function() {
  console.log('pace done')
});
 
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
