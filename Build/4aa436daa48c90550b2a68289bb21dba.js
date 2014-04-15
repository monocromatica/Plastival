/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/
if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]}}t.fn.emulateTransitionEnd=function(e){var i=!1,o=this;t(this).one(t.support.transition.end,function(){i=!0});var n=function(){i||t(o).trigger(t.support.transition.end)};return setTimeout(n,e),this},t(function(){t.support.transition=e()})}(window.jQuery),+function(t){"use strict";var e='[data-dismiss="alert"]',i=function(i){t(i).on("click",e,this.close)};i.prototype.close=function(e){function i(){s.trigger("closed.bs.alert").remove()}var o=t(this),n=o.attr("data-target");n||(n=o.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,""));var s=t(n);e&&e.preventDefault(),s.length||(s=o.hasClass("alert")?o:o.parent()),s.trigger(e=t.Event("close.bs.alert")),e.isDefaultPrevented()||(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one(t.support.transition.end,i).emulateTransitionEnd(150):i())};var o=t.fn.alert;t.fn.alert=function(e){return this.each(function(){var o=t(this),n=o.data("bs.alert");n||o.data("bs.alert",n=new i(this)),"string"==typeof e&&n[e].call(o)})},t.fn.alert.Constructor=i,t.fn.alert.noConflict=function(){return t.fn.alert=o,this},t(document).on("click.bs.alert.data-api",e,i.prototype.close)}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o)};e.DEFAULTS={loadingText:"loading..."},e.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",n.resetText||i.data("resetText",i[o]()),i[o](n[t]||this.options[t]),setTimeout(function(){"loadingText"==t?i.addClass(e).attr(e,e):i.removeClass(e).removeAttr(e)},0)},e.prototype.toggle=function(){var t=this.$element.closest('[data-toggle="buttons"]');if(t.length){var e=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===e.prop("type")&&t.find(".active").removeClass("active")}this.$element.toggleClass("active")};var i=t.fn.button;t.fn.button=function(i){return this.each(function(){var o=t(this),n=o.data("bs.button"),s="object"==typeof i&&i;n||o.data("bs.button",n=new e(this,s)),"toggle"==i?n.toggle():i&&n.setState(i)})},t.fn.button.Constructor=e,t.fn.button.noConflict=function(){return t.fn.button=i,this},t(document).on("click.bs.button.data-api","[data-toggle^=button]",function(e){var i=t(e.target);i.hasClass("btn")||(i=i.closest(".btn")),i.button("toggle"),e.preventDefault()})}(window.jQuery),+function(t){"use strict";var e=function(e,i){this.$element=t(e),this.$indicators=this.$element.find(".carousel-indicators"),this.options=i,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",t.proxy(this.pause,this)).on("mouseleave",t.proxy(this.cycle,this))};e.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},e.prototype.cycle=function(e){return e||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(t.proxy(this.next,this),this.options.interval)),this},e.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},e.prototype.to=function(e){var i=this,o=this.getActiveIndex();return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid",function(){i.to(e)}):o==e?this.pause().cycle():this.slide(e>o?"next":"prev",t(this.$items[e]))},e.prototype.pause=function(e){return e||(this.paused=!0),this.$element.find(".next, .prev").length&&t.support.transition.end&&(this.$element.trigger(t.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},e.prototype.next=function(){return this.sliding?void 0:this.slide("next")},e.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},e.prototype.slide=function(e,i){var o=this.$element.find(".item.active"),n=i||o[e](),s=this.interval,a="next"==e?"left":"right",r="next"==e?"first":"last",l=this;if(!n.length){if(!this.options.wrap)return;n=this.$element.find(".item")[r]()}this.sliding=!0,s&&this.pause();var h=t.Event("slide.bs.carousel",{relatedTarget:n[0],direction:a});if(!n.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var e=t(l.$indicators.children()[l.getActiveIndex()]);e&&e.addClass("active")})),t.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(h),h.isDefaultPrevented())return;n.addClass(e),n[0].offsetWidth,o.addClass(a),n.addClass(a),o.one(t.support.transition.end,function(){n.removeClass([e,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(h),h.isDefaultPrevented())return;o.removeClass("active"),n.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var i=t.fn.carousel;t.fn.carousel=function(i){return this.each(function(){var o=t(this),n=o.data("bs.carousel"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i),a="string"==typeof i?i:s.slide;n||o.data("bs.carousel",n=new e(this,s)),"number"==typeof i?n.to(i):a?n[a]():s.interval&&n.pause().cycle()})},t.fn.carousel.Constructor=e,t.fn.carousel.noConflict=function(){return t.fn.carousel=i,this},t(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(e){var i,o=t(this),n=t(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"")),s=t.extend({},n.data(),o.data()),a=o.attr("data-slide-to");a&&(s.interval=!1),n.carousel(s),(a=o.attr("data-slide-to"))&&n.data("bs.carousel").to(a),e.preventDefault()}),t(window).on("load",function(){t('[data-ride="carousel"]').each(function(){var e=t(this);e.carousel(e.data())})})}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.$element=t(i),this.options=t.extend({},e.DEFAULTS,o),this.transitioning=null,this.options.parent&&(this.$parent=t(this.options.parent)),this.options.toggle&&this.toggle()};e.DEFAULTS={toggle:!0},e.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},e.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e=t.Event("show.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.$parent&&this.$parent.find("> .panel > .in");if(i&&i.length){var o=i.data("bs.collapse");if(o&&o.transitioning)return;i.collapse("hide"),o||i.data("bs.collapse",null)}var n=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[n](0),this.transitioning=1;var s=function(){this.$element.removeClass("collapsing").addClass("in")[n]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return s.call(this);var a=t.camelCase(["scroll",n].join("-"));this.$element.one(t.support.transition.end,t.proxy(s,this)).emulateTransitionEnd(350)[n](this.$element[0][a])}}},e.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var o=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return t.support.transition?(this.$element[i](0).one(t.support.transition.end,t.proxy(o,this)).emulateTransitionEnd(350),void 0):o.call(this)}}},e.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var i=t.fn.collapse;t.fn.collapse=function(i){return this.each(function(){var o=t(this),n=o.data("bs.collapse"),s=t.extend({},e.DEFAULTS,o.data(),"object"==typeof i&&i);n||o.data("bs.collapse",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.collapse.Constructor=e,t.fn.collapse.noConflict=function(){return t.fn.collapse=i,this},t(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(e){var i,o=t(this),n=o.attr("data-target")||e.preventDefault()||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""),s=t(n),a=s.data("bs.collapse"),r=a?"toggle":o.data(),l=o.attr("data-parent"),h=l&&t(l);a&&a.transitioning||(h&&h.find('[data-toggle=collapse][data-parent="'+l+'"]').not(o).addClass("collapsed"),o[s.hasClass("in")?"addClass":"removeClass"]("collapsed")),s.collapse(r)})}(window.jQuery),+function(t){"use strict";function e(){t(o).remove(),t(n).each(function(e){var o=i(t(this));o.hasClass("open")&&(o.trigger(e=t.Event("hide.bs.dropdown")),e.isDefaultPrevented()||o.removeClass("open").trigger("hidden.bs.dropdown"))})}function i(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var o=i&&t(i);return o&&o.length?o:e.parent()}var o=".dropdown-backdrop",n="[data-toggle=dropdown]",s=function(e){t(e).on("click.bs.dropdown",this.toggle)};s.prototype.toggle=function(o){var n=t(this);if(!n.is(".disabled, :disabled")){var s=i(n),a=s.hasClass("open");if(e(),!a){if("ontouchstart"in document.documentElement&&!s.closest(".navbar-nav").length&&t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click",e),s.trigger(o=t.Event("show.bs.dropdown")),o.isDefaultPrevented())return;s.toggleClass("open").trigger("shown.bs.dropdown"),n.focus()}return!1}},s.prototype.keydown=function(e){if(/(38|40|27)/.test(e.keyCode)){var o=t(this);if(e.preventDefault(),e.stopPropagation(),!o.is(".disabled, :disabled")){var s=i(o),a=s.hasClass("open");if(!a||a&&27==e.keyCode)return 27==e.which&&s.find(n).focus(),o.click();var r=t("[role=menu] li:not(.divider):visible a",s);if(r.length){var l=r.index(r.filter(":focus"));38==e.keyCode&&l>0&&l--,40==e.keyCode&&l<r.length-1&&l++,~l||(l=0),r.eq(l).focus()}}}};var a=t.fn.dropdown;t.fn.dropdown=function(e){return this.each(function(){var i=t(this),o=i.data("dropdown");o||i.data("dropdown",o=new s(this)),"string"==typeof e&&o[e].call(i)})},t.fn.dropdown.Constructor=s,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=a,this},t(document).on("click.bs.dropdown.data-api",e).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",n,s.prototype.toggle).on("keydown.bs.dropdown.data-api",n+", [role=menu]",s.prototype.keydown)}(window.jQuery),+function(t){"use strict";var e=function(e,i){this.options=i,this.$element=t(e),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};e.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},e.prototype.toggle=function(t){return this[this.isShown?"hide":"show"](t)},e.prototype.show=function(e){var i=this,o=t.Event("show.bs.modal",{relatedTarget:e});this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',t.proxy(this.hide,this)),this.backdrop(function(){var o=t.support.transition&&i.$element.hasClass("fade");i.$element.parent().length||i.$element.appendTo(document.body),i.$element.show(),o&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();var n=t.Event("shown.bs.modal",{relatedTarget:e});o?i.$element.find(".modal-dialog").one(t.support.transition.end,function(){i.$element.focus().trigger(n)}).emulateTransitionEnd(300):i.$element.focus().trigger(n)}))},e.prototype.hide=function(e){e&&e.preventDefault(),e=t.Event("hide.bs.modal"),this.$element.trigger(e),this.isShown&&!e.isDefaultPrevented()&&(this.isShown=!1,this.escape(),t(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),t.support.transition&&this.$element.hasClass("fade")?this.$element.one(t.support.transition.end,t.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},e.prototype.enforceFocus=function(){t(document).off("focusin.bs.modal").on("focusin.bs.modal",t.proxy(function(t){this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.focus()},this))},e.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",t.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},e.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.removeBackdrop(),t.$element.trigger("hidden.bs.modal")})},e.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},e.prototype.backdrop=function(e){var i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=t.support.transition&&i;if(this.$backdrop=t('<div class="modal-backdrop '+i+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",t.proxy(function(t){t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!e)return;o?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),t.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(t.support.transition.end,e).emulateTransitionEnd(150):e()):e&&e()};var i=t.fn.modal;t.fn.modal=function(i,o){return this.each(function(){var n=t(this),s=n.data("bs.modal"),a=t.extend({},e.DEFAULTS,n.data(),"object"==typeof i&&i);s||n.data("bs.modal",s=new e(this,a)),"string"==typeof i?s[i](o):a.show&&s.show(o)})},t.fn.modal.Constructor=e,t.fn.modal.noConflict=function(){return t.fn.modal=i,this},t(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var i=t(this),o=i.attr("href"),n=t(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=n.data("modal")?"toggle":t.extend({remote:!/#/.test(o)&&o},n.data(),i.data());e.preventDefault(),n.modal(s,this).one("hide",function(){i.is(":visible")&&i.focus()})}),t(document).on("show.bs.modal",".modal",function(){t(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){t(document.body).removeClass("modal-open")})}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",t,e)};e.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.prototype.init=function(e,i,o){this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o);for(var n=this.options.trigger.split(" "),s=n.length;s--;){var a=n[s];if("click"==a)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=a){var r="hover"==a?"mouseenter":"focus",l="hover"==a?"mouseleave":"blur";this.$element.on(r+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},e.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},e.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show),void 0):i.show()},e.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide),void 0):i.hide()},e.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(e),e.isDefaultPrevented())return;var i=this.tip();this.setContent(),this.options.animation&&i.addClass("fade");var o="function"==typeof this.options.placement?this.options.placement.call(this,i[0],this.$element[0]):this.options.placement,n=/\s?auto?\s?/i,s=n.test(o);s&&(o=o.replace(n,"")||"top"),i.detach().css({top:0,left:0,display:"block"}).addClass(o),this.options.container?i.appendTo(this.options.container):i.insertAfter(this.$element);var a=this.getPosition(),r=i[0].offsetWidth,l=i[0].offsetHeight;if(s){var h=this.$element.parent(),d=o,c=document.documentElement.scrollTop||document.body.scrollTop,p="body"==this.options.container?window.innerWidth:h.outerWidth(),f="body"==this.options.container?window.innerHeight:h.outerHeight(),u="body"==this.options.container?0:h.offset().left;o="bottom"==o&&a.top+a.height+l-c>f?"top":"top"==o&&a.top-c-l<0?"bottom":"right"==o&&a.right+r>p?"left":"left"==o&&a.left-r<u?"right":o,i.removeClass(d).addClass(o)}var v=this.getCalculatedOffset(o,a,r,l);this.applyPlacement(v,o),this.$element.trigger("shown.bs."+this.type)}},e.prototype.applyPlacement=function(t,e){var i,o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,a=parseInt(o.css("margin-top"),10),r=parseInt(o.css("margin-left"),10);isNaN(a)&&(a=0),isNaN(r)&&(r=0),t.top=t.top+a,t.left=t.left+r,o.offset(t).addClass("in");var l=o[0].offsetWidth,h=o[0].offsetHeight;if("top"==e&&h!=s&&(i=!0,t.top=t.top+s-h),/bottom|top/.test(e)){var d=0;t.left<0&&(d=-2*t.left,t.left=0,o.offset(t),l=o[0].offsetWidth,h=o[0].offsetHeight),this.replaceArrow(d-n+l,l,"left")}else this.replaceArrow(h-s,h,"top");i&&o.offset(t)},e.prototype.replaceArrow=function(t,e,i){this.arrow().css(i,t?50*(1-t/e)+"%":"")},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},e.prototype.hide=function(){function e(){"in"!=i.hoverState&&o.detach()}var i=this,o=this.tip(),n=t.Event("hide.bs."+this.type);return this.$element.trigger(n),n.isDefaultPrevented()?void 0:(o.removeClass("in"),t.support.transition&&this.$tip.hasClass("fade")?o.one(t.support.transition.end,e).emulateTransitionEnd(150):e(),this.$element.trigger("hidden.bs."+this.type),this)},e.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},e.prototype.hasContent=function(){return this.getTitle()},e.prototype.getPosition=function(){var e=this.$element[0];return t.extend({},"function"==typeof e.getBoundingClientRect?e.getBoundingClientRect():{width:e.offsetWidth,height:e.offsetHeight},this.$element.offset())},e.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},e.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},e.prototype.tip=function(){return this.$tip=this.$tip||t(this.options.template)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},e.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},e.prototype.enable=function(){this.enabled=!0},e.prototype.disable=function(){this.enabled=!1},e.prototype.toggleEnabled=function(){this.enabled=!this.enabled},e.prototype.toggle=function(e){var i=e?t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;i.tip().hasClass("in")?i.leave(i):i.enter(i)},e.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var i=t.fn.tooltip;t.fn.tooltip=function(i){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof i&&i;n||o.data("bs.tooltip",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.tooltip.Constructor=e,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=i,this}}(window.jQuery),+function(t){"use strict";var e=function(t,e){this.init("popover",t,e)};if(!t.fn.tooltip)throw new Error("Popover requires tooltip.js");e.DEFAULTS=t.extend({},t.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.prototype=t.extend({},t.fn.tooltip.Constructor.prototype),e.prototype.constructor=e,e.prototype.getDefaults=function(){return e.DEFAULTS},e.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();t.find(".popover-title")[this.options.html?"html":"text"](e),t.find(".popover-content")[this.options.html?"html":"text"](i),t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},e.prototype.hasContent=function(){return this.getTitle()||this.getContent()},e.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},e.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},e.prototype.tip=function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip};var i=t.fn.popover;t.fn.popover=function(i){return this.each(function(){var o=t(this),n=o.data("bs.popover"),s="object"==typeof i&&i;n||o.data("bs.popover",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.popover.Constructor=e,t.fn.popover.noConflict=function(){return t.fn.popover=i,this}}(window.jQuery),+function(t){"use strict";function e(i,o){var n,s=t.proxy(this.process,this);this.$element=t(i).is("body")?t(window):t(i),this.$body=t("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",s),this.options=t.extend({},e.DEFAULTS,o),this.selector=(this.options.target||(n=t(i).attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=t([]),this.targets=t([]),this.activeTarget=null,this.refresh(),this.process()}e.DEFAULTS={offset:10},e.prototype.refresh=function(){var e=this.$element[0]==window?"offset":"position";this.offsets=t([]),this.targets=t([]);var i=this;this.$body.find(this.selector).map(function(){var o=t(this),n=o.data("target")||o.attr("href"),s=/^#\w/.test(n)&&t(n);return s&&s.length&&[[s[e]().top+(!t.isWindow(i.$scrollElement.get(0))&&i.$scrollElement.scrollTop()),n]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,o=i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(e>=o)return a!=(t=s.last()[0])&&this.activate(t);for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(!n[t+1]||e<=n[t+1])&&this.activate(s[t])},e.prototype.activate=function(e){this.activeTarget=e,t(this.selector).parents(".active").removeClass("active");var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',o=t(i).parents("li").addClass("active");o.parent(".dropdown-menu").length&&(o=o.closest("li.dropdown").addClass("active")),o.trigger("activate")};var i=t.fn.scrollspy;t.fn.scrollspy=function(i){return this.each(function(){var o=t(this),n=o.data("bs.scrollspy"),s="object"==typeof i&&i;n||o.data("bs.scrollspy",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=i,this},t(window).on("load",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);e.scrollspy(e.data())})})}(window.jQuery),+function(t){"use strict";var e=function(e){this.element=t(e)};e.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),o=e.attr("data-target");if(o||(o=e.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var n=i.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:n});if(e.trigger(s),!s.isDefaultPrevented()){var a=t(o);this.activate(e.parent("li"),i),this.activate(a,a.parent(),function(){e.trigger({type:"shown.bs.tab",relatedTarget:n})})}}},e.prototype.activate=function(e,i,o){function n(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),e.addClass("active"),a?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu")&&e.closest("li.dropdown").addClass("active"),o&&o()}var s=i.find("> .active"),a=o&&t.support.transition&&s.hasClass("fade");a?s.one(t.support.transition.end,n).emulateTransitionEnd(150):n(),s.removeClass("in")};var i=t.fn.tab;t.fn.tab=function(i){return this.each(function(){var o=t(this),n=o.data("bs.tab");n||o.data("bs.tab",n=new e(this)),"string"==typeof i&&n[i]()})},t.fn.tab.Constructor=e,t.fn.tab.noConflict=function(){return t.fn.tab=i,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(e){e.preventDefault(),t(this).tab("show")})}(window.jQuery),+function(t){"use strict";var e=function(i,o){this.options=t.extend({},e.DEFAULTS,o),this.$window=t(window).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(i),this.affixed=this.unpin=null,this.checkPosition()};e.RESET="affix affix-top affix-bottom",e.DEFAULTS={offset:0},e.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},e.prototype.checkPosition=function(){if(this.$element.is(":visible")){var i=t(document).height(),o=this.$window.scrollTop(),n=this.$element.offset(),s=this.options.offset,a=s.top,r=s.bottom;"object"!=typeof s&&(r=a=s),"function"==typeof a&&(a=s.top()),"function"==typeof r&&(r=s.bottom());var l=null!=this.unpin&&o+this.unpin<=n.top?!1:null!=r&&n.top+this.$element.height()>=i-r?"bottom":null!=a&&a>=o?"top":!1;this.affixed!==l&&(this.unpin&&this.$element.css("top",""),this.affixed=l,this.unpin="bottom"==l?n.top-o:null,this.$element.removeClass(e.RESET).addClass("affix"+(l?"-"+l:"")),"bottom"==l&&this.$element.offset({top:document.body.offsetHeight-r-this.$element.height()}))}};var i=t.fn.affix;t.fn.affix=function(i){return this.each(function(){var o=t(this),n=o.data("bs.affix"),s="object"==typeof i&&i;n||o.data("bs.affix",n=new e(this,s)),"string"==typeof i&&n[i]()})},t.fn.affix.Constructor=e,t.fn.affix.noConflict=function(){return t.fn.affix=i,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var e=t(this),i=e.data();i.offset=i.offset||{},i.offsetBottom&&(i.offset.bottom=i.offsetBottom),i.offsetTop&&(i.offset.top=i.offsetTop),e.affix(i)})})}(window.jQuery),/* 
 * VenoBox - jQuery Plugin
 * version: 1.2.3
 * @requires jQuery
 *
 * Examples at http://lab.veno.it/venobox/
 * License: Creative Commons Attribution 3.0 License
 * License URI: http://creativecommons.org/licenses/by/3.0/
 * Copyright 2013 Nicola Franchini - @nicolafranchini
 *
 */
function(t){function e(){t.ajax({url:u,cache:!1}).done(function(t){p.html('<div class="vbox-inline">'+t+"</div>"),r(!0)}).fail(function(){p.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),r(!0)})}function i(){p.html('<iframe class="venoframe" src="'+u+'"></iframe>'),r()}function o(){var t=u.split("/"),e=t[t.length-1];p.html('<iframe class="venoframe" src="http://player.vimeo.com/video/'+e+'"></iframe>'),r()}function n(){var t=u.split("/"),e=t[t.length-1];p.html('<iframe class="venoframe" src="http://www.youtube.com/embed/'+e+'"></iframe>'),r()}function s(){p.html('<div class="vbox-inline">'+t(u).html()+"</div>"),r()}function a(){y=t(".vbox-content").find("img"),y.one("load",function(){r()}).each(function(){this.complete&&t(this).load()})}function r(e){e=e||!1,1!=e&&t(window).scrollTop(0),H.html(D),p.find(">:first-child").addClass("figlio"),t(".figlio").css("width",w).css("height",$).css("padding",x).css("background",C),m=p.outerHeight(),g=t(window).height(),g>m+80?(b=(g-m)/2,p.css("margin-top",b),p.css("margin-bottom",b)):(p.css("margin-top","40px"),p.css("margin-bottom","40px")),p.animate({opacity:"1"},"slow")}function l(){t(".vbox-content").length&&(m=p.height(),g=t(window).height(),g>m+80?(b=(g-m)/2,p.css("margin-top",b),p.css("margin-bottom",b)):(p.css("margin-top","40px"),p.css("margin-bottom","40px")))}var h,d,c,p,f,u,v,m,g,b,y,w,$,x,C,T,A,k,E,D,S,j,P,H,L,U,F,Q,W,O;t.fn.extend({venobox:function(r){var l={framewidth:"",frameheight:"",border:"0",bgcolor:"#fff",numeratio:!1},r=t.extend(l,r);return this.each(function(){var l=t(this);l.addClass("vbox-item"),l.data("framewidth",r.framewidth),l.data("frameheight",r.frameheight),l.data("border",r.border),l.data("bgcolor",r.bgcolor),l.data("numeratio",r.numeratio),l.click(function(r){function m(){T=l.data("gall"),U=l.data("numeratio"),A=t('.vbox-item[data-gall="'+T+'"]'),A.length>0&&U===!0?(L.html(A.index(l)+1+" / "+A.length),L.fadeIn()):L.fadeOut(),k=A.eq(A.index(l)+1),E=A.eq(A.index(l)-1),l.attr("title")?(D=l.attr("title"),H.fadeIn()):(D="",H.fadeOut()),k.length>0?(t(".vbox-next").css("display","block"),S=!0):(t(".vbox-next").css("display","none"),S=!1),A.index(l)>0?(t(".vbox-prev").css("display","block"),j=!0):(t(".vbox-prev").css("display","none"),j=!1)}return r.stopPropagation(),r.preventDefault(),l=t(this),w=l.data("framewidth"),$=l.data("frameheight"),x=l.data("border"),C=l.data("bgcolor"),S=!1,j=!1,P=!1,u=l.attr("href"),v=t(window).scrollTop(),v=-v,t("body").wrapInner('<div class="vwrap"></div>'),d=t(".vwrap"),f='<div class="vbox-overlay"><div class="vbox-preloader">Loading...</div><div class="vbox-container"><div class="vbox-content"></div></div><div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">X</div><div class="vbox-next">next</div><div class="vbox-prev">prev</div></div>',t("body").append(f),h=t(".vbox-overlay"),c=t(".vbox-container"),p=t(".vbox-content"),L=t(".vbox-num"),H=t(".vbox-title"),p.html(""),p.css("opacity","0"),m(),h.css({opacity:"1","min-height":t(window).outerHeight()+130}),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)?d.css({position:"fixed",top:v,opacity:"0"}).data("top",v):(d.css({position:"fixed",top:v}).data("top",v),t(window).scrollTop(0)),h.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){h.css({"min-height":t(window).outerHeight(),height:"auto"}),"iframe"==l.data("type")?i():"inline"==l.data("type")?s():"ajax"==l.data("type")?e():"vimeo"==l.data("type")?o():"youtube"==l.data("type")?n():(p.html('<img src="'+u+'">'),a())}),t("body").keydown(function(r){P||(37==r.keyCode&&1==j&&(P=!0,w=E.data("framewidth"),$=E.data("frameheight"),x=E.data("border"),C=E.data("bgcolor"),u=E.attr("href"),D=E.attr("title")?E.attr("title"):"",h.css("min-height",t(window).outerHeight()+130),p.animate({opacity:0},500,function(){h.css("min-height",t(window).outerHeight()),"iframe"==E.data("type")?i():"inline"==E.data("type")?s():"ajax"==E.data("type")?e():"youtube"==E.data("type")?n():"vimeo"==E.data("type")?o():(p.html('<img src="'+u+'">'),a()),l=E,m(),P=!1})),39==r.keyCode&&1==S&&(P=!0,w=k.data("framewidth"),$=k.data("frameheight"),x=k.data("border"),C=k.data("bgcolor"),u=k.attr("href"),D=k.attr("title")?k.attr("title"):"",h.css("min-height",t(window).outerHeight()+130),p.animate({opacity:0},500,function(){h.css("min-height",t(window).outerHeight()),"iframe"==k.data("type")?i():"inline"==k.data("type")?s():"ajax"==k.data("type")?e():"youtube"==k.data("type")?n():"vimeo"==k.data("type")?o():(p.html('<img src="'+u+'">'),a()),l=k,m(),P=!1})))}),t(".vbox-next").click(function(){w=k.data("framewidth"),$=k.data("frameheight"),x=k.data("border"),C=k.data("bgcolor"),u=k.attr("href"),D=k.attr("title")?k.attr("title"):"",h.css("min-height",t(window).outerHeight()+130),p.animate({opacity:0},500,function(){h.css("min-height",t(window).outerHeight()),"iframe"==k.data("type")?i():"inline"==k.data("type")?s():"ajax"==k.data("type")?e():"youtube"==k.data("type")?n():"vimeo"==k.data("type")?o():(p.html('<img src="'+u+'">'),a()),l=k,m()})}),t(".vbox-prev").click(function(){w=E.data("framewidth"),$=E.data("frameheight"),x=E.data("border"),C=E.data("bgcolor"),u=E.attr("href"),D=E.attr("title")?E.attr("title"):"",h.css("min-height",t(window).outerHeight()+130),p.animate({opacity:0},500,function(){h.css("min-height",t(window).outerHeight()),"iframe"==E.data("type")?i():"inline"==E.data("type")?s():"ajax"==E.data("type")?e():"youtube"==E.data("type")?n():"vimeo"==E.data("type")?o():(p.html('<img src="'+u+'">'),a()),l=E,m()})}),t(".vbox-close, .vbox-overlay").click(function(e){W=".figlio",Q=".vbox-prev",F=".vbox-next",O=".figlio *",t(e.target).is(W)||t(e.target).is(F)||t(e.target).is(Q)||t(e.target).is(O)||(h.css("opacity","0"),h.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){h.remove(),navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)?(t(".vwrap").css("opacity","1"),t(".vwrap").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){t(".vwrap").children().unwrap(),t(window).scrollTop(-v)})):(t(".vwrap").children().unwrap(),t(window).scrollTop(-v)),P=!1}))}),!1})})}}),t(window).resize(function(){l()})}(jQuery),/*
 * Lazy Load - jQuery plugin for lazy loading images
 *
 * Copyright (c) 2007-2013 Mika Tuupola
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Project home:
 *   http://www.appelsiini.net/projects/lazyload
 *
 * Version:  1.9.3
 *
 */
function(t,e,i,o){var n=t(e);t.fn.lazyload=function(s){function a(){var e=0;l.each(function(){var i=t(this);if(!h.skip_invisible||i.is(":visible"))if(t.abovethetop(this,h)||t.leftofbegin(this,h));else if(t.belowthefold(this,h)||t.rightoffold(this,h)){if(++e>h.failure_limit)return!1}else i.trigger("appear"),e=0})}var r,l=this,h={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return s&&(o!==s.failurelimit&&(s.failure_limit=s.failurelimit,delete s.failurelimit),o!==s.effectspeed&&(s.effect_speed=s.effectspeed,delete s.effectspeed),t.extend(h,s)),r=h.container===o||h.container===e?n:t(h.container),0===h.event.indexOf("scroll")&&r.bind(h.event,function(){return a()}),this.each(function(){var e=this,i=t(e);e.loaded=!1,(i.attr("src")===o||i.attr("src")===!1)&&i.is("img")&&i.attr("src",h.placeholder),i.one("appear",function(){if(!this.loaded){if(h.appear){var o=l.length;h.appear.call(e,o,h)}t("<img />").bind("load",function(){var o=i.attr("data-"+h.data_attribute);i.hide(),i.is("img")?i.attr("src",o):i.css("background-image","url('"+o+"')"),i[h.effect](h.effect_speed),e.loaded=!0;var n=t.grep(l,function(t){return!t.loaded});if(l=t(n),h.load){var s=l.length;h.load.call(e,s,h)}}).attr("src",i.attr("data-"+h.data_attribute))}}),0!==h.event.indexOf("scroll")&&i.bind(h.event,function(){e.loaded||i.trigger("appear")})}),n.bind("resize",function(){a()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&l.each(function(){t(this).trigger("appear")})}),t(i).ready(function(){a()}),this},t.belowthefold=function(i,s){var a;return a=s.container===o||s.container===e?(e.innerHeight?e.innerHeight:n.height())+n.scrollTop():t(s.container).offset().top+t(s.container).height(),a<=t(i).offset().top-s.threshold},t.rightoffold=function(i,s){var a;return a=s.container===o||s.container===e?n.width()+n.scrollLeft():t(s.container).offset().left+t(s.container).width(),a<=t(i).offset().left-s.threshold},t.abovethetop=function(i,s){var a;return a=s.container===o||s.container===e?n.scrollTop():t(s.container).offset().top,a>=t(i).offset().top+s.threshold+t(i).height()},t.leftofbegin=function(i,s){var a;return a=s.container===o||s.container===e?n.scrollLeft():t(s.container).offset().left,a>=t(i).offset().left+s.threshold+t(i).width()},t.inviewport=function(e,i){return!(t.rightoffold(e,i)||t.leftofbegin(e,i)||t.belowthefold(e,i)||t.abovethetop(e,i))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document);
;