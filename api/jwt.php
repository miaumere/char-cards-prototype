<?php 
use \Firebase\JWT\JWT;
// https://github.com/firebase/php-jwt


function generateAuthTokenForUser($user) {
     
     if(!$user) {
          new HTTPError(401, "Nie udało się wygenerować tokenu użytkownika");
     }

     $expireTime = time() + (60*60*2) + (60*60*24);

     $token = new stdClass;
     $token->sub = $user;
     $token->exp = $expireTime;

     $jwtToken = JWTAuth::getToken($token);
     setcookie("auth", $jwtToken, $expireTime, '/');

     return $jwtToken;

}


class JWTAuth {

     static function getToken($token) {

          return JWT::encode($token, JWT_KEY);

     }

     static function decodeToken($jwt) {
          $result;
          
          try {


               $result = JWT::decode($jwt, JWT_KEY, array('HS256'));

          } catch (Exception $e) {
               new HTTPError(401, "Wystąpił błąd weryfikacji autentyczności kodu autoryzacyjnego");
          }

          return JWT::decode($jwt, JWT_KEY, array('HS256'));
     }

}


?>