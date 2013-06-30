/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-boxshadow-cssclasses-testprop-testallprops-domprefixes
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.boxshadow=function(){return D("boxShadow")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document);;
// syze v1.1.1 MIT/GPL2 @rezitech
(function(a,b){function j(){var f=/^device$/i.test(String(e))?!a.orientation||orientation==180?screen.width:screen.height:/^browser$/i.test(String(e))?b.clientWidth:e instanceof String?Function("return "+e)():parseInt(e,10)||0,h=b.className.replace(/^\s+|(^|\s)(gt|is|lt)[^\s]+|\s+$/g,"").split(/\s+/),i=[],j=-1,k,l=c,m=l.length;l.sort(function(a,b){return a-b});while(++j<m)if(f<l[j])break;f=l[Math.max(Math.min(--j,m-1),0)];j=-1;while(++j<m){i.push((f>l[j]?"gt":f<l[j]?"lt":"is")+(d[l[j]]||l[j]))}b.className=(!h[0]?[]:h).concat(i).join(" ");if(g)g(f)}function i(a){var b;return function(){function e(){a.apply(c,d);b=null}var c=this,d=arguments;if(b)clearTimeout(b);b=setTimeout(e,f)}}function h(b,c){if(a.addEventListener)addEventListener(b,c,false);else attachEvent("on"+b,c)}var c=[],d={},e="browser",f=50,g;a.syze={sizes:function(a){c=[].concat.apply([],arguments);j();return this},names:function(a){if(a instanceof Object){d=a;j()}return this},from:function(a){e=a;j();return this},debounceRate:function(a){f=parseInt(a,10)||0;j();return this},callback:function(a){if(a instanceof Function){g=a;j()}return this}};h("resize",i(j));h("orientationchange",j);j()})(this,document.documentElement);
/* jQuery SelectBox - https://github.com/claviska/jquery-selectBox */
if(jQuery)(function($){$.extend($.fn,{selectBox:function(method,data){var typeTimer,typeSearch='',isMac=navigator.platform.match(/mac/i);var init=function(select,data){var options;if(navigator.userAgent.match(/iPad|iPhone|Android|IEMobile|BlackBerry/i))return false;if(select.tagName.toLowerCase()!=='select')return false;select=$(select);if(select.data('selectBox-control'))return false;var control=$('<a class="selectBox" />'),inline=select.attr('multiple')||parseInt(select.attr('size'))>1;var settings=data||{};control.width(select.outerWidth()).addClass(select.attr('class')).attr('title',select.attr('title')||'').attr('tabindex',parseInt(select.attr('tabindex'))).css('display','inline-block').bind('focus.selectBox',function(){if(this!==document.activeElement&&document.body!==document.activeElement)$(document.activeElement).blur();if(control.hasClass('selectBox-active'))return;control.addClass('selectBox-active');select.trigger('focus')}).bind('blur.selectBox',function(){if(!control.hasClass('selectBox-active'))return;control.removeClass('selectBox-active');select.trigger('blur')});if(!$(window).data('selectBox-bindings')){$(window).data('selectBox-bindings',true).bind('scroll.selectBox',hideMenus).bind('resize.selectBox',hideMenus)}if(select.attr('disabled'))control.addClass('selectBox-disabled');select.bind('click.selectBox',function(event){control.focus();event.preventDefault()});if(inline){options=getOptions(select,'inline');control.append(options).data('selectBox-options',options).addClass('selectBox-inline selectBox-menuShowing').bind('keydown.selectBox',function(event){handleKeyDown(select,event)}).bind('keypress.selectBox',function(event){handleKeyPress(select,event)}).bind('mousedown.selectBox',function(event){if($(event.target).is('A.selectBox-inline'))event.preventDefault();if(!control.hasClass('selectBox-focus'))control.focus()}).insertAfter(select);if(!select[0].style.height){var size=select.attr('size')?parseInt(select.attr('size')):5;var tmp=control.clone().removeAttr('id').css({position:'absolute',top:'-9999em'}).show().appendTo('body');tmp.find('.selectBox-options').html('<li><a>\u00A0</a></li>');var optionHeight=parseInt(tmp.find('.selectBox-options A:first').html('&nbsp;').outerHeight());tmp.remove();control.height(optionHeight*size)}disableSelection(control)}else{var label=$('<span class="selectBox-label" />'),arrow=$('<span class="selectBox-arrow" />');label.attr('class',getLabelClass(select)).text(getLabelText(select));options=getOptions(select,'dropdown');options.appendTo('BODY');control.data('selectBox-options',options).addClass('selectBox-dropdown').append(label).append(arrow).bind('mousedown.selectBox',function(event){if(control.hasClass('selectBox-menuShowing')){hideMenus()}else{event.stopPropagation();options.data('selectBox-down-at-x',event.screenX).data('selectBox-down-at-y',event.screenY);showMenu(select)}}).bind('keydown.selectBox',function(event){handleKeyDown(select,event)}).bind('keypress.selectBox',function(event){handleKeyPress(select,event)}).bind('open.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;showMenu(select)}).bind('close.selectBox',function(event,triggerData){if(triggerData&&triggerData._selectBox===true)return;hideMenus()}).insertAfter(select);var labelWidth=control.width()-arrow.outerWidth()-parseInt(label.css('paddingLeft'))-parseInt(label.css('paddingLeft'));label.width(labelWidth);disableSelection(control)}select.addClass('selectBox').data('selectBox-control',control).data('selectBox-settings',settings).hide()};var getOptions=function(select,type){var options;var _getOptions=function(select,options){select.children('OPTION, OPTGROUP').each(function(){if($(this).is('OPTION')){if($(this).length>0){generateOptions($(this),options)}else{options.append('<li>\u00A0</li>')}}else{var optgroup=$('<li class="selectBox-optgroup" />');optgroup.text($(this).attr('label'));options.append(optgroup);options=_getOptions($(this),options)}});return options};switch(type){case'inline':options=$('<ul class="selectBox-options" />');options=_getOptions(select,options);options.find('A').bind('mouseover.selectBox',function(event){addHover(select,$(this).parent())}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent())}).bind('mousedown.selectBox',function(event){event.preventDefault();if(!select.selectBox('control').hasClass('selectBox-active'))select.selectBox('control').focus()}).bind('mouseup.selectBox',function(event){hideMenus();selectOption(select,$(this).parent(),event)});disableSelection(options);return options;case'dropdown':options=$('<ul class="selectBox-dropdown-menu selectBox-options" />');options=_getOptions(select,options);options.data('selectBox-select',select).css('display','none').appendTo('BODY').find('A').bind('mousedown.selectBox',function(event){event.preventDefault();if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y');hideMenus()}}).bind('mouseup.selectBox',function(event){if(event.screenX===options.data('selectBox-down-at-x')&&event.screenY===options.data('selectBox-down-at-y')){return}else{options.removeData('selectBox-down-at-x').removeData('selectBox-down-at-y')}selectOption(select,$(this).parent());hideMenus()}).bind('mouseover.selectBox',function(event){addHover(select,$(this).parent())}).bind('mouseout.selectBox',function(event){removeHover(select,$(this).parent())});var classes=select.attr('class')||'';if(classes!==''){classes=classes.split(' ');for(var i in classes)options.addClass(classes[i]+'-selectBox-dropdown-menu')}disableSelection(options);return options}};var getLabelClass=function(select){var selected=$(select).find('OPTION:selected');return('selectBox-label '+(selected.attr('class')||'')).replace(/\s+$/,'')};var getLabelText=function(select){var selected=$(select).find('OPTION:selected');return selected.text()||'\u00A0'};var setLabel=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;control.find('.selectBox-label').attr('class',getLabelClass(select)).text(getLabelText(select))};var destroy=function(select){select=$(select);var control=select.data('selectBox-control');if(!control)return;var options=control.data('selectBox-options');options.remove();control.remove();select.removeClass('selectBox').removeData('selectBox-control').data('selectBox-control',null).removeData('selectBox-settings').data('selectBox-settings',null).show()};var refresh=function(select){select=$(select);select.selectBox('options',select.html())};var showMenu=function(select){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings'),options=control.data('selectBox-options');if(control.hasClass('selectBox-disabled'))return false;hideMenus();var borderBottomWidth=isNaN(control.css('borderBottomWidth'))?0:parseInt(control.css('borderBottomWidth'));options.width(control.innerWidth()).css({top:control.offset().top+control.outerHeight()-borderBottomWidth,left:control.offset().left});if(select.triggerHandler('beforeopen'))return false;var dispatchOpenEvent=function(){select.triggerHandler('open',{_selectBox:true})};switch(settings.menuTransition){case'fade':options.fadeIn(settings.menuSpeed,dispatchOpenEvent);break;case'slide':options.slideDown(settings.menuSpeed,dispatchOpenEvent);break;default:options.show(settings.menuSpeed,dispatchOpenEvent);break}if(!settings.menuSpeed)dispatchOpenEvent();var li=options.find('.selectBox-selected:first');keepOptionInView(select,li,true);addHover(select,li);control.addClass('selectBox-menuShowing');$(document).bind('mousedown.selectBox',function(event){if($(event.target).parents().andSelf().hasClass('selectBox-options'))return;hideMenus()})};var hideMenus=function(){if($(".selectBox-dropdown-menu:visible").length===0)return;$(document).unbind('mousedown.selectBox');$(".selectBox-dropdown-menu").each(function(){var options=$(this),select=options.data('selectBox-select'),control=select.data('selectBox-control'),settings=select.data('selectBox-settings');if(select.triggerHandler('beforeclose'))return false;var dispatchCloseEvent=function(){select.triggerHandler('close',{_selectBox:true})};if(settings){switch(settings.menuTransition){case'fade':options.fadeOut(settings.menuSpeed,dispatchCloseEvent);break;case'slide':options.slideUp(settings.menuSpeed,dispatchCloseEvent);break;default:options.hide(settings.menuSpeed,dispatchCloseEvent);break}if(!settings.menuSpeed)dispatchCloseEvent();control.removeClass('selectBox-menuShowing')}else{$(this).hide();$(this).triggerHandler('close',{_selectBox:true});$(this).removeClass('selectBox-menuShowing')}})};var selectOption=function(select,li,event){select=$(select);li=$(li);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings');if(control.hasClass('selectBox-disabled'))return false;if(li.length===0||li.hasClass('selectBox-disabled'))return false;if(select.attr('multiple')){if(event.shiftKey&&control.data('selectBox-last-selected')){li.toggleClass('selectBox-selected');var affectedOptions;if(li.index()>control.data('selectBox-last-selected').index()){affectedOptions=li.siblings().slice(control.data('selectBox-last-selected').index(),li.index())}else{affectedOptions=li.siblings().slice(li.index(),control.data('selectBox-last-selected').index())}affectedOptions=affectedOptions.not('.selectBox-optgroup, .selectBox-disabled');if(li.hasClass('selectBox-selected')){affectedOptions.addClass('selectBox-selected')}else{affectedOptions.removeClass('selectBox-selected')}}else if((isMac&&event.metaKey)||(!isMac&&event.ctrlKey)){li.toggleClass('selectBox-selected')}else{li.siblings().removeClass('selectBox-selected');li.addClass('selectBox-selected')}}else{li.siblings().removeClass('selectBox-selected');li.addClass('selectBox-selected')}if(control.hasClass('selectBox-dropdown')){control.find('.selectBox-label').text(li.text())}var i=0,selection=[];if(select.attr('multiple')){control.find('.selectBox-selected A').each(function(){selection[i++]=$(this).attr('rel')})}else{selection=li.find('A').attr('rel')}control.data('selectBox-last-selected',li);if(select.val()!==selection){select.val(selection);setLabel(select);select.trigger('change')}return true};var addHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover');li.addClass('selectBox-hover')};var removeHover=function(select,li){select=$(select);li=$(li);var control=select.data('selectBox-control'),options=control.data('selectBox-options');options.find('.selectBox-hover').removeClass('selectBox-hover')};var keepOptionInView=function(select,li,center){if(!li||li.length===0)return;select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),scrollBox=control.hasClass('selectBox-dropdown')?options:options.parent(),top=parseInt(li.offset().top-scrollBox.position().top),bottom=parseInt(top+li.outerHeight());if(center){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop()-(scrollBox.height()/2))}else{if(top<0){scrollBox.scrollTop(li.offset().top-scrollBox.offset().top+scrollBox.scrollTop())}if(bottom>scrollBox.height()){scrollBox.scrollTop((li.offset().top+li.outerHeight())-scrollBox.offset().top+scrollBox.scrollTop()-scrollBox.height())}}};var handleKeyDown=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options'),settings=select.data('selectBox-settings'),totalOptions=0,i=0;if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 8:event.preventDefault();typeSearch='';break;case 9:case 27:hideMenus();removeHover(select);break;case 13:if(control.hasClass('selectBox-menuShowing')){selectOption(select,options.find('LI.selectBox-hover:first'),event);if(control.hasClass('selectBox-dropdown'))hideMenus()}else{showMenu(select)}break;case 38:case 37:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){var prev=options.find('.selectBox-hover').prev('LI');totalOptions=options.find('LI:not(.selectBox-optgroup)').length;i=0;while(prev.length===0||prev.hasClass('selectBox-disabled')||prev.hasClass('selectBox-optgroup')){prev=prev.prev('LI');if(prev.length===0){if(settings.loopOptions){prev=options.find('LI:last')}else{prev=options.find('LI:first')}}if(++i>=totalOptions)break}addHover(select,prev);selectOption(select,prev,event);keepOptionInView(select,prev)}else{showMenu(select)}break;case 40:case 39:event.preventDefault();if(control.hasClass('selectBox-menuShowing')){var next=options.find('.selectBox-hover').next('LI');totalOptions=options.find('LI:not(.selectBox-optgroup)').length;i=0;while(next.length===0||next.hasClass('selectBox-disabled')||next.hasClass('selectBox-optgroup')){next=next.next('LI');if(next.length===0){if(settings.loopOptions){next=options.find('LI:first')}else{next=options.find('LI:last')}}if(++i>=totalOptions)break}addHover(select,next);selectOption(select,next,event);keepOptionInView(select,next)}else{showMenu(select)}break}};var handleKeyPress=function(select,event){select=$(select);var control=select.data('selectBox-control'),options=control.data('selectBox-options');if(control.hasClass('selectBox-disabled'))return;switch(event.keyCode){case 9:case 27:case 13:case 38:case 37:case 40:case 39:break;default:if(!control.hasClass('selectBox-menuShowing'))showMenu(select);event.preventDefault();clearTimeout(typeTimer);typeSearch+=String.fromCharCode(event.charCode||event.keyCode);options.find('A').each(function(){if($(this).text().substr(0,typeSearch.length).toLowerCase()===typeSearch.toLowerCase()){addHover(select,$(this).parent());keepOptionInView(select,$(this).parent());return false}});typeTimer=setTimeout(function(){typeSearch=''},1000);break}};var enable=function(select){select=$(select);select.attr('disabled',false);var control=select.data('selectBox-control');if(!control)return;control.removeClass('selectBox-disabled')};var disable=function(select){select=$(select);select.attr('disabled',true);var control=select.data('selectBox-control');if(!control)return;control.addClass('selectBox-disabled')};var setValue=function(select,value){select=$(select);select.val(value);value=select.val();if(value===null){value=select.children().first().val();select.val(value)}var control=select.data('selectBox-control');if(!control)return;var settings=select.data('selectBox-settings'),options=control.data('selectBox-options');setLabel(select);options.find('.selectBox-selected').removeClass('selectBox-selected');options.find('A').each(function(){if(typeof(value)==='object'){for(var i=0;i<value.length;i++){if($(this).attr('rel')==value[i]){$(this).parent().addClass('selectBox-selected')}}}else{if($(this).attr('rel')==value){$(this).parent().addClass('selectBox-selected')}}});if(settings.change)settings.change.call(select)};var setOptions=function(select,options){select=$(select);var control=select.data('selectBox-control'),settings=select.data('selectBox-settings');switch(typeof(data)){case'string':select.html(data);break;case'object':select.html('');for(var i in data){if(data[i]===null)continue;if(typeof(data[i])==='object'){var optgroup=$('<optgroup label="'+i+'" />');for(var j in data[i]){optgroup.append('<option value="'+j+'">'+data[i][j]+'</option>')}select.append(optgroup)}else{var option=$('<option value="'+i+'">'+data[i]+'</option>');select.append(option)}}break}if(!control)return;control.data('selectBox-options').remove();var type=control.hasClass('selectBox-dropdown')?'dropdown':'inline';options=getOptions(select,type);control.data('selectBox-options',options);switch(type){case'inline':control.append(options);break;case'dropdown':setLabel(select);$("BODY").append(options);break}};var disableSelection=function(selector){$(selector).css('MozUserSelect','none').bind('selectstart',function(event){event.preventDefault()})};var generateOptions=function(self,options){var li=$('<li />'),a=$('<a />');li.addClass(self.attr('class'));li.data(self.data());a.attr('rel',self.val()).text(self.text());li.append(a);if(self.attr('disabled'))li.addClass('selectBox-disabled');if(self.attr('selected'))li.addClass('selectBox-selected');options.append(li)};switch(method){case'control':return $(this).data('selectBox-control');case'settings':if(!data)return $(this).data('selectBox-settings');$(this).each(function(){$(this).data('selectBox-settings',$.extend(true,$(this).data('selectBox-settings'),data))});break;case'options':if(data===undefined)return $(this).data('selectBox-control').data('selectBox-options');$(this).each(function(){setOptions(this,data)});break;case'value':if(data===undefined)return $(this).val();$(this).each(function(){setValue(this,data)});break;case'refresh':$(this).each(function(){refresh(this)});break;case'enable':$(this).each(function(){enable(this)});break;case'disable':$(this).each(function(){disable(this)});break;case'destroy':$(this).each(function(){destroy(this)});break;default:$(this).each(function(){init(this,method)});break}return $(this)}})})(jQuery);;
syze.sizes(320, 480, 935);

jQuery(document).ready(function($){

  'use strict';

  var attach_selectBox = function(){
    $('#views-exposed-form-commons-homepage-content-panel-pane-1 select, #edit-custom-search-types, #quicktabs-commons_bw select, .views-exposed-widgets select').selectBox();
  };

  var set_follow_checkboxes = function(){
    $('#quicktabs-commons_follow_ui .flag-email-group a, #quicktabs-commons_follow_ui .flag-email-node a, #quicktabs-commons_follow_ui .flag-email-user a, #quicktabs-commons_follow_ui .flag-email-term a').each(function(){
      var a_target = $(this).addClass('formatted-as-checkbox');

      if (a_target.children('span').length === 0) {
        a_target.wrapInner('<span></span>');
      }

      if (a_target.hasClass('flag-action') && a_target.children('input').length === 0) {
        a_target.prepend('<input type="checkbox">');
      } else if (a_target.children('input').length === 0) {
        a_target.prepend('<input type="checkbox" checked>');
      }
    });
  };

  $('.views-exposed-widgets .form-select, .custom-search-selector').wrap('<div class="form-select-wrapper" />');

  $(document).delegate('.views-exposed-widgets .form-select', 'change', function() {
    $('.views-exposed-widgets').addClass('widget-changed');
  });

  $(document).delegate('.views-exposed-widgets .form-select', 'click', function() {
    $('.views-exposed-widgets').addClass('widgets-active');
  });

  //placeholder functionality
  $('#block-system-main-menu .menu-depth-1 a').append("<div class='arrow'></div>");

  $('.commons-bw-create-choose').click(function(){
    $('body').addClass('create-choose-open');
  });

  $('.commons-bw-create-choose-bg').click(function(){
    $('body').removeClass('create-choose-open');
  });

  $('.page-node-add #edit-additional-settings').css('top', ($('.page-node-add .field-type-taxonomy-term-reference-form').height() + 15));

  attach_selectBox();
  set_follow_checkboxes();

  $(document).ajaxComplete(function(){
    attach_selectBox();
    set_follow_checkboxes();
  });
});

(function ($) {

  /**
   * Define a variable height on fieldsets to accommodate multi-line layouts.
   */
  Drupal.behaviors.collapsibleHeight = {
    attach: function (context, settings) {
      $('fieldset.collapsible', context).once('collapsibleHeight', function () {
        var $fieldset = $(this),
            $minHeight = $fieldset.find('legend').height();

        $fieldset.css('min-height', $minHeight + 'px');

        // Adjust the height on window resize.
        $(window).resize(function () {
          var $minHeight = $fieldset.find('legend').height();
          $fieldset.css('min-height', $minHeight + 'px');
        });
      });
    }
  }

  /**
   * Make an item follow the page when an item is in view.
   */
  function showWithElement(tracker, leader) {
    if ($(leader).length > 0) {
      var top = $(leader).offset().top,
          bottom = $(leader).innerHeight() + top,
          trackerHeight = $(tracker).innerHeight();
          position = $(document).scrollTop();

      // Make sure the tracker parent stays aligned with the leader.
      $(tracker).parent().css('top', top);

      // Keep the trigger visible when the leader is in view.
      if (top < position && (bottom - trackerHeight) > position && !$(tracker).hasClass('following')) {
        $(tracker).addClass('following').css('top', $('.region-page-top').offset().top);
      }
      else if ((top >= position || (bottom - trackerHeight) <= position) && $(tracker).hasClass('following')) {
        $(tracker).removeClass('following').css('top', '');
      }
    }
  }

  /**
   * Collapse the filter options for search.
   */
  Drupal.behaviors.filterDrawer = {
    attach: function (context, settings) {
      $('.page-search .region-two-33-66-first, .page-events .region-three-25-50-25-first', context).once('filterDrawer', function () {
        var filters = $(this),
            filterTrigger = $('<a/>', {'href': '#filter-drawer', 'class': 'filter-trigger', 'id': 'filter-drawer'}).text(Drupal.t('Filter results')),
            filterOverlay = $('<div/>', {'class': 'filter-overlay'}),
            results = $('.search-results-content, .pane-search-result');
            size = $(window).width(),
            triggerWidth = '';

        // Only function if there are filters available.
        if (filters.find('.panel-pane').length > 0) {
          // Determine if the page is for search or events and set the target
          // width.
          if ($('.page-search', context).length > 0) {
            triggerWidth = 480;
          }
          else if ($('.page-events', context).length > 0) {
            triggerWidth = 768;
          }

          // Add process flags and styling elements.
          $(this).prepend(filterTrigger).addClass('filters-processed');
          $('body').append(filterOverlay);

          // Make sure the trigger is in place on the initial page load.
          if (size <= triggerWidth) {
            showWithElement(filterTrigger, results);
          }

          // Define the clickable areas to control the visibility of the filters.
          $(filterTrigger).click(function () {
            if ($(filterTrigger).hasClass('following')) {
              $(filterTrigger).removeClass('following');
            }
            $(filters).toggleClass('expanded');
            $(filterOverlay).toggleClass('expanded');

            if ($(filters).hasClass('expanded')) {
              $('html, body').animate({
                scrollTop: $(filterTrigger).offset().top - $('.region-page-top').offset().top
              }, 0);
            }

            return false;
          });
          $(filterOverlay).click(function () {
            $(filters).toggleClass('expanded');
            $(filterOverlay).toggleClass('expanded');
            showWithElement(filterTrigger, results);
          });

          // Make the filterToggle follow the search results when scrolling and
          // resizing.
          $(window).resize(function () {
            size = $(window).width();
            if (size <= triggerWidth) {
              showWithElement(filterTrigger, results);
            }
            else {
              $(filters).css('top', '').removeClass('expanded');
              $(filterOverlay).removeClass('expanded');
            }
          });
          $(document).scroll(function () {
            if (!$(filters).hasClass('expanded')) {
              showWithElement(filterTrigger, results);
            }
          });
        }
      });
    }
  }
})(jQuery);
;
