import{_ as s,o as e,c as a,Q as o}from"./chunks/framework.dfcac6be.js";const E=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"reference/multi-options.md","filePath":"reference/multi-options.md","lastUpdated":1694145607000}'),t={name:"reference/multi-options.md"},n=o(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h1><h2 id="driver" tabindex="-1">Driver <a class="header-anchor" href="#driver" aria-label="Permalink to &quot;Driver&quot;">​</a></h2><p>The <code>DRIVER</code> can be <strong>umodbus</strong> or <strong>pymodbus</strong> or <strong>solarman</strong>.</p><p>The <code>READ_SENSOR_BATCH_SIZE</code> option allows you to customize how many registers may be read in a single request. Devices like the USR only allows 8 registers to be read. When using mbusd this can be much higher.</p><p>The <code>READ_ALLOW_GAP</code> option allows you to set the amount of gap between requested registers. In some cases it makes more sense to read a couple of additional registers in 1 or two requests, than trying to read exactly what you are looking for in multiple requests.</p><h2 id="inverters" tabindex="-1">Inverters <a class="header-anchor" href="#inverters" aria-label="Permalink to &quot;Inverters&quot;">​</a></h2><p>The <code>INVERTERS</code> option contains a list of inverters</p><p>The following options are required per inverter:</p><ul><li><p><code>SERIAL_NR</code></p><p>The serial number of your inverter. When you start the add-on the connected serial will be displayed in the log.</p><p>The add-on will not run if the expected/configured serial number is not found.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This must be a string. So if your serial is a number only surround it with quotes <code>&#39;1000&#39;</code></p></div></li><li><p><code>HA_PREFIX</code></p><p>A prefix to add to all the MQTT Discovered Home Assistant Sensors (default: SS).</p></li><li><p><code>MODBUS_ID</code></p><p>The Modbus Server ID is a number typically 1. Might be different in multi-inverter setups.</p></li><li><p><code>DONGLE_SERIAL_NUMBER</code></p><p>Only required for the <strong>solarman</strong> driver.</p></li><li><p><code>PORT</code></p><p>The port used for communications. Format depends on the driver. See <a href="#port">Port</a></p></li></ul><h3 id="port" tabindex="-1">Port <a class="header-anchor" href="#port" aria-label="Permalink to &quot;Port&quot;">​</a></h3><p>The port for RS485 communications, which can be either:</p><ul><li><p>A <code>tcp://</code> port toward a Modbus TCP gateway. Either mbusd or one of the hardware options</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">INVERTERS</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">PORT</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tcp://homeassistant.local:502</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">INVERTERS</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">PORT</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tcp://homeassistant.local:502</span></span></code></pre></div><p>A <code>serial-tcp://</code> port is also suported and can be used depending on your gateway.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>This repository contains a <a href="./../guide/mbusd">mbusd</a> TCP gateway add-on that can be used for this purpose.</p><p>If you have any issues connecting directly to a serial port, please try mbusd - also see <a href="https://github.com/kellerza/sunsynk/issues/131" target="_blank" rel="noreferrer">this</a> issue</p></div></li><li><p>A serial port. List of available ports under <em>Supervisor</em> -&gt; <em>System</em> tab -&gt; <em>Host</em> card <strong>⋮</strong> -&gt; <em>Hardware</em> (You can also use the text in the DEBUG_PORT as reference)</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">DRIVER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">pymodbus</span></span>
<span class="line"><span style="color:#85E89D;">INVERTERS</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">PORT</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">/dev/ttyUSB0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">DRIVER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">pymodbus</span></span>
<span class="line"><span style="color:#22863A;">INVERTERS</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">PORT</span><span style="color:#24292E;">: </span><span style="color:#032F62;">/dev/ttyUSB0</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>umodbus requires a <code>serial://</code> prefix</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">DRIVER</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">umodbus</span></span>
<span class="line"><span style="color:#85E89D;">INVERTERS</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">PORT</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">serial:///dev/ttyUSB0</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">DRIVER</span><span style="color:#24292E;">: </span><span style="color:#032F62;">umodbus</span></span>
<span class="line"><span style="color:#22863A;">INVERTERS</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">PORT</span><span style="color:#24292E;">: </span><span style="color:#032F62;">serial:///dev/ttyUSB0</span></span></code></pre></div></div></li><li><p>For the first inverter in the list, you can use an empty string</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">INVERTERS</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">PORT</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">INVERTERS</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">PORT</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;&quot;</span></span></code></pre></div><p>The serial port under <code>DEBUG_DEVICE</code> will be used (located at the bottom of you config)*</p></li><li><p>umodbus support an RFC2217 compatible port (e.g. <code>tcp://homeassistant.local:6610</code>)</p></li></ul><h2 id="sensors" tabindex="-1">Sensors <a class="header-anchor" href="#sensors" aria-label="Permalink to &quot;Sensors&quot;">​</a></h2><p>The <code>SENSOR_DEFINITION</code> option allows you to select between <code>single-phase</code> and <code>three-phase</code> sensor definitions.</p><p>The <code>SENSORS</code> accepts a list of sensors to poll. Refer to the <a href="./definitions">single</a> and <a href="./definitions3ph">three</a> docs</p><p>The <code>SENSORS_FIRST_INVERTER</code> accepts a list of sensors that will only be applied to the first inverter</p><h2 id="schedules" tabindex="-1">Schedules <a class="header-anchor" href="#schedules" aria-label="Permalink to &quot;Schedules&quot;">​</a></h2><p>Refer to <a href="./schedules">Schedules</a></p><h2 id="home-assistant-discovery-options" tabindex="-1">Home Assistant Discovery options <a class="header-anchor" href="#home-assistant-discovery-options" aria-label="Permalink to &quot;Home Assistant Discovery options&quot;">​</a></h2><p>The per-inverter <code>HA_PREFIX</code> will be used for the Device (the Inverter) name and the prefix to all the entity Ids in Home Assistant</p><p>The <code>MANUFACTURER</code> option allows you to rename the inverter manufacturer that will be displayed on the Home Assistant device. It does not have to be Sunsynk 😉</p><p>The <code>NUMBER_ENTITY_MODE</code> option allows you to change how read/write sensors which present as number entities in Home Assistant behave. The default display mode is <code>auto</code>. This setting controls how the number entity should be displayed in the UI. Can be set to <code>box</code> or <code>slider</code> to force a display mode.</p><h2 id="mqtt-settings" tabindex="-1">MQTT Settings <a class="header-anchor" href="#mqtt-settings" aria-label="Permalink to &quot;MQTT Settings&quot;">​</a></h2><p>You will need a working MQTT server since all values will be sent via MQTT toward Home Assistant.</p><p>The default configuration assumes the Mosquitto broker add-on and you simply have to fill in your password.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">MQTT_HOST</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">core-mosquitto</span></span>
<span class="line"><span style="color:#85E89D;">MQTT_PORT</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1883</span></span>
<span class="line"><span style="color:#85E89D;">MQTT_USERNAME</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">hass</span></span>
<span class="line"><span style="color:#85E89D;">MQTT_PASSWORD</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">my-secure-password</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">MQTT_HOST</span><span style="color:#24292E;">: </span><span style="color:#032F62;">core-mosquitto</span></span>
<span class="line"><span style="color:#22863A;">MQTT_PORT</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">1883</span></span>
<span class="line"><span style="color:#22863A;">MQTT_USERNAME</span><span style="color:#24292E;">: </span><span style="color:#032F62;">hass</span></span>
<span class="line"><span style="color:#22863A;">MQTT_PASSWORD</span><span style="color:#24292E;">: </span><span style="color:#032F62;">my-secure-password</span></span></code></pre></div><h2 id="debug-options" tabindex="-1">Debug options <a class="header-anchor" href="#debug-options" aria-label="Permalink to &quot;Debug options&quot;">​</a></h2><ul><li><p><code>DEBUG</code></p><p>The values received will continuously be printed to the add-on&#39;s log. This will confirm that you receive values.</p><table><thead><tr><th>Value</th><th>Description</th></tr></thead><tbody><tr><td><code>0</code></td><td>No debug messages.</td></tr><tr><td><code>1</code></td><td>Messages for filter changes.</td></tr><tr><td><code>2</code></td><td>Debug level logging.</td></tr></tbody></table></li><li><p><code>DEBUG_DEVICE</code> allows you to select the USB port in the UI. It will only be used if <code>PORT</code> is empty. But you have to select something.</p></li></ul>`,28),l=[n];function p(r,i,c,d,h,u){return e(),a("div",null,l)}const m=s(t,[["render",p]]);export{E as __pageData,m as default};
