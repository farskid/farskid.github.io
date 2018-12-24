(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{145:function(t,e,n){"use strict";n.r(e);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(155),s=n(157),u=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){return o.a.createElement(c.a,{location:this.props.location},o.a.createElement(s.a,{title:"404: Not Found"}),o.a.createElement("h1",null,"Not Found"),o.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))},e}(o.a.Component);e.default=u},151:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return y}),n.d(e,"StaticQueryContext",function(){return p}),n.d(e,"StaticQuery",function(){return m});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(150),s=n.n(c);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return c.withPrefix}),n.d(e,"navigate",function(){return c.navigate}),n.d(e,"push",function(){return c.push}),n.d(e,"replace",function(){return c.replace}),n.d(e,"navigateTo",function(){return c.navigateTo});var u=n(153),l=n.n(u);n.d(e,"PageRenderer",function(){return l.a});var d=n(33);n.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(t,e,n){"use strict";n.d(e,"a",function(){return o}),n.d(e,"b",function(){return c});var a=n(160),r=["-apple-system","BlinkMacSystemFont","Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Open Sans","Helvetica Neue","sans-serif"],i=new(n.n(a).a)({headerFontFamily:["IBM Plex Serif"].concat(r),bodyFontFamily:["IBM Plex Sans"].concat(r),baseFontSize:16,baseLineHeight:1.5});var o=i.rhythm,c=i.scale},153:function(t,e,n){var a;t.exports=(a=n(154))&&a.default||a},154:function(t,e,n){"use strict";n.r(e);n(32);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},155:function(t,e,n){"use strict";n(161);var a=n(7),r=n.n(a),i=n(0),o=n.n(i),c=n(151),s=n(159),u=n.n(s),l=(n(156),n(152)),d=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=(t.location,t.title,t.children),n=t.avatar,a=t.author,r=t.hasNavbar,i=void 0!==r&&r;return o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},i&&o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{style:{textAlign:"center",marginBottom:Object(l.a)(2)}},o.a.createElement(u.a,{fixed:n.childImageSharp.fixed,alt:a,style:{marginBottom:0,minWidth:100,borderRadius:"50%"}}),o.a.createElement("h1",null,a),o.a.createElement("nav",null,o.a.createElement("ul",{style:{listStyle:"none",padding:0,margin:0,display:"flex",justifyContent:"center"}},o.a.createElement("li",{style:{margin:"0 5px"}},o.a.createElement(c.Link,{to:"/blog",style:{}},"Blog")),o.a.createElement("li",{style:{margin:"0 5px"}},o.a.createElement(c.Link,{to:"/"},"About")))))),e)},e}(o.a.Component);e.a=d},156:function(t,e,n){},157:function(t,e,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),c=n.n(o),s=n(162),u=n.n(s),l=n(151);function d(t){var e=t.description,n=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(t){var a=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=d;var p="1025518380"},158:function(t){t.exports={data:{site:{siteMetadata:{title:"Farzad YZ personal website",description:"I'm a Software engineer living in Finland.I'm interested in Javascript,Typescript,React,React Native,GraphQL,ReasonML and,Golang. I'm usually facinated by Abstract Tooling,State management patterns,Automation and,Architectural patterns.",author:"Farzad YZ"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-38c028a7ae844481ea82.js.map