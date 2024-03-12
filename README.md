## NoNC Relay Node for Node-RED

This module provides a simple NO (Normally Open) and NC (Normally Close) relay node for Node-RED. It allows you to control the flow of messages based on an "enable" or "disable" signal received on a specific topic.

### Installation

1. Download this module or clone the repository.
2. In your Node-RED user directory, run:

```bash
npm install .
```

or install it online as 

```bash 
npm install node-red-contrib-relay-no-nc
```


### Usage

1. Add a "relay-no" or "relay-nc" node to your flow.
2. Configure the following properties:
    * **name:** A name for the node (optional).
3. Use "enable" and "disable" messages on the specified topic to control the node's behavior:
    * **Topic:** Set the topic to enable or disable the node.
    * **Enable:** Send a message with boolean `payload: true` on the topic to enable the node.
    * **Disable:** Send a message with boolean `payload: false` on the topic to disable the node.
4. Connect the output of the node to other nodes in your flow.

**Example:**

```
[{"id":"cac80ffbe4fd7cdf","type":"tab","label":"NoNc relay","disabled":false,"info":"","env":[]},{"id":"c62efe0fc73eedd5","type":"relay-nc","z":"cac80ffbe4fd7cdf","name":"","x":580,"y":120,"wires":[["fc4b91857193f24b"]],"icon":"font-awesome/fa-toggle-on"},{"id":"6ba8304f67a71aea","type":"relay-no","z":"cac80ffbe4fd7cdf","name":"","x":580,"y":340,"wires":[["bd01d2118d3bc903"]],"icon":"font-awesome/fa-toggle-off"},{"id":"9d3709f217dd31b1","type":"inject","z":"cac80ffbe4fd7cdf","name":"start","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"true","payloadType":"bool","x":90,"y":120,"wires":[["06acb202d410bc41"]]},{"id":"06acb202d410bc41","type":"change","z":"cac80ffbe4fd7cdf","name":"set msg.topic value to enable","rules":[{"t":"set","p":"topic","pt":"msg","to":"enable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":120,"wires":[["c62efe0fc73eedd5"]]},{"id":"5ad74b28eb0a9a42","type":"inject","z":"cac80ffbe4fd7cdf","name":"stop","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"false","payloadType":"bool","x":90,"y":180,"wires":[["de83210adc71f7ec"]]},{"id":"de83210adc71f7ec","type":"change","z":"cac80ffbe4fd7cdf","name":"set msg.topic to value disable","rules":[{"t":"set","p":"topic","pt":"msg","to":"disable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":310,"y":180,"wires":[["c62efe0fc73eedd5"]]},{"id":"a81dccfd5da6d6dd","type":"inject","z":"cac80ffbe4fd7cdf","name":"start","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"true","payloadType":"bool","x":90,"y":320,"wires":[["e317d76da1a30f77"]]},{"id":"e317d76da1a30f77","type":"change","z":"cac80ffbe4fd7cdf","name":"set msg.topic value to enable","rules":[{"t":"set","p":"topic","pt":"msg","to":"enable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":300,"y":320,"wires":[["6ba8304f67a71aea"]]},{"id":"f76a355abff041e4","type":"inject","z":"cac80ffbe4fd7cdf","name":"stop","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"false","payloadType":"bool","x":90,"y":380,"wires":[["f231bb515d55e45d"]]},{"id":"f231bb515d55e45d","type":"change","z":"cac80ffbe4fd7cdf","name":"set msg.topic to value disable","rules":[{"t":"set","p":"topic","pt":"msg","to":"disable","tot":"str"}],"action":"","property":"","from":"","to":"","reg":false,"x":310,"y":380,"wires":[["6ba8304f67a71aea"]]},{"id":"f9dc57b2a3f58c67","type":"inject","z":"cac80ffbe4fd7cdf","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"1","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"1","payloadType":"num","x":570,"y":40,"wires":[["c62efe0fc73eedd5"]]},{"id":"fc4b91857193f24b","type":"add","z":"cac80ffbe4fd7cdf","name":"","topic":"","x":830,"y":120,"wires":[["717d71837bc35320"]]},{"id":"717d71837bc35320","type":"debug","z":"cac80ffbe4fd7cdf","name":"Output","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","targetType":"msg","statusVal":"payload","statusType":"auto","x":1030,"y":120,"wires":[]},{"id":"02866db2697ce95c","type":"inject","z":"cac80ffbe4fd7cdf","name":"","props":[{"p":"payload"},{"p":"topic","vt":"str"}],"repeat":"1","crontab":"","once":false,"onceDelay":0.1,"topic":"","payload":"1","payloadType":"num","x":570,"y":260,"wires":[["6ba8304f67a71aea"]]},{"id":"bd01d2118d3bc903","type":"add","z":"cac80ffbe4fd7cdf","name":"","topic":"","x":830,"y":340,"wires":[["ab118dad172ca56a"]]},{"id":"ab118dad172ca56a","type":"debug","z":"cac80ffbe4fd7cdf","name":"Output","active":true,"tosidebar":true,"console":false,"tostatus":true,"complete":"payload","targetType":"msg","statusVal":"payload","statusType":"auto","x":1030,"y":340,"wires":[]},{"id":"a2413759ab4504eb","type":"comment","z":"cac80ffbe4fd7cdf","name":"NoNc Relay ","info":"","x":110,"y":40,"wires":[]}]
```

This example demonstrates No Nc functionality - The default status of NO node is Normally Open, ie it blocks all messages passing through it unless explicitly enabled and NC node is Normally Closed, ie it allows all messages to pass through it unless its explicitly set to disable.

### Notes

* The node checks the message topic and payload to determine whether to enable or disable message forwarding. 
* The node's status reflects its current state (enabled/disabled).
* This node operates as latched relay, ie it maintains its current state unless explicitely changed by user

### Author
* Harshad Joshi @ Bufferstack.IO Analytics Technology LLP, Pune

### Contributing

We welcome contributions to this project. Feel free to submit pull requests with improvements or bug fixes.

