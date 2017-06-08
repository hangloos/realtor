(function () {
    'use strict'

    var app = angular.module('codyorr', ['ui.router', 'templates']);

    app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state({
    name: 'home',
    url: '/',
    templateUrl: 'pages/home.html'
  })

  .state({
    name: 'about',
    url: '/about',
    templateUrl: 'pages/about.html'
  })

  .state({
    name: 'blog',
    url: '/blog',
    templateUrl: 'pages/blog.html'
  })

  .state({
    name: 'contact',
    url: '/contact',
    templateUrl: 'pages/contact.html'
  })

  .state({
    name: 'listings',
    url: '/listings',
    templateUrl: 'pages/listings.html'
  })

  .state({
    name: 'mortgage',
    url: '/mortgage',
    templateUrl: 'pages/mortgage.html'
  })

  .state({
    name: 'valuation',
    url: '/valuation',
    templateUrl: 'pages/valuation.html'
  })
   
});


    // angular
    //   .module('codyorr')
    //   .controller('HomeController', HomeController)
    //   function HomeController() {
        
    //   }

  }())