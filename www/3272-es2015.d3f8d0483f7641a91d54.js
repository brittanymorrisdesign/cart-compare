(self.webpackChunkcart_compare=self.webpackChunkcart_compare||[]).push([[3272],{3272:function(e,t,r){"use strict";r.r(t),r.d(t,{createSwipeBackGesture:function(){return c}});var n=r(2377),a=r(9461);r(960);const c=(e,t,r,c,o)=>{const s=e.ownerDocument.defaultView;return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:e=>e.startX<=50&&t(),onStart:r,onMove:e=>{c(e.deltaX/s.innerWidth)},onEnd:e=>{const t=s.innerWidth,r=e.deltaX/t,a=e.velocityX,c=a>=0&&(a>.2||e.deltaX>t/2),i=(c?1-r:r)*t;let u=0;if(i>5){const e=i/Math.abs(a);u=Math.min(e,540)}o(c,r<=0?.01:(0,n.j)(0,r,.9999),u)}})}}}]);