<?php 
use \Firebase\JWT\JWT;
// https://github.com/firebase/php-jwt


class JWTAuth {

     static function getToken($token) {
          return JWT::encode($token, JWT_KEY);
     }


     static function decodeToken($jwt) {
          return JWT::decode($jwt, JWT_KEY, array('HS256'));
     }

}


?>