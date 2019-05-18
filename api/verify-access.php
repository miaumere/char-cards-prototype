<?php 

function verifyAccess() {

     $jwtObjDecoded = null;

     $jwtCookie = isset($_COOKIE['auth']) ? $_COOKIE['auth'] : null;

     $authorizationHeader = null;
     foreach (getallheaders() as $name => $value) {

          if($name === "Authorization") {
               $authorizationHeader = str_replace("Bearer ", "", $value);
          };

     }


     if($jwtCookie || $authorizationHeader) {
          $jwtObjDecoded = $jwtCookie ? JWTAuth::decodeToken($jwtCookie) : JWTAuth::decodeToken($authorizationHeader);
          $token = $jwtCookie ? $jwtCookie : $authorizationHeader;
     }


     if($jwtCookie && $authorizationHeader) {
          if($jwtCookie !== $authorizationHeader) {
               new HTTPError(401, "Nie udało się zautoryzować użytkownika - rozbieżność tokenów autoryzacyjnych");
          }
     }

     if($jwtObjDecoded && isset($jwtObjDecoded->exp) && $jwtObjDecoded->exp >= time() ) {

          $jwtObjDecoded->token = $token;
          return $jwtObjDecoded;
     }

     new HTTPError(401, "Nie udało się zautoryzować użytkownika");
}

?>