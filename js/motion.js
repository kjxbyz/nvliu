$(document).ready(function(){NexT.motion={},NexT.motion.integrator={queue:[],cursor:-1,add:function(t){return this.queue.push(t),this},next:function(){this.cursor++;var t=this.queue[this.cursor];$.isFunction(t)&&t(NexT.motion.integrator)},bootstrap:function(){this.next()}},NexT.motion.middleWares={logo:function(t){var i=[],o=$(".brand"),n=$(".custom-logo-image"),e=$(".site-title"),s=$(".site-subtitle"),r=$(".logo-line-before i"),a=$(".logo-line-after i");function u(t){return(t=Array.isArray(t)?t:[t]).every(function(t){return t.length>0})}function c(t,i){return{e:$(t),p:{translateX:i},o:{duration:500,sequenceQueue:!1}}}function l(){i.push({e:n,p:{opacity:1,top:0},o:{duration:200}})}o.length>0&&i.push({e:o,p:{opacity:1},o:{duration:200}}),NexT.utils.isMist()&&u([r,a])&&i.push(c(r,"100%"),c(a,"-100%")),NexT.utils.isMuse()&&u(n)&&l(),u(e)&&i.push({e:e,p:{opacity:1,top:0},o:{duration:200}}),u(s)&&i.push({e:s,p:{opacity:1,top:0},o:{duration:200}}),(NexT.utils.isPisces()||NexT.utils.isGemini())&&u(n)&&l(),CONFIG.motion.async&&t.next(),i.length>0?(i[i.length-1].o.complete=function(){t.next()},$.Velocity.RunSequence(i)):t.next()},menu:function(t){CONFIG.motion.async&&t.next(),$(".menu-item").velocity("transition.slideDownIn",{display:null,duration:200,complete:function(){t.next()}})},postList:function(t){var i,o=$(".post-block, .pagination, .comments"),n=CONFIG.motion.transition.post_block,e=$(".post-header"),s=CONFIG.motion.transition.post_header,r=$(".post-body"),a=CONFIG.motion.transition.post_body,u=$(".collection-title, .archive-year"),c=CONFIG.motion.transition.coll_header,l=$(".sidebar-inner"),p=CONFIG.motion.transition.sidebar;o.length>0?((i=window.postMotionOptions||{stagger:100,drag:!0}).complete=function(){CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&l.css({transform:"initial"}),t.next()},CONFIG.motion.transition.post_block&&o.velocity("transition."+n,i),CONFIG.motion.transition.post_header&&e.velocity("transition."+s,i),CONFIG.motion.transition.post_body&&r.velocity("transition."+a,i),CONFIG.motion.transition.coll_header&&u.velocity("transition."+c,i),CONFIG.motion.transition.sidebar&&(NexT.utils.isPisces()||NexT.utils.isGemini())&&l.velocity("transition."+p,i)):t.next(),CONFIG.motion.async&&t.next()},sidebar:function(t){"always"===CONFIG.sidebar.display&&NexT.utils.displaySidebar(),t.next()}}});