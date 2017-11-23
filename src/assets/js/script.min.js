/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/**
 * Swiper 3.3.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * 
 * http://www.idangero.us/swiper/
 * 
 * Copyright 2016, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: January 10, 2016
 */
!function(){"use strict";function e(e){e.fn.swiper=function(a){var i;return e(this).each(function(){var e=new t(this,a);i||(i=e)}),i}}var a,t=function(e,r){function s(e){return Math.floor(e)}function n(){b.autoplayTimeoutId=setTimeout(function(){b.params.loop?(b.fixLoop(),b._slideNext(),b.emit("onAutoplay",b)):b.isEnd?r.autoplayStopOnLast?b.stopAutoplay():(b._slideTo(0),b.emit("onAutoplay",b)):(b._slideNext(),b.emit("onAutoplay",b))},b.params.autoplay)}function o(e,t){var i=a(e.target);if(!i.is(t))if("string"==typeof t)i=i.parents(t);else if(t.nodeType){var r;return i.parents().each(function(e,a){a===t&&(r=t)}),r?t:void 0}if(0!==i.length)return i[0]}function l(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,i=new t(function(e){e.forEach(function(e){b.onResize(!0),b.emit("onObserverUpdate",b,e)})});i.observe(e,{attributes:"undefined"==typeof a.attributes?!0:a.attributes,childList:"undefined"==typeof a.childList?!0:a.childList,characterData:"undefined"==typeof a.characterData?!0:a.characterData}),b.observers.push(i)}function p(e){e.originalEvent&&(e=e.originalEvent);var a=e.keyCode||e.charCode;if(!b.params.allowSwipeToNext&&(b.isHorizontal()&&39===a||!b.isHorizontal()&&40===a))return!1;if(!b.params.allowSwipeToPrev&&(b.isHorizontal()&&37===a||!b.isHorizontal()&&38===a))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===a||39===a||38===a||40===a){var t=!1;if(b.container.parents(".swiper-slide").length>0&&0===b.container.parents(".swiper-slide-active").length)return;var i={left:window.pageXOffset,top:window.pageYOffset},r=window.innerWidth,s=window.innerHeight,n=b.container.offset();b.rtl&&(n.left=n.left-b.container[0].scrollLeft);for(var o=[[n.left,n.top],[n.left+b.width,n.top],[n.left,n.top+b.height],[n.left+b.width,n.top+b.height]],l=0;l<o.length;l++){var p=o[l];p[0]>=i.left&&p[0]<=i.left+r&&p[1]>=i.top&&p[1]<=i.top+s&&(t=!0)}if(!t)return}b.isHorizontal()?((37===a||39===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===a&&!b.rtl||37===a&&b.rtl)&&b.slideNext(),(37===a&&!b.rtl||39===a&&b.rtl)&&b.slidePrev()):((38===a||40===a)&&(e.preventDefault?e.preventDefault():e.returnValue=!1),40===a&&b.slideNext(),38===a&&b.slidePrev())}}function d(e){e.originalEvent&&(e=e.originalEvent);var a=b.mousewheel.event,t=0,i=b.rtl?-1:1;if(e.detail)t=-e.detail;else if("mousewheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;t=e.wheelDeltaX*i}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;t=e.wheelDeltaY}else t=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*i:-e.wheelDeltaY;else if("DOMMouseScroll"===a)t=-e.detail;else if("wheel"===a)if(b.params.mousewheelForceToAxis)if(b.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;t=-e.deltaX*i}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;t=-e.deltaY}else t=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*i:-e.deltaY;if(0!==t){if(b.params.mousewheelInvert&&(t=-t),b.params.freeMode){var r=b.getWrapperTranslate()+t*b.params.mousewheelSensitivity,s=b.isBeginning,n=b.isEnd;if(r>=b.minTranslate()&&(r=b.minTranslate()),r<=b.maxTranslate()&&(r=b.maxTranslate()),b.setWrapperTransition(0),b.setWrapperTranslate(r),b.updateProgress(),b.updateActiveIndex(),(!s&&b.isBeginning||!n&&b.isEnd)&&b.updateClasses(),b.params.freeModeSticky?(clearTimeout(b.mousewheel.timeout),b.mousewheel.timeout=setTimeout(function(){b.slideReset()},300)):b.params.lazyLoading&&b.lazy&&b.lazy.load(),0===r||r===b.maxTranslate())return}else{if((new window.Date).getTime()-b.mousewheel.lastScrollTime>60)if(0>t)if(b.isEnd&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slideNext();else if(b.isBeginning&&!b.params.loop||b.animating){if(b.params.mousewheelReleaseOnEdges)return!0}else b.slidePrev();b.mousewheel.lastScrollTime=(new window.Date).getTime()}return b.params.autoplay&&b.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(e,t){e=a(e);var i,r,s,n=b.rtl?-1:1;i=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),s=e.attr("data-swiper-parallax-y"),r||s?(r=r||"0",s=s||"0"):b.isHorizontal()?(r=i,s="0"):(s=i,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*t*n+"%":r*t*n+"px",s=s.indexOf("%")>=0?parseInt(s,10)*t+"%":s*t+"px",e.transform("translate3d("+r+", "+s+",0px)")}function c(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof t))return new t(e,r);var m={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},f=r&&r.virtualTranslate;r=r||{};var h={};for(var g in r)if("object"!=typeof r[g]||null===r[g]||(r[g].nodeType||r[g]===window||r[g]===document||"undefined"!=typeof i&&r[g]instanceof i||"undefined"!=typeof jQuery&&r[g]instanceof jQuery))h[g]=r[g];else{h[g]={};for(var v in r[g])h[g][v]=r[g][v]}for(var w in m)if("undefined"==typeof r[w])r[w]=m[w];else if("object"==typeof r[w])for(var y in m[w])"undefined"==typeof r[w][y]&&(r[w][y]=m[w][y]);var b=this;if(b.params=r,b.originalParams=h,b.classNames=[],"undefined"!=typeof a&&"undefined"!=typeof i&&(a=i),("undefined"!=typeof a||(a="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i))&&(b.$=a,b.currentBreakpoint=void 0,b.getActiveBreakpoint=function(){if(!b.params.breakpoints)return!1;var e,a=!1,t=[];for(e in b.params.breakpoints)b.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var i=0;i<t.length;i++)e=t[i],e>=window.innerWidth&&!a&&(a=e);return a||"max"},b.setBreakpoint=function(){var e=b.getActiveBreakpoint();if(e&&b.currentBreakpoint!==e){var a=e in b.params.breakpoints?b.params.breakpoints[e]:b.originalParams;for(var t in a)b.params[t]=a[t];b.currentBreakpoint=e}},b.params.breakpoints&&b.setBreakpoint(),b.container=a(e),0!==b.container.length)){if(b.container.length>1)return void b.container.each(function(){new t(this,r)});b.container[0].swiper=b,b.container.data("swiper",b),b.classNames.push("swiper-container-"+b.params.direction),b.params.freeMode&&b.classNames.push("swiper-container-free-mode"),b.support.flexbox||(b.classNames.push("swiper-container-no-flexbox"),b.params.slidesPerColumn=1),b.params.autoHeight&&b.classNames.push("swiper-container-autoheight"),(b.params.parallax||b.params.watchSlidesVisibility)&&(b.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(b.params.effect)>=0&&(b.support.transforms3d?(b.params.watchSlidesProgress=!0,b.classNames.push("swiper-container-3d")):b.params.effect="slide"),"slide"!==b.params.effect&&b.classNames.push("swiper-container-"+b.params.effect),"cube"===b.params.effect&&(b.params.resistanceRatio=0,b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.centeredSlides=!1,b.params.spaceBetween=0,b.params.virtualTranslate=!0,b.params.setWrapperSize=!1),("fade"===b.params.effect||"flip"===b.params.effect)&&(b.params.slidesPerView=1,b.params.slidesPerColumn=1,b.params.slidesPerGroup=1,b.params.watchSlidesProgress=!0,b.params.spaceBetween=0,b.params.setWrapperSize=!1,"undefined"==typeof f&&(b.params.virtualTranslate=!0)),b.params.grabCursor&&b.support.touch&&(b.params.grabCursor=!1),b.wrapper=b.container.children("."+b.params.wrapperClass),b.params.pagination&&(b.paginationContainer=a(b.params.pagination),"bullets"===b.params.paginationType&&b.params.paginationClickable?b.paginationContainer.addClass("swiper-pagination-clickable"):b.params.paginationClickable=!1,b.paginationContainer.addClass("swiper-pagination-"+b.params.paginationType)),b.isHorizontal=function(){return"horizontal"===b.params.direction},b.rtl=b.isHorizontal()&&("rtl"===b.container[0].dir.toLowerCase()||"rtl"===b.container.css("direction")),b.rtl&&b.classNames.push("swiper-container-rtl"),b.rtl&&(b.wrongRTL="-webkit-box"===b.wrapper.css("display")),b.params.slidesPerColumn>1&&b.classNames.push("swiper-container-multirow"),b.device.android&&b.classNames.push("swiper-container-android"),b.container.addClass(b.classNames.join(" ")),b.translate=0,b.progress=0,b.velocity=0,b.lockSwipeToNext=function(){b.params.allowSwipeToNext=!1},b.lockSwipeToPrev=function(){b.params.allowSwipeToPrev=!1},b.lockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!1},b.unlockSwipeToNext=function(){b.params.allowSwipeToNext=!0},b.unlockSwipeToPrev=function(){b.params.allowSwipeToPrev=!0},b.unlockSwipes=function(){b.params.allowSwipeToNext=b.params.allowSwipeToPrev=!0},b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab"),b.imagesToLoad=[],b.imagesLoaded=0,b.loadImage=function(e,a,t,i,r){function s(){r&&r()}var n;e.complete&&i?s():a?(n=new window.Image,n.onload=s,n.onerror=s,t&&(n.srcset=t),a&&(n.src=a)):s()},b.preloadImages=function(){function e(){"undefined"!=typeof b&&null!==b&&(void 0!==b.imagesLoaded&&b.imagesLoaded++,b.imagesLoaded===b.imagesToLoad.length&&(b.params.updateOnImagesReady&&b.update(),b.emit("onImagesReady",b)))}b.imagesToLoad=b.container.find("img");for(var a=0;a<b.imagesToLoad.length;a++)b.loadImage(b.imagesToLoad[a],b.imagesToLoad[a].currentSrc||b.imagesToLoad[a].getAttribute("src"),b.imagesToLoad[a].srcset||b.imagesToLoad[a].getAttribute("srcset"),!0,e)},b.autoplayTimeoutId=void 0,b.autoplaying=!1,b.autoplayPaused=!1,b.startAutoplay=function(){return"undefined"!=typeof b.autoplayTimeoutId?!1:b.params.autoplay?b.autoplaying?!1:(b.autoplaying=!0,b.emit("onAutoplayStart",b),void n()):!1},b.stopAutoplay=function(e){b.autoplayTimeoutId&&(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplaying=!1,b.autoplayTimeoutId=void 0,b.emit("onAutoplayStop",b))},b.pauseAutoplay=function(e){b.autoplayPaused||(b.autoplayTimeoutId&&clearTimeout(b.autoplayTimeoutId),b.autoplayPaused=!0,0===e?(b.autoplayPaused=!1,n()):b.wrapper.transitionEnd(function(){b&&(b.autoplayPaused=!1,b.autoplaying?n():b.stopAutoplay())}))},b.minTranslate=function(){return-b.snapGrid[0]},b.maxTranslate=function(){return-b.snapGrid[b.snapGrid.length-1]},b.updateAutoHeight=function(){var e=b.slides.eq(b.activeIndex)[0];if("undefined"!=typeof e){var a=e.offsetHeight;a&&b.wrapper.css("height",a+"px")}},b.updateContainerSize=function(){var e,a;e="undefined"!=typeof b.params.width?b.params.width:b.container[0].clientWidth,a="undefined"!=typeof b.params.height?b.params.height:b.container[0].clientHeight,0===e&&b.isHorizontal()||0===a&&!b.isHorizontal()||(e=e-parseInt(b.container.css("padding-left"),10)-parseInt(b.container.css("padding-right"),10),a=a-parseInt(b.container.css("padding-top"),10)-parseInt(b.container.css("padding-bottom"),10),b.width=e,b.height=a,b.size=b.isHorizontal()?b.width:b.height)},b.updateSlidesSize=function(){b.slides=b.wrapper.children("."+b.params.slideClass),b.snapGrid=[],b.slidesGrid=[],b.slidesSizesGrid=[];var e,a=b.params.spaceBetween,t=-b.params.slidesOffsetBefore,i=0,r=0;"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*b.size),b.virtualSize=-a,b.rtl?b.slides.css({marginLeft:"",marginTop:""}):b.slides.css({marginRight:"",marginBottom:""});var n;b.params.slidesPerColumn>1&&(n=Math.floor(b.slides.length/b.params.slidesPerColumn)===b.slides.length/b.params.slidesPerColumn?b.slides.length:Math.ceil(b.slides.length/b.params.slidesPerColumn)*b.params.slidesPerColumn,"auto"!==b.params.slidesPerView&&"row"===b.params.slidesPerColumnFill&&(n=Math.max(n,b.params.slidesPerView*b.params.slidesPerColumn)));var o,l=b.params.slidesPerColumn,p=n/l,d=p-(b.params.slidesPerColumn*p-b.slides.length);for(e=0;e<b.slides.length;e++){o=0;var u=b.slides.eq(e);if(b.params.slidesPerColumn>1){var c,m,f;"column"===b.params.slidesPerColumnFill?(m=Math.floor(e/l),f=e-m*l,(m>d||m===d&&f===l-1)&&++f>=l&&(f=0,m++),c=m+f*n/l,u.css({"-webkit-box-ordinal-group":c,"-moz-box-ordinal-group":c,"-ms-flex-order":c,"-webkit-order":c,order:c})):(f=Math.floor(e/p),m=e-f*p),u.css({"margin-top":0!==f&&b.params.spaceBetween&&b.params.spaceBetween+"px"}).attr("data-swiper-column",m).attr("data-swiper-row",f)}"none"!==u.css("display")&&("auto"===b.params.slidesPerView?(o=b.isHorizontal()?u.outerWidth(!0):u.outerHeight(!0),b.params.roundLengths&&(o=s(o))):(o=(b.size-(b.params.slidesPerView-1)*a)/b.params.slidesPerView,b.params.roundLengths&&(o=s(o)),b.isHorizontal()?b.slides[e].style.width=o+"px":b.slides[e].style.height=o+"px"),b.slides[e].swiperSlideSize=o,b.slidesSizesGrid.push(o),b.params.centeredSlides?(t=t+o/2+i/2+a,0===e&&(t=t-b.size/2-a),Math.abs(t)<.001&&(t=0),r%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t)):(r%b.params.slidesPerGroup===0&&b.snapGrid.push(t),b.slidesGrid.push(t),t=t+o+a),b.virtualSize+=o+a,i=o,r++)}b.virtualSize=Math.max(b.virtualSize,b.size)+b.params.slidesOffsetAfter;var h;if(b.rtl&&b.wrongRTL&&("slide"===b.params.effect||"coverflow"===b.params.effect)&&b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),(!b.support.flexbox||b.params.setWrapperSize)&&(b.isHorizontal()?b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}):b.wrapper.css({height:b.virtualSize+b.params.spaceBetween+"px"})),b.params.slidesPerColumn>1&&(b.virtualSize=(o+b.params.spaceBetween)*n,b.virtualSize=Math.ceil(b.virtualSize/b.params.slidesPerColumn)-b.params.spaceBetween,b.wrapper.css({width:b.virtualSize+b.params.spaceBetween+"px"}),b.params.centeredSlides)){for(h=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<b.virtualSize+b.snapGrid[0]&&h.push(b.snapGrid[e]);b.snapGrid=h}if(!b.params.centeredSlides){for(h=[],e=0;e<b.snapGrid.length;e++)b.snapGrid[e]<=b.virtualSize-b.size&&h.push(b.snapGrid[e]);b.snapGrid=h,Math.floor(b.virtualSize-b.size)>Math.floor(b.snapGrid[b.snapGrid.length-1])&&b.snapGrid.push(b.virtualSize-b.size)}0===b.snapGrid.length&&(b.snapGrid=[0]),0!==b.params.spaceBetween&&(b.isHorizontal()?b.rtl?b.slides.css({marginLeft:a+"px"}):b.slides.css({marginRight:a+"px"}):b.slides.css({marginBottom:a+"px"})),b.params.watchSlidesProgress&&b.updateSlidesOffset()},b.updateSlidesOffset=function(){for(var e=0;e<b.slides.length;e++)b.slides[e].swiperSlideOffset=b.isHorizontal()?b.slides[e].offsetLeft:b.slides[e].offsetTop},b.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=b.translate||0),0!==b.slides.length){"undefined"==typeof b.slides[0].swiperSlideOffset&&b.updateSlidesOffset();var a=-e;b.rtl&&(a=e),b.slides.removeClass(b.params.slideVisibleClass);for(var t=0;t<b.slides.length;t++){var i=b.slides[t],r=(a-i.swiperSlideOffset)/(i.swiperSlideSize+b.params.spaceBetween);if(b.params.watchSlidesVisibility){var s=-(a-i.swiperSlideOffset),n=s+b.slidesSizesGrid[t],o=s>=0&&s<b.size||n>0&&n<=b.size||0>=s&&n>=b.size;o&&b.slides.eq(t).addClass(b.params.slideVisibleClass)}i.progress=b.rtl?-r:r}}},b.updateProgress=function(e){"undefined"==typeof e&&(e=b.translate||0);var a=b.maxTranslate()-b.minTranslate(),t=b.isBeginning,i=b.isEnd;0===a?(b.progress=0,b.isBeginning=b.isEnd=!0):(b.progress=(e-b.minTranslate())/a,b.isBeginning=b.progress<=0,b.isEnd=b.progress>=1),b.isBeginning&&!t&&b.emit("onReachBeginning",b),b.isEnd&&!i&&b.emit("onReachEnd",b),b.params.watchSlidesProgress&&b.updateSlidesProgress(e),b.emit("onProgress",b,b.progress)},b.updateActiveIndex=function(){var e,a,t,i=b.rtl?b.translate:-b.translate;for(a=0;a<b.slidesGrid.length;a++)"undefined"!=typeof b.slidesGrid[a+1]?i>=b.slidesGrid[a]&&i<b.slidesGrid[a+1]-(b.slidesGrid[a+1]-b.slidesGrid[a])/2?e=a:i>=b.slidesGrid[a]&&i<b.slidesGrid[a+1]&&(e=a+1):i>=b.slidesGrid[a]&&(e=a);(0>e||"undefined"==typeof e)&&(e=0),t=Math.floor(e/b.params.slidesPerGroup),t>=b.snapGrid.length&&(t=b.snapGrid.length-1),e!==b.activeIndex&&(b.snapIndex=t,b.previousIndex=b.activeIndex,b.activeIndex=e,b.updateClasses())},b.updateClasses=function(){b.slides.removeClass(b.params.slideActiveClass+" "+b.params.slideNextClass+" "+b.params.slidePrevClass);var e=b.slides.eq(b.activeIndex);if(e.addClass(b.params.slideActiveClass),e.next("."+b.params.slideClass).addClass(b.params.slideNextClass),e.prev("."+b.params.slideClass).addClass(b.params.slidePrevClass),b.paginationContainer&&b.paginationContainer.length>0){var t,i=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length;if(b.params.loop?(t=Math.ceil(b.activeIndex-b.loopedSlides)/b.params.slidesPerGroup,t>b.slides.length-1-2*b.loopedSlides&&(t-=b.slides.length-2*b.loopedSlides),t>i-1&&(t-=i),0>t&&"bullets"!==b.params.paginationType&&(t=i+t)):t="undefined"!=typeof b.snapIndex?b.snapIndex:b.activeIndex||0,"bullets"===b.params.paginationType&&b.bullets&&b.bullets.length>0&&(b.bullets.removeClass(b.params.bulletActiveClass),b.paginationContainer.length>1?b.bullets.each(function(){a(this).index()===t&&a(this).addClass(b.params.bulletActiveClass)}):b.bullets.eq(t).addClass(b.params.bulletActiveClass)),"fraction"===b.params.paginationType&&(b.paginationContainer.find("."+b.params.paginationCurrentClass).text(t+1),b.paginationContainer.find("."+b.params.paginationTotalClass).text(i)),"progress"===b.params.paginationType){var r=(t+1)/i,s=r,n=1;b.isHorizontal()||(n=r,s=1),b.paginationContainer.find("."+b.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+s+") scaleY("+n+")").transition(b.params.speed)}"custom"===b.params.paginationType&&b.params.paginationCustomRender&&b.paginationContainer.html(b.params.paginationCustomRender(b,t+1,i))}b.params.loop||(b.params.prevButton&&(b.isBeginning?(a(b.params.prevButton).addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(a(b.params.prevButton))):(a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(a(b.params.prevButton)))),b.params.nextButton&&(b.isEnd?(a(b.params.nextButton).addClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.disable(a(b.params.nextButton))):(a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.a11y&&b.a11y&&b.a11y.enable(a(b.params.nextButton)))))},b.updatePagination=function(){if(b.params.pagination&&b.paginationContainer&&b.paginationContainer.length>0){var e="";if("bullets"===b.params.paginationType){for(var a=b.params.loop?Math.ceil((b.slides.length-2*b.loopedSlides)/b.params.slidesPerGroup):b.snapGrid.length,t=0;a>t;t++)e+=b.params.paginationBulletRender?b.params.paginationBulletRender(t,b.params.bulletClass):"<"+b.params.paginationElement+' class="'+b.params.bulletClass+'"></'+b.params.paginationElement+">";b.paginationContainer.html(e),b.bullets=b.paginationContainer.find("."+b.params.bulletClass),b.params.paginationClickable&&b.params.a11y&&b.a11y&&b.a11y.initPagination()}"fraction"===b.params.paginationType&&(e=b.params.paginationFractionRender?b.params.paginationFractionRender(b,b.params.paginationCurrentClass,b.params.paginationTotalClass):'<span class="'+b.params.paginationCurrentClass+'"></span> / <span class="'+b.params.paginationTotalClass+'"></span>',b.paginationContainer.html(e)),"progress"===b.params.paginationType&&(e=b.params.paginationProgressRender?b.params.paginationProgressRender(b,b.params.paginationProgressbarClass):'<span class="'+b.params.paginationProgressbarClass+'"></span>',b.paginationContainer.html(e))}},b.update=function(e){function a(){i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate()),b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses()}if(b.updateContainerSize(),b.updateSlidesSize(),b.updateProgress(),b.updatePagination(),b.updateClasses(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),e){var t,i;b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode?(a(),b.params.autoHeight&&b.updateAutoHeight()):(t=("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0),t||a())}else b.params.autoHeight&&b.updateAutoHeight()},b.onResize=function(e){b.params.breakpoints&&b.setBreakpoint();var a=b.params.allowSwipeToPrev,t=b.params.allowSwipeToNext;if(b.params.allowSwipeToPrev=b.params.allowSwipeToNext=!0,b.updateContainerSize(),b.updateSlidesSize(),("auto"===b.params.slidesPerView||b.params.freeMode||e)&&b.updatePagination(),b.params.scrollbar&&b.scrollbar&&b.scrollbar.set(),b.controller&&b.controller.spline&&(b.controller.spline=void 0),b.params.freeMode){var i=Math.min(Math.max(b.translate,b.maxTranslate()),b.minTranslate());b.setWrapperTranslate(i),b.updateActiveIndex(),b.updateClasses(),b.params.autoHeight&&b.updateAutoHeight()}else b.updateClasses(),("auto"===b.params.slidesPerView||b.params.slidesPerView>1)&&b.isEnd&&!b.params.centeredSlides?b.slideTo(b.slides.length-1,0,!1,!0):b.slideTo(b.activeIndex,0,!1,!0);b.params.allowSwipeToPrev=a,b.params.allowSwipeToNext=t};var T=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?T=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(T=["MSPointerDown","MSPointerMove","MSPointerUp"]),b.touchEvents={start:b.support.touch||!b.params.simulateTouch?"touchstart":T[0],move:b.support.touch||!b.params.simulateTouch?"touchmove":T[1],end:b.support.touch||!b.params.simulateTouch?"touchend":T[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===b.params.touchEventsTarget?b.container:b.wrapper).addClass("swiper-wp8-"+b.params.direction),b.initEvents=function(e){var t=e?"off":"on",i=e?"removeEventListener":"addEventListener",s="container"===b.params.touchEventsTarget?b.container[0]:b.wrapper[0],n=b.support.touch?s:document,o=b.params.nested?!0:!1;b.browser.ie?(s[i](b.touchEvents.start,b.onTouchStart,!1),n[i](b.touchEvents.move,b.onTouchMove,o),n[i](b.touchEvents.end,b.onTouchEnd,!1)):(b.support.touch&&(s[i](b.touchEvents.start,b.onTouchStart,!1),s[i](b.touchEvents.move,b.onTouchMove,o),s[i](b.touchEvents.end,b.onTouchEnd,!1)),!r.simulateTouch||b.device.ios||b.device.android||(s[i]("mousedown",b.onTouchStart,!1),document[i]("mousemove",b.onTouchMove,o),document[i]("mouseup",b.onTouchEnd,!1))),window[i]("resize",b.onResize),b.params.nextButton&&(a(b.params.nextButton)[t]("click",b.onClickNext),b.params.a11y&&b.a11y&&a(b.params.nextButton)[t]("keydown",b.a11y.onEnterKey)),b.params.prevButton&&(a(b.params.prevButton)[t]("click",b.onClickPrev),b.params.a11y&&b.a11y&&a(b.params.prevButton)[t]("keydown",b.a11y.onEnterKey)),b.params.pagination&&b.params.paginationClickable&&(a(b.paginationContainer)[t]("click","."+b.params.bulletClass,b.onClickIndex),b.params.a11y&&b.a11y&&a(b.paginationContainer)[t]("keydown","."+b.params.bulletClass,b.a11y.onEnterKey)),(b.params.preventClicks||b.params.preventClicksPropagation)&&s[i]("click",b.preventClicks,!0)},b.attachEvents=function(e){b.initEvents()},b.detachEvents=function(){b.initEvents(!0)},b.allowClick=!0,b.preventClicks=function(e){b.allowClick||(b.params.preventClicks&&e.preventDefault(),b.params.preventClicksPropagation&&b.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},b.onClickNext=function(e){e.preventDefault(),(!b.isEnd||b.params.loop)&&b.slideNext()},b.onClickPrev=function(e){e.preventDefault(),(!b.isBeginning||b.params.loop)&&b.slidePrev()},b.onClickIndex=function(e){e.preventDefault();var t=a(this).index()*b.params.slidesPerGroup;b.params.loop&&(t+=b.loopedSlides),b.slideTo(t)},b.updateClickedSlide=function(e){var t=o(e,"."+b.params.slideClass),i=!1;if(t)for(var r=0;r<b.slides.length;r++)b.slides[r]===t&&(i=!0);if(!t||!i)return b.clickedSlide=void 0,void(b.clickedIndex=void 0);if(b.clickedSlide=t,b.clickedIndex=a(t).index(),b.params.slideToClickedSlide&&void 0!==b.clickedIndex&&b.clickedIndex!==b.activeIndex){var s,n=b.clickedIndex;if(b.params.loop){if(b.animating)return;s=a(b.clickedSlide).attr("data-swiper-slide-index"),b.params.centeredSlides?n<b.loopedSlides-b.params.slidesPerView/2||n>b.slides.length-b.loopedSlides+b.params.slidesPerView/2?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n):n>b.slides.length-b.params.slidesPerView?(b.fixLoop(),n=b.wrapper.children("."+b.params.slideClass+'[data-swiper-slide-index="'+s+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){b.slideTo(n)},0)):b.slideTo(n)}else b.slideTo(n)}};var x,S,C,z,M,P,E,k,I,L,D="input, select, textarea, button",H=Date.now(),B=[];b.animating=!1,b.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var A,G;if(b.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),A="touchstart"===e.type,A||!("which"in e)||3!==e.which){if(b.params.noSwiping&&o(e,"."+b.params.noSwipingClass))return void(b.allowClick=!0);if(!b.params.swipeHandler||o(e,b.params.swipeHandler)){var t=b.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,i=b.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(b.device.ios&&b.params.iOSEdgeSwipeDetection&&t<=b.params.iOSEdgeSwipeThreshold)){if(x=!0,S=!1,C=!0,M=void 0,G=void 0,b.touches.startX=t,b.touches.startY=i,z=Date.now(),b.allowClick=!0,b.updateContainerSize(),b.swipeDirection=void 0,b.params.threshold>0&&(k=!1),"touchstart"!==e.type){var r=!0;a(e.target).is(D)&&(r=!1),document.activeElement&&a(document.activeElement).is(D)&&document.activeElement.blur(),r&&e.preventDefault()}b.emit("onTouchStart",b,e)}}}},b.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!(A&&"mousemove"===e.type||e.preventedByNestedSwiper)){if(b.params.onlyExternal)return b.allowClick=!1,void(x&&(b.touches.startX=b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.startY=b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,z=Date.now()));if(A&&document.activeElement&&e.target===document.activeElement&&a(e.target).is(D))return S=!0,void(b.allowClick=!1);if(C&&b.emit("onTouchMove",b,e),!(e.targetTouches&&e.targetTouches.length>1)){if(b.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,b.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,"undefined"==typeof M){var t=180*Math.atan2(Math.abs(b.touches.currentY-b.touches.startY),Math.abs(b.touches.currentX-b.touches.startX))/Math.PI;M=b.isHorizontal()?t>b.params.touchAngle:90-t>b.params.touchAngle}if(M&&b.emit("onTouchMoveOpposite",b,e),"undefined"==typeof G&&b.browser.ieTouch&&(b.touches.currentX!==b.touches.startX||b.touches.currentY!==b.touches.startY)&&(G=!0),x){if(M)return void(x=!1);if(G||!b.browser.ieTouch){b.allowClick=!1,b.emit("onSliderMove",b,e),e.preventDefault(),b.params.touchMoveStopPropagation&&!b.params.nested&&e.stopPropagation(),S||(r.loop&&b.fixLoop(),E=b.getWrapperTranslate(),b.setWrapperTransition(0),b.animating&&b.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),b.params.autoplay&&b.autoplaying&&(b.params.autoplayDisableOnInteraction?b.stopAutoplay():b.pauseAutoplay()),L=!1,b.params.grabCursor&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grabbing",b.container[0].style.cursor="-moz-grabbin",b.container[0].style.cursor="grabbing")),S=!0;var i=b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY;i*=b.params.touchRatio,b.rtl&&(i=-i),b.swipeDirection=i>0?"prev":"next",P=i+E;var s=!0;if(i>0&&P>b.minTranslate()?(s=!1,b.params.resistance&&(P=b.minTranslate()-1+Math.pow(-b.minTranslate()+E+i,b.params.resistanceRatio))):0>i&&P<b.maxTranslate()&&(s=!1,b.params.resistance&&(P=b.maxTranslate()+1-Math.pow(b.maxTranslate()-E-i,b.params.resistanceRatio))),s&&(e.preventedByNestedSwiper=!0),!b.params.allowSwipeToNext&&"next"===b.swipeDirection&&E>P&&(P=E),!b.params.allowSwipeToPrev&&"prev"===b.swipeDirection&&P>E&&(P=E),b.params.followFinger){if(b.params.threshold>0){if(!(Math.abs(i)>b.params.threshold||k))return void(P=E);if(!k)return k=!0,b.touches.startX=b.touches.currentX,b.touches.startY=b.touches.currentY,P=E,void(b.touches.diff=b.isHorizontal()?b.touches.currentX-b.touches.startX:b.touches.currentY-b.touches.startY)}(b.params.freeMode||b.params.watchSlidesProgress)&&b.updateActiveIndex(),b.params.freeMode&&(0===B.length&&B.push({position:b.touches[b.isHorizontal()?"startX":"startY"],time:z}),B.push({position:b.touches[b.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),b.updateProgress(P),b.setWrapperTranslate(P)}}}}}},b.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),C&&b.emit("onTouchEnd",b,e),C=!1,x){b.params.grabCursor&&S&&x&&(b.container[0].style.cursor="move",b.container[0].style.cursor="-webkit-grab",b.container[0].style.cursor="-moz-grab",b.container[0].style.cursor="grab");var t=Date.now(),i=t-z;if(b.allowClick&&(b.updateClickedSlide(e),b.emit("onTap",b,e),300>i&&t-H>300&&(I&&clearTimeout(I),I=setTimeout(function(){b&&(b.params.paginationHide&&b.paginationContainer.length>0&&!a(e.target).hasClass(b.params.bulletClass)&&b.paginationContainer.toggleClass(b.params.paginationHiddenClass),
b.emit("onClick",b,e))},300)),300>i&&300>t-H&&(I&&clearTimeout(I),b.emit("onDoubleTap",b,e))),H=Date.now(),setTimeout(function(){b&&(b.allowClick=!0)},0),!x||!S||!b.swipeDirection||0===b.touches.diff||P===E)return void(x=S=!1);x=S=!1;var r;if(r=b.params.followFinger?b.rtl?b.translate:-b.translate:-P,b.params.freeMode){if(r<-b.minTranslate())return void b.slideTo(b.activeIndex);if(r>-b.maxTranslate())return void(b.slides.length<b.snapGrid.length?b.slideTo(b.snapGrid.length-1):b.slideTo(b.slides.length-1));if(b.params.freeModeMomentum){if(B.length>1){var s=B.pop(),n=B.pop(),o=s.position-n.position,l=s.time-n.time;b.velocity=o/l,b.velocity=b.velocity/2,Math.abs(b.velocity)<b.params.freeModeMinimumVelocity&&(b.velocity=0),(l>150||(new window.Date).getTime()-s.time>300)&&(b.velocity=0)}else b.velocity=0;B.length=0;var p=1e3*b.params.freeModeMomentumRatio,d=b.velocity*p,u=b.translate+d;b.rtl&&(u=-u);var c,m=!1,f=20*Math.abs(b.velocity)*b.params.freeModeMomentumBounceRatio;if(u<b.maxTranslate())b.params.freeModeMomentumBounce?(u+b.maxTranslate()<-f&&(u=b.maxTranslate()-f),c=b.maxTranslate(),m=!0,L=!0):u=b.maxTranslate();else if(u>b.minTranslate())b.params.freeModeMomentumBounce?(u-b.minTranslate()>f&&(u=b.minTranslate()+f),c=b.minTranslate(),m=!0,L=!0):u=b.minTranslate();else if(b.params.freeModeSticky){var h,g=0;for(g=0;g<b.snapGrid.length;g+=1)if(b.snapGrid[g]>-u){h=g;break}u=Math.abs(b.snapGrid[h]-u)<Math.abs(b.snapGrid[h-1]-u)||"next"===b.swipeDirection?b.snapGrid[h]:b.snapGrid[h-1],b.rtl||(u=-u)}if(0!==b.velocity)p=b.rtl?Math.abs((-u-b.translate)/b.velocity):Math.abs((u-b.translate)/b.velocity);else if(b.params.freeModeSticky)return void b.slideReset();b.params.freeModeMomentumBounce&&m?(b.updateProgress(c),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating=!0,b.wrapper.transitionEnd(function(){b&&L&&(b.emit("onMomentumBounce",b),b.setWrapperTransition(b.params.speed),b.setWrapperTranslate(c),b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))})):b.velocity?(b.updateProgress(u),b.setWrapperTransition(p),b.setWrapperTranslate(u),b.onTransitionStart(),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd()}))):b.updateProgress(u),b.updateActiveIndex()}return void((!b.params.freeModeMomentum||i>=b.params.longSwipesMs)&&(b.updateProgress(),b.updateActiveIndex()))}var v,w=0,y=b.slidesSizesGrid[0];for(v=0;v<b.slidesGrid.length;v+=b.params.slidesPerGroup)"undefined"!=typeof b.slidesGrid[v+b.params.slidesPerGroup]?r>=b.slidesGrid[v]&&r<b.slidesGrid[v+b.params.slidesPerGroup]&&(w=v,y=b.slidesGrid[v+b.params.slidesPerGroup]-b.slidesGrid[v]):r>=b.slidesGrid[v]&&(w=v,y=b.slidesGrid[b.slidesGrid.length-1]-b.slidesGrid[b.slidesGrid.length-2]);var T=(r-b.slidesGrid[w])/y;if(i>b.params.longSwipesMs){if(!b.params.longSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&(T>=b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w)),"prev"===b.swipeDirection&&(T>1-b.params.longSwipesRatio?b.slideTo(w+b.params.slidesPerGroup):b.slideTo(w))}else{if(!b.params.shortSwipes)return void b.slideTo(b.activeIndex);"next"===b.swipeDirection&&b.slideTo(w+b.params.slidesPerGroup),"prev"===b.swipeDirection&&b.slideTo(w)}}},b._slideTo=function(e,a){return b.slideTo(e,a,!0,!0)},b.slideTo=function(e,a,t,i){"undefined"==typeof t&&(t=!0),"undefined"==typeof e&&(e=0),0>e&&(e=0),b.snapIndex=Math.floor(e/b.params.slidesPerGroup),b.snapIndex>=b.snapGrid.length&&(b.snapIndex=b.snapGrid.length-1);var r=-b.snapGrid[b.snapIndex];b.params.autoplay&&b.autoplaying&&(i||!b.params.autoplayDisableOnInteraction?b.pauseAutoplay(a):b.stopAutoplay()),b.updateProgress(r);for(var s=0;s<b.slidesGrid.length;s++)-Math.floor(100*r)>=Math.floor(100*b.slidesGrid[s])&&(e=s);return!b.params.allowSwipeToNext&&r<b.translate&&r<b.minTranslate()?!1:!b.params.allowSwipeToPrev&&r>b.translate&&r>b.maxTranslate()&&(b.activeIndex||0)!==e?!1:("undefined"==typeof a&&(a=b.params.speed),b.previousIndex=b.activeIndex||0,b.activeIndex=e,b.rtl&&-r===b.translate||!b.rtl&&r===b.translate?(b.params.autoHeight&&b.updateAutoHeight(),b.updateClasses(),"slide"!==b.params.effect&&b.setWrapperTranslate(r),!1):(b.updateClasses(),b.onTransitionStart(t),0===a?(b.setWrapperTranslate(r),b.setWrapperTransition(0),b.onTransitionEnd(t)):(b.setWrapperTranslate(r),b.setWrapperTransition(a),b.animating||(b.animating=!0,b.wrapper.transitionEnd(function(){b&&b.onTransitionEnd(t)}))),!0))},b.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),b.params.autoHeight&&b.updateAutoHeight(),b.lazy&&b.lazy.onTransitionStart(),e&&(b.emit("onTransitionStart",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeStart",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextStart",b):b.emit("onSlidePrevStart",b)))},b.onTransitionEnd=function(e){b.animating=!1,b.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),b.lazy&&b.lazy.onTransitionEnd(),e&&(b.emit("onTransitionEnd",b),b.activeIndex!==b.previousIndex&&(b.emit("onSlideChangeEnd",b),b.activeIndex>b.previousIndex?b.emit("onSlideNextEnd",b):b.emit("onSlidePrevEnd",b))),b.params.hashnav&&b.hashnav&&b.hashnav.setHash()},b.slideNext=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)}return b.slideTo(b.activeIndex+b.params.slidesPerGroup,a,e,t)},b._slideNext=function(e){return b.slideNext(!0,e,!0)},b.slidePrev=function(e,a,t){if(b.params.loop){if(b.animating)return!1;b.fixLoop();b.container[0].clientLeft;return b.slideTo(b.activeIndex-1,a,e,t)}return b.slideTo(b.activeIndex-1,a,e,t)},b._slidePrev=function(e){return b.slidePrev(!0,e,!0)},b.slideReset=function(e,a,t){return b.slideTo(b.activeIndex,a,e)},b.setWrapperTransition=function(e,a){b.wrapper.transition(e),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTransition(e),b.params.parallax&&b.parallax&&b.parallax.setTransition(e),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTransition(e),b.params.control&&b.controller&&b.controller.setTransition(e,a),b.emit("onSetTransition",b,e)},b.setWrapperTranslate=function(e,a,t){var i=0,r=0,n=0;b.isHorizontal()?i=b.rtl?-e:e:r=e,b.params.roundLengths&&(i=s(i),r=s(r)),b.params.virtualTranslate||(b.support.transforms3d?b.wrapper.transform("translate3d("+i+"px, "+r+"px, "+n+"px)"):b.wrapper.transform("translate("+i+"px, "+r+"px)")),b.translate=b.isHorizontal()?i:r;var o,l=b.maxTranslate()-b.minTranslate();o=0===l?0:(e-b.minTranslate())/l,o!==b.progress&&b.updateProgress(e),a&&b.updateActiveIndex(),"slide"!==b.params.effect&&b.effects[b.params.effect]&&b.effects[b.params.effect].setTranslate(b.translate),b.params.parallax&&b.parallax&&b.parallax.setTranslate(b.translate),b.params.scrollbar&&b.scrollbar&&b.scrollbar.setTranslate(b.translate),b.params.control&&b.controller&&b.controller.setTranslate(b.translate,t),b.emit("onSetTranslate",b,b.translate)},b.getTranslate=function(e,a){var t,i,r,s;return"undefined"==typeof a&&(a="x"),b.params.virtualTranslate?b.rtl?-b.translate:b.translate:(r=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(i=r.transform||r.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),s=new window.WebKitCSSMatrix("none"===i?"":i)):(s=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=s.toString().split(",")),"x"===a&&(i=window.WebKitCSSMatrix?s.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(i=window.WebKitCSSMatrix?s.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),b.rtl&&i&&(i=-i),i||0)},b.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=b.isHorizontal()?"x":"y"),b.getTranslate(b.wrapper[0],e)},b.observers=[],b.initObservers=function(){if(b.params.observeParents)for(var e=b.container.parents(),a=0;a<e.length;a++)l(e[a]);l(b.container[0],{childList:!1}),l(b.wrapper[0],{attributes:!1})},b.disconnectObservers=function(){for(var e=0;e<b.observers.length;e++)b.observers[e].disconnect();b.observers=[]},b.createLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove();var e=b.wrapper.children("."+b.params.slideClass);"auto"!==b.params.slidesPerView||b.params.loopedSlides||(b.params.loopedSlides=e.length),b.loopedSlides=parseInt(b.params.loopedSlides||b.params.slidesPerView,10),b.loopedSlides=b.loopedSlides+b.params.loopAdditionalSlides,b.loopedSlides>e.length&&(b.loopedSlides=e.length);var t,i=[],r=[];for(e.each(function(t,s){var n=a(this);t<b.loopedSlides&&r.push(s),t<e.length&&t>=e.length-b.loopedSlides&&i.push(s),n.attr("data-swiper-slide-index",t)}),t=0;t<r.length;t++)b.wrapper.append(a(r[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass));for(t=i.length-1;t>=0;t--)b.wrapper.prepend(a(i[t].cloneNode(!0)).addClass(b.params.slideDuplicateClass))},b.destroyLoop=function(){b.wrapper.children("."+b.params.slideClass+"."+b.params.slideDuplicateClass).remove(),b.slides.removeAttr("data-swiper-slide-index")},b.fixLoop=function(){var e;b.activeIndex<b.loopedSlides?(e=b.slides.length-3*b.loopedSlides+b.activeIndex,e+=b.loopedSlides,b.slideTo(e,0,!1,!0)):("auto"===b.params.slidesPerView&&b.activeIndex>=2*b.loopedSlides||b.activeIndex>b.slides.length-2*b.params.slidesPerView)&&(e=-b.slides.length+b.activeIndex+b.loopedSlides,e+=b.loopedSlides,b.slideTo(e,0,!1,!0))},b.appendSlide=function(e){if(b.params.loop&&b.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&b.wrapper.append(e[a]);else b.wrapper.append(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0)},b.prependSlide=function(e){b.params.loop&&b.destroyLoop();var a=b.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&b.wrapper.prepend(e[t]);a=b.activeIndex+e.length}else b.wrapper.prepend(e);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.slideTo(a,0,!1)},b.removeSlide=function(e){b.params.loop&&(b.destroyLoop(),b.slides=b.wrapper.children("."+b.params.slideClass));var a,t=b.activeIndex;if("object"==typeof e&&e.length){for(var i=0;i<e.length;i++)a=e[i],b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--;t=Math.max(t,0)}else a=e,b.slides[a]&&b.slides.eq(a).remove(),t>a&&t--,t=Math.max(t,0);b.params.loop&&b.createLoop(),b.params.observer&&b.support.observer||b.update(!0),b.params.loop?b.slideTo(t+b.loopedSlides,0,!1):b.slideTo(t,0,!1)},b.removeAllSlides=function(){for(var e=[],a=0;a<b.slides.length;a++)e.push(a);b.removeSlide(e)},b.effects={fade:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var a=b.slides.eq(e),t=a[0].swiperSlideOffset,i=-t;b.params.virtualTranslate||(i-=b.translate);var r=0;b.isHorizontal()||(r=i,i=0);var s=b.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:s}).transform("translate3d("+i+"px, "+r+"px, 0px)")}},setTransition:function(e){if(b.slides.transition(e),b.params.virtualTranslate&&0!==e){var a=!1;b.slides.transitionEnd(function(){if(!a&&b){a=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)b.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<b.slides.length;e++){var t=b.slides.eq(e),i=t[0].progress;b.params.flip.limitRotation&&(i=Math.max(Math.min(t[0].progress,1),-1));var r=t[0].swiperSlideOffset,s=-180*i,n=s,o=0,l=-r,p=0;if(b.isHorizontal()?b.rtl&&(n=-n):(p=l,l=0,o=-n,n=0),t[0].style.zIndex=-Math.abs(Math.round(i))+b.slides.length,b.params.flip.slideShadows){var d=b.isHorizontal()?t.find(".swiper-slide-shadow-left"):t.find(".swiper-slide-shadow-top"),u=b.isHorizontal()?t.find(".swiper-slide-shadow-right"):t.find(".swiper-slide-shadow-bottom");0===d.length&&(d=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),t.append(d)),0===u.length&&(u=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),t.append(u)),d.length&&(d[0].style.opacity=Math.max(-i,0)),u.length&&(u[0].style.opacity=Math.max(i,0))}t.transform("translate3d("+l+"px, "+p+"px, 0px) rotateX("+o+"deg) rotateY("+n+"deg)")}},setTransition:function(e){if(b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.virtualTranslate&&0!==e){var t=!1;b.slides.eq(b.activeIndex).transitionEnd(function(){if(!t&&b&&a(this).hasClass(b.params.slideActiveClass)){t=!0,b.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],i=0;i<e.length;i++)b.wrapper.trigger(e[i])}})}}},cube:{setTranslate:function(){var e,t=0;b.params.cube.shadow&&(b.isHorizontal()?(e=b.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.wrapper.append(e)),e.css({height:b.width+"px"})):(e=b.container.find(".swiper-cube-shadow"),0===e.length&&(e=a('<div class="swiper-cube-shadow"></div>'),b.container.append(e))));for(var i=0;i<b.slides.length;i++){var r=b.slides.eq(i),s=90*i,n=Math.floor(s/360);b.rtl&&(s=-s,n=Math.floor(-s/360));var o=Math.max(Math.min(r[0].progress,1),-1),l=0,p=0,d=0;i%4===0?(l=4*-n*b.size,d=0):(i-1)%4===0?(l=0,d=4*-n*b.size):(i-2)%4===0?(l=b.size+4*n*b.size,d=b.size):(i-3)%4===0&&(l=-b.size,d=3*b.size+4*b.size*n),b.rtl&&(l=-l),b.isHorizontal()||(p=l,l=0);var u="rotateX("+(b.isHorizontal()?0:-s)+"deg) rotateY("+(b.isHorizontal()?s:0)+"deg) translate3d("+l+"px, "+p+"px, "+d+"px)";if(1>=o&&o>-1&&(t=90*i+90*o,b.rtl&&(t=90*-i-90*o)),r.transform(u),b.params.cube.slideShadows){var c=b.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=b.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-o,0)),m.length&&(m[0].style.opacity=Math.max(o,0))}}if(b.wrapper.css({"-webkit-transform-origin":"50% 50% -"+b.size/2+"px","-moz-transform-origin":"50% 50% -"+b.size/2+"px","-ms-transform-origin":"50% 50% -"+b.size/2+"px","transform-origin":"50% 50% -"+b.size/2+"px"}),b.params.cube.shadow)if(b.isHorizontal())e.transform("translate3d(0px, "+(b.width/2+b.params.cube.shadowOffset)+"px, "+-b.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+b.params.cube.shadowScale+")");else{var f=Math.abs(t)-90*Math.floor(Math.abs(t)/90),h=1.5-(Math.sin(2*f*Math.PI/360)/2+Math.cos(2*f*Math.PI/360)/2),g=b.params.cube.shadowScale,v=b.params.cube.shadowScale/h,w=b.params.cube.shadowOffset;e.transform("scale3d("+g+", 1, "+v+") translate3d(0px, "+(b.height/2+w)+"px, "+-b.height/2/v+"px) rotateX(-90deg)")}var y=b.isSafari||b.isUiWebView?-b.size/2:0;b.wrapper.transform("translate3d(0px,0,"+y+"px) rotateX("+(b.isHorizontal()?0:t)+"deg) rotateY("+(b.isHorizontal()?-t:0)+"deg)")},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),b.params.cube.shadow&&!b.isHorizontal()&&b.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=b.translate,t=b.isHorizontal()?-e+b.width/2:-e+b.height/2,i=b.isHorizontal()?b.params.coverflow.rotate:-b.params.coverflow.rotate,r=b.params.coverflow.depth,s=0,n=b.slides.length;n>s;s++){var o=b.slides.eq(s),l=b.slidesSizesGrid[s],p=o[0].swiperSlideOffset,d=(t-p-l/2)/l*b.params.coverflow.modifier,u=b.isHorizontal()?i*d:0,c=b.isHorizontal()?0:i*d,m=-r*Math.abs(d),f=b.isHorizontal()?0:b.params.coverflow.stretch*d,h=b.isHorizontal()?b.params.coverflow.stretch*d:0;Math.abs(h)<.001&&(h=0),Math.abs(f)<.001&&(f=0),Math.abs(m)<.001&&(m=0),Math.abs(u)<.001&&(u=0),Math.abs(c)<.001&&(c=0);var g="translate3d("+h+"px,"+f+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+u+"deg)";if(o.transform(g),o[0].style.zIndex=-Math.abs(Math.round(d))+1,b.params.coverflow.slideShadows){var v=b.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),w=b.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===v.length&&(v=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"left":"top")+'"></div>'),o.append(v)),0===w.length&&(w=a('<div class="swiper-slide-shadow-'+(b.isHorizontal()?"right":"bottom")+'"></div>'),o.append(w)),v.length&&(v[0].style.opacity=d>0?d:0),w.length&&(w[0].style.opacity=-d>0?-d:0)}}if(b.browser.ie){var y=b.wrapper[0].style;y.perspectiveOrigin=t+"px 50%"}},setTransition:function(e){b.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},b.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,t){if("undefined"!=typeof e&&("undefined"==typeof t&&(t=!0),0!==b.slides.length)){var i=b.slides.eq(e),r=i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!i.hasClass("swiper-lazy")||i.hasClass("swiper-lazy-loaded")||i.hasClass("swiper-lazy-loading")||(r=r.add(i[0])),0!==r.length&&r.each(function(){var e=a(this);e.addClass("swiper-lazy-loading");var r=e.attr("data-background"),s=e.attr("data-src"),n=e.attr("data-srcset");b.loadImage(e[0],s||r,n,!1,function(){if(r?(e.css("background-image","url("+r+")"),e.removeAttr("data-background")):(n&&(e.attr("srcset",n),e.removeAttr("data-srcset")),s&&(e.attr("src",s),e.removeAttr("data-src"))),e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),i.find(".swiper-lazy-preloader, .preloader").remove(),b.params.loop&&t){var a=i.attr("data-swiper-slide-index");if(i.hasClass(b.params.slideDuplicateClass)){var o=b.wrapper.children('[data-swiper-slide-index="'+a+'"]:not(.'+b.params.slideDuplicateClass+")");b.lazy.loadImageInSlide(o.index(),!1)}else{var l=b.wrapper.children("."+b.params.slideDuplicateClass+'[data-swiper-slide-index="'+a+'"]');b.lazy.loadImageInSlide(l.index(),!1)}}b.emit("onLazyImageReady",b,i[0],e[0])}),b.emit("onLazyImageLoad",b,i[0],e[0])})}},load:function(){var e;if(b.params.watchSlidesVisibility)b.wrapper.children("."+b.params.slideVisibleClass).each(function(){b.lazy.loadImageInSlide(a(this).index())});else if(b.params.slidesPerView>1)for(e=b.activeIndex;e<b.activeIndex+b.params.slidesPerView;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);else b.lazy.loadImageInSlide(b.activeIndex);if(b.params.lazyLoadingInPrevNext)if(b.params.slidesPerView>1||b.params.lazyLoadingInPrevNextAmount&&b.params.lazyLoadingInPrevNextAmount>1){var t=b.params.lazyLoadingInPrevNextAmount,i=b.params.slidesPerView,r=Math.min(b.activeIndex+i+Math.max(t,i),b.slides.length),s=Math.max(b.activeIndex-Math.max(i,t),0);for(e=b.activeIndex+b.params.slidesPerView;r>e;e++)b.slides[e]&&b.lazy.loadImageInSlide(e);for(e=s;e<b.activeIndex;e++)b.slides[e]&&b.lazy.loadImageInSlide(e)}else{var n=b.wrapper.children("."+b.params.slideNextClass);n.length>0&&b.lazy.loadImageInSlide(n.index());var o=b.wrapper.children("."+b.params.slidePrevClass);o.length>0&&b.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){b.params.lazyLoading&&(b.params.lazyLoadingOnTransitionStart||!b.params.lazyLoadingOnTransitionStart&&!b.lazy.initialImageLoaded)&&b.lazy.load()},onTransitionEnd:function(){b.params.lazyLoading&&!b.params.lazyLoadingOnTransitionStart&&b.lazy.load()}},b.scrollbar={isTouched:!1,setDragPosition:function(e){var a=b.scrollbar,t=b.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,i=t-a.track.offset()[b.isHorizontal()?"left":"top"]-a.dragSize/2,r=-b.minTranslate()*a.moveDivider,s=-b.maxTranslate()*a.moveDivider;r>i?i=r:i>s&&(i=s),i=-i/a.moveDivider,b.updateProgress(i),b.setWrapperTranslate(i,!0)},dragStart:function(e){var a=b.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),b.params.scrollbarHide&&a.track.css("opacity",1),b.wrapper.transition(100),a.drag.transition(100),b.emit("onScrollbarDragStart",b)},dragMove:function(e){var a=b.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),b.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),b.emit("onScrollbarDragMove",b))},dragEnd:function(e){var a=b.scrollbar;a.isTouched&&(a.isTouched=!1,b.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),b.emit("onScrollbarDragEnd",b),b.params.scrollbarSnapOnRelease&&b.slideReset())},enableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).on(b.touchEvents.start,e.dragStart),a(t).on(b.touchEvents.move,e.dragMove),a(t).on(b.touchEvents.end,e.dragEnd)},disableDraggable:function(){var e=b.scrollbar,t=b.support.touch?e.track:document;a(e.track).off(b.touchEvents.start,e.dragStart),a(t).off(b.touchEvents.move,e.dragMove),a(t).off(b.touchEvents.end,e.dragEnd)},set:function(){if(b.params.scrollbar){var e=b.scrollbar;e.track=a(b.params.scrollbar),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=a('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=b.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=b.size/b.virtualSize,e.moveDivider=e.divider*(e.trackSize/b.size),e.dragSize=e.trackSize*e.divider,b.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",b.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(b.params.scrollbar){var e,a=b.scrollbar,t=(b.translate||0,a.dragSize);e=(a.trackSize-a.dragSize)*b.progress,b.rtl&&b.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):0>e?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),b.isHorizontal()?(b.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(b.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),b.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){b.params.scrollbar&&b.scrollbar.drag.transition(e)}},b.controller={LinearSpline:function(e,a){this.x=e,this.y=a,this.lastIndex=e.length-1;var t,i;this.x.length;this.interpolate=function(e){return e?(i=r(this.x,e),t=i-1,(e-this.x[t])*(this.y[i]-this.y[t])/(this.x[i]-this.x[t])+this.y[t]):0};var r=function(){var e,a,t;return function(i,r){for(a=-1,e=i.length;e-a>1;)i[t=e+a>>1]<=r?a=t:e=t;return e}}()},getInterpolateFunction:function(e){b.controller.spline||(b.controller.spline=b.params.loop?new b.controller.LinearSpline(b.slidesGrid,e.slidesGrid):new b.controller.LinearSpline(b.snapGrid,e.snapGrid))},setTranslate:function(e,a){function i(a){e=a.rtl&&"horizontal"===a.params.direction?-b.translate:b.translate,"slide"===b.params.controlBy&&(b.controller.getInterpolateFunction(a),s=-b.controller.spline.interpolate(-e)),s&&"container"!==b.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(b.maxTranslate()-b.minTranslate()),s=(e-b.minTranslate())*r+a.minTranslate()),b.params.controlInverse&&(s=a.maxTranslate()-s),a.updateProgress(s),a.setWrapperTranslate(s,!1,b),a.updateActiveIndex()}var r,s,n=b.params.control;if(b.isArray(n))for(var o=0;o<n.length;o++)n[o]!==a&&n[o]instanceof t&&i(n[o]);else n instanceof t&&a!==n&&i(n)},setTransition:function(e,a){function i(a){a.setWrapperTransition(e,b),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){s&&(a.params.loop&&"slide"===b.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,s=b.params.control;if(b.isArray(s))for(r=0;r<s.length;r++)s[r]!==a&&s[r]instanceof t&&i(s[r]);else s instanceof t&&a!==s&&i(s)}},b.hashnav={init:function(){if(b.params.hashnav){b.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var a=0,t=0,i=b.slides.length;i>t;t++){var r=b.slides.eq(t),s=r.attr("data-hash");if(s===e&&!r.hasClass(b.params.slideDuplicateClass)){var n=r.index();b.slideTo(n,a,b.params.runCallbacksOnInit,!0)}}}},setHash:function(){b.hashnav.initialized&&b.params.hashnav&&(document.location.hash=b.slides.eq(b.activeIndex).attr("data-hash")||"")}},b.disableKeyboardControl=function(){b.params.keyboardControl=!1,a(document).off("keydown",p)},b.enableKeyboardControl=function(){b.params.keyboardControl=!0,a(document).on("keydown",p)},b.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},b.params.mousewheelControl){try{new window.WheelEvent("wheel"),b.mousewheel.event="wheel"}catch(O){}b.mousewheel.event||void 0===document.onmousewheel||(b.mousewheel.event="mousewheel"),b.mousewheel.event||(b.mousewheel.event="DOMMouseScroll")}b.disableMousewheelControl=function(){return b.mousewheel.event?(b.container.off(b.mousewheel.event,d),!0):!1},b.enableMousewheelControl=function(){return b.mousewheel.event?(b.container.on(b.mousewheel.event,d),!0):!1},b.parallax={setTranslate:function(){b.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,b.progress)}),b.slides.each(function(){var e=a(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=Math.min(Math.max(e[0].progress,-1),1);u(this,a)})})},setTransition:function(e){"undefined"==typeof e&&(e=b.params.speed),b.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var t=a(this),i=parseInt(t.attr("data-swiper-parallax-duration"),10)||e;0===e&&(i=0),t.transition(i)})}},b._plugins=[];for(var N in b.plugins){var R=b.plugins[N](b,b.params[N]);R&&b._plugins.push(R)}return b.callPlugins=function(e){for(var a=0;a<b._plugins.length;a++)e in b._plugins[a]&&b._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.emitterEventListeners={},b.emit=function(e){b.params[e]&&b.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(b.emitterEventListeners[e])for(a=0;a<b.emitterEventListeners[e].length;a++)b.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);b.callPlugins&&b.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},b.on=function(e,a){return e=c(e),b.emitterEventListeners[e]||(b.emitterEventListeners[e]=[]),b.emitterEventListeners[e].push(a),b},b.off=function(e,a){var t;if(e=c(e),"undefined"==typeof a)return b.emitterEventListeners[e]=[],b;if(b.emitterEventListeners[e]&&0!==b.emitterEventListeners[e].length){for(t=0;t<b.emitterEventListeners[e].length;t++)b.emitterEventListeners[e][t]===a&&b.emitterEventListeners[e].splice(t,1);return b}},b.once=function(e,a){e=c(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),b.off(e,t)};return b.on(e,t),b},b.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){13===e.keyCode&&(a(e.target).is(b.params.nextButton)?(b.onClickNext(e),b.isEnd?b.a11y.notify(b.params.lastSlideMessage):b.a11y.notify(b.params.nextSlideMessage)):a(e.target).is(b.params.prevButton)&&(b.onClickPrev(e),b.isBeginning?b.a11y.notify(b.params.firstSlideMessage):b.a11y.notify(b.params.prevSlideMessage)),a(e.target).is("."+b.params.bulletClass)&&a(e.target)[0].click())},liveRegion:a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=b.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){if(b.params.nextButton){var e=a(b.params.nextButton);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.nextSlideMessage)}if(b.params.prevButton){var t=a(b.params.prevButton);b.a11y.makeFocusable(t),b.a11y.addRole(t,"button"),b.a11y.addLabel(t,b.params.prevSlideMessage)}a(b.container).append(b.a11y.liveRegion)},initPagination:function(){b.params.pagination&&b.params.paginationClickable&&b.bullets&&b.bullets.length&&b.bullets.each(function(){var e=a(this);b.a11y.makeFocusable(e),b.a11y.addRole(e,"button"),b.a11y.addLabel(e,b.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){b.a11y.liveRegion&&b.a11y.liveRegion.length>0&&b.a11y.liveRegion.remove()}},b.init=function(){b.params.loop&&b.createLoop(),b.updateContainerSize(),b.updateSlidesSize(),b.updatePagination(),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.set(),b.params.scrollbarDraggable&&b.scrollbar.enableDraggable()),"slide"!==b.params.effect&&b.effects[b.params.effect]&&(b.params.loop||b.updateProgress(),b.effects[b.params.effect].setTranslate()),b.params.loop?b.slideTo(b.params.initialSlide+b.loopedSlides,0,b.params.runCallbacksOnInit):(b.slideTo(b.params.initialSlide,0,b.params.runCallbacksOnInit),0===b.params.initialSlide&&(b.parallax&&b.params.parallax&&b.parallax.setTranslate(),b.lazy&&b.params.lazyLoading&&(b.lazy.load(),b.lazy.initialImageLoaded=!0))),b.attachEvents(),b.params.observer&&b.support.observer&&b.initObservers(),b.params.preloadImages&&!b.params.lazyLoading&&b.preloadImages(),b.params.autoplay&&b.startAutoplay(),b.params.keyboardControl&&b.enableKeyboardControl&&b.enableKeyboardControl(),b.params.mousewheelControl&&b.enableMousewheelControl&&b.enableMousewheelControl(),b.params.hashnav&&b.hashnav&&b.hashnav.init(),b.params.a11y&&b.a11y&&b.a11y.init(),b.emit("onInit",b)},b.cleanupStyles=function(){b.container.removeClass(b.classNames.join(" ")).removeAttr("style"),b.wrapper.removeAttr("style"),b.slides&&b.slides.length&&b.slides.removeClass([b.params.slideVisibleClass,b.params.slideActiveClass,b.params.slideNextClass,b.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),b.paginationContainer&&b.paginationContainer.length&&b.paginationContainer.removeClass(b.params.paginationHiddenClass),b.bullets&&b.bullets.length&&b.bullets.removeClass(b.params.bulletActiveClass),b.params.prevButton&&a(b.params.prevButton).removeClass(b.params.buttonDisabledClass),b.params.nextButton&&a(b.params.nextButton).removeClass(b.params.buttonDisabledClass),b.params.scrollbar&&b.scrollbar&&(b.scrollbar.track&&b.scrollbar.track.length&&b.scrollbar.track.removeAttr("style"),b.scrollbar.drag&&b.scrollbar.drag.length&&b.scrollbar.drag.removeAttr("style"))},b.destroy=function(e,a){b.detachEvents(),b.stopAutoplay(),b.params.scrollbar&&b.scrollbar&&b.params.scrollbarDraggable&&b.scrollbar.disableDraggable(),b.params.loop&&b.destroyLoop(),a&&b.cleanupStyles(),b.disconnectObservers(),b.params.keyboardControl&&b.disableKeyboardControl&&b.disableKeyboardControl(),b.params.mousewheelControl&&b.disableMousewheelControl&&b.disableMousewheelControl(),b.params.a11y&&b.a11y&&b.a11y.destroy(),b.emit("onDestroy"),e!==!1&&(b=null)},b.init(),b}};t.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,
ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),i=e.match(/(iPod)(.*OS\s([\d_]+))?/),r=!t&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:t||r||i,android:a}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}};for(var i=(function(){var e=function(e){var a=this,t=0;for(t=0;t<e.length;t++)a[t]=e[t];return a.length=e.length,this},a=function(a,t){var i=[],r=0;if(a&&!t&&a instanceof e)return a;if(a)if("string"==typeof a){var s,n,o=a.trim();if(o.indexOf("<")>=0&&o.indexOf(">")>=0){var l="div";for(0===o.indexOf("<li")&&(l="ul"),0===o.indexOf("<tr")&&(l="tbody"),(0===o.indexOf("<td")||0===o.indexOf("<th"))&&(l="tr"),0===o.indexOf("<tbody")&&(l="table"),0===o.indexOf("<option")&&(l="select"),n=document.createElement(l),n.innerHTML=a,r=0;r<n.childNodes.length;r++)i.push(n.childNodes[r])}else for(s=t||"#"!==a[0]||a.match(/[ .<>:~]/)?(t||document).querySelectorAll(a):[document.getElementById(a.split("#")[1])],r=0;r<s.length;r++)s[r]&&i.push(s[r])}else if(a.nodeType||a===window||a===document)i.push(a);else if(a.length>0&&a[0].nodeType)for(r=0;r<a.length;r++)i.push(a[r]);return new e(i)};return e.prototype={addClass:function(e){if("undefined"==typeof e)return this;for(var a=e.split(" "),t=0;t<a.length;t++)for(var i=0;i<this.length;i++)this[i].classList.add(a[t]);return this},removeClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var i=0;i<this.length;i++)this[i].classList.remove(a[t]);return this},hasClass:function(e){return this[0]?this[0].classList.contains(e):!1},toggleClass:function(e){for(var a=e.split(" "),t=0;t<a.length;t++)for(var i=0;i<this.length;i++)this[i].classList.toggle(a[t]);return this},attr:function(e,a){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0;for(var t=0;t<this.length;t++)if(2===arguments.length)this[t].setAttribute(e,a);else for(var i in e)this[t][i]=e[i],this[t].setAttribute(i,e[i]);return this},removeAttr:function(e){for(var a=0;a<this.length;a++)this[a].removeAttribute(e);return this},data:function(e,a){if("undefined"!=typeof a){for(var t=0;t<this.length;t++){var i=this[t];i.dom7ElementDataStorage||(i.dom7ElementDataStorage={}),i.dom7ElementDataStorage[e]=a}return this}if(this[0]){var r=this[0].getAttribute("data-"+e);return r?r:this[0].dom7ElementDataStorage&&e in this[0].dom7ElementDataStorage?this[0].dom7ElementDataStorage[e]:void 0}},transform:function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this},transition:function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this},on:function(e,t,i,r){function s(e){var r=e.target;if(a(r).is(t))i.call(r,e);else for(var s=a(r).parents(),n=0;n<s.length;n++)a(s[n]).is(t)&&i.call(s[n],e)}var n,o,l=e.split(" ");for(n=0;n<this.length;n++)if("function"==typeof t||t===!1)for("function"==typeof t&&(i=arguments[1],r=arguments[2]||!1),o=0;o<l.length;o++)this[n].addEventListener(l[o],i,r);else for(o=0;o<l.length;o++)this[n].dom7LiveListeners||(this[n].dom7LiveListeners=[]),this[n].dom7LiveListeners.push({listener:i,liveListener:s}),this[n].addEventListener(l[o],s,r);return this},off:function(e,a,t,i){for(var r=e.split(" "),s=0;s<r.length;s++)for(var n=0;n<this.length;n++)if("function"==typeof a||a===!1)"function"==typeof a&&(t=arguments[1],i=arguments[2]||!1),this[n].removeEventListener(r[s],t,i);else if(this[n].dom7LiveListeners)for(var o=0;o<this[n].dom7LiveListeners.length;o++)this[n].dom7LiveListeners[o].listener===t&&this[n].removeEventListener(r[s],this[n].dom7LiveListeners[o].liveListener,i);return this},once:function(e,a,t,i){function r(n){t(n),s.off(e,a,r,i)}var s=this;"function"==typeof a&&(a=!1,t=arguments[1],i=arguments[2]),s.on(e,a,r,i)},trigger:function(e,a){for(var t=0;t<this.length;t++){var i;try{i=new window.CustomEvent(e,{detail:a,bubbles:!0,cancelable:!0})}catch(r){i=document.createEvent("Event"),i.initEvent(e,!0,!0),i.detail=a}this[t].dispatchEvent(i)}return this},transitionEnd:function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<i.length;t++)r.off(i[t],a)}var t,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<i.length;t++)r.on(i[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){return this.length>0?e?this[0].offsetWidth+parseFloat(this.css("margin-right"))+parseFloat(this.css("margin-left")):this[0].offsetWidth:null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){return this.length>0?e?this[0].offsetHeight+parseFloat(this.css("margin-top"))+parseFloat(this.css("margin-bottom")):this[0].offsetHeight:null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,i=e.clientTop||t.clientTop||0,r=e.clientLeft||t.clientLeft||0,s=window.pageYOffset||e.scrollTop,n=window.pageXOffset||e.scrollLeft;return{top:a.top+s-i,left:a.left+n-r}}return null},css:function(e,a){var t;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t++)for(var i in e)this[t].style[i]=e[i];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t++)this[t].style[e]=a;return this}return this},each:function(e){for(var a=0;a<this.length;a++)e.call(this[a],a,this[a]);return this},html:function(e){if("undefined"==typeof e)return this[0]?this[0].innerHTML:void 0;for(var a=0;a<this.length;a++)this[a].innerHTML=e;return this},text:function(e){if("undefined"==typeof e)return this[0]?this[0].textContent.trim():null;for(var a=0;a<this.length;a++)this[a].textContent=e;return this},is:function(t){if(!this[0])return!1;var i,r;if("string"==typeof t){var s=this[0];if(s===document)return t===document;if(s===window)return t===window;if(s.matches)return s.matches(t);if(s.webkitMatchesSelector)return s.webkitMatchesSelector(t);if(s.mozMatchesSelector)return s.mozMatchesSelector(t);if(s.msMatchesSelector)return s.msMatchesSelector(t);for(i=a(t),r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}if(t===document)return this[0]===document;if(t===window)return this[0]===window;if(t.nodeType||t instanceof e){for(i=t.nodeType?[t]:t,r=0;r<i.length;r++)if(i[r]===this[0])return!0;return!1}return!1},index:function(){if(this[0]){for(var e=this[0],a=0;null!==(e=e.previousSibling);)1===e.nodeType&&a++;return a}},eq:function(a){if("undefined"==typeof a)return this;var t,i=this.length;return a>i-1?new e([]):0>a?(t=i+a,new e(0>t?[]:[this[t]])):new e([this[a]])},append:function(a){var t,i;for(t=0;t<this.length;t++)if("string"==typeof a){var r=document.createElement("div");for(r.innerHTML=a;r.firstChild;)this[t].appendChild(r.firstChild)}else if(a instanceof e)for(i=0;i<a.length;i++)this[t].appendChild(a[i]);else this[t].appendChild(a);return this},prepend:function(a){var t,i;for(t=0;t<this.length;t++)if("string"==typeof a){var r=document.createElement("div");for(r.innerHTML=a,i=r.childNodes.length-1;i>=0;i--)this[t].insertBefore(r.childNodes[i],this[t].childNodes[0])}else if(a instanceof e)for(i=0;i<a.length;i++)this[t].insertBefore(a[i],this[t].childNodes[0]);else this[t].insertBefore(a,this[t].childNodes[0]);return this},insertBefore:function(e){for(var t=a(e),i=0;i<this.length;i++)if(1===t.length)t[0].parentNode.insertBefore(this[i],t[0]);else if(t.length>1)for(var r=0;r<t.length;r++)t[r].parentNode.insertBefore(this[i].cloneNode(!0),t[r])},insertAfter:function(e){for(var t=a(e),i=0;i<this.length;i++)if(1===t.length)t[0].parentNode.insertBefore(this[i],t[0].nextSibling);else if(t.length>1)for(var r=0;r<t.length;r++)t[r].parentNode.insertBefore(this[i].cloneNode(!0),t[r].nextSibling)},next:function(t){return new e(this.length>0?t?this[0].nextElementSibling&&a(this[0].nextElementSibling).is(t)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(t){var i=[],r=this[0];if(!r)return new e([]);for(;r.nextElementSibling;){var s=r.nextElementSibling;t?a(s).is(t)&&i.push(s):i.push(s),r=s}return new e(i)},prev:function(t){return new e(this.length>0?t?this[0].previousElementSibling&&a(this[0].previousElementSibling).is(t)?[this[0].previousElementSibling]:[]:this[0].previousElementSibling?[this[0].previousElementSibling]:[]:[])},prevAll:function(t){var i=[],r=this[0];if(!r)return new e([]);for(;r.previousElementSibling;){var s=r.previousElementSibling;t?a(s).is(t)&&i.push(s):i.push(s),r=s}return new e(i)},parent:function(e){for(var t=[],i=0;i<this.length;i++)e?a(this[i].parentNode).is(e)&&t.push(this[i].parentNode):t.push(this[i].parentNode);return a(a.unique(t))},parents:function(e){for(var t=[],i=0;i<this.length;i++)for(var r=this[i].parentNode;r;)e?a(r).is(e)&&t.push(r):t.push(r),r=r.parentNode;return a(a.unique(t))},find:function(a){for(var t=[],i=0;i<this.length;i++)for(var r=this[i].querySelectorAll(a),s=0;s<r.length;s++)t.push(r[s]);return new e(t)},children:function(t){for(var i=[],r=0;r<this.length;r++)for(var s=this[r].childNodes,n=0;n<s.length;n++)t?1===s[n].nodeType&&a(s[n]).is(t)&&i.push(s[n]):1===s[n].nodeType&&i.push(s[n]);return new e(a.unique(i))},remove:function(){for(var e=0;e<this.length;e++)this[e].parentNode&&this[e].parentNode.removeChild(this[e]);return this},add:function(){var e,t,i=this;for(e=0;e<arguments.length;e++){var r=a(arguments[e]);for(t=0;t<r.length;t++)i[i.length]=r[t],i.length++}return i}},a.fn=e.prototype,a.unique=function(e){for(var a=[],t=0;t<e.length;t++)-1===a.indexOf(e[t])&&a.push(e[t]);return a},a}()),r=["jQuery","Zepto","Dom7"],s=0;s<r.length;s++)window[r[s]]&&e(window[r[s]]);var n;n="undefined"==typeof i?window.Dom7||window.Zepto||window.jQuery:i,n&&("transitionEnd"in n.fn||(n.fn.transitionEnd=function(e){function a(s){if(s.target===this)for(e.call(this,s),t=0;t<i.length;t++)r.off(i[t],a)}var t,i=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],r=this;if(e)for(t=0;t<i.length;t++)r.on(i[t],a);return this}),"transform"in n.fn||(n.fn.transform=function(e){for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransform=t.MsTransform=t.msTransform=t.MozTransform=t.OTransform=t.transform=e}return this}),"transition"in n.fn||(n.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var a=0;a<this.length;a++){var t=this[a].style;t.webkitTransitionDuration=t.MsTransitionDuration=t.msTransitionDuration=t.MozTransitionDuration=t.OTransitionDuration=t.transitionDuration=e}return this})),window.Swiper=t}(),"undefined"!=typeof module?module.exports=window.Swiper:"function"==typeof define&&define.amd&&define([],function(){"use strict";return window.Swiper});
//# sourceMappingURL=maps/swiper.min.js.map

/*! nouislider - 8.5.1 - 2016-04-24 16:00:29 */

!function(a){"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?module.exports=a():window.noUiSlider=a()}(function(){"use strict";function a(a){return a.filter(function(a){return this[a]?!1:this[a]=!0},{})}function b(a,b){return Math.round(a/b)*b}function c(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.documentElement,e=l();return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(e.x=0),{top:b.top+e.y-d.clientTop,left:b.left+e.x-d.clientLeft}}function d(a){return"number"==typeof a&&!isNaN(a)&&isFinite(a)}function e(a,b,c){i(a,b),setTimeout(function(){j(a,b)},c)}function f(a){return Math.max(Math.min(a,100),0)}function g(a){return Array.isArray(a)?a:[a]}function h(a){var b=a.split(".");return b.length>1?b[1].length:0}function i(a,b){a.classList?a.classList.add(b):a.className+=" "+b}function j(a,b){a.classList?a.classList.remove(b):a.className=a.className.replace(new RegExp("(^|\\b)"+b.split(" ").join("|")+"(\\b|$)","gi")," ")}function k(a,b){return a.classList?a.classList.contains(b):new RegExp("\\b"+b+"\\b").test(a.className)}function l(){var a=void 0!==window.pageXOffset,b="CSS1Compat"===(document.compatMode||""),c=a?window.pageXOffset:b?document.documentElement.scrollLeft:document.body.scrollLeft,d=a?window.pageYOffset:b?document.documentElement.scrollTop:document.body.scrollTop;return{x:c,y:d}}function m(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function n(a,b){return 100/(b-a)}function o(a,b){return 100*b/(a[1]-a[0])}function p(a,b){return o(a,a[0]<0?b+Math.abs(a[0]):b-a[0])}function q(a,b){return b*(a[1]-a[0])/100+a[0]}function r(a,b){for(var c=1;a>=b[c];)c+=1;return c}function s(a,b,c){if(c>=a.slice(-1)[0])return 100;var d,e,f,g,h=r(c,a);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],f+p([d,e],c)/n(f,g)}function t(a,b,c){if(c>=100)return a.slice(-1)[0];var d,e,f,g,h=r(c,b);return d=a[h-1],e=a[h],f=b[h-1],g=b[h],q([d,e],(c-f)*n(f,g))}function u(a,c,d,e){if(100===e)return e;var f,g,h=r(e,a);return d?(f=a[h-1],g=a[h],e-f>(g-f)/2?g:f):c[h-1]?a[h-1]+b(e-a[h-1],c[h-1]):e}function v(a,b,c){var e;if("number"==typeof b&&(b=[b]),"[object Array]"!==Object.prototype.toString.call(b))throw new Error("noUiSlider: 'range' contains invalid value.");if(e="min"===a?0:"max"===a?100:parseFloat(a),!d(e)||!d(b[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");c.xPct.push(e),c.xVal.push(b[0]),e?c.xSteps.push(isNaN(b[1])?!1:b[1]):isNaN(b[1])||(c.xSteps[0]=b[1])}function w(a,b,c){return b?void(c.xSteps[a]=o([c.xVal[a],c.xVal[a+1]],b)/n(c.xPct[a],c.xPct[a+1])):!0}function x(a,b,c,d){this.xPct=[],this.xVal=[],this.xSteps=[d||!1],this.xNumSteps=[!1],this.snap=b,this.direction=c;var e,f=[];for(e in a)a.hasOwnProperty(e)&&f.push([a[e],e]);for(f.length&&"object"==typeof f[0][0]?f.sort(function(a,b){return a[0][0]-b[0][0]}):f.sort(function(a,b){return a[0]-b[0]}),e=0;e<f.length;e++)v(f[e][1],f[e][0],this);for(this.xNumSteps=this.xSteps.slice(0),e=0;e<this.xNumSteps.length;e++)w(e,this.xNumSteps[e],this)}function y(a,b){if(!d(b))throw new Error("noUiSlider: 'step' is not numeric.");a.singleStep=b}function z(a,b){if("object"!=typeof b||Array.isArray(b))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===b.min||void 0===b.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");if(b.min===b.max)throw new Error("noUiSlider: 'range' 'min' and 'max' cannot be equal.");a.spectrum=new x(b,a.snap,a.dir,a.singleStep)}function A(a,b){if(b=g(b),!Array.isArray(b)||!b.length||b.length>2)throw new Error("noUiSlider: 'start' option is incorrect.");a.handles=b.length,a.start=b}function B(a,b){if(a.snap=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'snap' option must be a boolean.")}function C(a,b){if(a.animate=b,"boolean"!=typeof b)throw new Error("noUiSlider: 'animate' option must be a boolean.")}function D(a,b){if(a.animationDuration=b,"number"!=typeof b)throw new Error("noUiSlider: 'animationDuration' option must be a number.")}function E(a,b){if("lower"===b&&1===a.handles)a.connect=1;else if("upper"===b&&1===a.handles)a.connect=2;else if(b===!0&&2===a.handles)a.connect=3;else{if(b!==!1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");a.connect=0}}function F(a,b){switch(b){case"horizontal":a.ort=0;break;case"vertical":a.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function G(a,b){if(!d(b))throw new Error("noUiSlider: 'margin' option must be numeric.");if(0!==b&&(a.margin=a.spectrum.getMargin(b),!a.margin))throw new Error("noUiSlider: 'margin' option is only supported on linear sliders.")}function H(a,b){if(!d(b))throw new Error("noUiSlider: 'limit' option must be numeric.");if(a.limit=a.spectrum.getMargin(b),!a.limit)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders.")}function I(a,b){switch(b){case"ltr":a.dir=0;break;case"rtl":a.dir=1,a.connect=[0,2,1,3][a.connect];break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function J(a,b){if("string"!=typeof b)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var c=b.indexOf("tap")>=0,d=b.indexOf("drag")>=0,e=b.indexOf("fixed")>=0,f=b.indexOf("snap")>=0,g=b.indexOf("hover")>=0;if(d&&!a.connect)throw new Error("noUiSlider: 'drag' behaviour must be used with 'connect': true.");a.events={tap:c||f,drag:d,fixed:e,snap:f,hover:g}}function K(a,b){var c;if(b!==!1)if(b===!0)for(a.tooltips=[],c=0;c<a.handles;c++)a.tooltips.push(!0);else{if(a.tooltips=g(b),a.tooltips.length!==a.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");a.tooltips.forEach(function(a){if("boolean"!=typeof a&&("object"!=typeof a||"function"!=typeof a.to))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")})}}function L(a,b){if(a.format=b,"function"==typeof b.to&&"function"==typeof b.from)return!0;throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.")}function M(a,b){if(void 0!==b&&"string"!=typeof b&&b!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");a.cssPrefix=b}function N(a,b){if(void 0!==b&&"object"!=typeof b)throw new Error("noUiSlider: 'cssClasses' must be an object.");if("string"==typeof a.cssPrefix){a.cssClasses={};for(var c in b)b.hasOwnProperty(c)&&(a.cssClasses[c]=a.cssPrefix+b[c])}else a.cssClasses=b}function O(a){var b,c={margin:0,limit:0,animate:!0,animationDuration:300,format:R};b={step:{r:!1,t:y},start:{r:!0,t:A},connect:{r:!0,t:E},direction:{r:!0,t:I},snap:{r:!1,t:B},animate:{r:!1,t:C},animationDuration:{r:!1,t:D},range:{r:!0,t:z},orientation:{r:!1,t:F},margin:{r:!1,t:G},limit:{r:!1,t:H},behaviour:{r:!0,t:J},format:{r:!1,t:L},tooltips:{r:!1,t:K},cssPrefix:{r:!1,t:M},cssClasses:{r:!1,t:N}};var d={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",cssPrefix:"noUi-",cssClasses:{target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",ltr:"ltr",rtl:"rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",stacking:"stacking",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"}};return Object.keys(b).forEach(function(e){if(void 0===a[e]&&void 0===d[e]){if(b[e].r)throw new Error("noUiSlider: '"+e+"' is required.");return!0}b[e].t(c,void 0===a[e]?d[e]:a[e])}),c.pips=a.pips,c.style=c.ort?"top":"left",c}function P(b,d,n){function o(a,b,c){var d=a+b[0],e=a+b[1];return c?(0>d&&(e+=Math.abs(d)),e>100&&(d-=e-100),[f(d),f(e)]):[d,e]}function p(a,b){a.preventDefault();var c,d,e=0===a.type.indexOf("touch"),f=0===a.type.indexOf("mouse"),g=0===a.type.indexOf("pointer"),h=a;return 0===a.type.indexOf("MSPointer")&&(g=!0),e&&(c=a.changedTouches[0].pageX,d=a.changedTouches[0].pageY),b=b||l(),(f||g)&&(c=a.clientX+b.x,d=a.clientY+b.y),h.pageOffset=b,h.points=[c,d],h.cursor=f||g,h}function q(a,b){var c=document.createElement("div"),e=document.createElement("div"),f=[d.cssClasses.handleLower,d.cssClasses.handleUpper];return a&&f.reverse(),i(e,d.cssClasses.handle),i(e,f[b]),i(c,d.cssClasses.origin),c.appendChild(e),c}function r(a,b,c){switch(a){case 1:i(b,d.cssClasses.connect),i(c[0],d.cssClasses.background);break;case 3:i(c[1],d.cssClasses.background);case 2:i(c[0],d.cssClasses.connect);case 0:i(b,d.cssClasses.background)}}function s(a,b,c){var d,e=[];for(d=0;a>d;d+=1)e.push(c.appendChild(q(b,d)));return e}function t(a,b,c){i(c,d.cssClasses.target),0===a?i(c,d.cssClasses.ltr):i(c,d.cssClasses.rtl),0===b?i(c,d.cssClasses.horizontal):i(c,d.cssClasses.vertical);var e=document.createElement("div");return i(e,d.cssClasses.base),c.appendChild(e),e}function u(a,b){if(!d.tooltips[b])return!1;var c=document.createElement("div");return c.className=d.cssClasses.tooltip,a.firstChild.appendChild(c)}function v(){d.dir&&d.tooltips.reverse();var a=W.map(u);d.dir&&(a.reverse(),d.tooltips.reverse()),S("update",function(b,c,e){a[c]&&(a[c].innerHTML=d.tooltips[c]===!0?b[c]:d.tooltips[c].to(e[c]))})}function w(a,b,c){if("range"===a||"steps"===a)return _.xVal;if("count"===a){var d,e=100/(b-1),f=0;for(b=[];(d=f++*e)<=100;)b.push(d);a="positions"}return"positions"===a?b.map(function(a){return _.fromStepping(c?_.getStep(a):a)}):"values"===a?c?b.map(function(a){return _.fromStepping(_.getStep(_.toStepping(a)))}):b:void 0}function x(b,c,d){function e(a,b){return(a+b).toFixed(7)/1}var f=_.direction,g={},h=_.xVal[0],i=_.xVal[_.xVal.length-1],j=!1,k=!1,l=0;return _.direction=0,d=a(d.slice().sort(function(a,b){return a-b})),d[0]!==h&&(d.unshift(h),j=!0),d[d.length-1]!==i&&(d.push(i),k=!0),d.forEach(function(a,f){var h,i,m,n,o,p,q,r,s,t,u=a,v=d[f+1];if("steps"===c&&(h=_.xNumSteps[f]),h||(h=v-u),u!==!1&&void 0!==v)for(i=u;v>=i;i=e(i,h)){for(n=_.toStepping(i),o=n-l,r=o/b,s=Math.round(r),t=o/s,m=1;s>=m;m+=1)p=l+m*t,g[p.toFixed(5)]=["x",0];q=d.indexOf(i)>-1?1:"steps"===c?2:0,!f&&j&&(q=0),i===v&&k||(g[n.toFixed(5)]=[i,q]),l=n}}),_.direction=f,g}function y(a,b,c){function e(a,b){var c=b===d.cssClasses.value,e=c?m:n,f=c?k:l;return b+" "+e[d.ort]+" "+f[a]}function f(a,b,c){return'class="'+e(c[1],b)+'" style="'+d.style+": "+a+'%"'}function g(a,e){_.direction&&(a=100-a),e[1]=e[1]&&b?b(e[0],e[1]):e[1],j+="<div "+f(a,d.cssClasses.marker,e)+"></div>",e[1]&&(j+="<div "+f(a,d.cssClasses.value,e)+">"+c.to(e[0])+"</div>")}var h=document.createElement("div"),j="",k=[d.cssClasses.valueNormal,d.cssClasses.valueLarge,d.cssClasses.valueSub],l=[d.cssClasses.markerNormal,d.cssClasses.markerLarge,d.cssClasses.markerSub],m=[d.cssClasses.valueHorizontal,d.cssClasses.valueVertical],n=[d.cssClasses.markerHorizontal,d.cssClasses.markerVertical];return i(h,d.cssClasses.pips),i(h,0===d.ort?d.cssClasses.pipsHorizontal:d.cssClasses.pipsVertical),Object.keys(a).forEach(function(b){g(b,a[b])}),h.innerHTML=j,h}function z(a){var b=a.mode,c=a.density||1,d=a.filter||!1,e=a.values||!1,f=a.stepped||!1,g=w(b,e,f),h=x(c,b,g),i=a.format||{to:Math.round};return Z.appendChild(y(h,d,i))}function A(){var a=V.getBoundingClientRect(),b="offset"+["Width","Height"][d.ort];return 0===d.ort?a.width||V[b]:a.height||V[b]}function B(a,b,c){var e;for(e=0;e<d.handles;e++)if(-1===$[e])return;void 0!==b&&1!==d.handles&&(b=Math.abs(b-d.dir)),Object.keys(ba).forEach(function(d){var e=d.split(".")[0];a===e&&ba[d].forEach(function(a){a.call(X,g(P()),b,g(C(Array.prototype.slice.call(aa))),c||!1,$)})})}function C(a){return 1===a.length?a[0]:d.dir?a.reverse():a}function D(a,b,c,e){var f=function(b){return Z.hasAttribute("disabled")?!1:k(Z,d.cssClasses.tap)?!1:(b=p(b,e.pageOffset),a===Y.start&&void 0!==b.buttons&&b.buttons>1?!1:e.hover&&b.buttons?!1:(b.calcPoint=b.points[d.ort],void c(b,e)))},g=[];return a.split(" ").forEach(function(a){b.addEventListener(a,f,!1),g.push([a,f])}),g}function E(a,b){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===a.buttons&&0!==b.buttonsProperty)return F(a,b);var c,d,e=b.handles||W,f=!1,g=100*(a.calcPoint-b.start)/b.baseSize,h=e[0]===W[0]?0:1;if(c=o(g,b.positions,e.length>1),f=L(e[0],c[h],1===e.length),e.length>1){if(f=L(e[1],c[h?0:1],!1)||f)for(d=0;d<b.handles.length;d++)B("slide",d)}else f&&B("slide",h)}function F(a,b){var c=V.querySelector("."+d.cssClasses.active),e=b.handles[0]===W[0]?0:1;null!==c&&j(c,d.cssClasses.active),a.cursor&&(document.body.style.cursor="",document.body.removeEventListener("selectstart",document.body.noUiListener));var f=document.documentElement;f.noUiListeners.forEach(function(a){f.removeEventListener(a[0],a[1])}),j(Z,d.cssClasses.drag),B("set",e),B("change",e),void 0!==b.handleNumber&&B("end",b.handleNumber)}function G(a,b){"mouseout"===a.type&&"HTML"===a.target.nodeName&&null===a.relatedTarget&&F(a,b)}function H(a,b){var c=document.documentElement;if(1===b.handles.length){if(b.handles[0].hasAttribute("disabled"))return!1;i(b.handles[0].children[0],d.cssClasses.active)}a.preventDefault(),a.stopPropagation();var e=D(Y.move,c,E,{start:a.calcPoint,baseSize:A(),pageOffset:a.pageOffset,handles:b.handles,handleNumber:b.handleNumber,buttonsProperty:a.buttons,positions:[$[0],$[W.length-1]]}),f=D(Y.end,c,F,{handles:b.handles,handleNumber:b.handleNumber}),g=D("mouseout",c,G,{handles:b.handles,handleNumber:b.handleNumber});if(c.noUiListeners=e.concat(f,g),a.cursor){document.body.style.cursor=getComputedStyle(a.target).cursor,W.length>1&&i(Z,d.cssClasses.drag);var h=function(){return!1};document.body.noUiListener=h,document.body.addEventListener("selectstart",h,!1)}void 0!==b.handleNumber&&B("start",b.handleNumber)}function I(a){var b,f,g=a.calcPoint,h=0;return a.stopPropagation(),W.forEach(function(a){h+=c(a)[d.style]}),b=h/2>g||1===W.length?0:1,W[b].hasAttribute("disabled")&&(b=b?0:1),g-=c(V)[d.style],f=100*g/A(),d.events.snap||e(Z,d.cssClasses.tap,d.animationDuration),W[b].hasAttribute("disabled")?!1:(L(W[b],f),B("slide",b,!0),B("set",b,!0),B("change",b,!0),void(d.events.snap&&H(a,{handles:[W[b]]})))}function J(a){var b=a.calcPoint-c(V)[d.style],e=_.getStep(100*b/A()),f=_.fromStepping(e);Object.keys(ba).forEach(function(a){"hover"===a.split(".")[0]&&ba[a].forEach(function(a){a.call(X,f)})})}function K(a){if(a.fixed||W.forEach(function(a,b){D(Y.start,a.children[0],H,{handles:[a],handleNumber:b})}),a.tap&&D(Y.start,V,I,{handles:W}),a.hover&&D(Y.move,V,J,{hover:!0}),a.drag){var b=[V.querySelector("."+d.cssClasses.connect)];i(b[0],d.cssClasses.draggable),a.fixed&&b.push(W[b[0]===W[0]?1:0].children[0]),b.forEach(function(a){D(Y.start,a,H,{handles:W})})}}function L(a,b,c){var e=a!==W[0]?1:0,g=$[0]+d.margin,h=$[1]-d.margin,k=$[0]+d.limit,l=$[1]-d.limit;return W.length>1&&(b=e?Math.max(b,g):Math.min(b,h)),c!==!1&&d.limit&&W.length>1&&(b=e?Math.min(b,k):Math.max(b,l)),b=_.getStep(b),b=f(b),b===$[e]?!1:(window.requestAnimationFrame?window.requestAnimationFrame(function(){a.style[d.style]=b+"%"}):a.style[d.style]=b+"%",a.previousSibling||(j(a,d.cssClasses.stacking),b>50&&i(a,d.cssClasses.stacking)),$[e]=b,aa[e]=_.fromStepping(b),B("update",e),!0)}function M(a,b){var c,e,f;for(d.limit&&(a+=1),c=0;a>c;c+=1)e=c%2,f=b[e],null!==f&&f!==!1&&("number"==typeof f&&(f=String(f)),f=d.format.from(f),(f===!1||isNaN(f)||L(W[e],_.toStepping(f),c===3-d.dir)===!1)&&B("update",e))}function N(a,b){var c,f,h=g(a);for(b=void 0===b?!0:!!b,d.dir&&d.handles>1&&h.reverse(),d.animate&&-1!==$[0]&&e(Z,d.cssClasses.tap,d.animationDuration),c=W.length>1?3:1,1===h.length&&(c=1),M(c,h),f=0;f<W.length;f++)null!==h[f]&&b&&B("set",f)}function P(){var a,b=[];for(a=0;a<d.handles;a+=1)b[a]=d.format.to(aa[a]);return C(b)}function Q(){for(var a in d.cssClasses)d.cssClasses.hasOwnProperty(a)&&j(Z,d.cssClasses[a]);for(;Z.firstChild;)Z.removeChild(Z.firstChild);delete Z.noUiSlider}function R(){var a=$.map(function(a,b){var c=_.getApplicableStep(a),d=h(String(c[2])),e=aa[b],f=100===a?null:c[2],g=Number((e-c[2]).toFixed(d)),i=0===a?null:g>=c[1]?c[2]:c[0]||!1;return[i,f]});return C(a)}function S(a,b){ba[a]=ba[a]||[],ba[a].push(b),"update"===a.split(".")[0]&&W.forEach(function(a,b){B("update",b)})}function T(a){var b=a&&a.split(".")[0],c=b&&a.substring(b.length);Object.keys(ba).forEach(function(a){var d=a.split(".")[0],e=a.substring(d.length);b&&b!==d||c&&c!==e||delete ba[a]})}function U(a,b){var c=P(),e=O({start:[0,0],margin:a.margin,limit:a.limit,step:void 0===a.step?d.singleStep:a.step,range:a.range,animate:a.animate,snap:void 0===a.snap?d.snap:a.snap});["margin","limit","range","animate"].forEach(function(b){void 0!==a[b]&&(d[b]=a[b])}),e.spectrum.direction=_.direction,_=e.spectrum,$=[-1,-1],N(a.start||c,b)}var V,W,X,Y=m(),Z=b,$=[-1,-1],_=d.spectrum,aa=[],ba={};if(Z.noUiSlider)throw new Error("Slider was already initialized.");return V=t(d.dir,d.ort,Z),W=s(d.handles,d.dir,V),r(d.connect,Z,W),d.pips&&z(d.pips),d.tooltips&&v(),X={destroy:Q,steps:R,on:S,off:T,get:P,set:N,updateOptions:U,options:n,target:Z,pips:z},K(d.events),X}function Q(a,b){if(!a.nodeName)throw new Error("noUiSlider.create requires a single element.");var c=O(b,a),d=P(a,c,b);return d.set(c.start),a.noUiSlider=d,d}x.prototype.getMargin=function(a){return 2===this.xPct.length?o(this.xVal,a):!1},x.prototype.toStepping=function(a){return a=s(this.xVal,this.xPct,a),this.direction&&(a=100-a),a},x.prototype.fromStepping=function(a){return this.direction&&(a=100-a),t(this.xVal,this.xPct,a)},x.prototype.getStep=function(a){return this.direction&&(a=100-a),a=u(this.xPct,this.xSteps,this.snap,a),this.direction&&(a=100-a),a},x.prototype.getApplicableStep=function(a){var b=r(a,this.xPct),c=100===a?2:1;return[this.xNumSteps[b-2],this.xVal[b-c],this.xNumSteps[b-c]]},x.prototype.convert=function(a){return this.getStep(this.toStepping(a))};var R={to:function(a){return void 0!==a&&a.toFixed(2)},from:Number};return{create:Q}});
/*
 Copyright (c) 2013-2016, Nazar Mokrynskyi
 @copyright Copyright (c) 2008-2009, Stefan Petre
 @license   MIT License, see license.txt
*/
(function(F,x){"function"===typeof define&&define.amd?define(x):"object"===typeof exports?module.exports=x():F.pickmeup=x()})(this,function(){function F(a,b,c){c=c||[];if(a instanceof Element)b.apply(b,[a].concat(c));else{var d,e;d=a.length;for(e=0;e<d;++e)b.apply(b,[a[e]].concat(c))}}function x(a){F(a,function(a){a.parentElement.removeChild(a)})}function J(a,b){do a=a.parentElement;while(a&&!B(a,b));return a}function B(a,b){return(a.matches||a.webkitMatchesSelector||a.msMatchesSelector).call(a,b)}
function n(a,b){return a&&a.classList.contains(b)}function g(a,b){a.classList.add(b)}function t(a,b,c,d){if(-1!==c.indexOf(" ")){c=c.split(" ");var e=c.length,g;for(g=0;g<e;++g)t(a,b,c[g],d)}else a.__pickmeup.events.push([b,c,d]),b.addEventListener(c,d)}function y(a,b,c,d){var e,g,f;if(-1!==c.indexOf(" "))for(e=c.split(" "),g=e.length,f=0;f<g;++f)y(a,b,e[f],d);else for(e=a.__pickmeup.events,g=e.length,f=0;f<g;++f)b&&b!=e[f][0]||c&&c!=e[f][1]||d&&d!=e[f][2]||e[f][0].removeEventListener(e[f][1],e[f][2])}
function M(a){a=a.getBoundingClientRect();return{top:a.top+window.pageYOffset-document.documentElement.clientTop,left:a.left+window.pageXOffset-document.documentElement.clientLeft}}function C(a,b,c){var d=document.createEvent("Event");c&&(d.detail=c);d.initEvent("pickmeup-"+b,!1,!0);return a.dispatchEvent(d)}function K(a){a=new Date(a);for(var b=28,c=a.getMonth();a.getMonth()==c;)++b,a.setDate(b);return b-1}function z(a,b){a.setDate(a.getDate()+b)}function q(a,b){var c=a.getDate();a.setDate(1);a.setMonth(a.getMonth()+
b);a.setDate(Math.min(c,K(a)))}function w(a,b){var c=a.getDate();a.setDate(1);a.setFullYear(a.getFullYear()+b);a.setDate(Math.min(c,K(a)))}function N(a){var b=a.__pickmeup.element,c=a.__pickmeup.options,d=Math.floor(c.calendars/2),e=c.date,G=c.current,f=c.min?new Date(c.min):null,l=c.max?new Date(c.max):null,h,m,p,v,r;f&&(f.setDate(1),q(f,1),z(f,-1));l&&(l.setDate(1),q(l,1),z(l,-1));x(Array.prototype.slice.call(b.querySelectorAll(".pmu-instance \x3e :not(nav)")));for(var k=0;k<c.calendars;k++){h=
new Date(G);A(h);p=Array.prototype.slice.call(b.querySelectorAll(".pmu-instance"))[k];n(b,"pmu-view-years")?(w(h,12*(k-d)),m=h.getFullYear()-6+" - "+(h.getFullYear()+5)):n(b,"pmu-view-months")?(w(h,k-d),m=h.getFullYear()):n(b,"pmu-view-days")&&(q(h,k-d),m=D(h,c.title_format,c.locales[c.locale]));if(!r&&l&&(r=new Date(h),c.select_day?q(r,c.calendars-1):c.select_month?w(r,c.calendars-1):w(r,12*(c.calendars-1)),r>l)){--k;q(G,-1);r=void 0;continue}r=new Date(h);if(!v&&(v=new Date(h),v.setDate(1),q(v,
1),z(v,-1),f&&f>v)){--k;q(G,1);v=void 0;continue}p.querySelector(".pmu-month").textContent=m;var t=function(a){return"range"==c.mode&&a>=(new Date(e[0])).getFullYear()&&a<=(new Date(e[1])).getFullYear()||"multiple"==c.mode&&-1!==e.reduce(function(a,c){a.push((new Date(c)).getFullYear());return a},[]).indexOf(a)||(new Date(e)).getFullYear()==a},u=function(a,b){var d=(new Date(e[0])).getFullYear(),h=(new Date(e[1])).getFullYear(),g=(new Date(e[0])).getMonth(),f=(new Date(e[1])).getMonth();return"range"==
c.mode&&(a>d&&a<h||a>d&&a==h&&b<=f||a==d&&a<h&&b>=g||a==d&&a==h&&b>=g&&b<=f)||"multiple"==c.mode&&-1!==e.reduce(function(a,c){c=new Date(c);a.push(c.getFullYear()+"-"+c.getMonth());return a},[]).indexOf(a+"-"+b)||(new Date(e)).getFullYear()==a&&(new Date(e)).getMonth()==b};(function(){var a=[],b=h.getFullYear()-6,d=(new Date(c.min)).getFullYear(),e=(new Date(c.max)).getFullYear(),f,k,l;for(l=0;12>l;++l)f=b+l,k=document.createElement("div"),k.textContent=f,k.__pickmeup_year=f,c.min&&f<d||c.max&&f>
e?g(k,"pmu-disabled"):t(f)&&g(k,"pmu-selected"),a.push(k);p.appendChild(c.instance_content_template(a,"pmu-years"))})();(function(){var a=[],b=h.getFullYear(),d=(new Date(c.min)).getFullYear(),e=(new Date(c.min)).getMonth(),f=(new Date(c.max)).getFullYear(),k=(new Date(c.max)).getMonth(),l,m;for(l=0;12>l;++l)m=document.createElement("div"),m.textContent=c.locales[c.locale].monthsShort[l],m.__pickmeup_month=l,m.__pickmeup_year=b,c.min&&(b<d||l<e&&b==d)||c.max&&(b>f||l>k&&b>=f)?g(m,"pmu-disabled"):
u(b,l)&&g(m,"pmu-selected"),a.push(m);p.appendChild(c.instance_content_template(a,"pmu-months"))})();(function(){var a=[],b=h.getMonth(),d=A(new Date).valueOf(),e,f,k,l,m;(function(){h.setDate(1);var a=(h.getDay()-c.first_day)%7;z(h,-(a+(0>a?7:0)))})();for(e=0;42>e;++e)f=document.createElement("div"),f.textContent=h.getDate(),f.__pickmeup_day=h.getDate(),f.__pickmeup_month=h.getMonth(),f.__pickmeup_year=h.getFullYear(),b!=h.getMonth()&&g(f,"pmu-not-in-month"),0==h.getDay()?g(f,"pmu-sunday"):6==h.getDay()&&
g(f,"pmu-saturday"),k=c.render(new Date(h))||{},l=h.valueOf(),m=c.min&&c.min>h||c.max&&c.max<h,k.disabled||m?g(f,"pmu-disabled"):(k.selected||c.date.valueOf()==l||c.date instanceof Array&&c.date.reduce(function(a,b){return a||l===b.valueOf()},!1)||"range"==c.mode&&l>=c.date[0]&&l<=c.date[1])&&g(f,"pmu-selected"),l==d&&g(f,"pmu-today"),k.class_name&&k.class_name.split(" ").forEach(g.bind(f,f)),a.push(f),z(h,1);p.appendChild(c.instance_content_template(a,"pmu-days"))})()}v.setDate(1);r.setDate(1);q(r,
1);z(r,-1);d=b.querySelector(".pmu-prev");b=b.querySelector(".pmu-next");d&&(d.style.visibility=c.min&&c.min>=v?"hidden":"visible");b&&(b.style.visibility=c.max&&c.max<=r?"hidden":"visible");C(a,"fill")}function u(a,b){var c=b.format,d=b.separator,e=b.locales[b.locale];if(a instanceof Date||a instanceof Number)return A(new Date(a));if(!a)return A(new Date);if(a instanceof Array){a=a.slice();for(c=0;c<a.length;++c)a[c]=u(a[c],b);return a}d=a.split(d);if(1<d.length)return d.forEach(function(a,c,d){d[c]=
u(a.trim(),b)}),d;d=e.monthsShort.join(")(")+")("+e.months.join(")(");d=new RegExp("[^0-9a-zA-Z("+d+")]+");a=a.split(d);for(var d=c.split(d),g,f,l,h,m,p=new Date,c=0;c<a.length;c++)switch(d[c]){case "b":f=e.monthsShort.indexOf(a[c]);break;case "B":f=e.months.indexOf(a[c]);break;case "d":case "e":g=parseInt(a[c],10);break;case "m":f=parseInt(a[c],10)-1;break;case "Y":case "y":l=parseInt(a[c],10);l+=100<l?0:29>l?2E3:1900;break;case "H":case "I":case "k":case "l":h=parseInt(a[c],10);break;case "P":case "p":/pm/i.test(a[c])&&
12>h?h+=12:/am/i.test(a[c])&&12<=h&&(h-=12);break;case "M":m=parseInt(a[c],10)}e=new Date(void 0===l?p.getFullYear():l,void 0===f?p.getMonth():f,void 0===g?p.getDate():g,void 0===h?p.getHours():h,void 0===m?p.getMinutes():m,0);isNaN(1*e)&&(e=new Date);return A(e)}function A(a){a.setHours(0,0,0,0);return a}function D(a,b,c){var d=a.getMonth(),e=a.getDate(),g=a.getFullYear(),f=a.getDay(),l=a.getHours(),h=12<=l,m=h?l-12:l,p;p=new Date(a.getFullYear(),a.getMonth(),a.getDate(),0,0,0);var n=new Date(a.getFullYear(),
0,0,0,0,0);p=Math.floor((p-n)/24*36E5);0==m&&(m=12);var n=a.getMinutes(),r=a.getSeconds();b=b.split("");for(var k,q=0;q<b.length;q++){k=b[q];switch(k){case "a":k=c.daysShort[f];break;case "A":k=c.days[f];break;case "b":k=c.monthsShort[d];break;case "B":k=c.months[d];break;case "C":k=1+Math.floor(g/100);break;case "d":k=10>e?"0"+e:e;break;case "e":k=e;break;case "H":k=10>l?"0"+l:l;break;case "I":k=10>m?"0"+m:m;break;case "j":k=100>p?10>p?"00"+p:"0"+p:p;break;case "k":k=l;break;case "l":k=m;break;case "m":k=
9>d?"0"+(1+d):1+d;break;case "M":k=10>n?"0"+n:n;break;case "p":case "P":k=h?"PM":"AM";break;case "s":k=Math.floor(a.getTime()/1E3);break;case "S":k=10>r?"0"+r:r;break;case "u":k=f+1;break;case "w":k=f;break;case "y":k=(""+g).substr(2,2);break;case "Y":k=g}b[q]=k}return b.join("")}function O(a,b){var c=a.__pickmeup.options,d;A(b);a:{var e;switch(c.mode){case "multiple":e=b.valueOf();for(d=0;d<c.date.length;++d)if(c.date[d].valueOf()===e){c.date.splice(d,1);break a}c.date.push(b);break;case "range":c.lastSel||
(c.date[0]=b);b<=c.date[0]?(c.date[1]=c.date[0],c.date[0]=b):c.date[1]=b;c.lastSel=!c.lastSel;break;default:c.date=b.valueOf()}}b=H(c);B(a,"input")&&(a.value="single"==c.mode?b.formatted_date:b.formatted_date.join(c.separator));C(a,"change",b);c.flat||!c.hide_on_select||"range"==c.mode&&c.lastSel||c.bound.hide()}function P(a,b){var c=b.target;n(c,"pmu-button")||(c=J(c,".pmu-button"));if(!n(c,"pmu-button")||n(c,"pmu-disabled"))return!1;b.preventDefault();b.stopPropagation();a=a.__pickmeup.options;
var d=J(c,".pmu-instance");b=d.parentElement;d=Array.prototype.slice.call(b.querySelectorAll(".pmu-instance")).indexOf(d);B(c.parentElement,"nav")?n(c,"pmu-month")?(q(a.current,d-Math.floor(a.calendars/2)),n(b,"pmu-view-years")?(a.current="single"!=a.mode?new Date(a.date[a.date.length-1]):new Date(a.date),a.select_day?(b.classList.remove("pmu-view-years"),g(b,"pmu-view-days")):a.select_month&&(b.classList.remove("pmu-view-years"),g(b,"pmu-view-months"))):n(b,"pmu-view-months")?a.select_year?(b.classList.remove("pmu-view-months"),
g(b,"pmu-view-years")):a.select_day&&(b.classList.remove("pmu-view-months"),g(b,"pmu-view-days")):n(b,"pmu-view-days")&&(a.select_month?(b.classList.remove("pmu-view-days"),g(b,"pmu-view-months")):a.select_year&&(b.classList.remove("pmu-view-days"),g(b,"pmu-view-years")))):n(c,"pmu-prev")?a.bound.prev(!1):a.bound.next(!1):n(b,"pmu-view-years")?(a.current.setFullYear(c.__pickmeup_year),a.select_month?(b.classList.remove("pmu-view-years"),g(b,"pmu-view-months")):a.select_day?(b.classList.remove("pmu-view-years"),
g(b,"pmu-view-days")):a.bound.update_date(a.current)):n(b,"pmu-view-months")?(a.current.setMonth(c.__pickmeup_month),a.current.setFullYear(c.__pickmeup_year),a.select_day?(b.classList.remove("pmu-view-months"),g(b,"pmu-view-days")):a.bound.update_date(a.current),q(a.current,Math.floor(a.calendars/2)-d)):(b=new Date(a.current),b.setYear(c.__pickmeup_year),b.setMonth(c.__pickmeup_month),b.setDate(c.__pickmeup_day),a.bound.update_date(b));a.bound.fill();return!0}function H(a){var b;if("single"==a.mode)return b=
new Date(a.date),{formatted_date:D(b,a.format,a.locales[a.locale]),date:b};b={formatted_date:[],date:[]};a.date.forEach(function(c){c=new Date(c);b.formatted_date.push(D(c,a.format,a.locales[a.locale]));b.date.push(c)});return b}function I(a,b){var c=a.__pickmeup.element;if(b||n(c,"pmu-hidden")){var d=a.__pickmeup.options,e=M(a),g=window.pageXOffset,f=window.pageYOffset,l=document.documentElement.clientWidth,h=document.documentElement.clientHeight,m=e.top,p=e.left;d.bound.fill();B(a,"input")&&((b=
a.value)&&d.bound.set_date(b),t(a,a,"keydown",function(a){9==a.which&&d.bound.hide()}),d.lastSel=!1);if(C(a,"show")&&!d.flat){switch(d.position){case "top":m-=c.offsetHeight;break;case "left":p-=c.offsetWidth;break;case "right":p+=a.offsetWidth;break;case "bottom":m+=a.offsetHeight}m+c.offsetHeight>f+h&&(m=e.top-c.offsetHeight);m<f&&(m=e.top+a.offsetHeight);p+c.offsetWidth>g+l&&(p=e.left-c.offsetWidth);p<g&&(p=e.left+a.offsetWidth);c.style.top=m+"px";c.style.left=p+"px";c.classList.remove("pmu-hidden");
setTimeout(function(){t(a,document.documentElement,"click",d.bound.hide);t(a,window,"resize",d.bound.forced_show)})}}}function Q(a,b){var c=a.__pickmeup.element,d=a.__pickmeup.options;b&&b.target&&(b.target==a||c.compareDocumentPosition(b.target)&16)||!C(a,"hide")||(g(c,"pmu-hidden"),y(a,document.documentElement,"click",d.bound.hide),y(a,window,"resize",d.bound.forced_show),d.lastSel=!1)}function R(a){var b=a.__pickmeup.options;y(a,document.documentElement,"click",b.bound.hide);y(a,window,"resize",
b.bound.forced_show);b.bound.forced_show()}function S(a){a=a.__pickmeup.options;"single"!=a.mode&&(a.date=[],a.lastSel=!1,a.bound.fill())}function T(a,b){"undefined"==typeof b&&(b=!0);var c=a.__pickmeup.element;a=a.__pickmeup.options;n(c,"pmu-view-years")?w(a.current,-12):n(c,"pmu-view-months")?w(a.current,-1):n(c,"pmu-view-days")&&q(a.current,-1);b&&a.bound.fill()}function U(a,b){"undefined"==typeof b&&(b=!0);var c=a.__pickmeup.element;a=a.__pickmeup.options;n(c,"pmu-view-years")?w(a.current,12):
n(c,"pmu-view-months")?w(a.current,1):n(c,"pmu-view-days")&&q(a.current,1);b&&a.bound.fill()}function V(a,b){var c=a.__pickmeup.options;a=H(c);return"string"===typeof b?(a=a.date,a instanceof Date?D(a,b,c.locales[c.locale]):a.map(function(a){return D(a,b,c.locales[c.locale])})):a[b?"formatted_date":"date"]}function W(a,b,c){var d=a.__pickmeup.options;if(!(b instanceof Array)||0<b.length)if(d.date=u(b,d),"single"!=d.mode)for(d.date instanceof Array?(d.date[0]=d.date[0]||u(new Date,d),"range"==d.mode&&
(d.date[1]=d.date[1]||u(d.date[0],d))):(d.date=[d.date],"range"==d.mode&&d.date.push(u(d.date[0],d))),b=0;b<d.date.length;++b)d.date[b]=L(d.date[b],d.min,d.max);else d.date instanceof Array&&(d.date=d.date[0]),d.date=L(d.date,d.min,d.max);else d.date=[];if(!d.select_day)if(d.date instanceof Array)for(b=0;b<d.date.length;++b)d.date[b].setDate(1);else d.date.setDate(1);if("multiple"==d.mode)for(b=0;b<d.date.length;++b)d.date.indexOf(d.date[b])!==b&&(d.date.splice(b,1),--b);c?d.current=u(c,d):(c="single"===
d.mode?d.date:d.date[d.date.length-1],d.current=c?new Date(c):new Date);d.current.setDate(1);d.bound.fill();B(a,"input")&&!1!==d.default_date&&(c=H(d),b=a.value,d="single"==d.mode?c.formatted_date:c.formatted_date.join(d.separator),b||C(a,"change",c),b!=d&&(a.value=d))}function X(a){var b=a.__pickmeup.element;y(a);x(b);delete a.__pickmeup}function L(a,b,c){return b&&b>a?new Date(b):c&&c<a?new Date(c):a}function E(a,b){"string"==typeof a&&(a=document.querySelector(a));if(!a)return null;if(!a.__pickmeup){var c,
d={};b=b||{};for(c in E.defaults)d[c]=c in b?b[c]:E.defaults[c];for(c in d)b=a.getAttribute("data-pmu-"+c),null!==b&&(d[c]=b);"days"!=d.view||d.select_day||(d.view="months");"months"!=d.view||d.select_month||(d.view="years");"years"!=d.view||d.select_year||(d.view="days");"days"!=d.view||d.select_day||(d.view="months");d.calendars=Math.max(1,parseInt(d.calendars,10)||1);d.mode=/single|multiple|range/.test(d.mode)?d.mode:"single";d.min&&(d.min=u(d.min,d),d.select_day||d.min.setDate(1));d.max&&(d.max=
u(d.max,d),d.select_day||d.max.setDate(1));b=document.createElement("div");a.__pickmeup={options:d,events:[],element:b};b.__pickmeup_target=a;g(b,"pickmeup");d.class_name&&g(b,d.class_name);d.bound={fill:N.bind(a,a),update_date:O.bind(a,a),click:P.bind(a,a),show:I.bind(a,a),forced_show:I.bind(a,a,!0),hide:Q.bind(a,a),update:R.bind(a,a),clear:S.bind(a,a),prev:T.bind(a,a),next:U.bind(a,a),get_date:V.bind(a,a),set_date:W.bind(a,a),destroy:X.bind(a,a)};g(b,"pmu-view-"+d.view);var e=d.instance_template(d),
n="";for(c=0;c<d.calendars;++c)n+=e;b.innerHTML=n;t(a,b,"click",d.bound.click);t(a,b,"onselectstart"in Element.prototype?"selectstart":"mousedown",function(a){a.preventDefault()});d.flat?(g(b,"pmu-flat"),a.appendChild(b)):(g(b,"pmu-hidden"),document.body.appendChild(b),t(a,a,"click",I.bind(a,a,!1)),t(a,a,"input",d.bound.update),t(a,a,"change",d.bound.update));d.bound.set_date(d.date,d.current)}d=a.__pickmeup.options;return{hide:d.bound.hide,show:d.bound.show,clear:d.bound.clear,update:d.bound.update,
prev:d.bound.prev,next:d.bound.next,get_date:d.bound.get_date,set_date:d.bound.set_date,destroy:d.bound.destroy}}E.defaults={current:null,date:new Date,default_date:new Date,flat:!1,first_day:1,prev:"\x26#9664;",next:"\x26#9654;",mode:"single",select_year:!0,select_month:!0,select_day:!0,view:"days",calendars:1,format:"d-m-Y",title_format:"B, Y",position:"bottom",class_name:"",separator:" - ",hide_on_select:!1,min:null,max:null,render:function(){},locale:"en",locales:{en:{days:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
daysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),daysMin:"Su Mo Tu We Th Fr Sa".split(" "),months:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ")}},instance_template:function(a){var b=a.locales[a.locale].daysMin.slice();a.first_day&&b.push(b.shift());return'\x3cdiv class\x3d"pmu-instance"\x3e\x3cnav\x3e\x3cdiv class\x3d"pmu-prev pmu-button"\x3e'+a.prev+'\x3c/div\x3e\x3cdiv class\x3d"pmu-month pmu-button"\x3e\x3c/div\x3e\x3cdiv class\x3d"pmu-next pmu-button"\x3e'+
a.next+'\x3c/div\x3e\x3c/nav\x3e\x3cnav class\x3d"pmu-day-of-week"\x3e\x3cdiv\x3e'+b.join("\x3c/div\x3e\x3cdiv\x3e")+"\x3c/div\x3e\x3c/nav\x3e\x3c/div\x3e"},instance_content_template:function(a,b){var c=document.createElement("div");g(c,b);for(b=0;b<a.length;++b)g(a[b],"pmu-button"),c.appendChild(a[b]);return c}};return E});
/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function (jQuery) {
    // This is needed so we can catch the AMD loader configuration and use it
    // The inner file should be wrapped (by `banner.start.js`) in a function that
    // returns the AMD loader references.
    var S2 =
        (function () {
            // Restore the Select2 AMD loader so it can be used
            // Needed mostly in the language files, where the loader is not inserted
            if (jQuery && jQuery.fn && jQuery.fn.select2 && jQuery.fn.select2.amd) {
                var S2 = jQuery.fn.select2.amd;
            }
            var S2;(function () { if (!S2 || !S2.requirejs) {
                if (!S2) { S2 = {}; } else { require = S2; }
                /**
                 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
                 * Available via the MIT or new BSD license.
                 * see: http://github.com/jrburke/almond for details
                 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
                /*jslint sloppy: true */
                /*global setTimeout: false */

                var requirejs, require, define;
                (function (undef) {
                    var main, req, makeMap, handlers,
                        defined = {},
                        waiting = {},
                        config = {},
                        defining = {},
                        hasOwn = Object.prototype.hasOwnProperty,
                        aps = [].slice,
                        jsSuffixRegExp = /\.js$/;

                    function hasProp(obj, prop) {
                        return hasOwn.call(obj, prop);
                    }

                    /**
                     * Given a relative module name, like ./something, normalize it to
                     * a real name that can be mapped to a path.
                     * @param {String} name the relative name
                     * @param {String} baseName a real name that the name arg is relative
                     * to.
                     * @returns {String} normalized name
                     */
                    function normalize(name, baseName) {
                        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
                            foundI, foundStarMap, starI, i, j, part,
                            baseParts = baseName && baseName.split("/"),
                            map = config.map,
                            starMap = (map && map['*']) || {};

                        //Adjust any relative paths.
                        if (name && name.charAt(0) === ".") {
                            //If have a base name, try to normalize against it,
                            //otherwise, assume it is a top-level require that will
                            //be relative to baseUrl in the end.
                            if (baseName) {
                                name = name.split('/');
                                lastIndex = name.length - 1;

                                // Node .js allowance:
                                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                                }

                                //Lop off the last part of baseParts, so that . matches the
                                //"directory" and not name of the baseName's module. For instance,
                                //baseName of "one/two/three", maps to "one/two/three.js", but we
                                //want the directory, "one/two" for this normalization.
                                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                                //start trimDots
                                for (i = 0; i < name.length; i += 1) {
                                    part = name[i];
                                    if (part === ".") {
                                        name.splice(i, 1);
                                        i -= 1;
                                    } else if (part === "..") {
                                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                                            //End of the line. Keep at least one non-dot
                                            //path segment at the front so it can be mapped
                                            //correctly to disk. Otherwise, there is likely
                                            //no path mapping for a path starting with '..'.
                                            //This can still fail, but catches the most reasonable
                                            //uses of ..
                                            break;
                                        } else if (i > 0) {
                                            name.splice(i - 1, 2);
                                            i -= 2;
                                        }
                                    }
                                }
                                //end trimDots

                                name = name.join("/");
                            } else if (name.indexOf('./') === 0) {
                                // No baseName, so this is ID is resolved relative
                                // to baseUrl, pull off the leading dot.
                                name = name.substring(2);
                            }
                        }

                        //Apply map config if available.
                        if ((baseParts || starMap) && map) {
                            nameParts = name.split('/');

                            for (i = nameParts.length; i > 0; i -= 1) {
                                nameSegment = nameParts.slice(0, i).join("/");

                                if (baseParts) {
                                    //Find the longest baseName segment match in the config.
                                    //So, do joins on the biggest to smallest lengths of baseParts.
                                    for (j = baseParts.length; j > 0; j -= 1) {
                                        mapValue = map[baseParts.slice(0, j).join('/')];

                                        //baseName segment has  config, find if it has one for
                                        //this name.
                                        if (mapValue) {
                                            mapValue = mapValue[nameSegment];
                                            if (mapValue) {
                                                //Match, update name to the new value.
                                                foundMap = mapValue;
                                                foundI = i;
                                                break;
                                            }
                                        }
                                    }
                                }

                                if (foundMap) {
                                    break;
                                }

                                //Check for a star map match, but just hold on to it,
                                //if there is a shorter segment match later in a matching
                                //config, then favor over this star map.
                                if (!foundStarMap && starMap && starMap[nameSegment]) {
                                    foundStarMap = starMap[nameSegment];
                                    starI = i;
                                }
                            }

                            if (!foundMap && foundStarMap) {
                                foundMap = foundStarMap;
                                foundI = starI;
                            }

                            if (foundMap) {
                                nameParts.splice(0, foundI, foundMap);
                                name = nameParts.join('/');
                            }
                        }

                        return name;
                    }

                    function makeRequire(relName, forceSync) {
                        return function () {
                            //A version of a require function that passes a moduleName
                            //value for items that may need to
                            //look up paths relative to the moduleName
                            var args = aps.call(arguments, 0);

                            //If first arg is not require('string'), and there is only
                            //one arg, it is the array form without a callback. Insert
                            //a null so that the following concat is correct.
                            if (typeof args[0] !== 'string' && args.length === 1) {
                                args.push(null);
                            }
                            return req.apply(undef, args.concat([relName, forceSync]));
                        };
                    }

                    function makeNormalize(relName) {
                        return function (name) {
                            return normalize(name, relName);
                        };
                    }

                    function makeLoad(depName) {
                        return function (value) {
                            defined[depName] = value;
                        };
                    }

                    function callDep(name) {
                        if (hasProp(waiting, name)) {
                            var args = waiting[name];
                            delete waiting[name];
                            defining[name] = true;
                            main.apply(undef, args);
                        }

                        if (!hasProp(defined, name) && !hasProp(defining, name)) {
                            throw new Error('No ' + name);
                        }
                        return defined[name];
                    }

                    //Turns a plugin!resource to [plugin, resource]
                    //with the plugin being undefined if the name
                    //did not have a plugin prefix.
                    function splitPrefix(name) {
                        var prefix,
                            index = name ? name.indexOf('!') : -1;
                        if (index > -1) {
                            prefix = name.substring(0, index);
                            name = name.substring(index + 1, name.length);
                        }
                        return [prefix, name];
                    }

                    /**
                     * Makes a name map, normalizing the name, and using a plugin
                     * for normalization if necessary. Grabs a ref to plugin
                     * too, as an optimization.
                     */
                    makeMap = function (name, relName) {
                        var plugin,
                            parts = splitPrefix(name),
                            prefix = parts[0];

                        name = parts[1];

                        if (prefix) {
                            prefix = normalize(prefix, relName);
                            plugin = callDep(prefix);
                        }

                        //Normalize according
                        if (prefix) {
                            if (plugin && plugin.normalize) {
                                name = plugin.normalize(name, makeNormalize(relName));
                            } else {
                                name = normalize(name, relName);
                            }
                        } else {
                            name = normalize(name, relName);
                            parts = splitPrefix(name);
                            prefix = parts[0];
                            name = parts[1];
                            if (prefix) {
                                plugin = callDep(prefix);
                            }
                        }

                        //Using ridiculous property names for space reasons
                        return {
                            f: prefix ? prefix + '!' + name : name, //fullName
                            n: name,
                            pr: prefix,
                            p: plugin
                        };
                    };

                    function makeConfig(name) {
                        return function () {
                            return (config && config.config && config.config[name]) || {};
                        };
                    }

                    handlers = {
                        require: function (name) {
                            return makeRequire(name);
                        },
                        exports: function (name) {
                            var e = defined[name];
                            if (typeof e !== 'undefined') {
                                return e;
                            } else {
                                return (defined[name] = {});
                            }
                        },
                        module: function (name) {
                            return {
                                id: name,
                                uri: '',
                                exports: defined[name],
                                config: makeConfig(name)
                            };
                        }
                    };

                    main = function (name, deps, callback, relName) {
                        var cjsModule, depName, ret, map, i,
                            args = [],
                            callbackType = typeof callback,
                            usingExports;

                        //Use name if no relName
                        relName = relName || name;

                        //Call the callback to define the module, if necessary.
                        if (callbackType === 'undefined' || callbackType === 'function') {
                            //Pull out the defined dependencies and pass the ordered
                            //values to the callback.
                            //Default to [require, exports, module] if no deps
                            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
                            for (i = 0; i < deps.length; i += 1) {
                                map = makeMap(deps[i], relName);
                                depName = map.f;

                                //Fast path CommonJS standard dependencies.
                                if (depName === "require") {
                                    args[i] = handlers.require(name);
                                } else if (depName === "exports") {
                                    //CommonJS module spec 1.1
                                    args[i] = handlers.exports(name);
                                    usingExports = true;
                                } else if (depName === "module") {
                                    //CommonJS module spec 1.1
                                    cjsModule = args[i] = handlers.module(name);
                                } else if (hasProp(defined, depName) ||
                                    hasProp(waiting, depName) ||
                                    hasProp(defining, depName)) {
                                    args[i] = callDep(depName);
                                } else if (map.p) {
                                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                                    args[i] = defined[depName];
                                } else {
                                    throw new Error(name + ' missing ' + depName);
                                }
                            }

                            ret = callback ? callback.apply(defined[name], args) : undefined;

                            if (name) {
                                //If setting exports via "module" is in play,
                                //favor that over return value and exports. After that,
                                //favor a non-undefined return value over exports use.
                                if (cjsModule && cjsModule.exports !== undef &&
                                    cjsModule.exports !== defined[name]) {
                                    defined[name] = cjsModule.exports;
                                } else if (ret !== undef || !usingExports) {
                                    //Use the return value from the function.
                                    defined[name] = ret;
                                }
                            }
                        } else if (name) {
                            //May just be an object definition for the module. Only
                            //worry about defining if have a module name.
                            defined[name] = callback;
                        }
                    };

                    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
                        if (typeof deps === "string") {
                            if (handlers[deps]) {
                                //callback in this case is really relName
                                return handlers[deps](callback);
                            }
                            //Just return the module wanted. In this scenario, the
                            //deps arg is the module name, and second arg (if passed)
                            //is just the relName.
                            //Normalize module name, if it contains . or ..
                            return callDep(makeMap(deps, callback).f);
                        } else if (!deps.splice) {
                            //deps is a config object, not an array.
                            config = deps;
                            if (config.deps) {
                                req(config.deps, config.callback);
                            }
                            if (!callback) {
                                return;
                            }

                            if (callback.splice) {
                                //callback is an array, which means it is a dependency list.
                                //Adjust args if there are dependencies
                                deps = callback;
                                callback = relName;
                                relName = null;
                            } else {
                                deps = undef;
                            }
                        }

                        //Support require(['a'])
                        callback = callback || function () {};

                        //If relName is a function, it is an errback handler,
                        //so remove it.
                        if (typeof relName === 'function') {
                            relName = forceSync;
                            forceSync = alt;
                        }

                        //Simulate async callback;
                        if (forceSync) {
                            main(undef, deps, callback, relName);
                        } else {
                            //Using a non-zero value because of concern for what old browsers
                            //do, and latest browsers "upgrade" to 4 if lower value is used:
                            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
                            //If want a value immediately, use require('id') instead -- something
                            //that works in almond on the global level, but not guaranteed and
                            //unlikely to work in other AMD implementations.
                            setTimeout(function () {
                                main(undef, deps, callback, relName);
                            }, 4);
                        }

                        return req;
                    };

                    /**
                     * Just drops the config on the floor, but returns req in case
                     * the config return value is used.
                     */
                    req.config = function (cfg) {
                        return req(cfg);
                    };

                    /**
                     * Expose module registry for debugging and tooling
                     */
                    requirejs._defined = defined;

                    define = function (name, deps, callback) {
                        if (typeof name !== 'string') {
                            throw new Error('See almond README: incorrect module build, no module name');
                        }

                        //This module may not have dependencies
                        if (!deps.splice) {
                            //deps is not an array, so probably means
                            //an object literal or factory function for
                            //the value. Adjust args.
                            callback = deps;
                            deps = [];
                        }

                        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
                            waiting[name] = [name, deps, callback];
                        }
                    };

                    define.amd = {
                        jQuery: true
                    };
                }());

                S2.requirejs = requirejs;S2.require = require;S2.define = define;
            }
            }());
            S2.define("almond", function(){});

            /* global jQuery:false, $:false */
            S2.define('jquery',[],function () {
                var _$ = jQuery || $;

                if (_$ == null && console && console.error) {
                    console.error(
                        'Select2: An instance of jQuery or a jQuery-compatible library was not ' +
                        'found. Make sure that you are including jQuery before Select2 on your ' +
                        'web page.'
                    );
                }

                return _$;
            });

            S2.define('select2/utils',[
                'jquery'
            ], function ($) {
                var Utils = {};

                Utils.Extend = function (ChildClass, SuperClass) {
                    var __hasProp = {}.hasOwnProperty;

                    function BaseConstructor () {
                        this.constructor = ChildClass;
                    }

                    for (var key in SuperClass) {
                        if (__hasProp.call(SuperClass, key)) {
                            ChildClass[key] = SuperClass[key];
                        }
                    }

                    BaseConstructor.prototype = SuperClass.prototype;
                    ChildClass.prototype = new BaseConstructor();
                    ChildClass.__super__ = SuperClass.prototype;

                    return ChildClass;
                };

                function getMethods (theClass) {
                    var proto = theClass.prototype;

                    var methods = [];

                    for (var methodName in proto) {
                        var m = proto[methodName];

                        if (typeof m !== 'function') {
                            continue;
                        }

                        if (methodName === 'constructor') {
                            continue;
                        }

                        methods.push(methodName);
                    }

                    return methods;
                }

                Utils.Decorate = function (SuperClass, DecoratorClass) {
                    var decoratedMethods = getMethods(DecoratorClass);
                    var superMethods = getMethods(SuperClass);

                    function DecoratedClass () {
                        var unshift = Array.prototype.unshift;

                        var argCount = DecoratorClass.prototype.constructor.length;

                        var calledConstructor = SuperClass.prototype.constructor;

                        if (argCount > 0) {
                            unshift.call(arguments, SuperClass.prototype.constructor);

                            calledConstructor = DecoratorClass.prototype.constructor;
                        }

                        calledConstructor.apply(this, arguments);
                    }

                    DecoratorClass.displayName = SuperClass.displayName;

                    function ctr () {
                        this.constructor = DecoratedClass;
                    }

                    DecoratedClass.prototype = new ctr();

                    for (var m = 0; m < superMethods.length; m++) {
                        var superMethod = superMethods[m];

                        DecoratedClass.prototype[superMethod] =
                            SuperClass.prototype[superMethod];
                    }

                    var calledMethod = function (methodName) {
                        // Stub out the original method if it's not decorating an actual method
                        var originalMethod = function () {};

                        if (methodName in DecoratedClass.prototype) {
                            originalMethod = DecoratedClass.prototype[methodName];
                        }

                        var decoratedMethod = DecoratorClass.prototype[methodName];

                        return function () {
                            var unshift = Array.prototype.unshift;

                            unshift.call(arguments, originalMethod);

                            return decoratedMethod.apply(this, arguments);
                        };
                    };

                    for (var d = 0; d < decoratedMethods.length; d++) {
                        var decoratedMethod = decoratedMethods[d];

                        DecoratedClass.prototype[decoratedMethod] = calledMethod(decoratedMethod);
                    }

                    return DecoratedClass;
                };

                var Observable = function () {
                    this.listeners = {};
                };

                Observable.prototype.on = function (event, callback) {
                    this.listeners = this.listeners || {};

                    if (event in this.listeners) {
                        this.listeners[event].push(callback);
                    } else {
                        this.listeners[event] = [callback];
                    }
                };

                Observable.prototype.trigger = function (event) {
                    var slice = Array.prototype.slice;
                    var params = slice.call(arguments, 1);

                    this.listeners = this.listeners || {};

                    // Params should always come in as an array
                    if (params == null) {
                        params = [];
                    }

                    // If there are no arguments to the event, use a temporary object
                    if (params.length === 0) {
                        params.push({});
                    }

                    // Set the `_type` of the first object to the event
                    params[0]._type = event;

                    if (event in this.listeners) {
                        this.invoke(this.listeners[event], slice.call(arguments, 1));
                    }

                    if ('*' in this.listeners) {
                        this.invoke(this.listeners['*'], arguments);
                    }
                };

                Observable.prototype.invoke = function (listeners, params) {
                    for (var i = 0, len = listeners.length; i < len; i++) {
                        listeners[i].apply(this, params);
                    }
                };

                Utils.Observable = Observable;

                Utils.generateChars = function (length) {
                    var chars = '';

                    for (var i = 0; i < length; i++) {
                        var randomChar = Math.floor(Math.random() * 36);
                        chars += randomChar.toString(36);
                    }

                    return chars;
                };

                Utils.bind = function (func, context) {
                    return function () {
                        func.apply(context, arguments);
                    };
                };

                Utils._convertData = function (data) {
                    for (var originalKey in data) {
                        var keys = originalKey.split('-');

                        var dataLevel = data;

                        if (keys.length === 1) {
                            continue;
                        }

                        for (var k = 0; k < keys.length; k++) {
                            var key = keys[k];

                            // Lowercase the first letter
                            // By default, dash-separated becomes camelCase
                            key = key.substring(0, 1).toLowerCase() + key.substring(1);

                            if (!(key in dataLevel)) {
                                dataLevel[key] = {};
                            }

                            if (k == keys.length - 1) {
                                dataLevel[key] = data[originalKey];
                            }

                            dataLevel = dataLevel[key];
                        }

                        delete data[originalKey];
                    }

                    return data;
                };

                Utils.hasScroll = function (index, el) {
                    // Adapted from the function created by @ShadowScripter
                    // and adapted by @BillBarry on the Stack Exchange Code Review website.
                    // The original code can be found at
                    // http://codereview.stackexchange.com/q/13338
                    // and was designed to be used with the Sizzle selector engine.

                    var $el = $(el);
                    var overflowX = el.style.overflowX;
                    var overflowY = el.style.overflowY;

                    //Check both x and y declarations
                    if (overflowX === overflowY &&
                        (overflowY === 'hidden' || overflowY === 'visible')) {
                        return false;
                    }

                    if (overflowX === 'scroll' || overflowY === 'scroll') {
                        return true;
                    }

                    return ($el.innerHeight() < el.scrollHeight ||
                    $el.innerWidth() < el.scrollWidth);
                };

                Utils.escapeMarkup = function (markup) {
                    var replaceMap = {
                        '\\': '&#92;',
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        '"': '&quot;',
                        '\'': '&#39;',
                        '/': '&#47;'
                    };

                    // Do not try to escape the markup if it's not a string
                    if (typeof markup !== 'string') {
                        return markup;
                    }

                    return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
                        return replaceMap[match];
                    });
                };

                // Append an array of jQuery nodes to a given element.
                Utils.appendMany = function ($element, $nodes) {
                    // jQuery 1.7.x does not support $.fn.append() with an array
                    // Fall back to a jQuery object collection using $.fn.add()
                    if ($.fn.jquery.substr(0, 3) === '1.7') {
                        var $jqNodes = $();

                        $.map($nodes, function (node) {
                            $jqNodes = $jqNodes.add(node);
                        });

                        $nodes = $jqNodes;
                    }

                    $element.append($nodes);
                };

                return Utils;
            });

            S2.define('select2/results',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Results ($element, options, dataAdapter) {
                    this.$element = $element;
                    this.data = dataAdapter;
                    this.options = options;

                    Results.__super__.constructor.call(this);
                }

                Utils.Extend(Results, Utils.Observable);

                Results.prototype.render = function () {
                    var $results = $(
                        '<ul class="select2-results__options" role="tree"></ul>'
                    );

                    if (this.options.get('multiple')) {
                        $results.attr('aria-multiselectable', 'true');
                    }

                    this.$results = $results;

                    return $results;
                };

                Results.prototype.clear = function () {
                    this.$results.empty();
                };

                Results.prototype.displayMessage = function (params) {
                    var escapeMarkup = this.options.get('escapeMarkup');

                    this.clear();
                    this.hideLoading();

                    var $message = $(
                        '<li role="treeitem" aria-live="assertive"' +
                        ' class="select2-results__option"></li>'
                    );

                    var message = this.options.get('translations').get(params.message);

                    $message.append(
                        escapeMarkup(
                            message(params.args)
                        )
                    );

                    $message[0].className += ' select2-results__message';

                    this.$results.append($message);
                };

                Results.prototype.hideMessages = function () {
                    this.$results.find('.select2-results__message').remove();
                };

                Results.prototype.append = function (data) {
                    this.hideLoading();

                    var $options = [];

                    if (data.results == null || data.results.length === 0) {
                        if (this.$results.children().length === 0) {
                            this.trigger('results:message', {
                                message: 'noResults'
                            });
                        }

                        return;
                    }

                    data.results = this.sort(data.results);

                    for (var d = 0; d < data.results.length; d++) {
                        var item = data.results[d];

                        var $option = this.option(item);

                        $options.push($option);
                    }

                    this.$results.append($options);
                };

                Results.prototype.position = function ($results, $dropdown) {
                    var $resultsContainer = $dropdown.find('.select2-results');
                    $resultsContainer.append($results);
                };

                Results.prototype.sort = function (data) {
                    var sorter = this.options.get('sorter');

                    return sorter(data);
                };

                Results.prototype.highlightFirstItem = function () {
                    var $options = this.$results
                        .find('.select2-results__option[aria-selected]');

                    var $selected = $options.filter('[aria-selected=true]');

                    // Check if there are any selected options
                    if ($selected.length > 0) {
                        // If there are selected options, highlight the first
                        $selected.first().trigger('mouseenter');
                    } else {
                        // If there are no selected options, highlight the first option
                        // in the dropdown
                        $options.first().trigger('mouseenter');
                    }

                    this.ensureHighlightVisible();
                };

                Results.prototype.setClasses = function () {
                    var self = this;

                    this.data.current(function (selected) {
                        var selectedIds = $.map(selected, function (s) {
                            return s.id.toString();
                        });

                        var $options = self.$results
                            .find('.select2-results__option[aria-selected]');

                        $options.each(function () {
                            var $option = $(this);

                            var item = $.data(this, 'data');

                            // id needs to be converted to a string when comparing
                            var id = '' + item.id;

                            if ((item.element != null && item.element.selected) ||
                                (item.element == null && $.inArray(id, selectedIds) > -1)) {
                                $option.attr('aria-selected', 'true');
                            } else {
                                $option.attr('aria-selected', 'false');
                            }
                        });

                    });
                };

                Results.prototype.showLoading = function (params) {
                    this.hideLoading();

                    var loadingMore = this.options.get('translations').get('searching');

                    var loading = {
                        disabled: true,
                        loading: true,
                        text: loadingMore(params)
                    };
                    var $loading = this.option(loading);
                    $loading.className += ' loading-results';

                    this.$results.prepend($loading);
                };

                Results.prototype.hideLoading = function () {
                    this.$results.find('.loading-results').remove();
                };

                Results.prototype.option = function (data) {
                    var option = document.createElement('li');
                    option.className = 'select2-results__option';

                    var attrs = {
                        'role': 'treeitem',
                        'aria-selected': 'false'
                    };

                    if (data.disabled) {
                        delete attrs['aria-selected'];
                        attrs['aria-disabled'] = 'true';
                    }

                    if (data.id == null) {
                        delete attrs['aria-selected'];
                    }

                    if (data._resultId != null) {
                        option.id = data._resultId;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    if (data.children) {
                        attrs.role = 'group';
                        attrs['aria-label'] = data.text;
                        delete attrs['aria-selected'];
                    }

                    for (var attr in attrs) {
                        var val = attrs[attr];

                        option.setAttribute(attr, val);
                    }

                    if (data.children) {
                        var $option = $(option);

                        var label = document.createElement('strong');
                        label.className = 'select2-results__group';

                        var $label = $(label);
                        this.template(data, label);

                        var $children = [];

                        for (var c = 0; c < data.children.length; c++) {
                            var child = data.children[c];

                            var $child = this.option(child);

                            $children.push($child);
                        }

                        var $childrenContainer = $('<ul></ul>', {
                            'class': 'select2-results__options select2-results__options--nested'
                        });

                        $childrenContainer.append($children);

                        $option.append(label);
                        $option.append($childrenContainer);
                    } else {
                        this.template(data, option);
                    }

                    $.data(option, 'data', data);

                    return option;
                };

                Results.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-results';

                    this.$results.attr('id', id);

                    container.on('results:all', function (params) {
                        self.clear();
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                            self.highlightFirstItem();
                        }
                    });

                    container.on('results:append', function (params) {
                        self.append(params.data);

                        if (container.isOpen()) {
                            self.setClasses();
                        }
                    });

                    container.on('query', function (params) {
                        self.hideMessages();
                        self.showLoading(params);
                    });

                    container.on('select', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                        self.highlightFirstItem();
                    });

                    container.on('unselect', function () {
                        if (!container.isOpen()) {
                            return;
                        }

                        self.setClasses();
                        self.highlightFirstItem();
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expended="true"
                        self.$results.attr('aria-expanded', 'true');
                        self.$results.attr('aria-hidden', 'false');

                        self.setClasses();
                        self.ensureHighlightVisible();
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expended="false"
                        self.$results.attr('aria-expanded', 'false');
                        self.$results.attr('aria-hidden', 'true');
                        self.$results.removeAttr('aria-activedescendant');
                    });

                    container.on('results:toggle', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        $highlighted.trigger('mouseup');
                    });

                    container.on('results:select', function () {
                        var $highlighted = self.getHighlightedResults();

                        if ($highlighted.length === 0) {
                            return;
                        }

                        var data = $highlighted.data('data');

                        if ($highlighted.attr('aria-selected') == 'true') {
                            self.trigger('close', {});
                        } else {
                            self.trigger('select', {
                                data: data
                            });
                        }
                    });

                    container.on('results:previous', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        // If we are already at te top, don't move further
                        if (currentIndex === 0) {
                            return;
                        }

                        var nextIndex = currentIndex - 1;

                        // If none are highlighted, highlight the first
                        if ($highlighted.length === 0) {
                            nextIndex = 0;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top;
                        var nextTop = $next.offset().top;
                        var nextOffset = self.$results.scrollTop() + (nextTop - currentOffset);

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextTop - currentOffset < 0) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:next', function () {
                        var $highlighted = self.getHighlightedResults();

                        var $options = self.$results.find('[aria-selected]');

                        var currentIndex = $options.index($highlighted);

                        var nextIndex = currentIndex + 1;

                        // If we are at the last option, stay there
                        if (nextIndex >= $options.length) {
                            return;
                        }

                        var $next = $options.eq(nextIndex);

                        $next.trigger('mouseenter');

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var nextBottom = $next.offset().top + $next.outerHeight(false);
                        var nextOffset = self.$results.scrollTop() + nextBottom - currentOffset;

                        if (nextIndex === 0) {
                            self.$results.scrollTop(0);
                        } else if (nextBottom > currentOffset) {
                            self.$results.scrollTop(nextOffset);
                        }
                    });

                    container.on('results:focus', function (params) {
                        params.element.addClass('select2-results__option--highlighted');
                    });

                    container.on('results:message', function (params) {
                        self.displayMessage(params);
                    });

                    if ($.fn.mousewheel) {
                        this.$results.on('mousewheel', function (e) {
                            var top = self.$results.scrollTop();

                            var bottom = self.$results.get(0).scrollHeight - top + e.deltaY;

                            var isAtTop = e.deltaY > 0 && top - e.deltaY <= 0;
                            var isAtBottom = e.deltaY < 0 && bottom <= self.$results.height();

                            if (isAtTop) {
                                self.$results.scrollTop(0);

                                e.preventDefault();
                                e.stopPropagation();
                            } else if (isAtBottom) {
                                self.$results.scrollTop(
                                    self.$results.get(0).scrollHeight - self.$results.height()
                                );

                                e.preventDefault();
                                e.stopPropagation();
                            }
                        });
                    }

                    this.$results.on('mouseup', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var $this = $(this);

                            var data = $this.data('data');

                            if ($this.attr('aria-selected') === 'true') {
                                if (self.options.get('multiple')) {
                                    self.trigger('unselect', {
                                        originalEvent: evt,
                                        data: data
                                    });
                                } else {
                                    self.trigger('close', {});
                                }

                                return;
                            }

                            self.trigger('select', {
                                originalEvent: evt,
                                data: data
                            });
                        });

                    this.$results.on('mouseenter', '.select2-results__option[aria-selected]',
                        function (evt) {
                            var data = $(this).data('data');

                            self.getHighlightedResults()
                                .removeClass('select2-results__option--highlighted');

                            self.trigger('results:focus', {
                                data: data,
                                element: $(this)
                            });
                        });
                };

                Results.prototype.getHighlightedResults = function () {
                    var $highlighted = this.$results
                        .find('.select2-results__option--highlighted');

                    return $highlighted;
                };

                Results.prototype.destroy = function () {
                    this.$results.remove();
                };

                Results.prototype.ensureHighlightVisible = function () {
                    var $highlighted = this.getHighlightedResults();

                    if ($highlighted.length === 0) {
                        return;
                    }

                    var $options = this.$results.find('[aria-selected]');

                    var currentIndex = $options.index($highlighted);

                    var currentOffset = this.$results.offset().top;
                    var nextTop = $highlighted.offset().top;
                    var nextOffset = this.$results.scrollTop() + (nextTop - currentOffset);

                    var offsetDelta = nextTop - currentOffset;
                    nextOffset -= $highlighted.outerHeight(false) * 2;

                    if (currentIndex <= 2) {
                        this.$results.scrollTop(0);
                    } else if (offsetDelta > this.$results.outerHeight() || offsetDelta < 0) {
                        this.$results.scrollTop(nextOffset);
                    }
                };

                Results.prototype.template = function (result, container) {
                    var template = this.options.get('templateResult');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    var content = template(result, container);

                    if (content == null) {
                        container.style.display = 'none';
                    } else if (typeof content === 'string') {
                        container.innerHTML = escapeMarkup(content);
                    } else {
                        $(container).append(content);
                    }
                };

                return Results;
            });

            S2.define('select2/keys',[

            ], function () {
                var KEYS = {
                    BACKSPACE: 8,
                    TAB: 9,
                    ENTER: 13,
                    SHIFT: 16,
                    CTRL: 17,
                    ALT: 18,
                    ESC: 27,
                    SPACE: 32,
                    PAGE_UP: 33,
                    PAGE_DOWN: 34,
                    END: 35,
                    HOME: 36,
                    LEFT: 37,
                    UP: 38,
                    RIGHT: 39,
                    DOWN: 40,
                    DELETE: 46
                };

                return KEYS;
            });

            S2.define('select2/selection/base',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function BaseSelection ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    BaseSelection.__super__.constructor.call(this);
                }

                Utils.Extend(BaseSelection, Utils.Observable);

                BaseSelection.prototype.render = function () {
                    var $selection = $(
                        '<span class="select2-selection" role="combobox" ' +
                        ' aria-haspopup="true" aria-expanded="false">' +
                        '</span>'
                    );

                    this._tabindex = 0;

                    if (this.$element.data('old-tabindex') != null) {
                        this._tabindex = this.$element.data('old-tabindex');
                    } else if (this.$element.attr('tabindex') != null) {
                        this._tabindex = this.$element.attr('tabindex');
                    }

                    $selection.attr('title', this.$element.attr('title'));
                    $selection.attr('tabindex', this._tabindex);

                    this.$selection = $selection;

                    return $selection;
                };

                BaseSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    var id = container.id + '-container';
                    var resultsId = container.id + '-results';

                    this.container = container;

                    this.$selection.on('focus', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('blur', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        if (evt.which === KEYS.SPACE) {
                            evt.preventDefault();
                        }
                    });

                    container.on('results:focus', function (params) {
                        self.$selection.attr('aria-activedescendant', params.data._resultId);
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });

                    container.on('open', function () {
                        // When the dropdown is open, aria-expanded="true"
                        self.$selection.attr('aria-expanded', 'true');
                        self.$selection.attr('aria-owns', resultsId);

                        self._attachCloseHandler(container);
                    });

                    container.on('close', function () {
                        // When the dropdown is closed, aria-expanded="false"
                        self.$selection.attr('aria-expanded', 'false');
                        self.$selection.removeAttr('aria-activedescendant');
                        self.$selection.removeAttr('aria-owns');

                        self.$selection.focus();

                        self._detachCloseHandler(container);
                    });

                    container.on('enable', function () {
                        self.$selection.attr('tabindex', self._tabindex);
                    });

                    container.on('disable', function () {
                        self.$selection.attr('tabindex', '-1');
                    });
                };

                BaseSelection.prototype._handleBlur = function (evt) {
                    var self = this;

                    // This needs to be delayed as the active element is the body when the tab
                    // key is pressed, possibly along with others.
                    window.setTimeout(function () {
                        // Don't trigger `blur` if the focus is still in the selection
                        if (
                            (document.activeElement == self.$selection[0]) ||
                            ($.contains(self.$selection[0], document.activeElement))
                        ) {
                            return;
                        }

                        self.trigger('blur', evt);
                    }, 1);
                };

                BaseSelection.prototype._attachCloseHandler = function (container) {
                    var self = this;

                    $(document.body).on('mousedown.select2.' + container.id, function (e) {
                        var $target = $(e.target);

                        var $select = $target.closest('.select2');

                        var $all = $('.select2.select2-container--open');

                        $all.each(function () {
                            var $this = $(this);

                            if (this == $select[0]) {
                                return;
                            }

                            var $element = $this.data('element');

                            $element.select2('close');
                        });
                    });
                };

                BaseSelection.prototype._detachCloseHandler = function (container) {
                    $(document.body).off('mousedown.select2.' + container.id);
                };

                BaseSelection.prototype.position = function ($selection, $container) {
                    var $selectionContainer = $container.find('.selection');
                    $selectionContainer.append($selection);
                };

                BaseSelection.prototype.destroy = function () {
                    this._detachCloseHandler(this.container);
                };

                BaseSelection.prototype.update = function (data) {
                    throw new Error('The `update` method must be defined in child classes.');
                };

                return BaseSelection;
            });

            S2.define('select2/selection/single',[
                'jquery',
                './base',
                '../utils',
                '../keys'
            ], function ($, BaseSelection, Utils, KEYS) {
                function SingleSelection () {
                    SingleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(SingleSelection, BaseSelection);

                SingleSelection.prototype.render = function () {
                    var $selection = SingleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--single');

                    $selection.html(
                        '<span class="select2-selection__rendered"></span>' +
                        '<span class="select2-selection__arrow" role="presentation">' +
                        '<b role="presentation"></b>' +
                        '</span>'
                    );

                    return $selection;
                };

                SingleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    SingleSelection.__super__.bind.apply(this, arguments);

                    var id = container.id + '-container';

                    this.$selection.find('.select2-selection__rendered').attr('id', id);
                    this.$selection.attr('aria-labelledby', id);

                    this.$selection.on('mousedown', function (evt) {
                        // Only respond to left clicks
                        if (evt.which !== 1) {
                            return;
                        }

                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on('focus', function (evt) {
                        // User focuses on the container
                    });

                    this.$selection.on('blur', function (evt) {
                        // User exits the container
                    });

                    container.on('focus', function (evt) {
                        if (!container.isOpen()) {
                            self.$selection.focus();
                        }
                    });

                    container.on('selection:update', function (params) {
                        self.update(params.data);
                    });
                };

                SingleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                SingleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                SingleSelection.prototype.selectionContainer = function () {
                    return $('<span></span>');
                };

                SingleSelection.prototype.update = function (data) {
                    if (data.length === 0) {
                        this.clear();
                        return;
                    }

                    var selection = data[0];

                    var $rendered = this.$selection.find('.select2-selection__rendered');
                    var formatted = this.display(selection, $rendered);

                    $rendered.empty().append(formatted);
                    $rendered.prop('title', selection.title || selection.text);
                };

                return SingleSelection;
            });

            S2.define('select2/selection/multiple',[
                'jquery',
                './base',
                '../utils'
            ], function ($, BaseSelection, Utils) {
                function MultipleSelection ($element, options) {
                    MultipleSelection.__super__.constructor.apply(this, arguments);
                }

                Utils.Extend(MultipleSelection, BaseSelection);

                MultipleSelection.prototype.render = function () {
                    var $selection = MultipleSelection.__super__.render.call(this);

                    $selection.addClass('select2-selection--multiple');

                    $selection.html(
                        '<ul class="select2-selection__rendered"></ul>'
                    );

                    return $selection;
                };

                MultipleSelection.prototype.bind = function (container, $container) {
                    var self = this;

                    MultipleSelection.__super__.bind.apply(this, arguments);

                    this.$selection.on('click', function (evt) {
                        self.trigger('toggle', {
                            originalEvent: evt
                        });
                    });

                    this.$selection.on(
                        'click',
                        '.select2-selection__choice__remove',
                        function (evt) {
                            // Ignore the event if it is disabled
                            if (self.options.get('disabled')) {
                                return;
                            }

                            var $remove = $(this);
                            var $selection = $remove.parent();

                            var data = $selection.data('data');

                            self.trigger('unselect', {
                                originalEvent: evt,
                                data: data
                            });
                        }
                    );
                };

                MultipleSelection.prototype.clear = function () {
                    this.$selection.find('.select2-selection__rendered').empty();
                };

                MultipleSelection.prototype.display = function (data, container) {
                    var template = this.options.get('templateSelection');
                    var escapeMarkup = this.options.get('escapeMarkup');

                    return escapeMarkup(template(data, container));
                };

                MultipleSelection.prototype.selectionContainer = function () {
                    var $container = $(
                        '<li class="select2-selection__choice">' +
                        '<span class="select2-selection__choice__remove" role="presentation">' +
                        '&times;' +
                        '</span>' +
                        '</li>'
                    );

                    return $container;
                };

                MultipleSelection.prototype.update = function (data) {
                    this.clear();

                    if (data.length === 0) {
                        return;
                    }

                    var $selections = [];

                    for (var d = 0; d < data.length; d++) {
                        var selection = data[d];

                        var $selection = this.selectionContainer();
                        var formatted = this.display(selection, $selection);

                        $selection.append(formatted);
                        $selection.prop('title', selection.title || selection.text);

                        $selection.data('data', selection);

                        $selections.push($selection);
                    }

                    var $rendered = this.$selection.find('.select2-selection__rendered');

                    Utils.appendMany($rendered, $selections);
                };

                return MultipleSelection;
            });

            S2.define('select2/selection/placeholder',[
                '../utils'
            ], function (Utils) {
                function Placeholder (decorated, $element, options) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options);
                }

                Placeholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                Placeholder.prototype.createPlaceholder = function (decorated, placeholder) {
                    var $placeholder = this.selectionContainer();

                    $placeholder.html(this.display(placeholder));
                    $placeholder.addClass('select2-selection__placeholder')
                        .removeClass('select2-selection__choice');

                    return $placeholder;
                };

                Placeholder.prototype.update = function (decorated, data) {
                    var singlePlaceholder = (
                        data.length == 1 && data[0].id != this.placeholder.id
                    );
                    var multipleSelections = data.length > 1;

                    if (multipleSelections || singlePlaceholder) {
                        return decorated.call(this, data);
                    }

                    this.clear();

                    var $placeholder = this.createPlaceholder(this.placeholder);

                    this.$selection.find('.select2-selection__rendered').append($placeholder);
                };

                return Placeholder;
            });

            S2.define('select2/selection/allowClear',[
                'jquery',
                '../keys'
            ], function ($, KEYS) {
                function AllowClear () { }

                AllowClear.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    if (this.placeholder == null) {
                        if (this.options.get('debug') && window.console && console.error) {
                            console.error(
                                'Select2: The `allowClear` option should be used in combination ' +
                                'with the `placeholder` option.'
                            );
                        }
                    }

                    this.$selection.on('mousedown', '.select2-selection__clear',
                        function (evt) {
                            self._handleClear(evt);
                        });

                    container.on('keypress', function (evt) {
                        self._handleKeyboardClear(evt, container);
                    });
                };

                AllowClear.prototype._handleClear = function (_, evt) {
                    // Ignore the event if it is disabled
                    if (this.options.get('disabled')) {
                        return;
                    }

                    var $clear = this.$selection.find('.select2-selection__clear');

                    // Ignore the event if nothing has been selected
                    if ($clear.length === 0) {
                        return;
                    }

                    evt.stopPropagation();

                    var data = $clear.data('data');

                    for (var d = 0; d < data.length; d++) {
                        var unselectData = {
                            data: data[d]
                        };

                        // Trigger the `unselect` event, so people can prevent it from being
                        // cleared.
                        this.trigger('unselect', unselectData);

                        // If the event was prevented, don't clear it out.
                        if (unselectData.prevented) {
                            return;
                        }
                    }

                    this.$element.val(this.placeholder.id).trigger('change');

                    this.trigger('toggle', {});
                };

                AllowClear.prototype._handleKeyboardClear = function (_, evt, container) {
                    if (container.isOpen()) {
                        return;
                    }

                    if (evt.which == KEYS.DELETE || evt.which == KEYS.BACKSPACE) {
                        this._handleClear(evt);
                    }
                };

                AllowClear.prototype.update = function (decorated, data) {
                    decorated.call(this, data);

                    if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
                        data.length === 0) {
                        return;
                    }

                    var $remove = $(
                        '<span class="select2-selection__clear">' +
                        '&times;' +
                        '</span>'
                    );
                    $remove.data('data', data);

                    this.$selection.find('.select2-selection__rendered').prepend($remove);
                };

                return AllowClear;
            });

            S2.define('select2/selection/search',[
                'jquery',
                '../utils',
                '../keys'
            ], function ($, Utils, KEYS) {
                function Search (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                Search.prototype.render = function (decorated) {
                    var $search = $(
                        '<li class="select2-search select2-search--inline">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" aria-autocomplete="list" />' +
                        '</li>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    var $rendered = decorated.call(this);

                    this._transferTabIndex();

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self.$search.trigger('focus');
                    });

                    container.on('close', function () {
                        self.$search.val('');
                        self.$search.removeAttr('aria-activedescendant');
                        self.$search.trigger('focus');
                    });

                    container.on('enable', function () {
                        self.$search.prop('disabled', false);

                        self._transferTabIndex();
                    });

                    container.on('disable', function () {
                        self.$search.prop('disabled', true);
                    });

                    container.on('focus', function (evt) {
                        self.$search.trigger('focus');
                    });

                    container.on('results:focus', function (params) {
                        self.$search.attr('aria-activedescendant', params.id);
                    });

                    this.$selection.on('focusin', '.select2-search--inline', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this.$selection.on('focusout', '.select2-search--inline', function (evt) {
                        self._handleBlur(evt);
                    });

                    this.$selection.on('keydown', '.select2-search--inline', function (evt) {
                        evt.stopPropagation();

                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();

                        var key = evt.which;

                        if (key === KEYS.BACKSPACE && self.$search.val() === '') {
                            var $previousChoice = self.$searchContainer
                                .prev('.select2-selection__choice');

                            if ($previousChoice.length > 0) {
                                var item = $previousChoice.data('data');

                                self.searchRemoveChoice(item);

                                evt.preventDefault();
                            }
                        }
                    });

                    // Try to detect the IE version should the `documentMode` property that
                    // is stored on the document. This is only implemented in IE and is
                    // slightly cleaner than doing a user agent check.
                    // This property is not available in Edge, but Edge also doesn't have
                    // this bug.
                    var msie = document.documentMode;
                    var disableInputEvents = msie && msie <= 11;

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$selection.on(
                        'input.searchcheck',
                        '.select2-search--inline',
                        function (evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents) {
                                self.$selection.off('input.search input.searchcheck');
                                return;
                            }

                            // Unbind the duplicated `keyup` event
                            self.$selection.off('keyup.search');
                        }
                    );

                    this.$selection.on(
                        'keyup.search input.search',
                        '.select2-search--inline',
                        function (evt) {
                            // IE will trigger the `input` event when a placeholder is used on a
                            // search box. To get around this issue, we are forced to ignore all
                            // `input` events in IE and keep using `keyup`.
                            if (disableInputEvents && evt.type === 'input') {
                                self.$selection.off('input.search input.searchcheck');
                                return;
                            }

                            var key = evt.which;

                            // We can freely ignore events from modifier keys
                            if (key == KEYS.SHIFT || key == KEYS.CTRL || key == KEYS.ALT) {
                                return;
                            }

                            // Tabbing will be handled during the `keydown` phase
                            if (key == KEYS.TAB) {
                                return;
                            }

                            self.handleSearch(evt);
                        }
                    );
                };

                /**
                 * This method will transfer the tabindex attribute from the rendered
                 * selection to the search box. This allows for the search box to be used as
                 * the primary focus instead of the selection container.
                 *
                 * @private
                 */
                Search.prototype._transferTabIndex = function (decorated) {
                    this.$search.attr('tabindex', this.$selection.attr('tabindex'));
                    this.$selection.attr('tabindex', '-1');
                };

                Search.prototype.createPlaceholder = function (decorated, placeholder) {
                    this.$search.attr('placeholder', placeholder.text);
                };

                Search.prototype.update = function (decorated, data) {
                    var searchHadFocus = this.$search[0] == document.activeElement;

                    this.$search.attr('placeholder', '');

                    decorated.call(this, data);

                    this.$selection.find('.select2-selection__rendered')
                        .append(this.$searchContainer);

                    this.resizeSearch();
                    if (searchHadFocus) {
                        this.$search.focus();
                    }
                };

                Search.prototype.handleSearch = function () {
                    this.resizeSearch();

                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.searchRemoveChoice = function (decorated, item) {
                    this.trigger('unselect', {
                        data: item
                    });

                    this.$search.val(item.text);
                    this.handleSearch();
                };

                Search.prototype.resizeSearch = function () {
                    this.$search.css('width', '25px');

                    var width = '';

                    if (this.$search.attr('placeholder') !== '') {
                        width = this.$selection.find('.select2-selection__rendered').innerWidth();
                    } else {
                        var minimumWidth = this.$search.val().length + 1;

                        width = (minimumWidth * 0.75) + 'em';
                    }

                    this.$search.css('width', width);
                };

                return Search;
            });

            S2.define('select2/selection/eventRelay',[
                'jquery'
            ], function ($) {
                function EventRelay () { }

                EventRelay.prototype.bind = function (decorated, container, $container) {
                    var self = this;
                    var relayEvents = [
                        'open', 'opening',
                        'close', 'closing',
                        'select', 'selecting',
                        'unselect', 'unselecting'
                    ];

                    var preventableEvents = ['opening', 'closing', 'selecting', 'unselecting'];

                    decorated.call(this, container, $container);

                    container.on('*', function (name, params) {
                        // Ignore events that should not be relayed
                        if ($.inArray(name, relayEvents) === -1) {
                            return;
                        }

                        // The parameters should always be an object
                        params = params || {};

                        // Generate the jQuery event for the Select2 event
                        var evt = $.Event('select2:' + name, {
                            params: params
                        });

                        self.$element.trigger(evt);

                        // Only handle preventable events if it was one
                        if ($.inArray(name, preventableEvents) === -1) {
                            return;
                        }

                        params.prevented = evt.isDefaultPrevented();
                    });
                };

                return EventRelay;
            });

            S2.define('select2/translation',[
                'jquery',
                'require'
            ], function ($, require) {
                function Translation (dict) {
                    this.dict = dict || {};
                }

                Translation.prototype.all = function () {
                    return this.dict;
                };

                Translation.prototype.get = function (key) {
                    return this.dict[key];
                };

                Translation.prototype.extend = function (translation) {
                    this.dict = $.extend({}, translation.all(), this.dict);
                };

                // Static functions

                Translation._cache = {};

                Translation.loadPath = function (path) {
                    if (!(path in Translation._cache)) {
                        var translations = require(path);

                        Translation._cache[path] = translations;
                    }

                    return new Translation(Translation._cache[path]);
                };

                return Translation;
            });

            S2.define('select2/diacritics',[

            ], function () {
                var diacritics = {
                    '\u24B6': 'A',
                    '\uFF21': 'A',
                    '\u00C0': 'A',
                    '\u00C1': 'A',
                    '\u00C2': 'A',
                    '\u1EA6': 'A',
                    '\u1EA4': 'A',
                    '\u1EAA': 'A',
                    '\u1EA8': 'A',
                    '\u00C3': 'A',
                    '\u0100': 'A',
                    '\u0102': 'A',
                    '\u1EB0': 'A',
                    '\u1EAE': 'A',
                    '\u1EB4': 'A',
                    '\u1EB2': 'A',
                    '\u0226': 'A',
                    '\u01E0': 'A',
                    '\u00C4': 'A',
                    '\u01DE': 'A',
                    '\u1EA2': 'A',
                    '\u00C5': 'A',
                    '\u01FA': 'A',
                    '\u01CD': 'A',
                    '\u0200': 'A',
                    '\u0202': 'A',
                    '\u1EA0': 'A',
                    '\u1EAC': 'A',
                    '\u1EB6': 'A',
                    '\u1E00': 'A',
                    '\u0104': 'A',
                    '\u023A': 'A',
                    '\u2C6F': 'A',
                    '\uA732': 'AA',
                    '\u00C6': 'AE',
                    '\u01FC': 'AE',
                    '\u01E2': 'AE',
                    '\uA734': 'AO',
                    '\uA736': 'AU',
                    '\uA738': 'AV',
                    '\uA73A': 'AV',
                    '\uA73C': 'AY',
                    '\u24B7': 'B',
                    '\uFF22': 'B',
                    '\u1E02': 'B',
                    '\u1E04': 'B',
                    '\u1E06': 'B',
                    '\u0243': 'B',
                    '\u0182': 'B',
                    '\u0181': 'B',
                    '\u24B8': 'C',
                    '\uFF23': 'C',
                    '\u0106': 'C',
                    '\u0108': 'C',
                    '\u010A': 'C',
                    '\u010C': 'C',
                    '\u00C7': 'C',
                    '\u1E08': 'C',
                    '\u0187': 'C',
                    '\u023B': 'C',
                    '\uA73E': 'C',
                    '\u24B9': 'D',
                    '\uFF24': 'D',
                    '\u1E0A': 'D',
                    '\u010E': 'D',
                    '\u1E0C': 'D',
                    '\u1E10': 'D',
                    '\u1E12': 'D',
                    '\u1E0E': 'D',
                    '\u0110': 'D',
                    '\u018B': 'D',
                    '\u018A': 'D',
                    '\u0189': 'D',
                    '\uA779': 'D',
                    '\u01F1': 'DZ',
                    '\u01C4': 'DZ',
                    '\u01F2': 'Dz',
                    '\u01C5': 'Dz',
                    '\u24BA': 'E',
                    '\uFF25': 'E',
                    '\u00C8': 'E',
                    '\u00C9': 'E',
                    '\u00CA': 'E',
                    '\u1EC0': 'E',
                    '\u1EBE': 'E',
                    '\u1EC4': 'E',
                    '\u1EC2': 'E',
                    '\u1EBC': 'E',
                    '\u0112': 'E',
                    '\u1E14': 'E',
                    '\u1E16': 'E',
                    '\u0114': 'E',
                    '\u0116': 'E',
                    '\u00CB': 'E',
                    '\u1EBA': 'E',
                    '\u011A': 'E',
                    '\u0204': 'E',
                    '\u0206': 'E',
                    '\u1EB8': 'E',
                    '\u1EC6': 'E',
                    '\u0228': 'E',
                    '\u1E1C': 'E',
                    '\u0118': 'E',
                    '\u1E18': 'E',
                    '\u1E1A': 'E',
                    '\u0190': 'E',
                    '\u018E': 'E',
                    '\u24BB': 'F',
                    '\uFF26': 'F',
                    '\u1E1E': 'F',
                    '\u0191': 'F',
                    '\uA77B': 'F',
                    '\u24BC': 'G',
                    '\uFF27': 'G',
                    '\u01F4': 'G',
                    '\u011C': 'G',
                    '\u1E20': 'G',
                    '\u011E': 'G',
                    '\u0120': 'G',
                    '\u01E6': 'G',
                    '\u0122': 'G',
                    '\u01E4': 'G',
                    '\u0193': 'G',
                    '\uA7A0': 'G',
                    '\uA77D': 'G',
                    '\uA77E': 'G',
                    '\u24BD': 'H',
                    '\uFF28': 'H',
                    '\u0124': 'H',
                    '\u1E22': 'H',
                    '\u1E26': 'H',
                    '\u021E': 'H',
                    '\u1E24': 'H',
                    '\u1E28': 'H',
                    '\u1E2A': 'H',
                    '\u0126': 'H',
                    '\u2C67': 'H',
                    '\u2C75': 'H',
                    '\uA78D': 'H',
                    '\u24BE': 'I',
                    '\uFF29': 'I',
                    '\u00CC': 'I',
                    '\u00CD': 'I',
                    '\u00CE': 'I',
                    '\u0128': 'I',
                    '\u012A': 'I',
                    '\u012C': 'I',
                    '\u0130': 'I',
                    '\u00CF': 'I',
                    '\u1E2E': 'I',
                    '\u1EC8': 'I',
                    '\u01CF': 'I',
                    '\u0208': 'I',
                    '\u020A': 'I',
                    '\u1ECA': 'I',
                    '\u012E': 'I',
                    '\u1E2C': 'I',
                    '\u0197': 'I',
                    '\u24BF': 'J',
                    '\uFF2A': 'J',
                    '\u0134': 'J',
                    '\u0248': 'J',
                    '\u24C0': 'K',
                    '\uFF2B': 'K',
                    '\u1E30': 'K',
                    '\u01E8': 'K',
                    '\u1E32': 'K',
                    '\u0136': 'K',
                    '\u1E34': 'K',
                    '\u0198': 'K',
                    '\u2C69': 'K',
                    '\uA740': 'K',
                    '\uA742': 'K',
                    '\uA744': 'K',
                    '\uA7A2': 'K',
                    '\u24C1': 'L',
                    '\uFF2C': 'L',
                    '\u013F': 'L',
                    '\u0139': 'L',
                    '\u013D': 'L',
                    '\u1E36': 'L',
                    '\u1E38': 'L',
                    '\u013B': 'L',
                    '\u1E3C': 'L',
                    '\u1E3A': 'L',
                    '\u0141': 'L',
                    '\u023D': 'L',
                    '\u2C62': 'L',
                    '\u2C60': 'L',
                    '\uA748': 'L',
                    '\uA746': 'L',
                    '\uA780': 'L',
                    '\u01C7': 'LJ',
                    '\u01C8': 'Lj',
                    '\u24C2': 'M',
                    '\uFF2D': 'M',
                    '\u1E3E': 'M',
                    '\u1E40': 'M',
                    '\u1E42': 'M',
                    '\u2C6E': 'M',
                    '\u019C': 'M',
                    '\u24C3': 'N',
                    '\uFF2E': 'N',
                    '\u01F8': 'N',
                    '\u0143': 'N',
                    '\u00D1': 'N',
                    '\u1E44': 'N',
                    '\u0147': 'N',
                    '\u1E46': 'N',
                    '\u0145': 'N',
                    '\u1E4A': 'N',
                    '\u1E48': 'N',
                    '\u0220': 'N',
                    '\u019D': 'N',
                    '\uA790': 'N',
                    '\uA7A4': 'N',
                    '\u01CA': 'NJ',
                    '\u01CB': 'Nj',
                    '\u24C4': 'O',
                    '\uFF2F': 'O',
                    '\u00D2': 'O',
                    '\u00D3': 'O',
                    '\u00D4': 'O',
                    '\u1ED2': 'O',
                    '\u1ED0': 'O',
                    '\u1ED6': 'O',
                    '\u1ED4': 'O',
                    '\u00D5': 'O',
                    '\u1E4C': 'O',
                    '\u022C': 'O',
                    '\u1E4E': 'O',
                    '\u014C': 'O',
                    '\u1E50': 'O',
                    '\u1E52': 'O',
                    '\u014E': 'O',
                    '\u022E': 'O',
                    '\u0230': 'O',
                    '\u00D6': 'O',
                    '\u022A': 'O',
                    '\u1ECE': 'O',
                    '\u0150': 'O',
                    '\u01D1': 'O',
                    '\u020C': 'O',
                    '\u020E': 'O',
                    '\u01A0': 'O',
                    '\u1EDC': 'O',
                    '\u1EDA': 'O',
                    '\u1EE0': 'O',
                    '\u1EDE': 'O',
                    '\u1EE2': 'O',
                    '\u1ECC': 'O',
                    '\u1ED8': 'O',
                    '\u01EA': 'O',
                    '\u01EC': 'O',
                    '\u00D8': 'O',
                    '\u01FE': 'O',
                    '\u0186': 'O',
                    '\u019F': 'O',
                    '\uA74A': 'O',
                    '\uA74C': 'O',
                    '\u01A2': 'OI',
                    '\uA74E': 'OO',
                    '\u0222': 'OU',
                    '\u24C5': 'P',
                    '\uFF30': 'P',
                    '\u1E54': 'P',
                    '\u1E56': 'P',
                    '\u01A4': 'P',
                    '\u2C63': 'P',
                    '\uA750': 'P',
                    '\uA752': 'P',
                    '\uA754': 'P',
                    '\u24C6': 'Q',
                    '\uFF31': 'Q',
                    '\uA756': 'Q',
                    '\uA758': 'Q',
                    '\u024A': 'Q',
                    '\u24C7': 'R',
                    '\uFF32': 'R',
                    '\u0154': 'R',
                    '\u1E58': 'R',
                    '\u0158': 'R',
                    '\u0210': 'R',
                    '\u0212': 'R',
                    '\u1E5A': 'R',
                    '\u1E5C': 'R',
                    '\u0156': 'R',
                    '\u1E5E': 'R',
                    '\u024C': 'R',
                    '\u2C64': 'R',
                    '\uA75A': 'R',
                    '\uA7A6': 'R',
                    '\uA782': 'R',
                    '\u24C8': 'S',
                    '\uFF33': 'S',
                    '\u1E9E': 'S',
                    '\u015A': 'S',
                    '\u1E64': 'S',
                    '\u015C': 'S',
                    '\u1E60': 'S',
                    '\u0160': 'S',
                    '\u1E66': 'S',
                    '\u1E62': 'S',
                    '\u1E68': 'S',
                    '\u0218': 'S',
                    '\u015E': 'S',
                    '\u2C7E': 'S',
                    '\uA7A8': 'S',
                    '\uA784': 'S',
                    '\u24C9': 'T',
                    '\uFF34': 'T',
                    '\u1E6A': 'T',
                    '\u0164': 'T',
                    '\u1E6C': 'T',
                    '\u021A': 'T',
                    '\u0162': 'T',
                    '\u1E70': 'T',
                    '\u1E6E': 'T',
                    '\u0166': 'T',
                    '\u01AC': 'T',
                    '\u01AE': 'T',
                    '\u023E': 'T',
                    '\uA786': 'T',
                    '\uA728': 'TZ',
                    '\u24CA': 'U',
                    '\uFF35': 'U',
                    '\u00D9': 'U',
                    '\u00DA': 'U',
                    '\u00DB': 'U',
                    '\u0168': 'U',
                    '\u1E78': 'U',
                    '\u016A': 'U',
                    '\u1E7A': 'U',
                    '\u016C': 'U',
                    '\u00DC': 'U',
                    '\u01DB': 'U',
                    '\u01D7': 'U',
                    '\u01D5': 'U',
                    '\u01D9': 'U',
                    '\u1EE6': 'U',
                    '\u016E': 'U',
                    '\u0170': 'U',
                    '\u01D3': 'U',
                    '\u0214': 'U',
                    '\u0216': 'U',
                    '\u01AF': 'U',
                    '\u1EEA': 'U',
                    '\u1EE8': 'U',
                    '\u1EEE': 'U',
                    '\u1EEC': 'U',
                    '\u1EF0': 'U',
                    '\u1EE4': 'U',
                    '\u1E72': 'U',
                    '\u0172': 'U',
                    '\u1E76': 'U',
                    '\u1E74': 'U',
                    '\u0244': 'U',
                    '\u24CB': 'V',
                    '\uFF36': 'V',
                    '\u1E7C': 'V',
                    '\u1E7E': 'V',
                    '\u01B2': 'V',
                    '\uA75E': 'V',
                    '\u0245': 'V',
                    '\uA760': 'VY',
                    '\u24CC': 'W',
                    '\uFF37': 'W',
                    '\u1E80': 'W',
                    '\u1E82': 'W',
                    '\u0174': 'W',
                    '\u1E86': 'W',
                    '\u1E84': 'W',
                    '\u1E88': 'W',
                    '\u2C72': 'W',
                    '\u24CD': 'X',
                    '\uFF38': 'X',
                    '\u1E8A': 'X',
                    '\u1E8C': 'X',
                    '\u24CE': 'Y',
                    '\uFF39': 'Y',
                    '\u1EF2': 'Y',
                    '\u00DD': 'Y',
                    '\u0176': 'Y',
                    '\u1EF8': 'Y',
                    '\u0232': 'Y',
                    '\u1E8E': 'Y',
                    '\u0178': 'Y',
                    '\u1EF6': 'Y',
                    '\u1EF4': 'Y',
                    '\u01B3': 'Y',
                    '\u024E': 'Y',
                    '\u1EFE': 'Y',
                    '\u24CF': 'Z',
                    '\uFF3A': 'Z',
                    '\u0179': 'Z',
                    '\u1E90': 'Z',
                    '\u017B': 'Z',
                    '\u017D': 'Z',
                    '\u1E92': 'Z',
                    '\u1E94': 'Z',
                    '\u01B5': 'Z',
                    '\u0224': 'Z',
                    '\u2C7F': 'Z',
                    '\u2C6B': 'Z',
                    '\uA762': 'Z',
                    '\u24D0': 'a',
                    '\uFF41': 'a',
                    '\u1E9A': 'a',
                    '\u00E0': 'a',
                    '\u00E1': 'a',
                    '\u00E2': 'a',
                    '\u1EA7': 'a',
                    '\u1EA5': 'a',
                    '\u1EAB': 'a',
                    '\u1EA9': 'a',
                    '\u00E3': 'a',
                    '\u0101': 'a',
                    '\u0103': 'a',
                    '\u1EB1': 'a',
                    '\u1EAF': 'a',
                    '\u1EB5': 'a',
                    '\u1EB3': 'a',
                    '\u0227': 'a',
                    '\u01E1': 'a',
                    '\u00E4': 'a',
                    '\u01DF': 'a',
                    '\u1EA3': 'a',
                    '\u00E5': 'a',
                    '\u01FB': 'a',
                    '\u01CE': 'a',
                    '\u0201': 'a',
                    '\u0203': 'a',
                    '\u1EA1': 'a',
                    '\u1EAD': 'a',
                    '\u1EB7': 'a',
                    '\u1E01': 'a',
                    '\u0105': 'a',
                    '\u2C65': 'a',
                    '\u0250': 'a',
                    '\uA733': 'aa',
                    '\u00E6': 'ae',
                    '\u01FD': 'ae',
                    '\u01E3': 'ae',
                    '\uA735': 'ao',
                    '\uA737': 'au',
                    '\uA739': 'av',
                    '\uA73B': 'av',
                    '\uA73D': 'ay',
                    '\u24D1': 'b',
                    '\uFF42': 'b',
                    '\u1E03': 'b',
                    '\u1E05': 'b',
                    '\u1E07': 'b',
                    '\u0180': 'b',
                    '\u0183': 'b',
                    '\u0253': 'b',
                    '\u24D2': 'c',
                    '\uFF43': 'c',
                    '\u0107': 'c',
                    '\u0109': 'c',
                    '\u010B': 'c',
                    '\u010D': 'c',
                    '\u00E7': 'c',
                    '\u1E09': 'c',
                    '\u0188': 'c',
                    '\u023C': 'c',
                    '\uA73F': 'c',
                    '\u2184': 'c',
                    '\u24D3': 'd',
                    '\uFF44': 'd',
                    '\u1E0B': 'd',
                    '\u010F': 'd',
                    '\u1E0D': 'd',
                    '\u1E11': 'd',
                    '\u1E13': 'd',
                    '\u1E0F': 'd',
                    '\u0111': 'd',
                    '\u018C': 'd',
                    '\u0256': 'd',
                    '\u0257': 'd',
                    '\uA77A': 'd',
                    '\u01F3': 'dz',
                    '\u01C6': 'dz',
                    '\u24D4': 'e',
                    '\uFF45': 'e',
                    '\u00E8': 'e',
                    '\u00E9': 'e',
                    '\u00EA': 'e',
                    '\u1EC1': 'e',
                    '\u1EBF': 'e',
                    '\u1EC5': 'e',
                    '\u1EC3': 'e',
                    '\u1EBD': 'e',
                    '\u0113': 'e',
                    '\u1E15': 'e',
                    '\u1E17': 'e',
                    '\u0115': 'e',
                    '\u0117': 'e',
                    '\u00EB': 'e',
                    '\u1EBB': 'e',
                    '\u011B': 'e',
                    '\u0205': 'e',
                    '\u0207': 'e',
                    '\u1EB9': 'e',
                    '\u1EC7': 'e',
                    '\u0229': 'e',
                    '\u1E1D': 'e',
                    '\u0119': 'e',
                    '\u1E19': 'e',
                    '\u1E1B': 'e',
                    '\u0247': 'e',
                    '\u025B': 'e',
                    '\u01DD': 'e',
                    '\u24D5': 'f',
                    '\uFF46': 'f',
                    '\u1E1F': 'f',
                    '\u0192': 'f',
                    '\uA77C': 'f',
                    '\u24D6': 'g',
                    '\uFF47': 'g',
                    '\u01F5': 'g',
                    '\u011D': 'g',
                    '\u1E21': 'g',
                    '\u011F': 'g',
                    '\u0121': 'g',
                    '\u01E7': 'g',
                    '\u0123': 'g',
                    '\u01E5': 'g',
                    '\u0260': 'g',
                    '\uA7A1': 'g',
                    '\u1D79': 'g',
                    '\uA77F': 'g',
                    '\u24D7': 'h',
                    '\uFF48': 'h',
                    '\u0125': 'h',
                    '\u1E23': 'h',
                    '\u1E27': 'h',
                    '\u021F': 'h',
                    '\u1E25': 'h',
                    '\u1E29': 'h',
                    '\u1E2B': 'h',
                    '\u1E96': 'h',
                    '\u0127': 'h',
                    '\u2C68': 'h',
                    '\u2C76': 'h',
                    '\u0265': 'h',
                    '\u0195': 'hv',
                    '\u24D8': 'i',
                    '\uFF49': 'i',
                    '\u00EC': 'i',
                    '\u00ED': 'i',
                    '\u00EE': 'i',
                    '\u0129': 'i',
                    '\u012B': 'i',
                    '\u012D': 'i',
                    '\u00EF': 'i',
                    '\u1E2F': 'i',
                    '\u1EC9': 'i',
                    '\u01D0': 'i',
                    '\u0209': 'i',
                    '\u020B': 'i',
                    '\u1ECB': 'i',
                    '\u012F': 'i',
                    '\u1E2D': 'i',
                    '\u0268': 'i',
                    '\u0131': 'i',
                    '\u24D9': 'j',
                    '\uFF4A': 'j',
                    '\u0135': 'j',
                    '\u01F0': 'j',
                    '\u0249': 'j',
                    '\u24DA': 'k',
                    '\uFF4B': 'k',
                    '\u1E31': 'k',
                    '\u01E9': 'k',
                    '\u1E33': 'k',
                    '\u0137': 'k',
                    '\u1E35': 'k',
                    '\u0199': 'k',
                    '\u2C6A': 'k',
                    '\uA741': 'k',
                    '\uA743': 'k',
                    '\uA745': 'k',
                    '\uA7A3': 'k',
                    '\u24DB': 'l',
                    '\uFF4C': 'l',
                    '\u0140': 'l',
                    '\u013A': 'l',
                    '\u013E': 'l',
                    '\u1E37': 'l',
                    '\u1E39': 'l',
                    '\u013C': 'l',
                    '\u1E3D': 'l',
                    '\u1E3B': 'l',
                    '\u017F': 'l',
                    '\u0142': 'l',
                    '\u019A': 'l',
                    '\u026B': 'l',
                    '\u2C61': 'l',
                    '\uA749': 'l',
                    '\uA781': 'l',
                    '\uA747': 'l',
                    '\u01C9': 'lj',
                    '\u24DC': 'm',
                    '\uFF4D': 'm',
                    '\u1E3F': 'm',
                    '\u1E41': 'm',
                    '\u1E43': 'm',
                    '\u0271': 'm',
                    '\u026F': 'm',
                    '\u24DD': 'n',
                    '\uFF4E': 'n',
                    '\u01F9': 'n',
                    '\u0144': 'n',
                    '\u00F1': 'n',
                    '\u1E45': 'n',
                    '\u0148': 'n',
                    '\u1E47': 'n',
                    '\u0146': 'n',
                    '\u1E4B': 'n',
                    '\u1E49': 'n',
                    '\u019E': 'n',
                    '\u0272': 'n',
                    '\u0149': 'n',
                    '\uA791': 'n',
                    '\uA7A5': 'n',
                    '\u01CC': 'nj',
                    '\u24DE': 'o',
                    '\uFF4F': 'o',
                    '\u00F2': 'o',
                    '\u00F3': 'o',
                    '\u00F4': 'o',
                    '\u1ED3': 'o',
                    '\u1ED1': 'o',
                    '\u1ED7': 'o',
                    '\u1ED5': 'o',
                    '\u00F5': 'o',
                    '\u1E4D': 'o',
                    '\u022D': 'o',
                    '\u1E4F': 'o',
                    '\u014D': 'o',
                    '\u1E51': 'o',
                    '\u1E53': 'o',
                    '\u014F': 'o',
                    '\u022F': 'o',
                    '\u0231': 'o',
                    '\u00F6': 'o',
                    '\u022B': 'o',
                    '\u1ECF': 'o',
                    '\u0151': 'o',
                    '\u01D2': 'o',
                    '\u020D': 'o',
                    '\u020F': 'o',
                    '\u01A1': 'o',
                    '\u1EDD': 'o',
                    '\u1EDB': 'o',
                    '\u1EE1': 'o',
                    '\u1EDF': 'o',
                    '\u1EE3': 'o',
                    '\u1ECD': 'o',
                    '\u1ED9': 'o',
                    '\u01EB': 'o',
                    '\u01ED': 'o',
                    '\u00F8': 'o',
                    '\u01FF': 'o',
                    '\u0254': 'o',
                    '\uA74B': 'o',
                    '\uA74D': 'o',
                    '\u0275': 'o',
                    '\u01A3': 'oi',
                    '\u0223': 'ou',
                    '\uA74F': 'oo',
                    '\u24DF': 'p',
                    '\uFF50': 'p',
                    '\u1E55': 'p',
                    '\u1E57': 'p',
                    '\u01A5': 'p',
                    '\u1D7D': 'p',
                    '\uA751': 'p',
                    '\uA753': 'p',
                    '\uA755': 'p',
                    '\u24E0': 'q',
                    '\uFF51': 'q',
                    '\u024B': 'q',
                    '\uA757': 'q',
                    '\uA759': 'q',
                    '\u24E1': 'r',
                    '\uFF52': 'r',
                    '\u0155': 'r',
                    '\u1E59': 'r',
                    '\u0159': 'r',
                    '\u0211': 'r',
                    '\u0213': 'r',
                    '\u1E5B': 'r',
                    '\u1E5D': 'r',
                    '\u0157': 'r',
                    '\u1E5F': 'r',
                    '\u024D': 'r',
                    '\u027D': 'r',
                    '\uA75B': 'r',
                    '\uA7A7': 'r',
                    '\uA783': 'r',
                    '\u24E2': 's',
                    '\uFF53': 's',
                    '\u00DF': 's',
                    '\u015B': 's',
                    '\u1E65': 's',
                    '\u015D': 's',
                    '\u1E61': 's',
                    '\u0161': 's',
                    '\u1E67': 's',
                    '\u1E63': 's',
                    '\u1E69': 's',
                    '\u0219': 's',
                    '\u015F': 's',
                    '\u023F': 's',
                    '\uA7A9': 's',
                    '\uA785': 's',
                    '\u1E9B': 's',
                    '\u24E3': 't',
                    '\uFF54': 't',
                    '\u1E6B': 't',
                    '\u1E97': 't',
                    '\u0165': 't',
                    '\u1E6D': 't',
                    '\u021B': 't',
                    '\u0163': 't',
                    '\u1E71': 't',
                    '\u1E6F': 't',
                    '\u0167': 't',
                    '\u01AD': 't',
                    '\u0288': 't',
                    '\u2C66': 't',
                    '\uA787': 't',
                    '\uA729': 'tz',
                    '\u24E4': 'u',
                    '\uFF55': 'u',
                    '\u00F9': 'u',
                    '\u00FA': 'u',
                    '\u00FB': 'u',
                    '\u0169': 'u',
                    '\u1E79': 'u',
                    '\u016B': 'u',
                    '\u1E7B': 'u',
                    '\u016D': 'u',
                    '\u00FC': 'u',
                    '\u01DC': 'u',
                    '\u01D8': 'u',
                    '\u01D6': 'u',
                    '\u01DA': 'u',
                    '\u1EE7': 'u',
                    '\u016F': 'u',
                    '\u0171': 'u',
                    '\u01D4': 'u',
                    '\u0215': 'u',
                    '\u0217': 'u',
                    '\u01B0': 'u',
                    '\u1EEB': 'u',
                    '\u1EE9': 'u',
                    '\u1EEF': 'u',
                    '\u1EED': 'u',
                    '\u1EF1': 'u',
                    '\u1EE5': 'u',
                    '\u1E73': 'u',
                    '\u0173': 'u',
                    '\u1E77': 'u',
                    '\u1E75': 'u',
                    '\u0289': 'u',
                    '\u24E5': 'v',
                    '\uFF56': 'v',
                    '\u1E7D': 'v',
                    '\u1E7F': 'v',
                    '\u028B': 'v',
                    '\uA75F': 'v',
                    '\u028C': 'v',
                    '\uA761': 'vy',
                    '\u24E6': 'w',
                    '\uFF57': 'w',
                    '\u1E81': 'w',
                    '\u1E83': 'w',
                    '\u0175': 'w',
                    '\u1E87': 'w',
                    '\u1E85': 'w',
                    '\u1E98': 'w',
                    '\u1E89': 'w',
                    '\u2C73': 'w',
                    '\u24E7': 'x',
                    '\uFF58': 'x',
                    '\u1E8B': 'x',
                    '\u1E8D': 'x',
                    '\u24E8': 'y',
                    '\uFF59': 'y',
                    '\u1EF3': 'y',
                    '\u00FD': 'y',
                    '\u0177': 'y',
                    '\u1EF9': 'y',
                    '\u0233': 'y',
                    '\u1E8F': 'y',
                    '\u00FF': 'y',
                    '\u1EF7': 'y',
                    '\u1E99': 'y',
                    '\u1EF5': 'y',
                    '\u01B4': 'y',
                    '\u024F': 'y',
                    '\u1EFF': 'y',
                    '\u24E9': 'z',
                    '\uFF5A': 'z',
                    '\u017A': 'z',
                    '\u1E91': 'z',
                    '\u017C': 'z',
                    '\u017E': 'z',
                    '\u1E93': 'z',
                    '\u1E95': 'z',
                    '\u01B6': 'z',
                    '\u0225': 'z',
                    '\u0240': 'z',
                    '\u2C6C': 'z',
                    '\uA763': 'z',
                    '\u0386': '\u0391',
                    '\u0388': '\u0395',
                    '\u0389': '\u0397',
                    '\u038A': '\u0399',
                    '\u03AA': '\u0399',
                    '\u038C': '\u039F',
                    '\u038E': '\u03A5',
                    '\u03AB': '\u03A5',
                    '\u038F': '\u03A9',
                    '\u03AC': '\u03B1',
                    '\u03AD': '\u03B5',
                    '\u03AE': '\u03B7',
                    '\u03AF': '\u03B9',
                    '\u03CA': '\u03B9',
                    '\u0390': '\u03B9',
                    '\u03CC': '\u03BF',
                    '\u03CD': '\u03C5',
                    '\u03CB': '\u03C5',
                    '\u03B0': '\u03C5',
                    '\u03C9': '\u03C9',
                    '\u03C2': '\u03C3'
                };

                return diacritics;
            });

            S2.define('select2/data/base',[
                '../utils'
            ], function (Utils) {
                function BaseAdapter ($element, options) {
                    BaseAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(BaseAdapter, Utils.Observable);

                BaseAdapter.prototype.current = function (callback) {
                    throw new Error('The `current` method must be defined in child classes.');
                };

                BaseAdapter.prototype.query = function (params, callback) {
                    throw new Error('The `query` method must be defined in child classes.');
                };

                BaseAdapter.prototype.bind = function (container, $container) {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.destroy = function () {
                    // Can be implemented in subclasses
                };

                BaseAdapter.prototype.generateResultId = function (container, data) {
                    var id = container.id + '-result-';

                    id += Utils.generateChars(4);

                    if (data.id != null) {
                        id += '-' + data.id.toString();
                    } else {
                        id += '-' + Utils.generateChars(4);
                    }
                    return id;
                };

                return BaseAdapter;
            });

            S2.define('select2/data/select',[
                './base',
                '../utils',
                'jquery'
            ], function (BaseAdapter, Utils, $) {
                function SelectAdapter ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    SelectAdapter.__super__.constructor.call(this);
                }

                Utils.Extend(SelectAdapter, BaseAdapter);

                SelectAdapter.prototype.current = function (callback) {
                    var data = [];
                    var self = this;

                    this.$element.find(':selected').each(function () {
                        var $option = $(this);

                        var option = self.item($option);

                        data.push(option);
                    });

                    callback(data);
                };

                SelectAdapter.prototype.select = function (data) {
                    var self = this;

                    data.selected = true;

                    // If data.element is a DOM node, use it instead
                    if ($(data.element).is('option')) {
                        data.element.selected = true;

                        this.$element.trigger('change');

                        return;
                    }

                    if (this.$element.prop('multiple')) {
                        this.current(function (currentData) {
                            var val = [];

                            data = [data];
                            data.push.apply(data, currentData);

                            for (var d = 0; d < data.length; d++) {
                                var id = data[d].id;

                                if ($.inArray(id, val) === -1) {
                                    val.push(id);
                                }
                            }

                            self.$element.val(val);
                            self.$element.trigger('change');
                        });
                    } else {
                        var val = data.id;

                        this.$element.val(val);
                        this.$element.trigger('change');
                    }
                };

                SelectAdapter.prototype.unselect = function (data) {
                    var self = this;

                    if (!this.$element.prop('multiple')) {
                        return;
                    }

                    data.selected = false;

                    if ($(data.element).is('option')) {
                        data.element.selected = false;

                        this.$element.trigger('change');

                        return;
                    }

                    this.current(function (currentData) {
                        var val = [];

                        for (var d = 0; d < currentData.length; d++) {
                            var id = currentData[d].id;

                            if (id !== data.id && $.inArray(id, val) === -1) {
                                val.push(id);
                            }
                        }

                        self.$element.val(val);

                        self.$element.trigger('change');
                    });
                };

                SelectAdapter.prototype.bind = function (container, $container) {
                    var self = this;

                    this.container = container;

                    container.on('select', function (params) {
                        self.select(params.data);
                    });

                    container.on('unselect', function (params) {
                        self.unselect(params.data);
                    });
                };

                SelectAdapter.prototype.destroy = function () {
                    // Remove anything added to child elements
                    this.$element.find('*').each(function () {
                        // Remove any custom data set by Select2
                        $.removeData(this, 'data');
                    });
                };

                SelectAdapter.prototype.query = function (params, callback) {
                    var data = [];
                    var self = this;

                    var $options = this.$element.children();

                    $options.each(function () {
                        var $option = $(this);

                        if (!$option.is('option') && !$option.is('optgroup')) {
                            return;
                        }

                        var option = self.item($option);

                        var matches = self.matches(params, option);

                        if (matches !== null) {
                            data.push(matches);
                        }
                    });

                    callback({
                        results: data
                    });
                };

                SelectAdapter.prototype.addOptions = function ($options) {
                    Utils.appendMany(this.$element, $options);
                };

                SelectAdapter.prototype.option = function (data) {
                    var option;

                    if (data.children) {
                        option = document.createElement('optgroup');
                        option.label = data.text;
                    } else {
                        option = document.createElement('option');

                        if (option.textContent !== undefined) {
                            option.textContent = data.text;
                        } else {
                            option.innerText = data.text;
                        }
                    }

                    if (data.id) {
                        option.value = data.id;
                    }

                    if (data.disabled) {
                        option.disabled = true;
                    }

                    if (data.selected) {
                        option.selected = true;
                    }

                    if (data.title) {
                        option.title = data.title;
                    }

                    var $option = $(option);

                    var normalizedData = this._normalizeItem(data);
                    normalizedData.element = option;

                    // Override the option's data with the combined data
                    $.data(option, 'data', normalizedData);

                    return $option;
                };

                SelectAdapter.prototype.item = function ($option) {
                    var data = {};

                    data = $.data($option[0], 'data');

                    if (data != null) {
                        return data;
                    }

                    if ($option.is('option')) {
                        data = {
                            id: $option.val(),
                            text: $option.text(),
                            disabled: $option.prop('disabled'),
                            selected: $option.prop('selected'),
                            title: $option.prop('title')
                        };
                    } else if ($option.is('optgroup')) {
                        data = {
                            text: $option.prop('label'),
                            children: [],
                            title: $option.prop('title')
                        };

                        var $children = $option.children('option');
                        var children = [];

                        for (var c = 0; c < $children.length; c++) {
                            var $child = $($children[c]);

                            var child = this.item($child);

                            children.push(child);
                        }

                        data.children = children;
                    }

                    data = this._normalizeItem(data);
                    data.element = $option[0];

                    $.data($option[0], 'data', data);

                    return data;
                };

                SelectAdapter.prototype._normalizeItem = function (item) {
                    if (!$.isPlainObject(item)) {
                        item = {
                            id: item,
                            text: item
                        };
                    }

                    item = $.extend({}, {
                        text: ''
                    }, item);

                    var defaults = {
                        selected: false,
                        disabled: false
                    };

                    if (item.id != null) {
                        item.id = item.id.toString();
                    }

                    if (item.text != null) {
                        item.text = item.text.toString();
                    }

                    if (item._resultId == null && item.id && this.container != null) {
                        item._resultId = this.generateResultId(this.container, item);
                    }

                    return $.extend({}, defaults, item);
                };

                SelectAdapter.prototype.matches = function (params, data) {
                    var matcher = this.options.get('matcher');

                    return matcher(params, data);
                };

                return SelectAdapter;
            });

            S2.define('select2/data/array',[
                './select',
                '../utils',
                'jquery'
            ], function (SelectAdapter, Utils, $) {
                function ArrayAdapter ($element, options) {
                    var data = options.get('data') || [];

                    ArrayAdapter.__super__.constructor.call(this, $element, options);

                    this.addOptions(this.convertToOptions(data));
                }

                Utils.Extend(ArrayAdapter, SelectAdapter);

                ArrayAdapter.prototype.select = function (data) {
                    var $option = this.$element.find('option').filter(function (i, elm) {
                        return elm.value == data.id.toString();
                    });

                    if ($option.length === 0) {
                        $option = this.option(data);

                        this.addOptions($option);
                    }

                    ArrayAdapter.__super__.select.call(this, data);
                };

                ArrayAdapter.prototype.convertToOptions = function (data) {
                    var self = this;

                    var $existing = this.$element.find('option');
                    var existingIds = $existing.map(function () {
                        return self.item($(this)).id;
                    }).get();

                    var $options = [];

                    // Filter out all items except for the one passed in the argument
                    function onlyItem (item) {
                        return function () {
                            return $(this).val() == item.id;
                        };
                    }

                    for (var d = 0; d < data.length; d++) {
                        var item = this._normalizeItem(data[d]);

                        // Skip items which were pre-loaded, only merge the data
                        if ($.inArray(item.id, existingIds) >= 0) {
                            var $existingOption = $existing.filter(onlyItem(item));

                            var existingData = this.item($existingOption);
                            var newData = $.extend(true, {}, item, existingData);

                            var $newOption = this.option(newData);

                            $existingOption.replaceWith($newOption);

                            continue;
                        }

                        var $option = this.option(item);

                        if (item.children) {
                            var $children = this.convertToOptions(item.children);

                            Utils.appendMany($option, $children);
                        }

                        $options.push($option);
                    }

                    return $options;
                };

                return ArrayAdapter;
            });

            S2.define('select2/data/ajax',[
                './array',
                '../utils',
                'jquery'
            ], function (ArrayAdapter, Utils, $) {
                function AjaxAdapter ($element, options) {
                    this.ajaxOptions = this._applyDefaults(options.get('ajax'));

                    if (this.ajaxOptions.processResults != null) {
                        this.processResults = this.ajaxOptions.processResults;
                    }

                    AjaxAdapter.__super__.constructor.call(this, $element, options);
                }

                Utils.Extend(AjaxAdapter, ArrayAdapter);

                AjaxAdapter.prototype._applyDefaults = function (options) {
                    var defaults = {
                        data: function (params) {
                            return $.extend({}, params, {
                                q: params.term
                            });
                        },
                        transport: function (params, success, failure) {
                            var $request = $.ajax(params);

                            $request.then(success);
                            $request.fail(failure);

                            return $request;
                        }
                    };

                    return $.extend({}, defaults, options, true);
                };

                AjaxAdapter.prototype.processResults = function (results) {
                    return results;
                };

                AjaxAdapter.prototype.query = function (params, callback) {
                    var matches = [];
                    var self = this;

                    if (this._request != null) {
                        // JSONP requests cannot always be aborted
                        if ($.isFunction(this._request.abort)) {
                            this._request.abort();
                        }

                        this._request = null;
                    }

                    var options = $.extend({
                        type: 'GET'
                    }, this.ajaxOptions);

                    if (typeof options.url === 'function') {
                        options.url = options.url.call(this.$element, params);
                    }

                    if (typeof options.data === 'function') {
                        options.data = options.data.call(this.$element, params);
                    }

                    function request () {
                        var $request = options.transport(options, function (data) {
                            var results = self.processResults(data, params);

                            if (self.options.get('debug') && window.console && console.error) {
                                // Check to make sure that the response included a `results` key.
                                if (!results || !results.results || !$.isArray(results.results)) {
                                    console.error(
                                        'Select2: The AJAX results did not return an array in the ' +
                                        '`results` key of the response.'
                                    );
                                }
                            }

                            callback(results);
                        }, function () {
                            // Attempt to detect if a request was aborted
                            // Only works if the transport exposes a status property
                            if ($request.status && $request.status === '0') {
                                return;
                            }

                            self.trigger('results:message', {
                                message: 'errorLoading'
                            });
                        });

                        self._request = $request;
                    }

                    if (this.ajaxOptions.delay && params.term != null) {
                        if (this._queryTimeout) {
                            window.clearTimeout(this._queryTimeout);
                        }

                        this._queryTimeout = window.setTimeout(request, this.ajaxOptions.delay);
                    } else {
                        request();
                    }
                };

                return AjaxAdapter;
            });

            S2.define('select2/data/tags',[
                'jquery'
            ], function ($) {
                function Tags (decorated, $element, options) {
                    var tags = options.get('tags');

                    var createTag = options.get('createTag');

                    if (createTag !== undefined) {
                        this.createTag = createTag;
                    }

                    var insertTag = options.get('insertTag');

                    if (insertTag !== undefined) {
                        this.insertTag = insertTag;
                    }

                    decorated.call(this, $element, options);

                    if ($.isArray(tags)) {
                        for (var t = 0; t < tags.length; t++) {
                            var tag = tags[t];
                            var item = this._normalizeItem(tag);

                            var $option = this.option(item);

                            this.$element.append($option);
                        }
                    }
                }

                Tags.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    this._removeOldTags();

                    if (params.term == null || params.page != null) {
                        decorated.call(this, params, callback);
                        return;
                    }

                    function wrapper (obj, child) {
                        var data = obj.results;

                        for (var i = 0; i < data.length; i++) {
                            var option = data[i];

                            var checkChildren = (
                                option.children != null &&
                                !wrapper({
                                    results: option.children
                                }, true)
                            );

                            var checkText = option.text === params.term;

                            if (checkText || checkChildren) {
                                if (child) {
                                    return false;
                                }

                                obj.data = data;
                                callback(obj);

                                return;
                            }
                        }

                        if (child) {
                            return true;
                        }

                        var tag = self.createTag(params);

                        if (tag != null) {
                            var $option = self.option(tag);
                            $option.attr('data-select2-tag', true);

                            self.addOptions([$option]);

                            self.insertTag(data, tag);
                        }

                        obj.results = data;

                        callback(obj);
                    }

                    decorated.call(this, params, wrapper);
                };

                Tags.prototype.createTag = function (decorated, params) {
                    var term = $.trim(params.term);

                    if (term === '') {
                        return null;
                    }

                    return {
                        id: term,
                        text: term
                    };
                };

                Tags.prototype.insertTag = function (_, data, tag) {
                    data.unshift(tag);
                };

                Tags.prototype._removeOldTags = function (_) {
                    var tag = this._lastTag;

                    var $options = this.$element.find('option[data-select2-tag]');

                    $options.each(function () {
                        if (this.selected) {
                            return;
                        }

                        $(this).remove();
                    });
                };

                return Tags;
            });

            S2.define('select2/data/tokenizer',[
                'jquery'
            ], function ($) {
                function Tokenizer (decorated, $element, options) {
                    var tokenizer = options.get('tokenizer');

                    if (tokenizer !== undefined) {
                        this.tokenizer = tokenizer;
                    }

                    decorated.call(this, $element, options);
                }

                Tokenizer.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    this.$search =  container.dropdown.$search || container.selection.$search ||
                        $container.find('.select2-search__field');
                };

                Tokenizer.prototype.query = function (decorated, params, callback) {
                    var self = this;

                    function createAndSelect (data) {
                        // Normalize the data object so we can use it for checks
                        var item = self._normalizeItem(data);

                        // Check if the data object already exists as a tag
                        // Select it if it doesn't
                        var $existingOptions = self.$element.find('option').filter(function () {
                            return $(this).val() === item.id;
                        });

                        // If an existing option wasn't found for it, create the option
                        if (!$existingOptions.length) {
                            var $option = self.option(item);
                            $option.attr('data-select2-tag', true);

                            self._removeOldTags();
                            self.addOptions([$option]);
                        }

                        // Select the item, now that we know there is an option for it
                        select(item);
                    }

                    function select (data) {
                        self.trigger('select', {
                            data: data
                        });
                    }

                    params.term = params.term || '';

                    var tokenData = this.tokenizer(params, this.options, createAndSelect);

                    if (tokenData.term !== params.term) {
                        // Replace the search term if we have the search box
                        if (this.$search.length) {
                            this.$search.val(tokenData.term);
                            this.$search.focus();
                        }

                        params.term = tokenData.term;
                    }

                    decorated.call(this, params, callback);
                };

                Tokenizer.prototype.tokenizer = function (_, params, options, callback) {
                    var separators = options.get('tokenSeparators') || [];
                    var term = params.term;
                    var i = 0;

                    var createTag = this.createTag || function (params) {
                            return {
                                id: params.term,
                                text: params.term
                            };
                        };

                    while (i < term.length) {
                        var termChar = term[i];

                        if ($.inArray(termChar, separators) === -1) {
                            i++;

                            continue;
                        }

                        var part = term.substr(0, i);
                        var partParams = $.extend({}, params, {
                            term: part
                        });

                        var data = createTag(partParams);

                        if (data == null) {
                            i++;
                            continue;
                        }

                        callback(data);

                        // Reset the term to not include the tokenized portion
                        term = term.substr(i + 1) || '';
                        i = 0;
                    }

                    return {
                        term: term
                    };
                };

                return Tokenizer;
            });

            S2.define('select2/data/minimumInputLength',[

            ], function () {
                function MinimumInputLength (decorated, $e, options) {
                    this.minimumInputLength = options.get('minimumInputLength');

                    decorated.call(this, $e, options);
                }

                MinimumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (params.term.length < this.minimumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooShort',
                            args: {
                                minimum: this.minimumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MinimumInputLength;
            });

            S2.define('select2/data/maximumInputLength',[

            ], function () {
                function MaximumInputLength (decorated, $e, options) {
                    this.maximumInputLength = options.get('maximumInputLength');

                    decorated.call(this, $e, options);
                }

                MaximumInputLength.prototype.query = function (decorated, params, callback) {
                    params.term = params.term || '';

                    if (this.maximumInputLength > 0 &&
                        params.term.length > this.maximumInputLength) {
                        this.trigger('results:message', {
                            message: 'inputTooLong',
                            args: {
                                maximum: this.maximumInputLength,
                                input: params.term,
                                params: params
                            }
                        });

                        return;
                    }

                    decorated.call(this, params, callback);
                };

                return MaximumInputLength;
            });

            S2.define('select2/data/maximumSelectionLength',[

            ], function (){
                function MaximumSelectionLength (decorated, $e, options) {
                    this.maximumSelectionLength = options.get('maximumSelectionLength');

                    decorated.call(this, $e, options);
                }

                MaximumSelectionLength.prototype.query =
                    function (decorated, params, callback) {
                        var self = this;

                        this.current(function (currentData) {
                            var count = currentData != null ? currentData.length : 0;
                            if (self.maximumSelectionLength > 0 &&
                                count >= self.maximumSelectionLength) {
                                self.trigger('results:message', {
                                    message: 'maximumSelected',
                                    args: {
                                        maximum: self.maximumSelectionLength
                                    }
                                });
                                return;
                            }
                            decorated.call(self, params, callback);
                        });
                    };

                return MaximumSelectionLength;
            });

            S2.define('select2/dropdown',[
                'jquery',
                './utils'
            ], function ($, Utils) {
                function Dropdown ($element, options) {
                    this.$element = $element;
                    this.options = options;

                    Dropdown.__super__.constructor.call(this);
                }

                Utils.Extend(Dropdown, Utils.Observable);

                Dropdown.prototype.render = function () {
                    var $dropdown = $(
                        '<span class="select2-dropdown">' +
                        '<span class="select2-results"></span>' +
                        '</span>'
                    );

                    $dropdown.attr('dir', this.options.get('dir'));

                    this.$dropdown = $dropdown;

                    return $dropdown;
                };

                Dropdown.prototype.bind = function () {
                    // Should be implemented in subclasses
                };

                Dropdown.prototype.position = function ($dropdown, $container) {
                    // Should be implmented in subclasses
                };

                Dropdown.prototype.destroy = function () {
                    // Remove the dropdown from the DOM
                    this.$dropdown.remove();
                };

                return Dropdown;
            });

            S2.define('select2/dropdown/search',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function Search () { }

                Search.prototype.render = function (decorated) {
                    var $rendered = decorated.call(this);

                    var $search = $(
                        '<span class="select2-search select2-search--dropdown">' +
                        '<input class="select2-search__field" type="search" tabindex="-1"' +
                        ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                        ' spellcheck="false" role="textbox" />' +
                        '</span>'
                    );

                    this.$searchContainer = $search;
                    this.$search = $search.find('input');

                    $rendered.prepend($search);

                    return $rendered;
                };

                Search.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    this.$search.on('keydown', function (evt) {
                        self.trigger('keypress', evt);

                        self._keyUpPrevented = evt.isDefaultPrevented();
                    });

                    // Workaround for browsers which do not support the `input` event
                    // This will prevent double-triggering of events for browsers which support
                    // both the `keyup` and `input` events.
                    this.$search.on('input', function (evt) {
                        // Unbind the duplicated `keyup` event
                        $(this).off('keyup');
                    });

                    this.$search.on('keyup input', function (evt) {
                        self.handleSearch(evt);
                    });

                    container.on('open', function () {
                        self.$search.attr('tabindex', 0);

                        self.$search.focus();

                        window.setTimeout(function () {
                            self.$search.focus();
                        }, 0);
                    });

                    container.on('close', function () {
                        self.$search.attr('tabindex', -1);

                        self.$search.val('');
                    });

                    container.on('focus', function () {
                        if (container.isOpen()) {
                            self.$search.focus();
                        }
                    });

                    container.on('results:all', function (params) {
                        if (params.query.term == null || params.query.term === '') {
                            var showSearch = self.showSearch(params);

                            if (showSearch) {
                                self.$searchContainer.removeClass('select2-search--hide');
                            } else {
                                self.$searchContainer.addClass('select2-search--hide');
                            }
                        }
                    });
                };

                Search.prototype.handleSearch = function (evt) {
                    if (!this._keyUpPrevented) {
                        var input = this.$search.val();

                        this.trigger('query', {
                            term: input
                        });
                    }

                    this._keyUpPrevented = false;
                };

                Search.prototype.showSearch = function (_, params) {
                    return true;
                };

                return Search;
            });

            S2.define('select2/dropdown/hidePlaceholder',[

            ], function () {
                function HidePlaceholder (decorated, $element, options, dataAdapter) {
                    this.placeholder = this.normalizePlaceholder(options.get('placeholder'));

                    decorated.call(this, $element, options, dataAdapter);
                }

                HidePlaceholder.prototype.append = function (decorated, data) {
                    data.results = this.removePlaceholder(data.results);

                    decorated.call(this, data);
                };

                HidePlaceholder.prototype.normalizePlaceholder = function (_, placeholder) {
                    if (typeof placeholder === 'string') {
                        placeholder = {
                            id: '',
                            text: placeholder
                        };
                    }

                    return placeholder;
                };

                HidePlaceholder.prototype.removePlaceholder = function (_, data) {
                    var modifiedData = data.slice(0);

                    for (var d = data.length - 1; d >= 0; d--) {
                        var item = data[d];

                        if (this.placeholder.id === item.id) {
                            modifiedData.splice(d, 1);
                        }
                    }

                    return modifiedData;
                };

                return HidePlaceholder;
            });

            S2.define('select2/dropdown/infiniteScroll',[
                'jquery'
            ], function ($) {
                function InfiniteScroll (decorated, $element, options, dataAdapter) {
                    this.lastParams = {};

                    decorated.call(this, $element, options, dataAdapter);

                    this.$loadingMore = this.createLoadingMore();
                    this.loading = false;
                }

                InfiniteScroll.prototype.append = function (decorated, data) {
                    this.$loadingMore.remove();
                    this.loading = false;

                    decorated.call(this, data);

                    if (this.showLoadingMore(data)) {
                        this.$results.append(this.$loadingMore);
                    }
                };

                InfiniteScroll.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('query', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    container.on('query:append', function (params) {
                        self.lastParams = params;
                        self.loading = true;
                    });

                    this.$results.on('scroll', function () {
                        var isLoadMoreVisible = $.contains(
                            document.documentElement,
                            self.$loadingMore[0]
                        );

                        if (self.loading || !isLoadMoreVisible) {
                            return;
                        }

                        var currentOffset = self.$results.offset().top +
                            self.$results.outerHeight(false);
                        var loadingMoreOffset = self.$loadingMore.offset().top +
                            self.$loadingMore.outerHeight(false);

                        if (currentOffset + 50 >= loadingMoreOffset) {
                            self.loadMore();
                        }
                    });
                };

                InfiniteScroll.prototype.loadMore = function () {
                    this.loading = true;

                    var params = $.extend({}, {page: 1}, this.lastParams);

                    params.page++;

                    this.trigger('query:append', params);
                };

                InfiniteScroll.prototype.showLoadingMore = function (_, data) {
                    return data.pagination && data.pagination.more;
                };

                InfiniteScroll.prototype.createLoadingMore = function () {
                    var $option = $(
                        '<li ' +
                        'class="select2-results__option select2-results__option--load-more"' +
                        'role="treeitem" aria-disabled="true"></li>'
                    );

                    var message = this.options.get('translations').get('loadingMore');

                    $option.html(message(this.lastParams));

                    return $option;
                };

                return InfiniteScroll;
            });

            S2.define('select2/dropdown/attachBody',[
                'jquery',
                '../utils'
            ], function ($, Utils) {
                function AttachBody (decorated, $element, options) {
                    this.$dropdownParent = options.get('dropdownParent') || $(document.body);

                    decorated.call(this, $element, options);
                }

                AttachBody.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    var setupResultsEvents = false;

                    decorated.call(this, container, $container);

                    container.on('open', function () {
                        self._showDropdown();
                        self._attachPositioningHandler(container);

                        if (!setupResultsEvents) {
                            setupResultsEvents = true;

                            container.on('results:all', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });

                            container.on('results:append', function () {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                        }
                    });

                    container.on('close', function () {
                        self._hideDropdown();
                        self._detachPositioningHandler(container);
                    });

                    this.$dropdownContainer.on('mousedown', function (evt) {
                        evt.stopPropagation();
                    });
                };

                AttachBody.prototype.destroy = function (decorated) {
                    decorated.call(this);

                    this.$dropdownContainer.remove();
                };

                AttachBody.prototype.position = function (decorated, $dropdown, $container) {
                    // Clone all of the container classes
                    $dropdown.attr('class', $container.attr('class'));

                    $dropdown.removeClass('select2');
                    $dropdown.addClass('select2-container--open');

                    $dropdown.css({
                        position: 'absolute',
                        top: -999999
                    });

                    this.$container = $container;
                };

                AttachBody.prototype.render = function (decorated) {
                    var $container = $('<span></span>');

                    var $dropdown = decorated.call(this);
                    $container.append($dropdown);

                    this.$dropdownContainer = $container;

                    return $container;
                };

                AttachBody.prototype._hideDropdown = function (decorated) {
                    this.$dropdownContainer.detach();
                };

                AttachBody.prototype._attachPositioningHandler =
                    function (decorated, container) {
                        var self = this;

                        var scrollEvent = 'scroll.select2.' + container.id;
                        var resizeEvent = 'resize.select2.' + container.id;
                        var orientationEvent = 'orientationchange.select2.' + container.id;

                        var $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.each(function () {
                            $(this).data('select2-scroll-position', {
                                x: $(this).scrollLeft(),
                                y: $(this).scrollTop()
                            });
                        });

                        $watchers.on(scrollEvent, function (ev) {
                            var position = $(this).data('select2-scroll-position');
                            $(this).scrollTop(position.y);
                        });

                        $(window).on(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent,
                            function (e) {
                                self._positionDropdown();
                                self._resizeDropdown();
                            });
                    };

                AttachBody.prototype._detachPositioningHandler =
                    function (decorated, container) {
                        var scrollEvent = 'scroll.select2.' + container.id;
                        var resizeEvent = 'resize.select2.' + container.id;
                        var orientationEvent = 'orientationchange.select2.' + container.id;

                        var $watchers = this.$container.parents().filter(Utils.hasScroll);
                        $watchers.off(scrollEvent);

                        $(window).off(scrollEvent + ' ' + resizeEvent + ' ' + orientationEvent);
                    };

                AttachBody.prototype._positionDropdown = function () {
                    var $window = $(window);

                    var isCurrentlyAbove = this.$dropdown.hasClass('select2-dropdown--above');
                    var isCurrentlyBelow = this.$dropdown.hasClass('select2-dropdown--below');

                    var newDirection = null;

                    var offset = this.$container.offset();

                    offset.bottom = offset.top + this.$container.outerHeight(false);

                    var container = {
                        height: this.$container.outerHeight(false)
                    };

                    container.top = offset.top;
                    container.bottom = offset.top + container.height;

                    var dropdown = {
                        height: this.$dropdown.outerHeight(false)
                    };

                    var viewport = {
                        top: $window.scrollTop(),
                        bottom: $window.scrollTop() + $window.height()
                    };

                    var enoughRoomAbove = viewport.top < (offset.top - dropdown.height);
                    var enoughRoomBelow = viewport.bottom > (offset.bottom + dropdown.height);

                    var css = {
                        left: offset.left,
                        top: container.bottom
                    };

                    // Determine what the parent element is to use for calciulating the offset
                    var $offsetParent = this.$dropdownParent;

                    // For statically positoned elements, we need to get the element
                    // that is determining the offset
                    if ($offsetParent.css('position') === 'static') {
                        $offsetParent = $offsetParent.offsetParent();
                    }

                    var parentOffset = $offsetParent.offset();

                    css.top -= parentOffset.top;
                    css.left -= parentOffset.left;

                    if (!isCurrentlyAbove && !isCurrentlyBelow) {
                        newDirection = 'below';
                    }

                    if (!enoughRoomBelow && enoughRoomAbove && !isCurrentlyAbove) {
                        newDirection = 'above';
                    } else if (!enoughRoomAbove && enoughRoomBelow && isCurrentlyAbove) {
                        newDirection = 'below';
                    }

                    if (newDirection == 'above' ||
                        (isCurrentlyAbove && newDirection !== 'below')) {
                        css.top = container.top - parentOffset.top - dropdown.height;
                    }

                    if (newDirection != null) {
                        this.$dropdown
                            .removeClass('select2-dropdown--below select2-dropdown--above')
                            .addClass('select2-dropdown--' + newDirection);
                        this.$container
                            .removeClass('select2-container--below select2-container--above')
                            .addClass('select2-container--' + newDirection);
                    }

                    this.$dropdownContainer.css(css);
                };

                AttachBody.prototype._resizeDropdown = function () {
                    var css = {
                        width: this.$container.outerWidth(false) + 'px'
                    };

                    if (this.options.get('dropdownAutoWidth')) {
                        css.minWidth = css.width;
                        css.position = 'relative';
                        css.width = 'auto';
                    }

                    this.$dropdown.css(css);
                };

                AttachBody.prototype._showDropdown = function (decorated) {
                    this.$dropdownContainer.appendTo(this.$dropdownParent);

                    this._positionDropdown();
                    this._resizeDropdown();
                };

                return AttachBody;
            });

            S2.define('select2/dropdown/minimumResultsForSearch',[

            ], function () {
                function countResults (data) {
                    var count = 0;

                    for (var d = 0; d < data.length; d++) {
                        var item = data[d];

                        if (item.children) {
                            count += countResults(item.children);
                        } else {
                            count++;
                        }
                    }

                    return count;
                }

                function MinimumResultsForSearch (decorated, $element, options, dataAdapter) {
                    this.minimumResultsForSearch = options.get('minimumResultsForSearch');

                    if (this.minimumResultsForSearch < 0) {
                        this.minimumResultsForSearch = Infinity;
                    }

                    decorated.call(this, $element, options, dataAdapter);
                }

                MinimumResultsForSearch.prototype.showSearch = function (decorated, params) {
                    if (countResults(params.data.results) < this.minimumResultsForSearch) {
                        return false;
                    }

                    return decorated.call(this, params);
                };

                return MinimumResultsForSearch;
            });

            S2.define('select2/dropdown/selectOnClose',[

            ], function () {
                function SelectOnClose () { }

                SelectOnClose.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('close', function (params) {
                        self._handleSelectOnClose(params);
                    });
                };

                SelectOnClose.prototype._handleSelectOnClose = function (_, params) {
                    if (params && params.originalSelect2Event != null) {
                        var event = params.originalSelect2Event;

                        // Don't select an item if the close event was triggered from a select or
                        // unselect event
                        if (event._type === 'select' || event._type === 'unselect') {
                            return;
                        }
                    }

                    var $highlightedResults = this.getHighlightedResults();

                    // Only select highlighted results
                    if ($highlightedResults.length < 1) {
                        return;
                    }

                    var data = $highlightedResults.data('data');

                    // Don't re-select already selected resulte
                    if (
                        (data.element != null && data.element.selected) ||
                        (data.element == null && data.selected)
                    ) {
                        return;
                    }

                    this.trigger('select', {
                        data: data
                    });
                };

                return SelectOnClose;
            });

            S2.define('select2/dropdown/closeOnSelect',[

            ], function () {
                function CloseOnSelect () { }

                CloseOnSelect.prototype.bind = function (decorated, container, $container) {
                    var self = this;

                    decorated.call(this, container, $container);

                    container.on('select', function (evt) {
                        self._selectTriggered(evt);
                    });

                    container.on('unselect', function (evt) {
                        self._selectTriggered(evt);
                    });
                };

                CloseOnSelect.prototype._selectTriggered = function (_, evt) {
                    var originalEvent = evt.originalEvent;

                    // Don't close if the control key is being held
                    if (originalEvent && originalEvent.ctrlKey) {
                        return;
                    }

                    this.trigger('close', {
                        originalEvent: originalEvent,
                        originalSelect2Event: evt
                    });
                };

                return CloseOnSelect;
            });

            S2.define('select2/i18n/en',[],function () {
                // English
                return {
                    errorLoading: function () {
                        return 'The results could not be loaded.';
                    },
                    inputTooLong: function (args) {
                        var overChars = args.input.length - args.maximum;

                        var message = 'Please delete ' + overChars + ' character';

                        if (overChars != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    inputTooShort: function (args) {
                        var remainingChars = args.minimum - args.input.length;

                        var message = 'Please enter ' + remainingChars + ' or more characters';

                        return message;
                    },
                    loadingMore: function () {
                        return 'Loading more results…';
                    },
                    maximumSelected: function (args) {
                        var message = 'You can only select ' + args.maximum + ' item';

                        if (args.maximum != 1) {
                            message += 's';
                        }

                        return message;
                    },
                    noResults: function () {
                        return 'No results found';
                    },
                    searching: function () {
                        return 'Searching…';
                    }
                };
            });

            S2.define('select2/defaults',[
                'jquery',
                'require',

                './results',

                './selection/single',
                './selection/multiple',
                './selection/placeholder',
                './selection/allowClear',
                './selection/search',
                './selection/eventRelay',

                './utils',
                './translation',
                './diacritics',

                './data/select',
                './data/array',
                './data/ajax',
                './data/tags',
                './data/tokenizer',
                './data/minimumInputLength',
                './data/maximumInputLength',
                './data/maximumSelectionLength',

                './dropdown',
                './dropdown/search',
                './dropdown/hidePlaceholder',
                './dropdown/infiniteScroll',
                './dropdown/attachBody',
                './dropdown/minimumResultsForSearch',
                './dropdown/selectOnClose',
                './dropdown/closeOnSelect',

                './i18n/en'
            ], function ($, require,

                         ResultsList,

                         SingleSelection, MultipleSelection, Placeholder, AllowClear,
                         SelectionSearch, EventRelay,

                         Utils, Translation, DIACRITICS,

                         SelectData, ArrayData, AjaxData, Tags, Tokenizer,
                         MinimumInputLength, MaximumInputLength, MaximumSelectionLength,

                         Dropdown, DropdownSearch, HidePlaceholder, InfiniteScroll,
                         AttachBody, MinimumResultsForSearch, SelectOnClose, CloseOnSelect,

                         EnglishTranslation) {
                function Defaults () {
                    this.reset();
                }

                Defaults.prototype.apply = function (options) {
                    options = $.extend(true, {}, this.defaults, options);

                    if (options.dataAdapter == null) {
                        if (options.ajax != null) {
                            options.dataAdapter = AjaxData;
                        } else if (options.data != null) {
                            options.dataAdapter = ArrayData;
                        } else {
                            options.dataAdapter = SelectData;
                        }

                        if (options.minimumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MinimumInputLength
                            );
                        }

                        if (options.maximumInputLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumInputLength
                            );
                        }

                        if (options.maximumSelectionLength > 0) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                MaximumSelectionLength
                            );
                        }

                        if (options.tags) {
                            options.dataAdapter = Utils.Decorate(options.dataAdapter, Tags);
                        }

                        if (options.tokenSeparators != null || options.tokenizer != null) {
                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Tokenizer
                            );
                        }

                        if (options.query != null) {
                            var Query = require(options.amdBase + 'compat/query');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                Query
                            );
                        }

                        if (options.initSelection != null) {
                            var InitSelection = require(options.amdBase + 'compat/initSelection');

                            options.dataAdapter = Utils.Decorate(
                                options.dataAdapter,
                                InitSelection
                            );
                        }
                    }

                    if (options.resultsAdapter == null) {
                        options.resultsAdapter = ResultsList;

                        if (options.ajax != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                InfiniteScroll
                            );
                        }

                        if (options.placeholder != null) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                HidePlaceholder
                            );
                        }

                        if (options.selectOnClose) {
                            options.resultsAdapter = Utils.Decorate(
                                options.resultsAdapter,
                                SelectOnClose
                            );
                        }
                    }

                    if (options.dropdownAdapter == null) {
                        if (options.multiple) {
                            options.dropdownAdapter = Dropdown;
                        } else {
                            var SearchableDropdown = Utils.Decorate(Dropdown, DropdownSearch);

                            options.dropdownAdapter = SearchableDropdown;
                        }

                        if (options.minimumResultsForSearch !== 0) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                MinimumResultsForSearch
                            );
                        }

                        if (options.closeOnSelect) {
                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                CloseOnSelect
                            );
                        }

                        if (
                            options.dropdownCssClass != null ||
                            options.dropdownCss != null ||
                            options.adaptDropdownCssClass != null
                        ) {
                            var DropdownCSS = require(options.amdBase + 'compat/dropdownCss');

                            options.dropdownAdapter = Utils.Decorate(
                                options.dropdownAdapter,
                                DropdownCSS
                            );
                        }

                        options.dropdownAdapter = Utils.Decorate(
                            options.dropdownAdapter,
                            AttachBody
                        );
                    }

                    if (options.selectionAdapter == null) {
                        if (options.multiple) {
                            options.selectionAdapter = MultipleSelection;
                        } else {
                            options.selectionAdapter = SingleSelection;
                        }

                        // Add the placeholder mixin if a placeholder was specified
                        if (options.placeholder != null) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                Placeholder
                            );
                        }

                        if (options.allowClear) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                AllowClear
                            );
                        }

                        if (options.multiple) {
                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                SelectionSearch
                            );
                        }

                        if (
                            options.containerCssClass != null ||
                            options.containerCss != null ||
                            options.adaptContainerCssClass != null
                        ) {
                            var ContainerCSS = require(options.amdBase + 'compat/containerCss');

                            options.selectionAdapter = Utils.Decorate(
                                options.selectionAdapter,
                                ContainerCSS
                            );
                        }

                        options.selectionAdapter = Utils.Decorate(
                            options.selectionAdapter,
                            EventRelay
                        );
                    }

                    if (typeof options.language === 'string') {
                        // Check if the language is specified with a region
                        if (options.language.indexOf('-') > 0) {
                            // Extract the region information if it is included
                            var languageParts = options.language.split('-');
                            var baseLanguage = languageParts[0];

                            options.language = [options.language, baseLanguage];
                        } else {
                            options.language = [options.language];
                        }
                    }

                    if ($.isArray(options.language)) {
                        var languages = new Translation();
                        options.language.push('en');

                        var languageNames = options.language;

                        for (var l = 0; l < languageNames.length; l++) {
                            var name = languageNames[l];
                            var language = {};

                            try {
                                // Try to load it with the original name
                                language = Translation.loadPath(name);
                            } catch (e) {
                                try {
                                    // If we couldn't load it, check if it wasn't the full path
                                    name = this.defaults.amdLanguageBase + name;
                                    language = Translation.loadPath(name);
                                } catch (ex) {
                                    // The translation could not be loaded at all. Sometimes this is
                                    // because of a configuration problem, other times this can be
                                    // because of how Select2 helps load all possible translation files.
                                    if (options.debug && window.console && console.warn) {
                                        console.warn(
                                            'Select2: The language file for "' + name + '" could not be ' +
                                            'automatically loaded. A fallback will be used instead.'
                                        );
                                    }

                                    continue;
                                }
                            }

                            languages.extend(language);
                        }

                        options.translations = languages;
                    } else {
                        var baseTranslation = Translation.loadPath(
                            this.defaults.amdLanguageBase + 'en'
                        );
                        var customTranslation = new Translation(options.language);

                        customTranslation.extend(baseTranslation);

                        options.translations = customTranslation;
                    }

                    return options;
                };

                Defaults.prototype.reset = function () {
                    function stripDiacritics (text) {
                        // Used 'uni range + named function' from http://jsperf.com/diacritics/18
                        function match(a) {
                            return DIACRITICS[a] || a;
                        }

                        return text.replace(/[^\u0000-\u007E]/g, match);
                    }

                    function matcher (params, data) {
                        // Always return the object if there is nothing to compare
                        if ($.trim(params.term) === '') {
                            return data;
                        }

                        // Do a recursive check for options with children
                        if (data.children && data.children.length > 0) {
                            // Clone the data object if there are children
                            // This is required as we modify the object to remove any non-matches
                            var match = $.extend(true, {}, data);

                            // Check each child of the option
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                var matches = matcher(params, child);

                                // If there wasn't a match, remove the object in the array
                                if (matches == null) {
                                    match.children.splice(c, 1);
                                }
                            }

                            // If any children matched, return the new object
                            if (match.children.length > 0) {
                                return match;
                            }

                            // If there were no matching children, check just the plain object
                            return matcher(params, match);
                        }

                        var original = stripDiacritics(data.text).toUpperCase();
                        var term = stripDiacritics(params.term).toUpperCase();

                        // Check if the text contains the term
                        if (original.indexOf(term) > -1) {
                            return data;
                        }

                        // If it doesn't contain the term, don't return anything
                        return null;
                    }

                    this.defaults = {
                        amdBase: './',
                        amdLanguageBase: './i18n/',
                        closeOnSelect: true,
                        debug: false,
                        dropdownAutoWidth: false,
                        escapeMarkup: Utils.escapeMarkup,
                        language: EnglishTranslation,
                        matcher: matcher,
                        minimumInputLength: 0,
                        maximumInputLength: 0,
                        maximumSelectionLength: 0,
                        minimumResultsForSearch: 0,
                        selectOnClose: false,
                        sorter: function (data) {
                            return data;
                        },
                        templateResult: function (result) {
                            return result.text;
                        },
                        templateSelection: function (selection) {
                            return selection.text;
                        },
                        theme: 'default',
                        width: 'resolve'
                    };
                };

                Defaults.prototype.set = function (key, value) {
                    var camelKey = $.camelCase(key);

                    var data = {};
                    data[camelKey] = value;

                    var convertedData = Utils._convertData(data);

                    $.extend(this.defaults, convertedData);
                };

                var defaults = new Defaults();

                return defaults;
            });

            S2.define('select2/options',[
                'require',
                'jquery',
                './defaults',
                './utils'
            ], function (require, $, Defaults, Utils) {
                function Options (options, $element) {
                    this.options = options;

                    if ($element != null) {
                        this.fromElement($element);
                    }

                    this.options = Defaults.apply(this.options);

                    if ($element && $element.is('input')) {
                        var InputCompat = require(this.get('amdBase') + 'compat/inputData');

                        this.options.dataAdapter = Utils.Decorate(
                            this.options.dataAdapter,
                            InputCompat
                        );
                    }
                }

                Options.prototype.fromElement = function ($e) {
                    var excludedData = ['select2'];

                    if (this.options.multiple == null) {
                        this.options.multiple = $e.prop('multiple');
                    }

                    if (this.options.disabled == null) {
                        this.options.disabled = $e.prop('disabled');
                    }

                    if (this.options.language == null) {
                        if ($e.prop('lang')) {
                            this.options.language = $e.prop('lang').toLowerCase();
                        } else if ($e.closest('[lang]').prop('lang')) {
                            this.options.language = $e.closest('[lang]').prop('lang');
                        }
                    }

                    if (this.options.dir == null) {
                        if ($e.prop('dir')) {
                            this.options.dir = $e.prop('dir');
                        } else if ($e.closest('[dir]').prop('dir')) {
                            this.options.dir = $e.closest('[dir]').prop('dir');
                        } else {
                            this.options.dir = 'ltr';
                        }
                    }

                    $e.prop('disabled', this.options.disabled);
                    $e.prop('multiple', this.options.multiple);

                    if ($e.data('select2Tags')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-select2-tags` attribute has been changed to ' +
                                'use the `data-data` and `data-tags="true"` attributes and will be ' +
                                'removed in future versions of Select2.'
                            );
                        }

                        $e.data('data', $e.data('select2Tags'));
                        $e.data('tags', true);
                    }

                    if ($e.data('ajaxUrl')) {
                        if (this.options.debug && window.console && console.warn) {
                            console.warn(
                                'Select2: The `data-ajax-url` attribute has been changed to ' +
                                '`data-ajax--url` and support for the old attribute will be removed' +
                                ' in future versions of Select2.'
                            );
                        }

                        $e.attr('ajax--url', $e.data('ajaxUrl'));
                        $e.data('ajax--url', $e.data('ajaxUrl'));
                    }

                    var dataset = {};

                    // Prefer the element's `dataset` attribute if it exists
                    // jQuery 1.x does not correctly handle data attributes with multiple dashes
                    if ($.fn.jquery && $.fn.jquery.substr(0, 2) == '1.' && $e[0].dataset) {
                        dataset = $.extend(true, {}, $e[0].dataset, $e.data());
                    } else {
                        dataset = $e.data();
                    }

                    var data = $.extend(true, {}, dataset);

                    data = Utils._convertData(data);

                    for (var key in data) {
                        if ($.inArray(key, excludedData) > -1) {
                            continue;
                        }

                        if ($.isPlainObject(this.options[key])) {
                            $.extend(this.options[key], data[key]);
                        } else {
                            this.options[key] = data[key];
                        }
                    }

                    return this;
                };

                Options.prototype.get = function (key) {
                    return this.options[key];
                };

                Options.prototype.set = function (key, val) {
                    this.options[key] = val;
                };

                return Options;
            });

            S2.define('select2/core',[
                'jquery',
                './options',
                './utils',
                './keys'
            ], function ($, Options, Utils, KEYS) {
                var Select2 = function ($element, options) {
                    if ($element.data('select2') != null) {
                        $element.data('select2').destroy();
                    }

                    this.$element = $element;

                    this.id = this._generateId($element);

                    options = options || {};

                    this.options = new Options(options, $element);

                    Select2.__super__.constructor.call(this);

                    // Set up the tabindex

                    var tabindex = $element.attr('tabindex') || 0;
                    $element.data('old-tabindex', tabindex);
                    $element.attr('tabindex', '-1');

                    // Set up containers and adapters

                    var DataAdapter = this.options.get('dataAdapter');
                    this.dataAdapter = new DataAdapter($element, this.options);

                    var $container = this.render();

                    this._placeContainer($container);

                    var SelectionAdapter = this.options.get('selectionAdapter');
                    this.selection = new SelectionAdapter($element, this.options);
                    this.$selection = this.selection.render();

                    this.selection.position(this.$selection, $container);

                    var DropdownAdapter = this.options.get('dropdownAdapter');
                    this.dropdown = new DropdownAdapter($element, this.options);
                    this.$dropdown = this.dropdown.render();

                    this.dropdown.position(this.$dropdown, $container);

                    var ResultsAdapter = this.options.get('resultsAdapter');
                    this.results = new ResultsAdapter($element, this.options, this.dataAdapter);
                    this.$results = this.results.render();

                    this.results.position(this.$results, this.$dropdown);

                    // Bind events

                    var self = this;

                    // Bind the container to all of the adapters
                    this._bindAdapters();

                    // Register any DOM event handlers
                    this._registerDomEvents();

                    // Register any internal event handlers
                    this._registerDataEvents();
                    this._registerSelectionEvents();
                    this._registerDropdownEvents();
                    this._registerResultsEvents();
                    this._registerEvents();

                    // Set the initial state
                    this.dataAdapter.current(function (initialData) {
                        self.trigger('selection:update', {
                            data: initialData
                        });
                    });

                    // Hide the original select
                    $element.addClass('select2-hidden-accessible');
                    $element.attr('aria-hidden', 'true');

                    // Synchronize any monitored attributes
                    this._syncAttributes();

                    $element.data('select2', this);
                };

                Utils.Extend(Select2, Utils.Observable);

                Select2.prototype._generateId = function ($element) {
                    var id = '';

                    if ($element.attr('id') != null) {
                        id = $element.attr('id');
                    } else if ($element.attr('name') != null) {
                        id = $element.attr('name') + '-' + Utils.generateChars(2);
                    } else {
                        id = Utils.generateChars(4);
                    }

                    id = id.replace(/(:|\.|\[|\]|,)/g, '');
                    id = 'select2-' + id;

                    return id;
                };

                Select2.prototype._placeContainer = function ($container) {
                    $container.insertAfter(this.$element);

                    var width = this._resolveWidth(this.$element, this.options.get('width'));

                    if (width != null) {
                        $container.css('width', width);
                    }
                };

                Select2.prototype._resolveWidth = function ($element, method) {
                    var WIDTH = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;

                    if (method == 'resolve') {
                        var styleWidth = this._resolveWidth($element, 'style');

                        if (styleWidth != null) {
                            return styleWidth;
                        }

                        return this._resolveWidth($element, 'element');
                    }

                    if (method == 'element') {
                        var elementWidth = $element.outerWidth(false);

                        if (elementWidth <= 0) {
                            return 'auto';
                        }

                        return elementWidth + 'px';
                    }

                    if (method == 'style') {
                        var style = $element.attr('style');

                        if (typeof(style) !== 'string') {
                            return null;
                        }

                        var attrs = style.split(';');

                        for (var i = 0, l = attrs.length; i < l; i = i + 1) {
                            var attr = attrs[i].replace(/\s/g, '');
                            var matches = attr.match(WIDTH);

                            if (matches !== null && matches.length >= 1) {
                                return matches[1];
                            }
                        }

                        return null;
                    }

                    return method;
                };

                Select2.prototype._bindAdapters = function () {
                    this.dataAdapter.bind(this, this.$container);
                    this.selection.bind(this, this.$container);

                    this.dropdown.bind(this, this.$container);
                    this.results.bind(this, this.$container);
                };

                Select2.prototype._registerDomEvents = function () {
                    var self = this;

                    this.$element.on('change.select2', function () {
                        self.dataAdapter.current(function (data) {
                            self.trigger('selection:update', {
                                data: data
                            });
                        });
                    });

                    this.$element.on('focus.select2', function (evt) {
                        self.trigger('focus', evt);
                    });

                    this._syncA = Utils.bind(this._syncAttributes, this);
                    this._syncS = Utils.bind(this._syncSubtree, this);

                    if (this.$element[0].attachEvent) {
                        this.$element[0].attachEvent('onpropertychange', this._syncA);
                    }

                    var observer = window.MutationObserver ||
                            window.WebKitMutationObserver ||
                            window.MozMutationObserver
                        ;

                    if (observer != null) {
                        this._observer = new observer(function (mutations) {
                            $.each(mutations, self._syncA);
                            $.each(mutations, self._syncS);
                        });
                        this._observer.observe(this.$element[0], {
                            attributes: true,
                            childList: true,
                            subtree: false
                        });
                    } else if (this.$element[0].addEventListener) {
                        this.$element[0].addEventListener(
                            'DOMAttrModified',
                            self._syncA,
                            false
                        );
                        this.$element[0].addEventListener(
                            'DOMNodeInserted',
                            self._syncS,
                            false
                        );
                        this.$element[0].addEventListener(
                            'DOMNodeRemoved',
                            self._syncS,
                            false
                        );
                    }
                };

                Select2.prototype._registerDataEvents = function () {
                    var self = this;

                    this.dataAdapter.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerSelectionEvents = function () {
                    var self = this;
                    var nonRelayEvents = ['toggle', 'focus'];

                    this.selection.on('toggle', function () {
                        self.toggleDropdown();
                    });

                    this.selection.on('focus', function (params) {
                        self.focus(params);
                    });

                    this.selection.on('*', function (name, params) {
                        if ($.inArray(name, nonRelayEvents) !== -1) {
                            return;
                        }

                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerDropdownEvents = function () {
                    var self = this;

                    this.dropdown.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerResultsEvents = function () {
                    var self = this;

                    this.results.on('*', function (name, params) {
                        self.trigger(name, params);
                    });
                };

                Select2.prototype._registerEvents = function () {
                    var self = this;

                    this.on('open', function () {
                        self.$container.addClass('select2-container--open');
                    });

                    this.on('close', function () {
                        self.$container.removeClass('select2-container--open');
                    });

                    this.on('enable', function () {
                        self.$container.removeClass('select2-container--disabled');
                    });

                    this.on('disable', function () {
                        self.$container.addClass('select2-container--disabled');
                    });

                    this.on('blur', function () {
                        self.$container.removeClass('select2-container--focus');
                    });

                    this.on('query', function (params) {
                        if (!self.isOpen()) {
                            self.trigger('open', {});
                        }

                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:all', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('query:append', function (params) {
                        this.dataAdapter.query(params, function (data) {
                            self.trigger('results:append', {
                                data: data,
                                query: params
                            });
                        });
                    });

                    this.on('keypress', function (evt) {
                        var key = evt.which;

                        if (self.isOpen()) {
                            if (key === KEYS.ESC || key === KEYS.TAB ||
                                (key === KEYS.UP && evt.altKey)) {
                                self.close();

                                evt.preventDefault();
                            } else if (key === KEYS.ENTER) {
                                self.trigger('results:select', {});

                                evt.preventDefault();
                            } else if ((key === KEYS.SPACE && evt.ctrlKey)) {
                                self.trigger('results:toggle', {});

                                evt.preventDefault();
                            } else if (key === KEYS.UP) {
                                self.trigger('results:previous', {});

                                evt.preventDefault();
                            } else if (key === KEYS.DOWN) {
                                self.trigger('results:next', {});

                                evt.preventDefault();
                            }
                        } else {
                            if (key === KEYS.ENTER || key === KEYS.SPACE ||
                                (key === KEYS.DOWN && evt.altKey)) {
                                self.open();

                                evt.preventDefault();
                            }
                        }
                    });
                };

                Select2.prototype._syncAttributes = function () {
                    this.options.set('disabled', this.$element.prop('disabled'));

                    if (this.options.get('disabled')) {
                        if (this.isOpen()) {
                            this.close();
                        }

                        this.trigger('disable', {});
                    } else {
                        this.trigger('enable', {});
                    }
                };

                Select2.prototype._syncSubtree = function (evt, mutations) {
                    var changed = false;
                    var self = this;

                    // Ignore any mutation events raised for elements that aren't options or
                    // optgroups. This handles the case when the select element is destroyed
                    if (
                        evt && evt.target && (
                            evt.target.nodeName !== 'OPTION' && evt.target.nodeName !== 'OPTGROUP'
                        )
                    ) {
                        return;
                    }

                    if (!mutations) {
                        // If mutation events aren't supported, then we can only assume that the
                        // change affected the selections
                        changed = true;
                    } else if (mutations.addedNodes && mutations.addedNodes.length > 0) {
                        for (var n = 0; n < mutations.addedNodes.length; n++) {
                            var node = mutations.addedNodes[n];

                            if (node.selected) {
                                changed = true;
                            }
                        }
                    } else if (mutations.removedNodes && mutations.removedNodes.length > 0) {
                        changed = true;
                    }

                    // Only re-pull the data if we think there is a change
                    if (changed) {
                        this.dataAdapter.current(function (currentData) {
                            self.trigger('selection:update', {
                                data: currentData
                            });
                        });
                    }
                };

                /**
                 * Override the trigger method to automatically trigger pre-events when
                 * there are events that can be prevented.
                 */
                Select2.prototype.trigger = function (name, args) {
                    var actualTrigger = Select2.__super__.trigger;
                    var preTriggerMap = {
                        'open': 'opening',
                        'close': 'closing',
                        'select': 'selecting',
                        'unselect': 'unselecting'
                    };

                    if (args === undefined) {
                        args = {};
                    }

                    if (name in preTriggerMap) {
                        var preTriggerName = preTriggerMap[name];
                        var preTriggerArgs = {
                            prevented: false,
                            name: name,
                            args: args
                        };

                        actualTrigger.call(this, preTriggerName, preTriggerArgs);

                        if (preTriggerArgs.prevented) {
                            args.prevented = true;

                            return;
                        }
                    }

                    actualTrigger.call(this, name, args);
                };

                Select2.prototype.toggleDropdown = function () {
                    if (this.options.get('disabled')) {
                        return;
                    }

                    if (this.isOpen()) {
                        this.close();
                    } else {
                        this.open();
                    }
                };

                Select2.prototype.open = function () {
                    if (this.isOpen()) {
                        return;
                    }

                    this.trigger('query', {});
                };

                Select2.prototype.close = function () {
                    if (!this.isOpen()) {
                        return;
                    }

                    this.trigger('close', {});
                };

                Select2.prototype.isOpen = function () {
                    return this.$container.hasClass('select2-container--open');
                };

                Select2.prototype.hasFocus = function () {
                    return this.$container.hasClass('select2-container--focus');
                };

                Select2.prototype.focus = function (data) {
                    // No need to re-trigger focus events if we are already focused
                    if (this.hasFocus()) {
                        return;
                    }

                    this.$container.addClass('select2-container--focus');
                    this.trigger('focus', {});
                };

                Select2.prototype.enable = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("enable")` method has been deprecated and will' +
                            ' be removed in later Select2 versions. Use $element.prop("disabled")' +
                            ' instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        args = [true];
                    }

                    var disabled = !args[0];

                    this.$element.prop('disabled', disabled);
                };

                Select2.prototype.data = function () {
                    if (this.options.get('debug') &&
                        arguments.length > 0 && window.console && console.warn) {
                        console.warn(
                            'Select2: Data can no longer be set using `select2("data")`. You ' +
                            'should consider setting the value instead using `$element.val()`.'
                        );
                    }

                    var data = [];

                    this.dataAdapter.current(function (currentData) {
                        data = currentData;
                    });

                    return data;
                };

                Select2.prototype.val = function (args) {
                    if (this.options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `select2("val")` method has been deprecated and will be' +
                            ' removed in later Select2 versions. Use $element.val() instead.'
                        );
                    }

                    if (args == null || args.length === 0) {
                        return this.$element.val();
                    }

                    var newVal = args[0];

                    if ($.isArray(newVal)) {
                        newVal = $.map(newVal, function (obj) {
                            return obj.toString();
                        });
                    }

                    this.$element.val(newVal).trigger('change');
                };

                Select2.prototype.destroy = function () {
                    this.$container.remove();

                    if (this.$element[0].detachEvent) {
                        this.$element[0].detachEvent('onpropertychange', this._syncA);
                    }

                    if (this._observer != null) {
                        this._observer.disconnect();
                        this._observer = null;
                    } else if (this.$element[0].removeEventListener) {
                        this.$element[0]
                            .removeEventListener('DOMAttrModified', this._syncA, false);
                        this.$element[0]
                            .removeEventListener('DOMNodeInserted', this._syncS, false);
                        this.$element[0]
                            .removeEventListener('DOMNodeRemoved', this._syncS, false);
                    }

                    this._syncA = null;
                    this._syncS = null;

                    this.$element.off('.select2');
                    this.$element.attr('tabindex', this.$element.data('old-tabindex'));

                    this.$element.removeClass('select2-hidden-accessible');
                    this.$element.attr('aria-hidden', 'false');
                    this.$element.removeData('select2');

                    this.dataAdapter.destroy();
                    this.selection.destroy();
                    this.dropdown.destroy();
                    this.results.destroy();

                    this.dataAdapter = null;
                    this.selection = null;
                    this.dropdown = null;
                    this.results = null;
                };

                Select2.prototype.render = function () {
                    var $container = $(
                        '<span class="select2 select2-container">' +
                        '<span class="selection"></span>' +
                        '<span class="dropdown-wrapper" aria-hidden="true"></span>' +
                        '</span>'
                    );

                    $container.attr('dir', this.options.get('dir'));

                    this.$container = $container;

                    this.$container.addClass('select2-container--' + this.options.get('theme'));

                    $container.data('element', this.$element);

                    return $container;
                };

                return Select2;
            });

            S2.define('select2/compat/utils',[
                'jquery'
            ], function ($) {
                function syncCssClasses ($dest, $src, adapter) {
                    var classes, replacements = [], adapted;

                    classes = $.trim($dest.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Save all Select2 classes
                            if (this.indexOf('select2-') === 0) {
                                replacements.push(this);
                            }
                        });
                    }

                    classes = $.trim($src.attr('class'));

                    if (classes) {
                        classes = '' + classes; // for IE which returns object

                        $(classes.split(/\s+/)).each(function () {
                            // Only adapt non-Select2 classes
                            if (this.indexOf('select2-') !== 0) {
                                adapted = adapter(this);

                                if (adapted != null) {
                                    replacements.push(adapted);
                                }
                            }
                        });
                    }

                    $dest.attr('class', replacements.join(' '));
                }

                return {
                    syncCssClasses: syncCssClasses
                };
            });

            S2.define('select2/compat/containerCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _containerAdapter (clazz) {
                    return null;
                }

                function ContainerCSS () { }

                ContainerCSS.prototype.render = function (decorated) {
                    var $container = decorated.call(this);

                    var containerCssClass = this.options.get('containerCssClass') || '';

                    if ($.isFunction(containerCssClass)) {
                        containerCssClass = containerCssClass(this.$element);
                    }

                    var containerCssAdapter = this.options.get('adaptContainerCssClass');
                    containerCssAdapter = containerCssAdapter || _containerAdapter;

                    if (containerCssClass.indexOf(':all:') !== -1) {
                        containerCssClass = containerCssClass.replace(':all:', '');

                        var _cssAdapter = containerCssAdapter;

                        containerCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var containerCss = this.options.get('containerCss') || {};

                    if ($.isFunction(containerCss)) {
                        containerCss = containerCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($container, this.$element, containerCssAdapter);

                    $container.css(containerCss);
                    $container.addClass(containerCssClass);

                    return $container;
                };

                return ContainerCSS;
            });

            S2.define('select2/compat/dropdownCss',[
                'jquery',
                './utils'
            ], function ($, CompatUtils) {
                // No-op CSS adapter that discards all classes by default
                function _dropdownAdapter (clazz) {
                    return null;
                }

                function DropdownCSS () { }

                DropdownCSS.prototype.render = function (decorated) {
                    var $dropdown = decorated.call(this);

                    var dropdownCssClass = this.options.get('dropdownCssClass') || '';

                    if ($.isFunction(dropdownCssClass)) {
                        dropdownCssClass = dropdownCssClass(this.$element);
                    }

                    var dropdownCssAdapter = this.options.get('adaptDropdownCssClass');
                    dropdownCssAdapter = dropdownCssAdapter || _dropdownAdapter;

                    if (dropdownCssClass.indexOf(':all:') !== -1) {
                        dropdownCssClass = dropdownCssClass.replace(':all:', '');

                        var _cssAdapter = dropdownCssAdapter;

                        dropdownCssAdapter = function (clazz) {
                            var adapted = _cssAdapter(clazz);

                            if (adapted != null) {
                                // Append the old one along with the adapted one
                                return adapted + ' ' + clazz;
                            }

                            return clazz;
                        };
                    }

                    var dropdownCss = this.options.get('dropdownCss') || {};

                    if ($.isFunction(dropdownCss)) {
                        dropdownCss = dropdownCss(this.$element);
                    }

                    CompatUtils.syncCssClasses($dropdown, this.$element, dropdownCssAdapter);

                    $dropdown.css(dropdownCss);
                    $dropdown.addClass(dropdownCssClass);

                    return $dropdown;
                };

                return DropdownCSS;
            });

            S2.define('select2/compat/initSelection',[
                'jquery'
            ], function ($) {
                function InitSelection (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `initSelection` option has been deprecated in favor' +
                            ' of a custom data adapter that overrides the `current` method. ' +
                            'This method is now called multiple times instead of a single ' +
                            'time when the instance is initialized. Support will be removed ' +
                            'for the `initSelection` option in future versions of Select2'
                        );
                    }

                    this.initSelection = options.get('initSelection');
                    this._isInitialized = false;

                    decorated.call(this, $element, options);
                }

                InitSelection.prototype.current = function (decorated, callback) {
                    var self = this;

                    if (this._isInitialized) {
                        decorated.call(this, callback);

                        return;
                    }

                    this.initSelection.call(null, this.$element, function (data) {
                        self._isInitialized = true;

                        if (!$.isArray(data)) {
                            data = [data];
                        }

                        callback(data);
                    });
                };

                return InitSelection;
            });

            S2.define('select2/compat/inputData',[
                'jquery'
            ], function ($) {
                function InputData (decorated, $element, options) {
                    this._currentData = [];
                    this._valueSeparator = options.get('valueSeparator') || ',';

                    if ($element.prop('type') === 'hidden') {
                        if (options.get('debug') && console && console.warn) {
                            console.warn(
                                'Select2: Using a hidden input with Select2 is no longer ' +
                                'supported and may stop working in the future. It is recommended ' +
                                'to use a `<select>` element instead.'
                            );
                        }
                    }

                    decorated.call(this, $element, options);
                }

                InputData.prototype.current = function (_, callback) {
                    function getSelected (data, selectedIds) {
                        var selected = [];

                        if (data.selected || $.inArray(data.id, selectedIds) !== -1) {
                            data.selected = true;
                            selected.push(data);
                        } else {
                            data.selected = false;
                        }

                        if (data.children) {
                            selected.push.apply(selected, getSelected(data.children, selectedIds));
                        }

                        return selected;
                    }

                    var selected = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        selected.push.apply(
                            selected,
                            getSelected(
                                data,
                                this.$element.val().split(
                                    this._valueSeparator
                                )
                            )
                        );
                    }

                    callback(selected);
                };

                InputData.prototype.select = function (_, data) {
                    if (!this.options.get('multiple')) {
                        this.current(function (allData) {
                            $.map(allData, function (data) {
                                data.selected = false;
                            });
                        });

                        this.$element.val(data.id);
                        this.$element.trigger('change');
                    } else {
                        var value = this.$element.val();
                        value += this._valueSeparator + data.id;

                        this.$element.val(value);
                        this.$element.trigger('change');
                    }
                };

                InputData.prototype.unselect = function (_, data) {
                    var self = this;

                    data.selected = false;

                    this.current(function (allData) {
                        var values = [];

                        for (var d = 0; d < allData.length; d++) {
                            var item = allData[d];

                            if (data.id == item.id) {
                                continue;
                            }

                            values.push(item.id);
                        }

                        self.$element.val(values.join(self._valueSeparator));
                        self.$element.trigger('change');
                    });
                };

                InputData.prototype.query = function (_, params, callback) {
                    var results = [];

                    for (var d = 0; d < this._currentData.length; d++) {
                        var data = this._currentData[d];

                        var matches = this.matches(params, data);

                        if (matches !== null) {
                            results.push(matches);
                        }
                    }

                    callback({
                        results: results
                    });
                };

                InputData.prototype.addOptions = function (_, $options) {
                    var options = $.map($options, function ($option) {
                        return $.data($option[0], 'data');
                    });

                    this._currentData.push.apply(this._currentData, options);
                };

                return InputData;
            });

            S2.define('select2/compat/matcher',[
                'jquery'
            ], function ($) {
                function oldMatcher (matcher) {
                    function wrappedMatcher (params, data) {
                        var match = $.extend(true, {}, data);

                        if (params.term == null || $.trim(params.term) === '') {
                            return match;
                        }

                        if (data.children) {
                            for (var c = data.children.length - 1; c >= 0; c--) {
                                var child = data.children[c];

                                // Check if the child object matches
                                // The old matcher returned a boolean true or false
                                var doesMatch = matcher(params.term, child.text, child);

                                // If the child didn't match, pop it off
                                if (!doesMatch) {
                                    match.children.splice(c, 1);
                                }
                            }

                            if (match.children.length > 0) {
                                return match;
                            }
                        }

                        if (matcher(params.term, data.text, data)) {
                            return match;
                        }

                        return null;
                    }

                    return wrappedMatcher;
                }

                return oldMatcher;
            });

            S2.define('select2/compat/query',[

            ], function () {
                function Query (decorated, $element, options) {
                    if (options.get('debug') && window.console && console.warn) {
                        console.warn(
                            'Select2: The `query` option has been deprecated in favor of a ' +
                            'custom data adapter that overrides the `query` method. Support ' +
                            'will be removed for the `query` option in future versions of ' +
                            'Select2.'
                        );
                    }

                    decorated.call(this, $element, options);
                }

                Query.prototype.query = function (_, params, callback) {
                    params.callback = callback;

                    var query = this.options.get('query');

                    query.call(null, params);
                };

                return Query;
            });

            S2.define('select2/dropdown/attachContainer',[

            ], function () {
                function AttachContainer (decorated, $element, options) {
                    decorated.call(this, $element, options);
                }

                AttachContainer.prototype.position =
                    function (decorated, $dropdown, $container) {
                        var $dropdownContainer = $container.find('.dropdown-wrapper');
                        $dropdownContainer.append($dropdown);

                        $dropdown.addClass('select2-dropdown--below');
                        $container.addClass('select2-container--below');
                    };

                return AttachContainer;
            });

            S2.define('select2/dropdown/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$dropdown.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            S2.define('select2/selection/stopPropagation',[

            ], function () {
                function StopPropagation () { }

                StopPropagation.prototype.bind = function (decorated, container, $container) {
                    decorated.call(this, container, $container);

                    var stoppedEvents = [
                        'blur',
                        'change',
                        'click',
                        'dblclick',
                        'focus',
                        'focusin',
                        'focusout',
                        'input',
                        'keydown',
                        'keyup',
                        'keypress',
                        'mousedown',
                        'mouseenter',
                        'mouseleave',
                        'mousemove',
                        'mouseover',
                        'mouseup',
                        'search',
                        'touchend',
                        'touchstart'
                    ];

                    this.$selection.on(stoppedEvents.join(' '), function (evt) {
                        evt.stopPropagation();
                    });
                };

                return StopPropagation;
            });

            /*!
             * jQuery Mousewheel 3.1.13
             *
             * Copyright jQuery Foundation and other contributors
             * Released under the MIT license
             * http://jquery.org/license
             */

            (function (factory) {
                if ( typeof S2.define === 'function' && S2.define.amd ) {
                    // AMD. Register as an anonymous module.
                    S2.define('jquery-mousewheel',['jquery'], factory);
                } else if (typeof exports === 'object') {
                    // Node/CommonJS style for Browserify
                    module.exports = factory;
                } else {
                    // Browser globals
                    factory(jQuery);
                }
            }(function ($) {

                var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
                    toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                        ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
                    slice  = Array.prototype.slice,
                    nullLowestDeltaTimeout, lowestDelta;

                if ( $.event.fixHooks ) {
                    for ( var i = toFix.length; i; ) {
                        $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
                    }
                }

                var special = $.event.special.mousewheel = {
                    version: '3.1.12',

                    setup: function() {
                        if ( this.addEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.addEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = handler;
                        }
                        // Store the line height and page height for this particular element
                        $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
                        $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
                    },

                    teardown: function() {
                        if ( this.removeEventListener ) {
                            for ( var i = toBind.length; i; ) {
                                this.removeEventListener( toBind[--i], handler, false );
                            }
                        } else {
                            this.onmousewheel = null;
                        }
                        // Clean up the data we added to the element
                        $.removeData(this, 'mousewheel-line-height');
                        $.removeData(this, 'mousewheel-page-height');
                    },

                    getLineHeight: function(elem) {
                        var $elem = $(elem),
                            $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
                        if (!$parent.length) {
                            $parent = $('body');
                        }
                        return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
                    },

                    getPageHeight: function(elem) {
                        return $(elem).height();
                    },

                    settings: {
                        adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
                        normalizeOffset: true  // calls getBoundingClientRect for each event
                    }
                };

                $.fn.extend({
                    mousewheel: function(fn) {
                        return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
                    },

                    unmousewheel: function(fn) {
                        return this.unbind('mousewheel', fn);
                    }
                });


                function handler(event) {
                    var orgEvent   = event || window.event,
                        args       = slice.call(arguments, 1),
                        delta      = 0,
                        deltaX     = 0,
                        deltaY     = 0,
                        absDelta   = 0,
                        offsetX    = 0,
                        offsetY    = 0;
                    event = $.event.fix(orgEvent);
                    event.type = 'mousewheel';

                    // Old school scrollwheel delta
                    if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
                    if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
                    if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
                    if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

                    // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
                    if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
                        deltaX = deltaY * -1;
                        deltaY = 0;
                    }

                    // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
                    delta = deltaY === 0 ? deltaX : deltaY;

                    // New school wheel delta (wheel event)
                    if ( 'deltaY' in orgEvent ) {
                        deltaY = orgEvent.deltaY * -1;
                        delta  = deltaY;
                    }
                    if ( 'deltaX' in orgEvent ) {
                        deltaX = orgEvent.deltaX;
                        if ( deltaY === 0 ) { delta  = deltaX * -1; }
                    }

                    // No change actually happened, no reason to go any further
                    if ( deltaY === 0 && deltaX === 0 ) { return; }

                    // Need to convert lines and pages to pixels if we aren't already in pixels
                    // There are three delta modes:
                    //   * deltaMode 0 is by pixels, nothing to do
                    //   * deltaMode 1 is by lines
                    //   * deltaMode 2 is by pages
                    if ( orgEvent.deltaMode === 1 ) {
                        var lineHeight = $.data(this, 'mousewheel-line-height');
                        delta  *= lineHeight;
                        deltaY *= lineHeight;
                        deltaX *= lineHeight;
                    } else if ( orgEvent.deltaMode === 2 ) {
                        var pageHeight = $.data(this, 'mousewheel-page-height');
                        delta  *= pageHeight;
                        deltaY *= pageHeight;
                        deltaX *= pageHeight;
                    }

                    // Store lowest absolute delta to normalize the delta values
                    absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

                    if ( !lowestDelta || absDelta < lowestDelta ) {
                        lowestDelta = absDelta;

                        // Adjust older deltas if necessary
                        if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                            lowestDelta /= 40;
                        }
                    }

                    // Adjust older deltas if necessary
                    if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                        // Divide all the things by 40!
                        delta  /= 40;
                        deltaX /= 40;
                        deltaY /= 40;
                    }

                    // Get a whole, normalized value for the deltas
                    delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
                    deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
                    deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

                    // Normalise offsetX and offsetY properties
                    if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
                        var boundingRect = this.getBoundingClientRect();
                        offsetX = event.clientX - boundingRect.left;
                        offsetY = event.clientY - boundingRect.top;
                    }

                    // Add information to the event object
                    event.deltaX = deltaX;
                    event.deltaY = deltaY;
                    event.deltaFactor = lowestDelta;
                    event.offsetX = offsetX;
                    event.offsetY = offsetY;
                    // Go ahead and set deltaMode to 0 since we converted to pixels
                    // Although this is a little odd since we overwrite the deltaX/Y
                    // properties with normalized deltas.
                    event.deltaMode = 0;

                    // Add event and delta to the front of the arguments
                    args.unshift(event, delta, deltaX, deltaY);

                    // Clearout lowestDelta after sometime to better
                    // handle multiple device types that give different
                    // a different lowestDelta
                    // Ex: trackpad = 3 and mouse wheel = 120
                    if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
                    nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

                    return ($.event.dispatch || $.event.handle).apply(this, args);
                }

                function nullLowestDelta() {
                    lowestDelta = null;
                }

                function shouldAdjustOldDeltas(orgEvent, absDelta) {
                    // If this is an older event and the delta is divisable by 120,
                    // then we are assuming that the browser is treating this as an
                    // older mouse wheel event and that we should divide the deltas
                    // by 40 to try and get a more usable deltaFactor.
                    // Side note, this actually impacts the reported scroll distance
                    // in older browsers and can cause scrolling to be slower than native.
                    // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
                    return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
                }

            }));

            S2.define('jquery.select2',[
                'jquery',
                'jquery-mousewheel',

                './select2/core',
                './select2/defaults'
            ], function ($, _, Select2, Defaults) {
                if ($.fn.select2 == null) {
                    // All methods that should return the element
                    var thisMethods = ['open', 'close', 'destroy'];

                    $.fn.select2 = function (options) {
                        options = options || {};

                        if (typeof options === 'object') {
                            this.each(function () {
                                var instanceOptions = $.extend(true, {}, options);

                                var instance = new Select2($(this), instanceOptions);
                            });

                            return this;
                        } else if (typeof options === 'string') {
                            var ret;
                            var args = Array.prototype.slice.call(arguments, 1);

                            this.each(function () {
                                var instance = $(this).data('select2');

                                if (instance == null && window.console && console.error) {
                                    console.error(
                                        'The select2(\'' + options + '\') method was called on an ' +
                                        'element that is not using Select2.'
                                    );
                                }

                                ret = instance[options].apply(instance, args);
                            });

                            // Check if we should be returning `this`
                            if ($.inArray(options, thisMethods) > -1) {
                                return this;
                            }

                            return ret;
                        } else {
                            throw new Error('Invalid arguments for Select2: ' + options);
                        }
                    };
                }

                if ($.fn.select2.defaults == null) {
                    $.fn.select2.defaults = Defaults;
                }

                return Select2;
            });

            // Return the AMD loader configuration so it can be used outside of this file
            return {
                define: S2.define,
                require: S2.require
            };
        }());

    // Autoload the jQuery bindings
    // We know that all of the modules exist above this, so we're safe
    var select2 = S2.require('jquery.select2');

    // Hold the AMD module references on the jQuery function that was just loaded
    // This allows Select2 to use the internal loader outside of this file, such
    // as in the language files.
    jQuery.fn.select2.amd = S2;

    // Return the Select2 instance for anyone who is importing it.
    return select2;
}));
$(function () {
    var win = $(window),
        body = $('body'),
        scrFunc = function(){
            var scrTop = win.scrollTop(),
                winH = win.height();
            if(scrTop > 0){
                body.addClass('fix-head');
            }else{
                body.removeClass('fix-head');
            }
            $('[data-anim]').each(function(i,anim){
                var offTop = $(anim).offset().top,
                    pos = scrTop + winH*.9;
                if(offTop < pos){
                    $(anim).attr('data-anim', 'true');
                }else{
                    $(anim).attr('data-anim', 'false');
                }
            });

        },
        loadFunc = function(){

            body.addClass('page-load');

            if($('.browse-top .swiper-container')){
                var swiper = new Swiper('.browse-top .swiper-container', {
                    pagination: '.peoples-wrap .swiper-pagination',
                    slidesPerView: 4,
                    centeredSlides: true,
                    paginationClickable: true,
                    spaceBetween: 10,
                    nextButton: '.browse-top .swiper-button-next',
                    prevButton: '.browse-top .swiper-button-prev'
                });
            }
            if($('.top-playlist .swiper-container')){
                var swiper = new Swiper('.top-playlist .swiper-container', {
                    slidesPerView: 3,
                    centeredSlides: true,
                    spaceBetween: 0,
                    nextButton: '.top-playlist .swiper-button-next',
                    prevButton: '.top-playlist .swiper-button-prev'
                });
            }
            if($('.wrap-playlist .swiper-container')){
                var swiper = new Swiper('.wrap-playlist .swiper-container', {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 0,
                    initialSlide: 1,
                    nextButton: '.wrap-playlist .swiper-button-next',
                    prevButton: '.wrap-playlist .swiper-button-prev',
                    onSlideChangeStart: function (swiper) {
                        console.log(swiper.activeIndex);
                        var src = $('#playlist .swiper-slide:eq('+swiper.activeIndex+') .img img').attr('src');
                        $('#playlist .plst-top-bg').css({
                            'background-image': 'url('+src+')'
                        });
                    }
                });
            }


        },
        resizeFunc = function(){

        };


    $(window)
        .on('load', function(){
            scrFunc();
            loadFunc();
            addImgToSoundWave();
        })
        .on('scroll', function(){
            scrFunc();
        })
        .on('resize', function(){
            resizeFunc();
        });

    // при клике "вне" плеера - делаем его маленьким
    $(document).mouseup(function (e) {
        var container = $("#player");
        if (container.has(e.target).length === 0){
            container.removeClass('big');
            $('body').removeClass('open-bigPlayer');
        }
    });

    $('body')
        .on('click','a[data-type="popup"]',function () {
            var $a = $(this),
                _el = $a.attr('href');

            $(_el).addClass('show');

            if(_el =='#searchPopup') {
                var searchInput = $('#searchInput');
                var searchValue = searchInput.val();
                var searchPopupInput = $('#searchPopupInput');

                searchPopupInput.val( searchValue );
                $( ".search-value" ).text( searchValue );

                searchPopupInput
                    .keyup(function() {
                        var searchPopupValue = searchPopupInput.val();

                        $( ".search-value" ).text( searchPopupValue )
                    })
                    .keyup();
            }

            if(_el == '#aboutPopup'){
                var swiper = new Swiper('.swiper-container.peoples-wrap', {
                    pagination: '.peoples-wrap .swiper-pagination',
                    slidesPerView: 4,
                    // width: 164,
                    paginationClickable: true,
                    // spaceBetween: 'auto'
                });
            }

            return false;
        })

        .on('click','.tulip-ico',function () {
            var $songFlexTable = $(this).parents('.wrap-playlist').siblings('.song-flex-table'),
                $songInfo = $(this).next(),
                $iconsWrap = $(this).parents('.wrap-playlist').next('.icons-wrap');

            $(this).toggleClass('active');
            $('.m-toolip').toggleClass('show');

            if ( ($songFlexTable.css('opacity') =='1') || ($songInfo.css('visibility') !=='hidden') || ($iconsWrap.css('opacity') =='1')) {
                $songFlexTable.css('opacity', '.2');
                $songInfo.css('visibility', 'hidden');
                $iconsWrap.css('opacity', '.2');
            } else {
                $songFlexTable.css('opacity', '1');
                $songInfo.css('visibility', 'visible');
                $iconsWrap.css('opacity', '1');
            }
        })

        .on('click','.notes-close',function () {
            var $notesItem = $(this).closest('.follow-one');
            $notesItem.remove();
        })


        .on('click','.nav-one[href="playlist.html"]',function () {
            isMenuPopupOpen($('#notifications'), $('#messaging'), $('#favorites'));
            $('#playlist').toggleClass('show');
            return false;
        })

        .on('click','.note-link[href="#messaging"]',function () {
            isMenuPopupOpen($('#notifications'), $('#playlist'), $('#favorites'));
            $(this).toggleClass('active');
            $('#messaging').toggleClass('show');
            return false;
        })

        .on('click','.nav-one[href="notifications.html"]',function () {
            isMenuPopupOpen($('#playlist'), $('#messaging'), $('#favorites'));
            $(this).toggleClass('active');
            $('#notifications').toggleClass('show');
            return false;
        })

        .on('click','.notifications-after, .messaging-after, .popup-close',function () {
            $('.nav-one[href="notifications.html"]').removeClass('active');
            $('.note-link[href="#messaging"]').removeClass('active');
            $('#notifications').removeClass('show');
            $('#playlist').removeClass('show');
            $('#messaging').removeClass('show');
            return false;
        })

        .on('click','.nav-one[href="favorites.html"]',function () {
            isMenuPopupOpen($('#playlist'), $('#messaging'), $('#notifications'));
            $('#favorites').toggleClass('show');
            return false;
        })

        .on('click','.favorites-after, .popup-close',function () {
            $('#favorites').removeClass('show');
            return false;
        })

        .on('click','.playlist-after',function () {
            $('#playlist').removeClass('show');
            return false;
        })
        .on('click','.popup-close,.scroll-bg',function () {
            var $pop = $(this).parents('.popup');

            $pop.removeClass('show');
            $('#searchInput').val('');
            return false;
        })
        .on('click','.btn-plus',function () {
            $('#player').toggleClass('big');
            return false;
        })

        // Edit track
        .on('click','.opt-name',function () {
            var optName = $(this),
                currentPrice = $(this).children('.price-btn').text(),
                optCheckbox = $ (this).prev('[type=checkbox]'),
                hiddenPrice = $(this).children('.hidden-price'),
                newPrice,
                priceReadyBtn= $(this).children('.price-ready-btn'),
                priceBtn = $(this).children('.price-btn');

            priceBtn.toggleClass('active');
            hiddenPrice.val(currentPrice);


            priceBtn.on('click', function(){

                if (optName.hasClass('disabled') || !optCheckbox.prop('checked') || !priceBtn.hasClass('active') ) {
                    return false;
                } else {

                    priceBtn.toggleClass('hidden');
                    priceReadyBtn.toggleClass('active');
                    hiddenPrice.toggleClass('active')
                                .val('$ ')
                                .focus();
                    return false;
                }
            })

            hiddenPrice.on('click', function (event) {
                event.preventDefault();
                return false;
            })

            hiddenPrice.keyup(function(event){
                event.preventDefault();

                $(this).bind("change keyup input", function() {

                    if (this.value.match(/[^0-9]/g)) {
                        this.value = this.value.replace(/[^0-9]/g, '');
                    }

                    if (this.value.length > 6) {
                        this.value = this.value.substr(0, 6);
                    }

                });

                newPrice = hiddenPrice.val();
                return false;

            })

            priceReadyBtn.on('click', function (event) {
                event.preventDefault();

                if(newPrice == hiddenPrice.val()){
                    priceBtn.text('$ '+newPrice);
                } else {
                    priceBtn.text(currentPrice);
                }

                hiddenPrice.toggleClass('active');
                priceReadyBtn.toggleClass('active');
                priceBtn.toggleClass('hidden');

                return false;

            })

            hiddenPrice.focusout(function(){
                if(newPrice == hiddenPrice.val()){
                    priceBtn.text('$ '+newPrice);
                } else {
                    priceBtn.text(currentPrice);
                }

                hiddenPrice.toggleClass('active');
                priceReadyBtn.toggleClass('active');
                priceBtn.toggleClass('hidden');

                return false;
            })
        })

        .on('click','.song-flex-table .action-btn.ellipses',function () {
            $(this).parents('.tr').addClass('slided-right');
            return false;
        })

        .on('click','.song-flex-table .action-btn.close',function () {
            $(this).parents('.tr').removeClass('slided-right');
            return false;
        })
        .on('mouseenter','.song-flex-table .tr .action-btn.basket',function () {
            var $btn = $(this),
                $tr = $btn.closest('.tr'),
                tmp = '<div class="popup-checkout">' +
                    '<button type="button">Film / TV Show</button>' +
                    '<button type="button">Documentary, Indie, Student Film</button>' +
                    '<button type="button">Corporate, Commercial Film</button>' +
                    '<button type="button">Internet Video</button>' +
                    '<button type="button">Websites</button>' +
                    '<button type="button">Audiobooks</button>' +
                    '<button type="button">Advertising</button>' +
                    '<button type="button">Music On Hold</button>' +
                    '</div>';
            $tr.find('.td:first').append(tmp);
            setTimeout(function () {
                $tr.addClass('show-popup');
            },0);
        })
        .on('mouseleave','.song-flex-table .tr',function () {
            var $tr = $(this);
            $tr.find('.popup-checkout').fadeOut(200, function () {
                $tr.removeClass('show-popup');
                $(this).remove();
            })
            console.log('unhover');
        })
        .on('mouseenter','.foll-show', function () {
            $(this).find('.avatar-follow').addClass('show');
            console.log('foll-show hover');
        })
        .on('mouseleave','.foll-show',function () {
            $(this).find('.avatar-follow').removeClass('show');
            console.log('avatar-follow unhover');
        })

        .on('click','.prof-notes .settings-ico',function () {
            var $th = $(this);
            $th.parent().find('.popover').toggleClass('show');
            return false;
        })

    $('#player').on('mousewheel','.player-inner, .big-block',function (ev) {
        if(ev.deltaY > 0){
            $('#player').addClass('big');
            $('body').addClass('open-bigPlayer');
        }else{
            $('#player').removeClass('big');
            $('body').removeClass('open-bigPlayer');
        }
    });

    $('#editTrackPopup')
        .on('click', '.tab-pnl-btn:not(.active)', function () {
            var tab = $(this).attr('data-tab');
            $('#editTrackPopup [data-tab]').removeClass('active');
            $('#editTrackPopup [data-tab="'+tab+'"]').addClass('active');
        })
        .on('change', '.toggleLabel input[type="checkbox"]', function () {
            var chk = $(this).prop('checked'),
                hddn = $(this).parents('.inp-block').next();
            if(hddn.hasClass('hidden-inp-block')) {
                if (chk) {
                    hddn.addClass('active');
                } else {
                    hddn.removeClass('active');
                }
            }
        });

    //Queue table
    $('.btn-queue').on('click', function () {
        $(this).toggleClass( "active" );
        $('.queue-table-wrap').toggleClass( "active" );
    });
    $('body').on('click','.queue-table-wrap tbody tr',function () {
        $('.queue-table-wrap tbody tr').removeClass('active');
        $(this).addClass('active');
    });


    $('.inner-scroll').on('scroll', function () {
        var scrl = $(this);
        if ($('.inner-scroll .tab-panel').length) {
            var $tbp = $('.inner-scroll .tab-panel'),
                $prnt = $tbp.parent(),
                top = $prnt.offset().top,
                hgt = $prnt.outerHeight(),
                main = ($('.main-top').length)?$('.main-top').outerHeight() - 10:0,
                pos = top + hgt;
            if (pos <= main) {
                if(!$tbp.hasClass('fixed')) {
                    $tbp.addClass('fixed').css('top', main);
                }
            } else {
                $tbp.removeClass('fixed').removeAttr('style');
            }
        }

        if($('.prof-top-bg').length){
            var $el = $('.prof-top-bg'),
                tp = 1+$el.offset().top/-1800,
                k = 1.3,
                scale = (tp>k)?k:tp;

            $el.css({
                '-webkit-transform':'scale('+scale+')',
                '-moz-transform':'scale('+scale+')',
                'transform':'scale('+scale+')'
            })
        }

        if(scrl.hasClass('follow-inner')){
            var scrTop = scrl.scrollTop(),
                prevTop = scrl.prev().outerHeight(),
                top = parseInt(scrl.css('padding-top')),
                bot = parseInt(scrl.css('padding-bottom')),
                hgt = scrl.height(),
                folRight = scrl.find('.foll-right'),
                folRhgt = folRight.outerHeight(),
                folRtop = prevTop - parseInt(folRight.css('top')),
                tp = -scrTop;

            if ((scrTop + hgt) > folRhgt) {
                if (hgt - folRhgt < 0) {
                    tp = hgt - folRhgt;
                } else if (tp < folRtop) {
                    tp = folRtop;
                }
            }
            folRight.css({
                'margin-top': tp
            });
        }

        if(scrl.hasClass('song-dtl-inner')){
            var scrTop = scrl.scrollTop(),
                prevTop = scrl.prev().outerHeight(),
                top = parseInt(scrl.css('padding-top')),
                bot = parseInt(scrl.css('padding-bottom')),
                hgt = scrl.height(),
                folRight = scrl.find('.song-dtl-right'),
                folRhgt = folRight.outerHeight(),
                folRtop = prevTop - parseInt(folRight.css('top')),
                tp = -scrTop;

            if ((scrTop + hgt) > folRhgt) {
                if (hgt - folRhgt < 0) {
                    tp = hgt - folRhgt;
                } else if (tp < folRtop) {
                    tp = folRtop;
                }
            }
            folRight.css({
                'margin-top': tp
            });
        }
    });

    // Pickmeup

    addEventListener('DOMContentLoaded', function () {
        pickmeup('input#birthDate', {
            position       : 'bottom',
            hide_on_select : true
        });

        pickmeup('input[data-type="datepicker"]', {
            position       : 'bottom',
            hide_on_select : true
        });

    });

    //Select2

    $('select').select2({
        minimumResultsForSearch: -1,
        dropdownCssClass: 'inp-block-dropdown',
        placeholder: function(){
            $(this).data('placeholder');
        }
    }).on('select2:open', function(){
        $(this).siblings('.select2-label').toggleClass('active');
    }).on('select2:close', function(){
        $(this).siblings('.select2-label').removeClass('active');
    });

    $('.filter-selection').select2({
        minimumResultsForSearch: -1,
        placeholder: function(){
            $(this).data('placeholder');
        }
    });


    $('.select2').on({
        mouseenter: function () {
            $(this).siblings('.select2-label').css('opacity', '.8');
        },
        mouseleave: function () {
            $(this).siblings('.select2-label').css('opacity', '.4');
        }
    });

    //Ranges
    if($('#rangeslider').length) {
        $('#rangeslider').slider({
            range: true,
            min: 0,
            max: 100,
            values: [20, 85],
            slide: function (event, ui) {
                $('#rangeval').html("$" + ui.values[0] + " - " + "$" + ui.values[1]);
            }
        });
    }

    if($('#slider-range-min').length) {
        $('#slider-range-min').slider({
            range: "min",
            value: 4.20,
            min: 0,
            max: 5,
            step: 0.01,
            slide: function (event, ui) {
                $("#amount").html(ui.value);
            }
        });
    }
    if($('#amount').length) {
        $('#amount').html($("#slider-range-min").slider('value'));
    }

    function addImgToSoundWave(){
        function appendImg() {
            var imgs = ["<img class='sound-wave-img' src='./images/peoples/4.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Petra Kongale</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/2.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Gloria Estefan</a><span class='com-text'>Lorem ipsum</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/9.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>David August</a><span class='com-text'>Lorem</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/10.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Marine Gone</a><span class='com-text'>Lorem ipsum dolor sit amet</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/1.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>İrem Karasüleymanoğlu</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/3.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Jade Snowland</a><span class='com-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</span></div></div>",
                    "<img class='sound-wave-img' src='./images/peoples/7.jpg'/><div class='com-body'><a class='com-author' href='profile.html'>Mike Stingerborne</a><span class='com-text'>Lorem</span></div></div>"],
                imgRand = Math.floor(Math.random() * imgs.length),
                marginRand = Math.floor(Math.random() * 100),
                comments = [];

            comments.push("<div class='s-wave-com' style='margin-right: "+ marginRand +"px;'>" + imgs[imgRand]);

            $('.song-dtl-track').append(comments);
        };
        var imgNum = 7;
        for (var i = 0; i < imgNum; i++) {
            appendImg();
        }
    }

    function isMenuPopupOpen() {
        for (var i = 0; i < arguments.length; i++) {
            if(arguments[i].hasClass('show')) {
                arguments[i].removeClass('show');
            }
        }
        if($('#notifications').removeClass('show')) {
            $('.nav-one[href="notifications.html"]').removeClass('active');
        }
    }

    // Profile status

    function returnStatus(elem, status1, status2, status3){
        if( $(elem).hasClass(status1) ){
            return status1;
        } else if ( $(elem).hasClass(status2) ) {
            return status2;
        } else {
            return status3;
        }
    }

    $('[data-status="edit"]').on('click', function(event){
        event.preventDefault();

        $('.prof-status-opt').toggleClass('show');
    })


    $('[data-status="selected"]').on('click', function(event){
        event.preventDefault();

        var currentStatus = returnStatus('[data-status="current"]', 'online', 'offline', 'away');

        if( $(this).hasClass('online') ){
            $('[data-status="current"]').toggleClass(''+currentStatus+' online')
        } else if ( $(this).hasClass('offline') ) {
            $('[data-status="current"]').toggleClass(''+currentStatus+' offline')
        } else {
            $('[data-status="current"]').toggleClass(''+currentStatus+' away')
        }

        $('.prof-status-opt').removeClass('show');

    })

    //Media queries

    function burgerMenu(){
        $('.menu-nav').on('click', function(){

            $(this).toggleClass('open');
            $('.main').toggleClass('disabled');
            $('#messaging').removeClass('show');
            $('#notifications').removeClass('show');
            $('[data-item="added"]').remove();

            if($('.profile').hasClass('open')) {
                $('.profile').removeClass('open');
                $('.popover,.top').removeClass('show');

            }

            if($(this).hasClass('open')){
                $('#menu footer').css('display', 'block');
                $('#player').css('opacity', '0');
                $('#favorites').removeClass('show');
                $('#playlist').removeClass('show');
            } else  {
                $('#menu footer').css('display', 'none');
                $('#player').css('opacity', '1');
            }
        })
    }

    function addNewLi(){
        var $newLi = '<li data-item="added"><a href="#messaging" class="note-link" title="messages"><span>Messages</span></a></li>'+
                '<li data-item="added"><a href="#notifications" class="note-link" title="notifications"><span>Notifications</span></a></li>',
            $li = $('.inn-list').children('li:first-child');

        $li.after($newLi);
    }

    function openProfLinks(elem, link) {
        $(elem).on('click', function(){
            $(link).addClass('show');
            $('.profile').removeClass('open');
            $('.popover,.top').removeClass('show');
            $('.main').toggleClass('disabled');
            $('[data-item="added"]').remove();
            return false;
        })
    }

    function burgerProfile(){
        $('.profile').on('click', function(event) {
            event.preventDefault();

            $(this).toggleClass('open');
            $('.main').toggleClass('disabled');
            $('.menu-nav').removeClass('open');
            $('.popover,.top').toggleClass('show');
            $('#favorites').removeClass('show');
            $('#playlist').removeClass('show');

            addNewLi();

            if(!$(this).hasClass('open')) {
                $('[data-item="added"]').remove();
                $('#player').css('opacity', '1');

                $('.popover,.top').removeClass('show');
                $('.main').removeClass('disabled');

            } else {
                $('#player').css('opacity', '0');
            }

            openProfLinks('.note-link[href="#messaging"]', '#messaging');
            openProfLinks('.note-link[href="#notifications"]', '#notifications');
        })
    }

    // function autoReload(){
    //     var goal = self.location;
    //     location.href = goal;
    // }

    function hidePlayerBtns(){
        $('.player-queue').on('click', function () {
            $(this).toggleClass('open');


            if($(this).hasClass('open')){
                $('.play-type').css('opacity', '1');
            } else {
                $('.play-type').css('opacity', '0');
            }
        })
    }

    $(window).resize(function() {
        // window.setTimeout(autoReload(), 500);

        var $mq = window.matchMedia( "(max-width: 720px)" );

        if($mq.matches) {
            burgerMenu();
            burgerProfile();

            $('.prof-status.edit').on('click', function() {
                $('.profile').toggleClass('open');
                return false;
            })
        }

        if (window.matchMedia( "(max-width: 450px)" ).matches) {
            hidePlayerBtns();
        }

        if (window.matchMedia( "(max-width: 980px)" ).matches) {
            $('#searchLink').on('click', function(event) {
                event.preventDefault();
                $(this).siblings('input').toggleClass('active');
                $(this).parent('.search-form').siblings('.tabs').toggleClass('hidden');
                return false;
            })


            $('#searchLink').siblings('input').keyup(function () {
                var searchValue = $('#searchLink').siblings('input').val();

                $('#searchLink').one('click', function(){
                    $('#searchPopup').toggleClass('show');
                    $('#searchPopupInput').val(searchValue);
                    $( ".search-value" ).text( searchValue );
                })
            })
        }



    });

    if (window.matchMedia( "(max-width: 980px)" ).matches) {
        $('#searchLink').on('click', function(event) {
           event.preventDefault();
            $(this).siblings('input').toggleClass('active');
            $(this).parent('.search-form').siblings('.tabs').toggleClass('hidden');
            return false;
        })


        $('#searchLink').siblings('input').keyup(function () {
            var searchValue = $('#searchLink').siblings('input').val();

            $('#searchLink').one('click', function(){
                $('#searchPopup').toggleClass('show');
                $('#searchPopupInput').val(searchValue);
                $( ".search-value" ).text( searchValue );
            })
        })
    }

    if (window.matchMedia( "(max-width: 720px)" ).matches) {
        burgerMenu();
        burgerProfile();

        $('.prof-status.edit').on('click', function() {
            $('.profile').toggleClass('open');
            return false;
        })
    }

    $('#messaging .foll-right').on('click', function () {
        $(this).toggleClass('show');

        if($(this).hasClass('show')){
            $('#messaging .popup-close').css('opacity', '0');
        } else {
            $('#messaging .popup-close').css('opacity', '1');
        }

    })

    if (window.matchMedia( "(max-width: 450px)" ).matches) {
        hidePlayerBtns();
    }

    if(!$('.opt-name').prev('[type=checkbox]').prop('checked')) {

        $('.price-btn').on('click', function(event){
            event.preventDefault();
            return false;
        })
    }

});