<?php
namespace CharCards;
require_once('routes.php');


$routeManager = RouteManager::getInstance();

class RouteManager {

     private static $_instance;

     function __construct() {
          global $routes;

          print("Utworzono RouteManager\n");

          print(json_encode($routes));

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