<?php

$routeManager = RouteManager::getInstance();

class RouteManager {

     private static $_instance;
     public $routes = [];

     function __construct() {
     }

     private function __clone() {}

     public static function getInstance() {
         if(self::$_instance === null) {
             self::$_instance = new RouteManager();
         }
         return self::$_instance;
     }
};




?>