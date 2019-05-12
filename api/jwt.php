<?php 
use \Firebase\JWT\JWT;
// https://github.com/firebase/php-jwt





class JWTAuth {
     static function getLoginToken($user, $pass) {

          $token = new stdClass;
          $token->user = $user;
          $token->pass = $pass;

          return JWT::encode($token, JWT_KEY);
     }


     static function decode($jwt) {

          return JWT::decode($jwt, JWT_KEY, array('HS256'));
     }

}


?>