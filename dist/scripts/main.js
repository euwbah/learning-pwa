/*!
 *
 *  Web Starter Kit
 *  Copyright 2015 Google Inc. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */
!function(){"use strict";var e=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));"serviceWorker"in navigator&&("https:"===window.location.protocol||e)&&navigator.serviceWorker.register("service-worker.js").then(function(e){e.onupdatefound=function(){if(navigator.serviceWorker.controller){var o=e.installing;o.onstatechange=function(){switch(o.state){case"installed":console.log("alert: New content is available; please refresh");break;case"redundant":throw new Error("The installing service worker became redundant.");default:console.log("Service Worker: no new versions of the page found")}}}}})["catch"](function(e){console.error("Error during service worker registration:",e)})}();
//# sourceMappingURL=main.js.map
