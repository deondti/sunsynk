import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.dfcac6be.js";const u=JSON.parse('{"title":"Home Assistant Templates","description":"","frontmatter":{},"headers":[],"relativePath":"examples/templates.md","filePath":"examples/templates.md","lastUpdated":1694145607000}'),p={name:"examples/templates.md"},e=l(`<h1 id="home-assistant-templates" tabindex="-1">Home Assistant Templates <a class="header-anchor" href="#home-assistant-templates" aria-label="Permalink to &quot;Home Assistant Templates&quot;">​</a></h1><p>You can view sensor values under Home Assistant using the &quot;Developer Tools&quot; -&gt; Templates tab.</p><details class="details custom-block"><summary>Example template</summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">Essentials</span><span style="color:#E1E4E8;">:     {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_essential_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#85E89D;">Non-Essentials</span><span style="color:#E1E4E8;">: {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_non_essential_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#85E89D;">Grid CT</span><span style="color:#E1E4E8;">:        {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_ct_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">Battery</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_battery_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_battery_voltage&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">V</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_battery_current&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Amps</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_battery_temperature&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">°C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">Grid Power</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_frequency&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Hz</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_voltage&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">V</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_current&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Amp</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">CT {{ states(&quot;sensor.ss_grid_ct_power&quot;) }} W</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Inverter</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_inverter_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_inverter_frequency&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Hz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">Load</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_essential_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_frequency&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Hz</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_voltage&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">V</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_grid_current&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">Amp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#9ECBFF;">PV1</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_pv1_power&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">W</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_pv1_voltage&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">V</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{ </span><span style="color:#9ECBFF;">states(&quot;sensor.ss_pv1_current&quot;)</span><span style="color:#E1E4E8;"> }} </span><span style="color:#9ECBFF;">A</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">Essentials</span><span style="color:#24292E;">:     {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_essential_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#22863A;">Non-Essentials</span><span style="color:#24292E;">: {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_non_essential_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#22863A;">Grid CT</span><span style="color:#24292E;">:        {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_ct_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">Battery</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_battery_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_battery_voltage&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">V</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_battery_current&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Amps</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_battery_temperature&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">°C</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">Grid Power</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_frequency&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Hz</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_voltage&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">V</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_current&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Amp</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">CT {{ states(&quot;sensor.ss_grid_ct_power&quot;) }} W</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Inverter</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_inverter_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_inverter_frequency&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Hz</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">Load</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_essential_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_frequency&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Hz</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_voltage&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">V</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_grid_current&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">Amp</span></span>
<span class="line"></span>
<span class="line"><span style="color:#032F62;">PV1</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_pv1_power&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">W</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_pv1_voltage&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">V</span></span>
<span class="line"><span style="color:#24292E;">  {{ </span><span style="color:#032F62;">states(&quot;sensor.ss_pv1_current&quot;)</span><span style="color:#24292E;"> }} </span><span style="color:#032F62;">A</span></span></code></pre></div></details><h2 id="esp-api-integration" tabindex="-1">ESP API integration <a class="header-anchor" href="#esp-api-integration" aria-label="Permalink to &quot;ESP API integration&quot;">​</a></h2><p>ESP (EskomSePush) allows you to fetch the loadshedding schedules in South Africa through an API.</p><p>Get your API token and area <a href="https://eskomsepush.gumroad.com/l/api" target="_blank" rel="noreferrer">here</a> and add your api token &amp; area to your secrets <code>/config/secrets.yaml</code>:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">esp_key</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">069FXXXX-1A7FXXXX-AF06XXXX-6C2EXXXX</span></span>
<span class="line"><span style="color:#85E89D;">esp_area</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">jhbcitypower2-2-xxxxxx</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">esp_key</span><span style="color:#24292E;">: </span><span style="color:#032F62;">069FXXXX-1A7FXXXX-AF06XXXX-6C2EXXXX</span></span>
<span class="line"><span style="color:#22863A;">esp_area</span><span style="color:#24292E;">: </span><span style="color:#032F62;">jhbcitypower2-2-xxxxxx</span></span></code></pre></div><p>The sensors can be added using <a href="./overview#config-packages">config packages</a></p><details class="details custom-block"><summary>Config package - <code>/config/packages/esp.yaml</code></summary><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">rest</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">resource</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://developer.sepush.co.za/business/2.0/area&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">scan_interval</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;01:00:00&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;"># RATE LIMIT!</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">headers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">Token</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">!secret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">esp_key</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">params</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">id</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">!secret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">esp_area</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">sensor</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">EskomSePush</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">force_update</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;OK&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">json_attributes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">events</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">info</span></span>
<span class="line"><span style="color:#E1E4E8;">          - </span><span style="color:#9ECBFF;">schedule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">sensor</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">#EskomSePush sensor</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">platform</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">EskomSePushAllowance</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">resource</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://developer.sepush.co.za/business/2.0/api_allowance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">headers</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">Token</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">!secret</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">esp_key</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">json_attributes_path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;$.allowance&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">json_attributes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">count</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">limit</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">type</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;OK&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">scan_interval</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">3600</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;"># template sensors based on ESP above</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">platform</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">template</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">sensors</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">next_loadshedding_time</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next loadshedding time</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">device_class</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">timestamp</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next_Loadshedding_Time</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].start }}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">next_loadshedding_event</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next loadshedding event</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next_Loadshedding_Event</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].note }}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">next_loadshedding_time_end</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next loadshedding end time</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next_Loadshedding_End_Time</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">device_class</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">timestamp</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].end }}&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">next_loadshedding_duration</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next loadshedding duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Next_Loadshedding_Duration</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unit_of_measurement</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mins</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time_end.state) | int - as_timestamp(states.sensor.next_loadshedding_time.state) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">time_till_loadshedding</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Time until next loadshedding</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Time_Until_Next_Loadshedding</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unit_of_measurement</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mins</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time.state) | int - as_timestamp(now()) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">time_till_loadshedding_ends</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Time until next loadshedding ends</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Time_Until_Next_Loadshedding_ends</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unit_of_measurement</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mins</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time_end.state) | int - as_timestamp(now()) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">eskomsepush_calls_remaining</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">EskomSePush API Calls remaining</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">EskomSePush_calls_remaining</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{{ int(state_attr(&quot;sensor.eskomsepushallowance&quot;,&quot;limit&quot;)) - int(state_attr(&quot;sensor.eskomsepushallowance&quot;,&quot;count&quot;)) }}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">loadshedding_slot_forecast</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Loadshedding slot forecast</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">unique_id</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">loadshedding_slot_forecast</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">          {%- for event in states[&#39;sensor.eskomsepush&#39;].attributes.events -%} {{</span></span>
<span class="line"><span style="color:#9ECBFF;">          as_timestamp(event[&#39;start&#39;]) | timestamp_custom(&#39;%a %d %b:&#39;) }} {{ event[&#39;note&#39;] }} {{</span></span>
<span class="line"><span style="color:#9ECBFF;">          as_timestamp(event[&#39;start&#39;]) | timestamp_custom(&#39;from %H:%M&#39;) }} to {{</span></span>
<span class="line"><span style="color:#9ECBFF;">          as_timestamp(event[&#39;end&#39;]) | timestamp_custom(&#39;%H:%M&#39;) }}</span></span>
<span class="line"><span style="color:#9ECBFF;">          {{- &#39;\\n&#39; -}} {%- endfor -%}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#85E89D;">binary_sensor</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">platform</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">template</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">sensors</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">loadshedding_active</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">friendly_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Loadshedding active&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">device_class</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">problem</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">value_template</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            {% if (int(states(&#39;sensor.time_till_loadshedding&#39;)) &lt;= 0 ) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">             True</span></span>
<span class="line"><span style="color:#9ECBFF;">            {% else %}</span></span>
<span class="line"><span style="color:#9ECBFF;">             False</span></span>
<span class="line"><span style="color:#9ECBFF;">            {% endif %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">rest</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">resource</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://developer.sepush.co.za/business/2.0/area&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">scan_interval</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;01:00:00&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;"># RATE LIMIT!</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">headers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">Token</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">!secret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">esp_key</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">params</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">id</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">!secret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">esp_area</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">sensor</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">EskomSePush</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">force_update</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;OK&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">json_attributes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">events</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">info</span></span>
<span class="line"><span style="color:#24292E;">          - </span><span style="color:#032F62;">schedule</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">sensor</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">#EskomSePush sensor</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">platform</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">EskomSePushAllowance</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">resource</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://developer.sepush.co.za/business/2.0/api_allowance&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">headers</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">Token</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">!secret</span><span style="color:#24292E;"> </span><span style="color:#032F62;">esp_key</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">json_attributes_path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;$.allowance&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">json_attributes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">count</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">limit</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">type</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;OK&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">scan_interval</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">3600</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;"># template sensors based on ESP above</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">platform</span><span style="color:#24292E;">: </span><span style="color:#032F62;">template</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">sensors</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">next_loadshedding_time</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next loadshedding time</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">device_class</span><span style="color:#24292E;">: </span><span style="color:#032F62;">timestamp</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next_Loadshedding_Time</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].start }}&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">next_loadshedding_event</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next loadshedding event</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next_Loadshedding_Event</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].note }}&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">next_loadshedding_time_end</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next loadshedding end time</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next_Loadshedding_End_Time</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">device_class</span><span style="color:#24292E;">: </span><span style="color:#032F62;">timestamp</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;{{ state_attr(&#39;sensor.eskomsepush&#39;,&#39;events&#39;)[0].end }}&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">next_loadshedding_duration</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next loadshedding duration</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Next_Loadshedding_Duration</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unit_of_measurement</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mins</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time_end.state) | int - as_timestamp(states.sensor.next_loadshedding_time.state) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">time_till_loadshedding</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Time until next loadshedding</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Time_Until_Next_Loadshedding</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unit_of_measurement</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mins</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time.state) | int - as_timestamp(now()) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">time_till_loadshedding_ends</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Time until next loadshedding ends</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Time_Until_Next_Loadshedding_ends</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unit_of_measurement</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mins</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{{ [( as_timestamp(states.sensor.next_loadshedding_time_end.state) | int - as_timestamp(now()) | int ) / 60,-1] | max | round(0) }}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">eskomsepush_calls_remaining</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">EskomSePush API Calls remaining</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">EskomSePush_calls_remaining</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{{ int(state_attr(&quot;sensor.eskomsepushallowance&quot;,&quot;limit&quot;)) - int(state_attr(&quot;sensor.eskomsepushallowance&quot;,&quot;count&quot;)) }}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">loadshedding_slot_forecast</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Loadshedding slot forecast</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">unique_id</span><span style="color:#24292E;">: </span><span style="color:#032F62;">loadshedding_slot_forecast</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#032F62;">          {%- for event in states[&#39;sensor.eskomsepush&#39;].attributes.events -%} {{</span></span>
<span class="line"><span style="color:#032F62;">          as_timestamp(event[&#39;start&#39;]) | timestamp_custom(&#39;%a %d %b:&#39;) }} {{ event[&#39;note&#39;] }} {{</span></span>
<span class="line"><span style="color:#032F62;">          as_timestamp(event[&#39;start&#39;]) | timestamp_custom(&#39;from %H:%M&#39;) }} to {{</span></span>
<span class="line"><span style="color:#032F62;">          as_timestamp(event[&#39;end&#39;]) | timestamp_custom(&#39;%H:%M&#39;) }}</span></span>
<span class="line"><span style="color:#032F62;">          {{- &#39;\\n&#39; -}} {%- endfor -%}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;">binary_sensor</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">platform</span><span style="color:#24292E;">: </span><span style="color:#032F62;">template</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">sensors</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">loadshedding_active</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">friendly_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Loadshedding active&quot;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">device_class</span><span style="color:#24292E;">: </span><span style="color:#032F62;">problem</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">value_template</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#032F62;">            {% if (int(states(&#39;sensor.time_till_loadshedding&#39;)) &lt;= 0 ) %}</span></span>
<span class="line"><span style="color:#032F62;">             True</span></span>
<span class="line"><span style="color:#032F62;">            {% else %}</span></span>
<span class="line"><span style="color:#032F62;">             False</span></span>
<span class="line"><span style="color:#032F62;">            {% endif %}</span></span></code></pre></div></details><details class="details custom-block"><summary>Lovelace config</summary><p>Add a custom card to Lovelace and use the following yaml</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">vertical-stack</span></span>
<span class="line"><span style="color:#85E89D;">cards</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">custom:mushroom-chips-card</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">chips</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">entity</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">entity</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">binary_sensor.load_shedding</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">entity</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">entity</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">sensor.next_loadshedding_event</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">template</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;{{state_attr(entity, &quot;count&quot;)}}/{{state_attr(entity, &quot;limit&quot;)}}&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">entity</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">sensor.eskomsepushallowance</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">icon</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">mdi:api</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">tap_action</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#85E89D;">action</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">more-info</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">alignment</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">center</span></span>
<span class="line"><span style="color:#E1E4E8;">  - </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">markdown</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">content</span><span style="color:#E1E4E8;">: </span><span style="color:#F97583;">|</span><span style="color:#79B8FF;">2</span><span style="color:#F97583;">-</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set active = is_state(&quot;binary_sensor.loadshedding_active&quot;, &quot;on&quot;) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set stage = states(&quot;sensor.next_loadshedding_event&quot;) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set start_time = states(&quot;sensor.next_loadshedding_time&quot;) | as_timestamp | int %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set end_time = states(&quot;sensor.next_loadshedding_time_end&quot;) | as_timestamp | int %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set starts_min = ( start_time | int - as_timestamp(now()) | int ) // 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- set ends_min = ( end_time | int - as_timestamp(now())) | int // 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- if stage %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- if not bool(active) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- set mins = starts_min % 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- set hrs = starts_min // 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- set alert = &quot;Load Shedding starts in {h}h {m}m ({next})&quot;.format(m=mins, h=hrs, next=start_time | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- if hrs&gt;12 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;ha-alert alert-type=&quot;success&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- elif hrs &gt; 1 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;ha-alert alert-type=&quot;warning&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- else %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;ha-alert alert-type=&quot;error&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">                {%- endif %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- else %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  {%- set mins = ends_min % 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  {%- set hrs = ends_min // 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  {%- set alert = &quot;Load Shedding ends in {h}h {m}m ({next})&quot;.format(m=mins, h=hrs, next=end_time | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">                  &lt;ha-alert alert-type=&quot;error&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- endif %}</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- else %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- set mins = starts_min % 60 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- set hrs = starts_min // 60 % 24 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- set days = starts_min // 1440 %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- if (start_time == 0 or end_time == 0) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- set alert = &quot;No Load Shedding&quot; %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- else %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- set alert = &quot;Stage {stage} starts in {d}d {h}h {m}m ({next})&quot;.format(stage=stage, d=days, m=mins, h=hrs, next=as_timestamp(start_time) | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              {%- endif %}</span></span>
<span class="line"><span style="color:#9ECBFF;">              &lt;ha-alert alert-type=&quot;success&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#9ECBFF;">            {%- endif %}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">vertical-stack</span></span>
<span class="line"><span style="color:#22863A;">cards</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">custom:mushroom-chips-card</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">chips</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">entity</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">entity</span><span style="color:#24292E;">: </span><span style="color:#032F62;">binary_sensor.load_shedding</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">entity</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">entity</span><span style="color:#24292E;">: </span><span style="color:#032F62;">sensor.next_loadshedding_event</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&#39;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">template</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;{{state_attr(entity, &quot;count&quot;)}}/{{state_attr(entity, &quot;limit&quot;)}}&#39;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">entity</span><span style="color:#24292E;">: </span><span style="color:#032F62;">sensor.eskomsepushallowance</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">icon</span><span style="color:#24292E;">: </span><span style="color:#032F62;">mdi:api</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">tap_action</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#22863A;">action</span><span style="color:#24292E;">: </span><span style="color:#032F62;">more-info</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">alignment</span><span style="color:#24292E;">: </span><span style="color:#032F62;">center</span></span>
<span class="line"><span style="color:#24292E;">  - </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">markdown</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">content</span><span style="color:#24292E;">: </span><span style="color:#D73A49;">|</span><span style="color:#005CC5;">2</span><span style="color:#D73A49;">-</span></span>
<span class="line"><span style="color:#032F62;">            {%- set active = is_state(&quot;binary_sensor.loadshedding_active&quot;, &quot;on&quot;) %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- set stage = states(&quot;sensor.next_loadshedding_event&quot;) %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- set start_time = states(&quot;sensor.next_loadshedding_time&quot;) | as_timestamp | int %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- set end_time = states(&quot;sensor.next_loadshedding_time_end&quot;) | as_timestamp | int %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- set starts_min = ( start_time | int - as_timestamp(now()) | int ) // 60 %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- set ends_min = ( end_time | int - as_timestamp(now())) | int // 60 %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- if stage %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- if not bool(active) %}</span></span>
<span class="line"><span style="color:#032F62;">                {%- set mins = starts_min % 60 %}</span></span>
<span class="line"><span style="color:#032F62;">                {%- set hrs = starts_min // 60 %}</span></span>
<span class="line"><span style="color:#032F62;">                {%- set alert = &quot;Load Shedding starts in {h}h {m}m ({next})&quot;.format(m=mins, h=hrs, next=start_time | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#032F62;">                {%- if hrs&gt;12 %}</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;ha-alert alert-type=&quot;success&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#032F62;">                {%- elif hrs &gt; 1 %}</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;ha-alert alert-type=&quot;warning&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#032F62;">                {%- else %}</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;ha-alert alert-type=&quot;error&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#032F62;">                {%- endif %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- else %}</span></span>
<span class="line"><span style="color:#032F62;">                  {%- set mins = ends_min % 60 %}</span></span>
<span class="line"><span style="color:#032F62;">                  {%- set hrs = ends_min // 60 %}</span></span>
<span class="line"><span style="color:#032F62;">                  {%- set alert = &quot;Load Shedding ends in {h}h {m}m ({next})&quot;.format(m=mins, h=hrs, next=end_time | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#032F62;">                  &lt;ha-alert alert-type=&quot;error&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#032F62;">              {%- endif %}</span></span>
<span class="line"><span style="color:#032F62;">            {%- else %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- set mins = starts_min % 60 %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- set hrs = starts_min // 60 % 24 %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- set days = starts_min // 1440 %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- if (start_time == 0 or end_time == 0) %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- set alert = &quot;No Load Shedding&quot; %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- else %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- set alert = &quot;Stage {stage} starts in {d}d {h}h {m}m ({next})&quot;.format(stage=stage, d=days, m=mins, h=hrs, next=as_timestamp(start_time) | timestamp_custom(&quot;%H:%M&quot;, True)) %}</span></span>
<span class="line"><span style="color:#032F62;">              {%- endif %}</span></span>
<span class="line"><span style="color:#032F62;">              &lt;ha-alert alert-type=&quot;success&quot;&gt;{{ alert }}&lt;/ha-alert&gt;</span></span>
<span class="line"><span style="color:#032F62;">            {%- endif %}</span></span></code></pre></div></details>`,10),o=[e];function t(c,r,E,y,i,F){return n(),a("div",null,o)}const _=s(p,[["render",t]]);export{u as __pageData,_ as default};
