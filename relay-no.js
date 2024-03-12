/**

 node-red-contrib-relay-no-nc/relay-no.js - Copyright 2024 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/

module.exports = function(RED) {
    function RelayNodeNo(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var isEnabled = false; // Variable to track whether the node is enabled or disabled

        // Initialize status
        node.status({ fill: "red", shape: "ring", text: "Default NO" });

        // Handle incoming messages
        node.on('input', function(msg) {
            // Check if input is true and topic is 'enable'
            if (msg.payload === true && msg.topic === 'enable') {
                isEnabled = true;
                node.status({ fill: "green", shape: "dot", text: "Changed from NO to NC" });
            }
            // Check if input is false and topic is 'disable'
            else if (msg.payload === false && msg.topic === 'disable') {
                isEnabled = false;
                node.status({ fill: "red", shape: "ring", text: "Now NO" });
            }
            // If node is enabled, allow all messages to pass through
            else if (isEnabled) {
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("relay-no", RelayNodeNo);
}

