/* Copyright 2017 Streampunk Media Ltd.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

var redioactive = require('node-red-contrib-dynamorse-core').Redioactive;
var util = require('util');

module.exports = function (RED) {
  function RateLimit (config) {
    RED.nodes.createNode(this, config);
    redioactive.Valve.call(this, config);
    // Go figure
  }
  util.inherits(RateLimit, redioactive.Valve);
  RED.nodes.registerType("rate-limit", RateLimit);
}
