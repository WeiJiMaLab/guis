"use strict";(self.webpackChunkguis_site=self.webpackChunkguis_site||[]).push([[651],{148:function(e,t,n){n.r(t);var r=n(7326),a=n(4578),l=n(7294),s=n(1082),i=n(8054),o=n(7439),c=n(3837),u=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var l=t.allMarkdownRemark.edges;return a.filters=["story","nyu","oxford","global"],a.filtermap={nyu:"NYU",story:"Story",global:"Global",oxford:"Oxford"},a.state={show_nyu:!1,show_global:!1,events:l,eventdata:l},a.filters.forEach((function(e){return a.state[e]=!1})),a.reset=a.reset.bind((0,r.Z)(a)),a.refresh=a.refresh.bind((0,r.Z)(a)),a.filterby=a.filterby.bind((0,r.Z)(a)),a}(0,a.Z)(t,e);var n=t.prototype;return n.refresh=function(){var e=this;this.setState({events:this.state.eventdata.filter((function(t){var n=!0;e.filters.forEach((function(t){return n=n&&!e.state[t]}));var r=!1;return e.filters.forEach((function(n){r=r||e.state[n]&&t.node.frontmatter.tags.includes(n)})),!(!n&&!r)}))})},n.filterby=function(e){this.state[e]=!this.state[e],this.refresh()},n.reset=function(){var e=this;this.filters.forEach((function(t){return e.state[t]=!1})),this.refresh()},n.render=function(){var e=this;console.log(this.filters);var t=this.filters.map((function(t){return l.createElement(i.zx,{onClick:function(){return e.filterby(t)},style:{backgroundColor:e.state[t]?"var(--btn-select)":"var(--btn)"}},e.filtermap[t])}));return l.createElement(c.Z,null,l.createElement("div",{className:"page"},l.createElement("div",{className:"section",style:{paddingRight:"5vw"}},l.createElement("h1",null,l.createElement("span",null,"GUIS Events")),l.createElement("br",null),l.createElement("p",{style:{paddingRight:"15vw"}},"NYU events are held in Meyer Hall (4 Washington Place), Room 636, from 17:00-18:00 ET, unless announced otherwise. Graduate students, postdocs, research assistants, undergraduates, faculty, and visitors are all welcome (visitors need to be added to a security check list). For questions please contact weijima dot nyu dot edu."),l.createElement("h4",null,"Filter by:",t,l.createElement(i.zx,{size:"lg",onClick:function(){return e.reset()}},"Reset")),l.createElement("div",{className:"desktop-only"},l.createElement(i.X2,{style:{paddingTop:"50px"}},l.createElement(i.JX,{xs:2},l.createElement("h4",null,"Date")),l.createElement(i.JX,{xs:6},l.createElement("h4",null,"Event")))),l.createElement("hr",{style:{height:3}}),this.state.events.map((function(t){var n=t.node;if(n.frontmatter.tags.includes("year"))return l.createElement(i.X2,null,l.createElement(i.JX,{lg:3},n.frontmatter.title));var r=n.frontmatter.tags.filter((function(t){return e.filters.includes(t)})).map((function(t){return l.createElement(i.zx,{className:"tagbtn",onClick:function(){return e.filterby(t)},style:{backgroundColor:e.state[t]?"var(--btn-select)":"var(--btn)"}},e.filtermap[t])}));return l.createElement("div",null,l.createElement("div",null,l.createElement(i.Zb,{className:"event",style:{backgroundColor:"rgba(0, 0, 0, 0)",border:"none"}},l.createElement(i.X2,null,l.createElement(i.JX,{lg:2,xs:12},l.createElement("h4",null,(0,o.mh)(n.frontmatter.date))),l.createElement(i.JX,{lg:4,xs:12},l.createElement("h4",null,l.createElement(s.rU,{className:"event-link",to:n.frontmatter.slug},n.frontmatter.title))),l.createElement(i.JX,{lg:6},r)))))})))))},t}(l.Component);t.default=function(e){return l.createElement(s.i1,{query:"2312031344",render:function(t){return l.createElement(u,Object.assign({},t,e))}})}},7439:function(e,t,n){function r(e){return["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(e).getDay()]}function a(e){var t=new Date(e);return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]+" "+String(t.getDate()).padStart(2,"0")}function l(e){var t=new Date(e);return t.getFullYear()+"\t"+String(t.getMonth()+1).padStart(2,"0")+"\t"+String(t.getDate()).padStart(2,"0")}n.d(t,{Mb:function(){return a},mh:function(){return l},mp:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-events-js-8cdaccba095f6605800c.js.map