'use strict';

/**
 * module menuMobile
 */
angular.module('menuMobile', [])
    .run(['$rootScope', '$menuMobile', function ($rootScope, $menuMobile) {
        $rootScope.$menuMobile = $menuMobile;
    }])
    .provider('$menuMobile', function () {
        this.$get = [function () {
            var menu = {};
            var $body = angular.element('body');

            menu.show = function show() {
                $body.addClass('menu-open');
            };

            menu.hide = function hide() {
                $body.removeClass('menu-open');
            };

            menu.toggle = function toggle() {
                $body.toggleClass('menu-open');
            };

            return menu;
        }];
    });
