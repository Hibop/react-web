webpackJsonp([2],{0:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){if("web"==f.OS){var t=e.nativeEvent.changedTouches[0];return{pageX:t.pageX,pageY:t.pageY}}return{pageX:e.nativeEvent.pageX,pageY:e.nativeEvent.pageY}}var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=function(e,t,r){for(var n=!0;n;){var o=e,i=t,a=r;s=u=l=void 0,n=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,i);if(void 0!==s){if("value"in s)return s.value;var l=s.get;return void 0===l?void 0:l.call(a)}var u=Object.getPrototypeOf(o);if(null===u)return void 0;e=u,t=i,r=a,n=!0}},l=r(1),u=l.AppRegistry,c=l.StyleSheet,h=l.Text,d=l.View,f=l.Platform,p=r(173),m=r(345),y=r(346),g=3,v=4,b=60,w=function(e){function t(){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){return l.createElement(d,{style:x.cell})}}]),t}(l.Component),E=function(e){function t(){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){return l.createElement(d,{style:x.board},l.createElement(d,{style:x.row},l.createElement(w,null),l.createElement(w,null),l.createElement(w,null),l.createElement(w,null)),l.createElement(d,{style:x.row},l.createElement(w,null),l.createElement(w,null),l.createElement(w,null),l.createElement(w,null)),l.createElement(d,{style:x.row},l.createElement(w,null),l.createElement(w,null),l.createElement(w,null),l.createElement(w,null)),l.createElement(d,{style:x.row},l.createElement(w,null),l.createElement(w,null),l.createElement(w,null),l.createElement(w,null)),this.props.children)}}]),t}(l.Component),T=function(e){function t(e){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e);var r=this.props.tile;this.state={opacity:new p.Value(0),top:new p.Value(t._getPosition(r.toRow())),left:new p.Value(t._getPosition(r.toColumn()))}}return o(t,e),a(t,null,[{key:"_getPosition",value:function(e){return g+(e*(b+2*v)+v)}}]),a(t,[{key:"calculateOffset",value:function(){var e=this.props.tile,r={top:this.state.top,left:this.state.left,opacity:this.state.opacity};return e.isNew()?p.timing(this.state.opacity,{duration:100,toValue:1}).start():p.parallel([p.timing(r.top,{duration:100,toValue:t._getPosition(e.toRow())}),p.timing(r.left,{duration:100,toValue:t._getPosition(e.toColumn())})]).start(),r}},{key:"render",value:function(){var e=this.props.tile,t=[x.tile,x["tile"+e.value],this.calculateOffset()],r=[x.value,e.value>4&&x.whiteText,e.value>100&&x.threeDigits,e.value>1e3&&x.fourDigits];return l.createElement(p.View,{style:t},l.createElement(h,{style:r},e.value))}}]),t}(l.Component),S=function(e){function t(){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return o(t,e),a(t,[{key:"render",value:function(){var e=this.props.board;if(!e.hasWon()&&!e.hasLost())return l.createElement(d,null);var t=e.hasWon()?"Good Job!":"Game Over";return l.createElement(d,{style:x.overlay},l.createElement(h,{style:x.overlayMessage},t),l.createElement(y,{onPress:this.props.onRestart,style:x.tryAgain},l.createElement(h,{style:x.tryAgainText},"Try Again?")))}}]),t}(l.Component),C=function(e){function t(e){n(this,t),s(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.state={board:new m},this.startX=0,this.startY=0}return o(t,e),a(t,[{key:"restartGame",value:function(){this.setState({board:new m})}},{key:"handleTouchStart",value:function(e){if(!this.state.board.hasWon()){var t=i(e);this.startX=t.pageX,this.startY=t.pageY}}},{key:"handleTouchEnd",value:function(e){if(!this.state.board.hasWon()){var t=i(e),r=t.pageX-this.startX,n=t.pageY-this.startY,o=-1;Math.abs(r)>3*Math.abs(n)&&Math.abs(r)>30?o=r>0?2:0:Math.abs(n)>3*Math.abs(r)&&Math.abs(n)>30&&(o=n>0?3:1),-1!==o&&this.setState({board:this.state.board.move(o)})}}},{key:"render",value:function(){var e=this,t=this.state.board.tiles.filter(function(e){return e.value}).map(function(e){return l.createElement(T,{ref:e.id,key:e.id,tile:e})});return l.createElement(d,{style:x.container,onTouchStart:function(t){return e.handleTouchStart(t)},onTouchEnd:function(t){return e.handleTouchEnd(t)}},l.createElement(E,null,t),l.createElement(S,{board:this.state.board,onRestart:function(){return e.restartGame()}}))}}]),t}(l.Component),x=c.create({container:{flex:1,justifyContent:"center",alignItems:"center"},board:{padding:g,backgroundColor:"#bbaaaa",borderRadius:5},overlay:{position:"absolute",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(221, 221, 221, 0.5)",flex:1,flexDirection:"column",justifyContent:"center",alignItems:"center"},overlayMessage:{fontSize:40,marginBottom:20},tryAgain:{backgroundColor:"#887766",padding:20,borderRadius:5},tryAgainText:{color:"#ffffff",fontSize:20,fontWeight:"500"},cell:{width:b,height:b,borderRadius:5,backgroundColor:"#ddccbb",margin:v},row:{flexDirection:"row"},tile:{position:"absolute",width:b,height:b,backgroundColor:"#ddccbb",borderRadius:5,flex:1,justifyContent:"center",alignItems:"center"},value:{fontSize:24,color:"#776666",fontFamily:"Verdana",fontWeight:"500"},tile2:{backgroundColor:"#eeeeee"},tile4:{backgroundColor:"#eeeecc"},tile8:{backgroundColor:"#ffbb88"},tile16:{backgroundColor:"#ff9966"},tile32:{backgroundColor:"#ff7755"},tile64:{backgroundColor:"#ff5533"},tile128:{backgroundColor:"#eecc77"},tile256:{backgroundColor:"#eecc66"},tile512:{backgroundColor:"#eecc55"},tile1024:{backgroundColor:"#eecc33"},tile2048:{backgroundColor:"#eecc22"},whiteText:{color:"#ffffff"},threeDigits:{fontSize:20},fourDigits:{fontSize:18}});if(u.registerComponent("Game2048",function(){return C}),"web"==f.OS){var P=document.createElement("div");document.body.appendChild(P),u.runApplication("Game2048",{rootTag:P})}e.exports=C},345:function(e,t,r){"use strict";var n=function(e){for(var t=e.length,r=e[0].length,n=[],o=0;t>o;++o){n.push([]);for(var i=0;r>i;++i)n[o][i]=e[i][r-o-1]}return n},o=function a(e,t,r){this.value=e||0,this.row=t||-1,this.column=r||-1,this.oldRow=-1,this.oldColumn=-1,this.markForDeletion=!1,this.mergedInto=null,this.id=a.id++};o.id=0,o.prototype.moveTo=function(e,t){this.oldRow=this.row,this.oldColumn=this.column,this.row=e,this.column=t},o.prototype.isNew=function(){return-1===this.oldRow&&!this.mergedInto},o.prototype.hasMoved=function(){return-1!==this.fromRow()&&(this.fromRow()!==this.toRow()||this.fromColumn()!==this.toColumn())||this.mergedInto},o.prototype.fromRow=function(){return this.mergedInto?this.row:this.oldRow},o.prototype.fromColumn=function(){return this.mergedInto?this.column:this.oldColumn},o.prototype.toRow=function(){return this.mergedInto?this.mergedInto.row:this.row},o.prototype.toColumn=function(){return this.mergedInto?this.mergedInto.column:this.column};var i=function s(){this.tiles=[],this.cells=[];for(var e=0;e<s.size;++e)this.cells[e]=[this.addTile(),this.addTile(),this.addTile(),this.addTile()];this.addRandomTile(),this.setPositions(),this.won=!1};i.prototype.addTile=function(){var e=new o;return o.apply(e,arguments),this.tiles.push(e),e},i.size=4,i.prototype.moveLeft=function(){for(var e=!1,t=0;t<i.size;++t){for(var r=this.cells[t].filter(function(e){return 0!==e.value}),n=[],o=0;o<i.size;++o){var a=r.length?r.shift():this.addTile();if(r.length>0&&r[0].value===a.value){var s=a;a=this.addTile(a.value),s.mergedInto=a;var l=r.shift();l.mergedInto=a,a.value+=l.value}n[o]=a,this.won=this.won||2048===a.value,e=e||a.value!==this.cells[t][o].value}this.cells[t]=n}return e},i.prototype.setPositions=function(){this.cells.forEach(function(e,t){e.forEach(function(e,r){e.oldRow=e.row,e.oldColumn=e.column,e.row=t,e.column=r,e.markForDeletion=!1})})},i.fourProbability=.1,i.prototype.addRandomTile=function(){for(var e=[],t=0;t<i.size;++t)for(var r=0;r<i.size;++r)0===this.cells[t][r].value&&e.push({r:t,c:r});var n=Math.floor(Math.random()*e.length),o=e[n],a=Math.random()<i.fourProbability?4:2;this.cells[o.r][o.c]=this.addTile(a)},i.prototype.move=function(e){this.clearOldTiles();for(var t=0;e>t;++t)this.cells=n(this.cells);for(var r=this.moveLeft(),t=e;4>t;++t)this.cells=n(this.cells);return r&&this.addRandomTile(),this.setPositions(),this},i.prototype.clearOldTiles=function(){this.tiles=this.tiles.filter(function(e){return e.markForDeletion===!1}),this.tiles.forEach(function(e){e.markForDeletion=!0})},i.prototype.hasWon=function(){return this.won},i.deltaX=[-1,0,1,0],i.deltaY=[0,-1,0,1],i.prototype.hasLost=function(){for(var e=!1,t=0;t<i.size;++t)for(var r=0;r<i.size;++r){e=e||0===this.cells[t][r].value;for(var n=0;4>n;++n){var o=t+i.deltaX[n],a=r+i.deltaY[n];0>o||o>=i.size||0>a||a>=i.size||(e=e||this.cells[t][r].value===this.cells[o][a].value)}}return!e},e.exports=i},346:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=r(173),a=n(i),s=r(2),l=n(s),u=r(237),c={top:20,left:20,right:20,bottom:30},h=l["default"].createClass({displayName:"TouchableBounce",mixins:[u.Mixin],propTypes:{onPress:l["default"].PropTypes.func,onPressIn:l["default"].PropTypes.func,onPressOut:l["default"].PropTypes.func,onPressWithCompletion:l["default"].PropTypes.func,onPressAnimationComplete:l["default"].PropTypes.func},getInitialState:function(){return o({},this.touchableGetInitialState(),{scale:new a["default"].Value(1)})},bounceTo:function(e,t,r,n){a["default"].spring(this.state.scale,{toValue:e,velocity:t,bounciness:r}).start(n)},touchableHandleActivePressIn:function(e){this.bounceTo(.93,.1,0),this.props.onPressIn&&this.props.onPressIn(e)},touchableHandleActivePressOut:function(e){this.bounceTo(1,.4,0),this.props.onPressOut&&this.props.onPressOut(e)},touchableHandlePress:function(e){var t=this,r=this.props.onPressWithCompletion;return r?void r(function(){t.state.scale.setValue(.93),t.bounceTo(1,10,10,t.props.onPressAnimationComplete)}):(this.bounceTo(1,10,10,this.props.onPressAnimationComplete),void(this.props.onPress&&this.props.onPress(e)))},touchableGetPressRectOffset:function(){return c},touchableGetHighlightDelayMS:function(){return 0},render:function(){return l["default"].createElement(a["default"].View,{style:[{transform:[{scale:this.state.scale}]},this.props.style],accessible:!0,testID:this.props.testID,onStartShouldSetResponder:this.touchableHandleStartShouldSetResponder,onResponderTerminationRequest:this.touchableHandleResponderTerminationRequest,onResponderGrant:this.touchableHandleResponderGrant,onResponderMove:this.touchableHandleResponderMove,onResponderRelease:this.touchableHandleResponderRelease,onResponderTerminate:this.touchableHandleResponderTerminate},this.props.children)}});e.exports=h}});
//# sourceMappingURL=game2048.js.map