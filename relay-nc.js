/**

 node-red-contrib-relay-no-nc/relay-nc.js - Copyright 2024 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

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
    function RelayNodeNc(config) {
        RED.nodes.createNode(this, config);
        var node = this;
        var isEnabled = true; // Variable to track whether the node is enabled or disabled

        // Initialize status
        node.status({ fill: "green", shape: "ring", text: "Default NC" });

        // Handle incoming messages
        node.on('input', function(msg) {
            // Check if input is false and topic is 'disable'
            if (msg.payload === true && msg.topic === 'enable') {
                isEnabled = false;
                node.status({ fill: "red", shape: "dot", text: "Changed from NC to NO" });
            }
            // Check if input is false and topic is 'disable'
            else if (msg.payload === false && msg.topic === 'disable') {
                isEnabled = true;
                node.status({ fill: "green", shape: "ring", text: "Now NC" });
            }
            // If node is enabled, allow all messages to pass through
            else if (isEnabled) {
                node.send(msg);
            }
        });
    }
    RED.nodes.registerType("relay-nc", RelayNodeNc);
}

