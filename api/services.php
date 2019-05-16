<?php

$services = Services::getInstance();

class Services
{
     private static $_instance;
     private $_conn;

     function __construct()
     {

          // Create connection
          $this->_conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

          // Check connection
          if ($this->_conn->connect_error) {
               throw new Exception("Failed connetion to database " . $this->_conn->connect_error);
          }

          mysqli_set_charset($this->_conn, "utf8");
     }

     private function __clone()
     { }

     public static function getInstance()
     {
          if (self::$_instance === null) {
               self::$_instance = new Services();
          }
          return self::$_instance;
     }

     public function xxx()
     {
          return "SERVICES!";
     }


     function getCharsList()
     {
          // SELECT
          $sql_charsList = "SELECT id, name, surname FROM `characters`;";
          $result_charsList = mysqli_query($this->_conn, $sql_charsList);

          $result = array();
          if ($sqlResult = mysqli_query($this->_conn, $sql_charsList)) {

               while ($obj = mysqli_fetch_object($sqlResult)) {
                    array_push($result, $obj);
               }

               // Free result set
               mysqli_free_result($sqlResult);
          }


          if (empty($result)) {
               return '[]';
          } else {
               return $result;
          }
     }


     function getCharDetails($id)
     {
          // SELECT
          $sql_char = "SELECT * FROM `characters` WHERE id=$id LIMIT 1";
          $result_char = mysqli_query($this->_conn, $sql_char);

          $result = mysqli_fetch_object($result_char, 'DAO\CharDetailsDAO');
          mysqli_free_result($result_char);


          $sql_charTemperament = "SELECT sanguine, spitfire, phlegmatic, melancholy  FROM `temperament` WHERE character_id=$id LIMIT 1;";
          $result_charTemperament = mysqli_query($this->_conn, $sql_charTemperament);
          $resultTemperament = mysqli_fetch_object($result_charTemperament, 'DAO\TemperamentDAO');
          mysqli_free_result($result_charTemperament);
          $result->temperament = $resultTemperament;


          $sql_charQuotes = "SELECT quote, context FROM `quotes` WHERE character_id=$id";
          $result_charQuotes = mysqli_query($this->_conn, $sql_charQuotes);
          $resultQuotes = array();
          if ($sqlResult = mysqli_query($this->_conn, $sql_charQuotes)) {

               while ($obj = mysqli_fetch_object($result_charQuotes)) {
                    array_push($resultQuotes, $obj);
               }

               // Free result set
               mysqli_free_result($result_charQuotes);
          }
          $result->quotes = $resultQuotes;

          $sql_charColors = "SELECT outfit_1, outfit_2, outfit_3, skin, hair FROM `colors` WHERE character_id=$id LIMIT 1;";
          $result_charColors = mysqli_query($this->_conn, $sql_charColors);
          $resultColors = mysqli_fetch_object($result_charColors, 'DAO\ColorsDAO');
          mysqli_free_result($result_charColors);
          $result->colors = $resultColors;

          if (empty($result)) {
               new HTTPError(404, "Not found.");
          } else {
               return $result;
          }
     }


     function getCharactersFullInfo()
     {
          $sql_charsList = "SELECT * FROM `characters`";
          $result_charsList = mysqli_query($this->_conn, $sql_charsList);

          $result = array();

          if ($sqlResult = mysqli_query($this->_conn, $sql_charsList)) {

               while ($obj = mysqli_fetch_object($sqlResult)) {

                    $obj->temperament = null;


                    $sql_temperament = "SELECT * FROM `temperament` where `character_id` = $obj->id;";
                    $result_temperament = mysqli_query($this->_conn, $sql_temperament);

                    $obj->temperament = mysqli_fetch_object($result_temperament);

                    unset($obj->temperament->id);
                    unset($obj->temperament->character_id);
                    array_push($result, $obj);
                    mysqli_free_result($result_temperament);
               }

               // Free result set
               mysqli_free_result($sqlResult);
          }

          return $result;
     }




     function login($user, $pass)
     {
          $md5Pass = md5($pass . DB_PASS_SALT);

          $sql_query_user = "SELECT * FROM `admin_panel_users` WHERE `login`=\"$user\" AND `password`=\"$md5Pass\" LIMIT 1;";
          $query_user = mysqli_query($this->_conn, $sql_query_user);
          $result_user = mysqli_fetch_object($query_user);
          mysqli_free_result($query_user);

          if (empty($result_user)) {
               new HTTPError(401, "Niepoprawne hasło lub nazwa użytkownika");
          } else {
               return generateAuthTokenForUser($user);
          }
     }

     
     function relogin($jwtCookie) {

          verifyAccess();

          if(!$jwtCookie) {
               new HTTPError(401, "Nie udało się przywrócić sesji użytkownika");
          }

          $jwtTokenDecoded = JWTAuth::decodeToken($jwtCookie);
          $jwtToken = generateAuthTokenForUser($jwtTokenDecoded->sub);
          

          $newTokenDecoded = JWTAuth::decodeToken($jwtToken);

          $userInfo = new stdClass;
          $userInfo->user = $newTokenDecoded->sub;

          return $userInfo;
     }
     

     function protected() {
          verifyAccess();

          return "PASSED!";
     }

}
