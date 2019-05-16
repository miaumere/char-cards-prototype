<?php 

function verifyAccess() {

     $jwtObj = isset($_COOKIE['auth']) ? JWTAuth::decodeToken($_COOKIE['auth']) : null;

     if($jwtObj && isset($jwtObj->exp) && $jwtObj->exp >= time() ) {
          return true;
     }


     new HTTPError(401, "Nie udało się zautoryzować użytkownika");
}

?>