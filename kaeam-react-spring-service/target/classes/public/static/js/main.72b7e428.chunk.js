(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/Archemy_TM.fd822dfb.png"},40:function(e,t,a){e.exports=a(81)},50:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},78:function(e,t){var a=[{File:""},{Edit:""},{View:""},{Catalog:""},{Solution:[{Build:"/solution/build"},{Operate:"/solution/operate"},{Visualize:"/solution/visualize"}]},{Metrics:""},{Tools:""},{Scripts:""},{Help:""}],n=[{File:""},{Edit:""},{View:""},{Build:[{Elicit:"/solution/build/elicit"},{Search:"/solution/build/search"},{Discover:"/solution/build/discover"},{Reuse:"/solution/build/reuse"},{Adapt:"/solution/build/adapt"},{Deploy:"/solution/build/deploy"}]},{Operate:"/solution/operate"},{Visualize:"/solution/visualize"},{Help:""}],l=[{File:""},{Edit:""},{View:""},{Build:"/solution/build"},{Operate:"/solution/operate"},{Visualize:"/solution/visualize"},{Help:""}],c=[{File:""},{Edit:""},{View:""},{Build:"/solution/build"},{Operate:"/solution/operate"},{Visualize:"/solution/visualize"},{Help:""}];e.exports=function(e){switch(e){case"solution":case"solution/workspace":case"/solution/build":case"/solution/build/search":case"/solution/build/elicit":case"/solution/build/discover":case"/solution/build/discoverreview":case"/solution/build/reuse":case"/solution/build/adapt":case"/solution/build/deploy":return n;case"/solution/operate":case"/solution/operaterun":return l;case"/solution/visualize":case"/solution/visreview":return c;default:return a}}},81:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(27),s=a.n(c),r=(a(31),a(6)),o=a(7),i=a(9),u=a(8),m=a(10),d=(a(46),a(48),a(83)),p=(a(50),a(16),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getServerData=function(){fetch("/rest/server",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState(e)})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.getServerData,2e3)}},{key:"render",value:function(){var e=this.state&&this.state.result&&void 0!==this.state.result&&this.state.result["kie-server-info"];return l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"view overlay",className:"ReactTitleStyle4"},l.a.createElement("center",null,l.a.createElement("strong",null,"Server Info"))),l.a.createElement("div",{class:"card-body jbpm-card-body"},l.a.createElement("dl",{class:"row"},l.a.createElement("dt",{class:"col-sm-3"},"Name"),e?l.a.createElement("dd",{class:"col-sm-9"},this.state.result["kie-server-info"].name):l.a.createElement("dd",{class:"col-sm-9"}),l.a.createElement("dt",{class:"col-sm-3"},"Id"),e?l.a.createElement("dd",{class:"col-sm-9"},this.state.result["kie-server-info"].id):l.a.createElement("dd",{class:"col-sm-9"}),l.a.createElement("dt",{class:"col-sm-3"},"Version"),e?l.a.createElement("dd",{class:"col-sm-9"},this.state.result["kie-server-info"].version):l.a.createElement("dd",{class:"col-sm-9"}),l.a.createElement("dt",{class:"col-sm-3"},"Location"),e?l.a.createElement("dd",{class:"col-sm-9"},this.state.result["kie-server-info"].location):l.a.createElement("dd",{class:"col-sm-9"}),l.a.createElement("dt",{class:"col-sm-3"},"Capabilities"),e?l.a.createElement("dd",{class:"col-sm-9"},l.a.createElement("ul",null,this.state.result["kie-server-info"].capabilities.map(function(e){return l.a.createElement("li",null,e)}))):l.a.createElement("dd",{class:"col-sm-9"}))))}}]),t}(n.Component)),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getProcessDefsData=function(){fetch("/rest/server/containers/kaeam-react-spring-kjar/processes",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState(e)})},a.handleStartProcess=function(e,t){fetch("/rest/server/containers/"+e+"/processes/"+t+"/instances",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"}})},a.handleTaskList=function(e,t){console.log("COMPILE NUMBER: 1"),fetch("/rest/server/containers/"+e+"/processes/"+t+"/tasks",{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.getProcessDefsData,2e3)}},{key:"render",value:function(){var e=this,t=this.state&&this.state.processes;return l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"view overlay",className:"ReactTitleStyle2"},l.a.createElement("center",null,l.a.createElement("strong",null,"Process Definitions"))),l.a.createElement("div",{class:"card-body jbpm-card-body"},t?l.a.createElement("table",{class:"table mb-0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,this.state.processes.map(function(t){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("small",null,t["process-name"])),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.handleStartProcess(t["container-id"],t["process-id"])}},"Start")),l.a.createElement("td",null,l.a.createElement("button",{type:"button",class:"btn btn-primary",onClick:function(){return e.handleTaskList(t["container-id"],t["process-id"])}},"Get Tasks")))}))):l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Version"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null))))}}]),t}(n.Component),h=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getProcessInstancesData=function(){fetch("/processinstances",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({instances:e})})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.getProcessInstancesData,2e3)}},{key:"render",value:function(){var e=this.state&&this.state.instances;return l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"view overlay",className:"ReactTitleStyle3"},l.a.createElement("center",null,l.a.createElement("strong",null,"Process Instances"))),l.a.createElement("div",{class:"card-body jbpm-card-body"},e?l.a.createElement("table",{class:"table mb-0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"))),l.a.createElement("tbody",null,this.state.instances.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("small",null,e.id)),l.a.createElement("td",null,l.a.createElement("small",null,e.processName)))}))):l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"))),l.a.createElement("tbody",null))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).getTasksData=function(){fetch("/task",{headers:{Accept:"application/json","Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){a.setState({instances:e})})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){setInterval(this.getTasksData,2e3)}},{key:"render",value:function(){var e=this.state&&this.state.tasks;return l.a.createElement("div",{class:"card mb-4"},l.a.createElement("div",{class:"view overlay",className:"ReactTitleStyle3"},l.a.createElement("center",null,l.a.createElement("strong",null,"Tasks"))),l.a.createElement("div",{class:"card-body jbpm-card-body"},e?l.a.createElement("table",{class:"table mb-0"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"))),l.a.createElement("tbody",null,this.state.tasks.map(function(e){return l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("small",null,e.id)),l.a.createElement("td",null,l.a.createElement("small",null,e.taskName)))}))):l.a.createElement("table",{class:"table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Id"),l.a.createElement("th",{scope:"col"},"Name"))),l.a.createElement("tbody",null))))}}]),t}(n.Component),v=a(37),f=a.n(v),y=a(28),j=a.n(y),k=function(){return l.a.createElement("div",{className:"LogoTitleStyle"},l.a.createElement(j.a,{bg:"#1f5f71"},l.a.createElement(j.a.Brand,{bg:"#1f5f71",href:"#home"},l.a.createElement("img",{src:f.a,width:"70",height:"50",className:"d-inline-block align-top",alt:"Archemy Logo"}),l.a.createElement("h3",{className:"nav-title"},"Active Business Solutions Network Workbench"))))};a(25),a(3),a(4),a(82);a(78);a(22);var g=a(38),w=a(15),O=a(39),T=a.n(O),S=(l.a.Component,function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(d.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(k,null),l.a.createElement(p,null),l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(b,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,2,1]]]);
//# sourceMappingURL=main.72b7e428.chunk.js.map