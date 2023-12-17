"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[6366],{777444:(e,t,o)=>{o.r(t),o.d(t,{data:()=>r});const r=JSON.parse('{"key":"v-3efabcc8","path":"/devices/TS011F_with_threshold.html","title":"TuYa TS011F_with_threshold control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"TuYa TS011F_with_threshold control via MQTT","description":"Integrate your TuYa TS011F_with_threshold via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-04-30T17:38:24.000Z"},"excerpt":"","headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power outage memory (enum)","slug":"power-outage-memory-enum","link":"#power-outage-memory-enum","children":[]},{"level":3,"title":"Indicator mode (enum)","slug":"indicator-mode-enum","link":"#indicator-mode-enum","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Voltage (numeric)","slug":"voltage-numeric","link":"#voltage-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Temperature (numeric)","slug":"temperature-numeric","link":"#temperature-numeric","children":[]},{"level":3,"title":"Temperature threshold (numeric)","slug":"temperature-threshold-numeric","link":"#temperature-threshold-numeric","children":[]},{"level":3,"title":"Temperature breaker (binary)","slug":"temperature-breaker-binary","link":"#temperature-breaker-binary","children":[]},{"level":3,"title":"Power threshold (numeric)","slug":"power-threshold-numeric","link":"#power-threshold-numeric","children":[]},{"level":3,"title":"Power breaker (binary)","slug":"power-breaker-binary","link":"#power-breaker-binary","children":[]},{"level":3,"title":"Over current threshold (numeric)","slug":"over-current-threshold-numeric","link":"#over-current-threshold-numeric","children":[]},{"level":3,"title":"Over current breaker (binary)","slug":"over-current-breaker-binary","link":"#over-current-breaker-binary","children":[]},{"level":3,"title":"Over voltage threshold (numeric)","slug":"over-voltage-threshold-numeric","link":"#over-voltage-threshold-numeric","children":[]},{"level":3,"title":"Over voltage breaker (binary)","slug":"over-voltage-breaker-binary","link":"#over-voltage-breaker-binary","children":[]},{"level":3,"title":"Under voltage threshold (numeric)","slug":"under-voltage-threshold-numeric","link":"#under-voltage-threshold-numeric","children":[]},{"level":3,"title":"Under voltage breaker (binary)","slug":"under-voltage-breaker-binary","link":"#under-voltage-breaker-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702801388000},"filePathRelative":"devices/TS011F_with_threshold.md"}')},602570:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var r=o(166252);const a=(0,r._)("h1",{id:"tuya-ts011f-with-threshold",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#tuya-ts011f-with-threshold","aria-hidden":"true"},"#"),(0,r.Uk)(" TuYa TS011F_with_threshold")],-1),i=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th"),(0,r._)("th")])],-1),d=(0,r._)("tr",null,[(0,r._)("td",null,"Model"),(0,r._)("td",null,"TS011F_with_threshold")],-1),c=(0,r._)("td",null,"Vendor",-1),l=(0,r._)("tr",null,[(0,r._)("td",null,"Description"),(0,r._)("td",null,"Din rail switch with power monitoring and threshold settings")],-1),n=(0,r._)("tr",null,[(0,r._)("td",null,"Exposes"),(0,r._)("td",null,"switch (state), power_outage_memory, indicator_mode, power, current, voltage, energy, temperature, temperature_threshold, temperature_breaker, power_threshold, power_breaker, over_current_threshold, over_current_breaker, over_voltage_threshold, over_voltage_breaker, under_voltage_threshold, under_voltage_breaker, linkquality")],-1),u=(0,r._)("tr",null,[(0,r._)("td",null,"Picture"),(0,r._)("td",null,[(0,r._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/TS011F_with_threshold.jpg",alt:"TuYa TS011F_with_threshold"})])],-1),s=(0,r._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,r.Uk)(" OTA updates")],-1),h=(0,r._)("h2",{id:"options",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,r.Uk)(" Options")],-1),p=(0,r.uE)('<ul><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_precision</code>: Number of digits after decimal point for voltage, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-outage-memory-enum" tabindex="-1"><a class="header-anchor" href="#power-outage-memory-enum" aria-hidden="true">#</a> Power outage memory (enum)</h3><p>Recover state after power outage. Value can be found in the published state on the <code>power_outage_memory</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_outage_memory&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_outage_memory&quot;: NEW_VALUE}</code>. The possible values are: <code>on</code>, <code>off</code>, <code>restore</code>.</p><h3 id="indicator-mode-enum" tabindex="-1"><a class="header-anchor" href="#indicator-mode-enum" aria-hidden="true">#</a> Indicator mode (enum)</h3><p>LED indicator mode. Value can be found in the published state on the <code>indicator_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;indicator_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;indicator_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>off/on</code>, <code>on/off</code>, <code>on</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric" aria-hidden="true">#</a> Energy (numeric)</h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="temperature-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-threshold-numeric" aria-hidden="true">#</a> Temperature threshold (numeric)</h3><p>High temperature threshold. Value can be found in the published state on the <code>temperature_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>40</code> and the maximum value is <code>100</code>. The unit of this value is <code>*C</code>.</p><h3 id="temperature-breaker-binary" tabindex="-1"><a class="header-anchor" href="#temperature-breaker-binary" aria-hidden="true">#</a> Temperature breaker (binary)</h3><p>High temperature breaker. Value can be found in the published state on the <code>temperature_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> temperature breaker is ON, if <code>OFF</code> OFF.</p><h3 id="power-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#power-threshold-numeric" aria-hidden="true">#</a> Power threshold (numeric)</h3><p>High power threshold. Value can be found in the published state on the <code>power_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>26</code>. The unit of this value is <code>kW</code>.</p><h3 id="power-breaker-binary" tabindex="-1"><a class="header-anchor" href="#power-breaker-binary" aria-hidden="true">#</a> Power breaker (binary)</h3><p>High power breaker. Value can be found in the published state on the <code>power_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> power breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-current-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-current-threshold-numeric" aria-hidden="true">#</a> Over current threshold (numeric)</h3><p>Over-current threshold. Value can be found in the published state on the <code>over_current_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>64</code>. The unit of this value is <code>A</code>.</p><h3 id="over-current-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-current-breaker-binary" aria-hidden="true">#</a> Over current breaker (binary)</h3><p>Over-current breaker. Value can be found in the published state on the <code>over_current_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_current_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over current breaker is ON, if <code>OFF</code> OFF.</p><h3 id="over-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#over-voltage-threshold-numeric" aria-hidden="true">#</a> Over voltage threshold (numeric)</h3><p>Over-voltage threshold. Value can be found in the published state on the <code>over_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>220</code> and the maximum value is <code>265</code>. The unit of this value is <code>V</code>.</p><h3 id="over-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#over-voltage-breaker-binary" aria-hidden="true">#</a> Over voltage breaker (binary)</h3><p>Over-voltage breaker. Value can be found in the published state on the <code>over_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;over_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> over voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="under-voltage-threshold-numeric" tabindex="-1"><a class="header-anchor" href="#under-voltage-threshold-numeric" aria-hidden="true">#</a> Under voltage threshold (numeric)</h3><p>Under-voltage threshold. Value can be found in the published state on the <code>under_voltage_threshold</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_threshold&quot;: NEW_VALUE}</code>. The minimal value is <code>76</code> and the maximum value is <code>240</code>. The unit of this value is <code>V</code>.</p><h3 id="under-voltage-breaker-binary" tabindex="-1"><a class="header-anchor" href="#under-voltage-breaker-binary" aria-hidden="true">#</a> Under voltage breaker (binary)</h3><p>Under-voltage breaker. Value can be found in the published state on the <code>under_voltage_breaker</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;under_voltage_breaker&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> under voltage breaker is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',40),m={},b=(0,o(983744).Z)(m,[["render",function(e,t){const o=(0,r.up)("RouterLink");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r.kq)(" !!!! "),(0,r.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,r.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,r.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,r.kq)(" !!!! "),a,(0,r._)("table",null,[i,(0,r._)("tbody",null,[d,(0,r._)("tr",null,[c,(0,r._)("td",null,[(0,r.Wm)(o,{to:"/supported-devices/#v=TuYa"},{default:(0,r.w5)((()=>[(0,r.Uk)("TuYa")])),_:1})])]),l,n,u])]),(0,r.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),(0,r.kq)(" Notes END: Do not edit below this line "),s,(0,r._)("p",null,[(0,r.Uk)("This device supports OTA updates, for more information see "),(0,r.Wm)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,r.w5)((()=>[(0,r.Uk)("OTA updates")])),_:1}),(0,r.Uk)(".")]),h,(0,r._)("p",null,[(0,r._)("em",null,[(0,r.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,r.w5)((()=>[(0,r.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);