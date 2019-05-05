<?php
namespace CharCards;
$routes = [];

new Route("GET", "/test1");
new Route("GET", "/test2");

new Route("POST", "/test1");




class Route {
     function __construct($method, $endpoint) {
          global $routes;


          array_push($routes, [$method, $endpoint]);
     }
}

?>