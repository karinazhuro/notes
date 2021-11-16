(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],[,,function(t){t.exports=JSON.parse("{}")},,function(t){t.exports=JSON.parse("{}")},,,,,,,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(3),s=n.n(a),i=n(10),o=n.n(i),c=n(5),r=n(6),d=n(1),u=n(8),l=n(7),h=n(4),j=n(2),g=n(25),b=function t(){Object(c.a)(this,t),this.addNote=function(){var t=Object(g.a)();return h[t]={id:t,title:"",text:"",tags:new Set},{notes:h,id:t}},this.removeNote=function(t){return delete h[t],h},this.editNote=function(t,e,n){return h[e].text=t,n.forEach((function(t){return h[e].tags.add(t)})),h},this.addTag=function(t){return j[t]=new Set,j},this.editTagsForNote=function(t,e){return e.forEach((function(e){e in j?j[e].add(t):j[e]=new Set([t])})),h[t].tags.forEach((function(n){e.has(n)||j[n].delete(t),0===j[n].size&&delete j[n]})),h[t].tags=e,{notes:h,tags:j}},this.removeTag=function(t){return delete j[t],j}},f=s.a.createContext(),v=f.Provider,N=f.Consumer,O=(n(15),n(0)),m=function(t){var e=t.onAddNote;return Object(O.jsx)("div",{className:"add",children:Object(O.jsx)("button",{className:"btn-add",onClick:e,children:Object(O.jsx)("span",{className:"material-icons",children:"note_add"})})})},x=(n(17),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={tag:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(t){this.setState({tag:t.target.value})}},{key:"onClearTextField",value:function(){this.setState({tag:""})}},{key:"render",value:function(){var t=this,e=this.state.tag;return Object(O.jsx)(N,{children:function(n){var a=n.onAddTag;return Object(O.jsxs)("div",{className:"tag-tools",children:[Object(O.jsx)("input",{className:"text-field",placeholder:"Typing tag...",onChange:t.handleChange,value:e}),Object(O.jsx)("button",{className:"btn-tags",onClick:function(){a(e),t.onClearTextField()},children:Object(O.jsx)("span",{className:"material-icons",children:"done"})})]})}})}}]),n}(a.Component)),T=(n(18),function(t){var e=t.tag;return Object(O.jsx)(N,{children:function(t){var n=t.idTag,a=t.isCheckTag,s=t.onRemoveTag,i=t.selectTag,o=a&&n===e?"tag-items-check":"";return Object(O.jsxs)("div",{className:"tag-items ".concat(o),onClick:function(){return i(e)},children:[Object(O.jsxs)("p",{className:"tag",children:["#",e]}),Object(O.jsx)("button",{className:"btn-delete",onClick:function(){return s(e)},children:Object(O.jsx)("span",{className:"material-icons",children:"highlight_off"})})]})}})}),p=(n(19),function(t){var e=t.tags;return Object(O.jsxs)("div",{className:"tags",children:[Object(O.jsx)(x,{}),Object(O.jsx)("div",{className:"tags",children:Object.keys(e).map((function(t){return Object(O.jsx)(T,{tag:t},t)}))})]})}),k=(n(20),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).state={isShow:!0},t.onShowDetails=t.onShowDetails.bind(Object(d.a)(t)),t}return Object(r.a)(n,[{key:"onShowDetails",value:function(){this.setState({isShow:!this.state.isShow})}},{key:"render",value:function(){var t=this,e=this.props.note,n=this.state.isShow?"0":"180",a=this.state.isShow?"block":"none",s={transform:"rotate(".concat(n,"deg)")},i={display:a};return Object(O.jsx)(N,{children:function(n){var a=n.onRemoveNote,o=n.onEditNote,c=n.onEditFinishNote;return Object(O.jsxs)("div",{className:"note",children:[Object(O.jsxs)("div",{className:"tools",children:[Object(O.jsx)("input",{className:"note-title",type:"text",placeholder:"Title...",defaultValue:e.title}),Object(O.jsx)("button",{className:"show-hide-note",onClick:t.onShowDetails,style:s,children:Object(O.jsx)("span",{className:"material-icons",children:"expand_more"})}),Object(O.jsx)("button",{className:"btn-delete",onClick:function(){return a(e.id)},children:Object(O.jsx)("span",{className:"material-icons",children:"delete_outline"})})]}),Object(O.jsx)("textarea",{className:"textarea",cols:"30",rows:"15",defaultValue:e.text,onChange:function(t){return o(t.target.value)},onBlur:function(t){return c(e.id,t.target.value)},style:i})]},e)}})}}]),n}(a.Component)),S=(n(21),function(t){var e=t.notes;return Object(O.jsx)("div",{className:"notes",children:Object.values(e).map((function(t){var e=t.id;return Object(O.jsx)(k,{note:t},e)}))})}),C=(n(22),function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(c.a)(this,n),(t=e.call(this)).service=new b,t.state={notes:{},tags:{},idChangeNote:"",idTag:null,isCheckTag:!1},t.onAddNote=t.onAddNote.bind(Object(d.a)(t)),t.onRemoveNote=t.onRemoveNote.bind(Object(d.a)(t)),t.onEditNote=t.onEditNote.bind(Object(d.a)(t)),t.onAddTag=t.onAddTag.bind(Object(d.a)(t)),t.onRemoveTag=t.onRemoveTag.bind(Object(d.a)(t)),t.onSelectTag=t.onSelectTag.bind(Object(d.a)(t)),t.onEditFinishNote=t.onEditFinishNote.bind(Object(d.a)(t)),t}return Object(r.a)(n,[{key:"onAddNote",value:function(){var t=this.service.addNote();this.setState({notes:t.notes,idChangeNote:t.id})}},{key:"onRemoveNote",value:function(t){this.setState({notes:this.service.removeNote(t)})}},{key:"onEditNote",value:function(t){var e=this.state.idChangeNote,n=this.findTags(t);this.setState({notes:this.service.editNote(t,e,n)})}},{key:"onAddTag",value:function(t){""!==t&&this.setState({tags:this.service.addTag(t)})}},{key:"onRemoveTag",value:function(t){this.setState({tags:this.service.removeTag(t)})}},{key:"onSelectTag",value:function(t){var e=this.state.idTag;this.setState({idTag:t!==e?t:null,isCheckTag:t!==e})}},{key:"findTags",value:function(t){return new Set(t.split(" ").filter((function(t){return t.startsWith("#")&&t.length>1})).map((function(t){return t.slice(1)})))}},{key:"onEditFinishNote",value:function(t,e){this.editTagsForNote(t,this.findTags(e))}},{key:"editTagsForNote",value:function(t,e){var n=this.service.editTagsForNote(t,e);this.setState({notes:n.notes,tags:n.tags})}},{key:"sortNotesByTag",value:function(t){var e=this.state,n=e.tags,a=e.idTag,s={};return a?(n[a].forEach((function(e){return s[e]=t[e]})),s):t}},{key:"render",value:function(){var t=this,e=this.state,n=e.notes,a=e.tags,s=e.idTag,i=e.isCheckTag;return Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)("header",{children:Object(O.jsx)(m,{onAddNote:this.onAddNote})}),Object(O.jsx)("main",{children:Object(O.jsxs)(v,{value:{idTag:s,isCheckTag:i,onRemoveNote:function(e){return t.onRemoveNote(e)},onEditNote:function(e){return t.onEditNote(e)},onAddTag:function(e){return t.onAddTag(e)},onRemoveTag:function(e){return t.onRemoveTag(e)},selectTag:function(e){return t.onSelectTag(e)},onEditFinishNote:function(e,n){return t.onEditFinishNote(e,n)}},children:[Object(O.jsx)(p,{tags:a}),Object(O.jsx)(S,{notes:this.sortNotesByTag(n)})]})})]})}}]),n}(a.Component));o.a.render(Object(O.jsx)(C,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.2248ef9e.chunk.js.map