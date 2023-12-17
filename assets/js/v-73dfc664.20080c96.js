"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[60920],{239765:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n=JSON.parse('{"key":"v-73dfc664","path":"/devices/SNZB-06P.html","title":"SONOFF SNZB-06P control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF SNZB-06P control via MQTT","description":"Integrate your SONOFF SNZB-06P via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2023-09-28T10:54:36.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Sensitivity","slug":"sensitivity","link":"#sensitivity","children":[]},{"level":3,"title":"Detection duration","slug":"detection-duration","link":"#detection-duration","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1702801388000},"filePathRelative":"devices/SNZB-06P.md"}')},702900:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var n=i(166252);const a=(0,n._)("h1",{id:"sonoff-snzb-06p",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#sonoff-snzb-06p","aria-hidden":"true"},"#"),(0,n.Uk)(" SONOFF SNZB-06P")],-1),o=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th"),(0,n._)("th")])],-1),s=(0,n._)("tr",null,[(0,n._)("td",null,"Model"),(0,n._)("td",null,"SNZB-06P")],-1),d=(0,n._)("td",null,"Vendor",-1),c=(0,n._)("tr",null,[(0,n._)("td",null,"Description"),(0,n._)("td",null,"Zigbee occupancy sensor")],-1),l=(0,n._)("tr",null,[(0,n._)("td",null,"Exposes"),(0,n._)("td",null,"occupancy, linkquality")],-1),r=(0,n._)("tr",null,[(0,n._)("td",null,"Picture"),(0,n._)("td",null,[(0,n._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SNZB-06P.jpg",alt:"SONOFF SNZB-06P"})])],-1),u=(0,n.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p>Firmware 1.0.3 can be misbehaving, as of December 2023 upgrade to 1.0.5 is recommended.</p><p>Additional settings currently not exposed in Z2M can be adjusted via the Dev console:</p><h3 id="sensitivity" tabindex="-1"><a class="header-anchor" href="#sensitivity" aria-hidden="true">#</a> Sensitivity</h3><p>Select the msOccupancySensing Cluster, ultrasonicUToOThreshold Attribute is the sensitivity setting.</p><p>1 represents low sensitivity with a detection distance of 2.5m.<br> 2 represents medium sensitivity with a detection distance of 3.5m.<br> 3 represents high sensitivity with a detection distance of 4m.</p><h3 id="detection-duration" tabindex="-1"><a class="header-anchor" href="#detection-duration" aria-hidden="true">#</a> Detection duration</h3><p>Select the msOccupancySensing Cluster, ultrasonicOToUDelay is the detection duration setting.</p><p>On firmware versions lower than 1.0.5, the shortest detection duration is 30 (seconds), otherwise, the sensor will stay permanently on detected status.</p><p>Firmware version 1.0.5 and above allows setting the shortest detection duration to 15 (seconds).</p>',10),h={href:"https://sonoff.tech/product-review/tutorial/snzb-06p-firmware-upgrade-and-home-assistant-operation-guide/",target:"_blank",rel:"noopener noreferrer"},p=(0,n._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,n.Uk)(" OTA updates")],-1),y=(0,n._)("h2",{id:"options",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,n.Uk)(" Options")],-1),f=(0,n.uE)('<ul><li><code>no_occupancy_since</code>: Sends a message after the last time no occupancy (occupancy: false) was detected. When setting this for example to [10, 60] a <code>{&quot;no_occupancy_since&quot;: 10}</code> will be send after 10 seconds and a <code>{&quot;no_occupancy_since&quot;: 60}</code> after 60 seconds. The value must be a list of [object Object].</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary" aria-hidden="true">#</a> Occupancy (binary)</h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',6),v={},m=(0,i(983744).Z)(v,[["render",function(e,t){const i=(0,n.up)("RouterLink"),v=(0,n.up)("ExternalLinkIcon");return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.kq)(" !!!! "),(0,n.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,n.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,n.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,n.kq)(" !!!! "),a,(0,n._)("table",null,[o,(0,n._)("tbody",null,[s,(0,n._)("tr",null,[d,(0,n._)("td",null,[(0,n.Wm)(i,{to:"/supported-devices/#v=SONOFF"},{default:(0,n.w5)((()=>[(0,n.Uk)("SONOFF")])),_:1})])]),c,l,r])]),(0,n.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),u,(0,n._)("p",null,[(0,n._)("a",h,[(0,n.Uk)("Source - Sonoff documentation"),(0,n.Wm)(v)])]),(0,n.kq)(" Notes END: Do not edit below this line "),p,(0,n._)("p",null,[(0,n.Uk)("This device supports OTA updates, for more information see "),(0,n.Wm)(i,{to:"/guide/usage/ota_updates.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("OTA updates")])),_:1}),(0,n.Uk)(".")]),y,(0,n._)("p",null,[(0,n._)("em",null,[(0,n.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.w5)((()=>[(0,n.Uk)("How to use device type specific configuration")])),_:1})])]),f])}]])}}]);