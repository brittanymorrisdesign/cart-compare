(self.webpackChunkcart_compare=self.webpackChunkcart_compare||[]).push([[1296],{1296:function(t,e,n){"use strict";n.r(e),n.d(e,{KEYBOARD_DID_CLOSE:function(){return r},KEYBOARD_DID_OPEN:function(){return i},copyVisualViewport:function(){return v},keyboardDidClose:function(){return g},keyboardDidOpen:function(){return p},keyboardDidResize:function(){return b},resetKeyboardAssist:function(){return c},setKeyboardClose:function(){return h},setKeyboardOpen:function(){return d},startKeyboardAssist:function(){return f},trackViewportChanges:function(){return l}});var i="ionKeyboardDidShow",r="ionKeyboardDidHide",o={},u={},a=!1,c=function(){o={},u={},a=!1},f=function(t){s(t),t.visualViewport&&(u=v(t.visualViewport),t.visualViewport.onresize=function(){l(t),p()||b(t)?d(t):g(t)&&h(t)})},s=function(t){t.addEventListener("keyboardDidShow",function(e){return d(t,e)}),t.addEventListener("keyboardDidHide",function(){return h(t)})},d=function(t,e){w(t,e),a=!0},h=function(t){y(t),a=!1},p=function(){return!a&&o.width===u.width&&(o.height-u.height)*u.scale>150},b=function(t){return a&&!g(t)},g=function(t){return a&&u.height===t.innerHeight},w=function(t,e){var n=new CustomEvent(i,{detail:{keyboardHeight:e?e.keyboardHeight:t.innerHeight-u.height}});t.dispatchEvent(n)},y=function(t){var e=new CustomEvent(r);t.dispatchEvent(e)},l=function(t){o=Object.assign({},u),u=v(t.visualViewport)},v=function(t){return{width:Math.round(t.width),height:Math.round(t.height),offsetTop:t.offsetTop,offsetLeft:t.offsetLeft,pageTop:t.pageTop,pageLeft:t.pageLeft,scale:t.scale}}}}]);