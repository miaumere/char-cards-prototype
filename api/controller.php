<?php

require_once('services.php');


class Controller
{
     public static function main($queryParams, $requestBody)
     {
          return "!!!";
     }

     public static function getCharacters($queryParams, $requestBody)
     {
          global $services;
          return $services->getCharsList();
     }



     public static function getCharacter($queryParams, $requestBody)
     {
          
          if(property_exists($queryParams, 'id') && $queryParams->id && (int)$queryParams->id !== 0) {

               global $services;
        
               return $services->getCharDetails($queryParams->id);

          } else {
       
               throw new Exception("Missing or incorrect ID param");

          }

     }


     public static function getCharactersFullInfo($queryParams, $requestBody)
     {
          global $services;
          return $services->getCharactersFullInfo();
     }


     public static function login($queryParams, $requestBody)
     {
          $parsedRequestBody = json_decode($requestBody);
          if(!$parsedRequestBody || ($parsedRequestBody && !isset($parsedRequestBody->user) || !isset($parsedRequestBody->pass))) {
               new HTTPError(401, "Niepoprawne dane logowania");
          }

          global $services;
          return $services->login($parsedRequestBody->user, $parsedRequestBody->pass);
     }


     public static function relogin($queryParams, $requestBody) {
          global $services;
          return $services->relogin(isset($_COOKIE['auth']) ? $_COOKIE['auth'] : null);
     }


     public static function protected($queryParams, $requestBody) {
          global $services;
          return $services->protected();
     }

}



?>