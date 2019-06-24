(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{34:function(e,t,a){e.exports=a(56)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),c=a.n(l),o=a(18),i=a(21),m=a(22),u=a(30),s=a(23),p=a(13),d=a(31),h=(a(39),a(40),function(e){var t=e.type,a=e.placeholder,n=e.handlerInputName,l=e.nameValue;return r.a.createElement("div",null,r.a.createElement("label",{className:"visually-hidden",htmlFor:"name"},"Filter by name"),r.a.createElement("input",{type:t,placeholder:a,onChange:n,value:l}))}),E=function(e){var t=e.handlerInputName,a=e.nameValue;return r.a.createElement("section",null,r.a.createElement(h,{type:"text",placeholder:"Pokemon name",handlerInputName:t,nameValue:a}))},f=a(8);function v(e,t){return Math.random()*(t-e)+e}function k(e,t){return"".concat(v(e,t),"% ").concat(v(e,t),"% ").concat(v(e,t),"% ").concat(v(e,t),"% / ").concat(v(e,t),"% ").concat(v(e,t),"% ").concat(v(e,t),"% ").concat(v(e,t),"% ")}a(41);var g=function(e){var t=e.id,a=e.name,n=e.sprites,l=e.types,c=e.pokemonLength,o=e.evolvesFrom;return r.a.createElement(f.b,{to:"/pokemon-detail/".concat(t),title:"Get more info about this Pokemon"},r.a.createElement("article",{className:"pokemon-card",style:{borderRadius:k(20,80)}},r.a.createElement("img",{src:n.front_default,alt:a}),r.a.createElement("h2",{className:"pokemon-title"},a),r.a.createElement("p",null,"ID ",t,"/",c),o?r.a.createElement("p",null,"evolves from...",o):r.a.createElement("p",null),r.a.createElement("ul",null,l.map(function(e,t){return r.a.createElement("li",{className:"pokemon-type__item",key:t,style:{borderRadius:k(20,80)}},e.type.name)}))))},b=a(59),y=a(58),N=(a(46),function(e){var t=e.pokemonsData,a=e.isFetching,n=e.nameValue;return r.a.createElement("div",null,a?r.a.createElement("main",null,r.a.createElement(b.a,{animation:"border",variant:"danger",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(b.a,{animation:"border",variant:"info",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")),r.a.createElement(b.a,{animation:"border",variant:"warning",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading..."))):r.a.createElement("main",null,r.a.createElement("ul",{className:"pokeList"},t.filter(function(e){return!n||e.name.toUpperCase().includes(n.toUpperCase())}).map(function(e){return r.a.createElement(y.a,{in:!0,appear:!0,timeout:1e3,classNames:"pokeCards-transition",key:e.id},r.a.createElement("li",null," ",r.a.createElement(g,{id:e.id,name:e.name,sprites:e.sprites,types:e.types,evolvesFrom:e.evolvesFrom,pokemonLength:t.length})))}))))}),F=(a(49),function(e){var t=e.pokemonsData,a=e.isFetching,n=e.handlerInputName,l=e.nameValue;return r.a.createElement("div",{className:"pokeApp"},r.a.createElement("h1",null,"Pokedesk"),r.a.createElement(E,{handlerInputName:n,nameValue:l}),r.a.createElement(N,{isFetching:a,pokemonsData:t,nameValue:l}))}),I=a(10),w=a(11),j=(a(53),function(e){var t=e.isFetching,a=e.match,n=e.pokemonsData,l=parseInt(a.params.pokemonId);function c(e){return n.find(function(t){return t.id===e})}return r.a.createElement("div",null,t?r.a.createElement("p",null,"cargando"):r.a.createElement(y.a,{in:!0,appear:!0,timeout:1e3,classNames:"detailPage-transition"},r.a.createElement("div",{className:"detailPage"},r.a.createElement("h2",null,c(l).name," details"),r.a.createElement("img",{src:c(l).sprites.front_default,alt:c(l).name}),r.a.createElement("img",{src:c(l).sprites.back_default,alt:c(l).name}),r.a.createElement("h3",null,"Height"),r.a.createElement(I.a,{icon:w.c,size:"2x",color:"white"}),r.a.createElement("p",null,c(l).height," "),r.a.createElement("h3",null,"Weight"),r.a.createElement(I.a,{icon:w.d,size:"2x",color:"white"}),r.a.createElement("p",null,c(l).weight," "),r.a.createElement("h3",null,"Abilities"),r.a.createElement(I.a,{icon:w.b,size:"2x",color:"white"}),r.a.createElement("ul",null,c(l).abilities.map(function(e,t){return r.a.createElement("li",{key:t},e.ability.name)})),r.a.createElement(f.b,{to:"/",title:"Back to Pokedesk"},r.a.createElement(I.a,{icon:w.a,size:"2x",color:"white"}),r.a.createElement("p",null,"HOME")))))}),D=a(7),V="".concat("https://pokeapi.co/api/v2/").concat("pokemon").concat("?limit=25"),O=(a(54),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(s.a)(t).call(this,e))).state={data:{pokemonsData:[],isFetching:!0},filters:{nameValue:""}},a.handlerInputName=a.handlerInputName.bind(Object(p.a)(a)),a}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(V).then(function(e){return e.json()}).then(function(t){var a=t.results.map(function(e){var t,a={};return(t=e.url,fetch(t).then(function(e){return e.json()})).then(function(e){return a=e,t=e.id,fetch("".concat("https://pokeapi.co/api/v2/pokemon-species/").concat(t)).then(function(e){return e.json()});var t}).then(function(e){var t=e.evolves_from_species;return a=Object(o.a)({},a,{evolvesFrom:t?t.name:""})})});Promise.all(a).then(function(t){e.setState({data:{pokemonsData:t.sort(function(e,t){return e.id-t.id}),isFetching:!1}})})})}},{key:"handlerInputName",value:function(e){var t=e.currentTarget.value;this.setState(function(e){return{filters:Object(o.a)({},e.filters,{nameValue:t})}})}},{key:"render",value:function(){var e=this,t=this.state.data,a=t.pokemonsData,n=t.isFetching,l=this.state.filters.nameValue;return r.a.createElement(D.c,null,r.a.createElement(D.a,{exact:!0,path:"/",render:function(){return r.a.createElement(F,{isFetching:n,pokemonsData:a,handlerInputName:e.handlerInputName,nameValue:l})}}),r.a.createElement(D.a,{path:"/pokemon-detail/:pokemonId",render:function(e){return r.a.createElement(j,{isFetching:n,match:e.match,pokemonsData:a})}}))}}]),t}(r.a.Component));a(55);c.a.render(r.a.createElement(f.a,null,r.a.createElement(O,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.f5897ea8.chunk.js.map