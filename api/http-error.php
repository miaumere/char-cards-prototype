<?php
class HTTPError {
     function __construct ($statusCode = 500, $message = "Wystąpił błąd.") {

          if($statusCode === 401) {
               setcookie("auth", "", 1, '/');
          }


          header('Content-Type: text/plain');
          header('Content-length: ' . strlen($message));

          http_response_code($statusCode);
          echo $message;
          die();
     }
}
?>