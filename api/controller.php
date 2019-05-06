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

     public static function getCharactersFullInfo($queryParams, $requestBody)
     {
          global $services;
          return $services->getCharactersFullInfo();
     }

     public static function test1($queryParams, $requestBody)
     {
          global $services;
          return $services->xxx();
     }
}



?>