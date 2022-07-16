(this["webpackJsonppath-ladder"]=this["webpackJsonppath-ladder"]||[]).push([[0],{63:function(e,t,a){e.exports=a(76)},68:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),c=a.n(i),s=(a(68),a(7)),o=a(8),l=a(15),d=a(10),m=a(9),h=a(45),u=a(18),p=a(56),v=a(35),f=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeLadder=n.changeLadder.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(u.a,{as:v.a},r.a.createElement(u.a.Toggle,{variant:"secondary",id:"ladder-selector"},this.props.selectedLadder),r.a.createElement(u.a.Menu,null,this.props.ladders.map((function(t){return r.a.createElement(u.a.Item,{as:"button",key:t.id,value:t.id,onClick:e.changeLadder},t.id)}))))}},{key:"changeLadder",value:function(e){this.props.onLadderChange(e.target.value)}}]),a}(r.a.Component),g=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).changeLimit=n.changeLimit.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{bg:"dark",variant:"dark",className:"Header"},r.a.createElement(h.a.Brand,{href:""},"Path of Exile Ladder"),r.a.createElement(p.a,null,r.a.createElement(h.a.Text,null,"Select Ladder:\xa0"),r.a.createElement(f,{selectedLadder:this.props.selectedLadder,onLadderChange:this.props.onLadderChange,ladders:this.props.ladders})),r.a.createElement(p.a,null,r.a.createElement(h.a.Text,null,"\xa0Entries per page:\xa0"),r.a.createElement(u.a,{as:v.a},r.a.createElement(u.a.Toggle,{variant:"secondary",id:"ladder-selector"},this.props.ladderLimit),r.a.createElement(u.a.Menu,null,r.a.createElement(u.a.Item,{as:"button",key:20,value:20,onClick:this.changeLimit},"20"),r.a.createElement(u.a.Item,{as:"button",key:50,value:50,onClick:this.changeLimit},"50"),r.a.createElement(u.a.Item,{as:"button",key:100,value:100,onClick:this.changeLimit},"100")))))}},{key:"changeLimit",value:function(e){this.props.onLimitChange(e.target.value)}}]),a}(r.a.Component),y=a(59),E=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(y.a,{style:{marginBottom:"0"},variant:"dark",striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"10%"}},"Rank"),r.a.createElement("th",{style:{width:"10%"}},"Level"),r.a.createElement("th",{style:{width:"30%"}},"Character"),r.a.createElement("th",{style:{width:"20%"}},"Ascendancy"),r.a.createElement("th",{style:{width:"30%"}},"Account"))),r.a.createElement("tbody",null,this.props.entries.map((function(t){return r.a.createElement("tr",{key:t.character.name},r.a.createElement("th",null,t.rank),r.a.createElement("th",null,t.character.level),r.a.createElement("th",null,r.a.createElement("a",{href:"/#",value:t,className:"ladder-character-name text-light underline",onClick:e.selectCharacter.bind(e,t)},t.character.name)),r.a.createElement("th",null,t.character.class),r.a.createElement("th",null,r.a.createElement("a",{value:t.account.name,className:"text-light underline",target:"_blank",rel:"noopener noreferrer",href:"https://www.pathofexile.com/account/view-profile/".concat(t.account.name)},t.account.name)))}))))}},{key:"selectCharacter",value:function(e){this.props.onCharacterSelect(e.character.name,e.account.name)}}]),a}(r.a.Component),k=a(31),b=a.n(k),C=a(40),L=a(27),j=a(52),O=a(62),w=a(60),N=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.item.inventoryId.toLowerCase()+" item"+this.props.item.frameType;return" item"===e?null:r.a.createElement(O.a,{placement:"auto-end",delay:{show:100,hide:100},overlay:this.renderTooltip.bind(this),trigger:["hover","focus"]},r.a.createElement("div",{className:e},r.a.createElement(j.a,{className:"item-image",src:this.props.item.icon})))}},{key:"renderTooltip",value:function(e){return r.a.createElement(w.a,Object.assign({id:"tooltip"},e),r.a.createElement("div",{className:"item-tooltip-name"+this.props.item.frameType},""!==this.props.item.name&&this.props.item.name+"\n",this.props.item.typeLine),this.props.item.properties&&this.props.item.properties.map((function(e){if(e.values.length>0){if(0===e.displayMode)return r.a.createElement("div",{className:"item-tooltip-properties",key:e.name},e.name,": ",e.values.map((function(e,t){return 0!==t?r.a.createElement("span",null,", ",r.a.createElement("span",{key:t,className:"item-tooltip-properties"+e[1]},e[0])):r.a.createElement("span",{key:t,className:"item-tooltip-properties"+e[1]},e[0])})));if(3===e.displayMode){for(var t=e.name,a=0;a<e.values.length;a++)t=t.replace("{".concat(a,"}"),e.values[a][0]);return r.a.createElement("div",{className:"item-tooltip-properties",key:e.name},r.a.createElement("span",{className:"item-tooltip-properties"+e.values[0][1]},t))}}return r.a.createElement("div",{className:"item-tooltip-properties",key:e.name},e.name)})),this.props.item.properties&&r.a.createElement("hr",{className:"item-tooltip-divider"}),this.props.item.implicitMods&&this.props.item.implicitMods.map((function(e){return r.a.createElement("div",{className:"item-tooltip-mods",key:e},e,r.a.createElement("hr",{className:"item-tooltip-divider"}))})),this.props.item.utilityMods&&this.props.item.utilityMods.map((function(e){return r.a.createElement("div",{className:"item-tooltip-mods",key:e},e)})),this.props.item.explicitMods&&this.props.item.explicitMods.map((function(e){return r.a.createElement("div",{className:"item-tooltip-mods",key:e},e)})),this.props.item.craftedMods&&this.props.item.craftedMods.map((function(e){return r.a.createElement("div",{className:"item-tooltip-crafted-mods",key:e},e)})))}}]),a}(n.Component),x=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:e.props.items},e}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"character-items"},this.state.items.map((function(e){return"Flask"!==e.inventoryId?r.a.createElement(N,{key:e.id,item:e}):null})),r.a.createElement("div",{className:"flasks"},this.state.items.map((function(e){return"Flask"===e.inventoryId?r.a.createElement(N,{key:e.id,item:e}):null}))))}}]),a}(n.Component),P=a(61),S=a.n(P),I=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:e.props.items},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"gems"},this.state.items.map((function(t){return t.hasOwnProperty("socketedItems")&&"Belt"!==t.inventoryId?e.renderGems(t):null})))}},{key:"renderGems",value:function(e){var t=S()(e.socketedItems).groupBy(e.socketedItems,(function(t){return e.sockets[t.socket].group})).map((function(e){return e})).value();return r.a.createElement("div",{className:"gem-group"},r.a.createElement("div",{className:"gem-group-item-slot"},e.inventoryId),t.map((function(e){return r.a.createElement("div",{className:"linked-gems"},e.map((function(e){return r.a.createElement("div",{className:"gem"},r.a.createElement(j.a,{style:{width:"32px","margin-right":"5px"},src:e.icon}),e.typeLine)})))})))}}]),a}(n.Component),T=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={items:[],loaded:!1,failedToLoad:!1},e}return Object(o.a)(a,[{key:"render",value:function(){if(""===this.props.character)return null;var e=null;return e=!1===this.state.loaded?r.a.createElement("div",{style:{display:"flex",height:"inherit",justifyContent:"center",alignItems:"center",width:"540px"}},"Loading items..."):!0===this.state.failedToLoad?r.a.createElement("div",{style:{display:"flex",height:"inherit",justifyContent:"center",alignItems:"center",width:"540px"}},"Failed to load items, this account is likely private"):r.a.createElement("div",null,r.a.createElement(x,{items:this.state.items}),r.a.createElement(I,{items:this.state.items})),r.a.createElement(C.a,{style:{maxWidth:"100%",maxHeight:"100%",overflow:"auto"},show:!0,onHide:this.onClose.bind(this),dialogClassName:"character-panel"},r.a.createElement(C.a.Header,{className:"bg-dark text-light"},r.a.createElement(C.a.Title,null,this.props.character)),r.a.createElement(C.a.Body,{className:"bg-dark text-light"},e),r.a.createElement(C.a.Footer,{className:"bg-dark text-light"},r.a.createElement(L.a,{variant:"secondary",onClick:this.onClose.bind(this)},"Close")))}},{key:"onClose",value:function(e){this.setState({failedToLoad:!1,loaded:!1,items:[]}),this.props.onClose(e)}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.account!==e.account&&""!==this.props.account&&b()("https://guarded-falls-96614.herokuapp.com/https://www.pathofexile.com/character-window/get-items?accountName=".concat(this.props.account,"&character=").concat(this.props.character)).then((function(e){return e.json()})).then((function(e){e.hasOwnProperty("items")?t.setState({items:e.items,loaded:!0,failedToLoad:!1}):t.setState({failedToLoad:!0,loaded:!0})})).catch(console.log)}}]),a}(r.a.Component),M=function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"ladder-navigator"},r.a.createElement(L.a,{variant:"secondary",onClick:this.changePage.bind(this,1)},"1"),r.a.createElement(L.a,{variant:"secondary",onClick:this.changePage.bind(this,2)},"2"),r.a.createElement(L.a,{variant:"secondary",onClick:this.changePage.bind(this,3)},"3"))}},{key:"changePage",value:function(e){this.props.onPageChange(e)}}]),a}(r.a.Component),A=(a(75),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={ladders:[],selectedLadder:"Standard",entries:[],selectedCharacter:"",selectedAccount:"",currentPage:1,ladderLimit:20},n.onLadderChange=n.onLadderChange.bind(Object(l.a)(n)),n.onCharacterSelect=n.onCharacterSelect.bind(Object(l.a)(n)),n.onCloseCharacterPanel=n.onCloseCharacterPanel.bind(Object(l.a)(n)),n.onPageChange=n.onPageChange.bind(Object(l.a)(n)),n.onLimitChange=n.onLimitChange.bind(Object(l.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{ladderLimit:this.state.ladderLimit,ladders:this.state.ladders,selectedLadder:this.state.selectedLadder,onLimitChange:this.onLimitChange,onLadderChange:this.onLadderChange}),r.a.createElement(E,{entries:this.state.entries,onCharacterSelect:this.onCharacterSelect}),r.a.createElement(M,{onPageChange:this.onPageChange,currentPage:this.state.currentPage}),r.a.createElement(T,{onClose:this.onCloseCharacterPanel,account:this.state.selectedAccount,character:this.state.selectedCharacter}))}},{key:"componentDidMount",value:function(){var e=this;b()("http://api.pathofexile.com/leagues").then((function(e){return e.json()})).then((function(t){e.setState({ladders:t})})).catch(console.log),this.onLadderChange("Standard")}},{key:"onLadderChange",value:function(e){var t=this;b()("https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/".concat(e)).then((function(e){return e.json()})).then((function(e){t.setState({entries:e.entries})})).catch(console.log),this.setState({selectedLadder:e})}},{key:"onCharacterSelect",value:function(e,t){this.setState({selectedCharacter:e,selectedAccount:t})}},{key:"onCloseCharacterPanel",value:function(e){this.setState({selectedCharacter:"",selectedAccount:""})}},{key:"onPageChange",value:function(e){var t=this;b()("https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/".concat(this.state.selectedLadder,"?offset=").concat((e-1)*this.state.ladderLimit,"&limit=").concat(this.state.ladderLimit)).then((function(e){return e.json()})).then((function(a){t.setState({entries:a.entries,currentPage:e})})).catch(console.log)}},{key:"onLimitChange",value:function(e){var t=this;b()("https://guarded-falls-96614.herokuapp.com/http://api.pathofexile.com/ladders/".concat(this.state.selectedLadder,"?limit=").concat(e)).then((function(e){return e.json()})).then((function(a){t.setState({entries:a.entries,ladderLimit:e})})).catch(console.log)}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.e1759157.chunk.js.map