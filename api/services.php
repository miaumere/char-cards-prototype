<?php

$services = Services::getInstance();

class Services {
     private static $_instance;
     private $_conn;

     function __construct() {

          // Create connection
          $this->_conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

          // Check connection
          if ($this->_conn->connect_error) {
               throw new Exception("Failed connetion to database " . $this->_conn->connect_error);
          } 

          mysqli_set_charset($this->_conn,"utf8");
     }

     private function __clone() {}

     public static function getInstance() {
         if(self::$_instance === null) {
             self::$_instance = new Services();
         }
         return self::$_instance;
     }

     public function xxx() {
          return "SERVICES!";
     }

     function getCharsList() {
     // SELECT
          $sql_charsList = "SELECT id, name, surname FROM `characters`";
          $result_charsList = mysqli_query($this->_conn, $sql_charsList);

          $result = array();
          if ($sqlResult=mysqli_query($this->_conn, $sql_charsList)) {

               while ($obj=mysqli_fetch_object($sqlResult))
               {
                    array_push($result, $obj);
               }

               // Free result set
               mysqli_free_result($sqlResult);
          }

          return  $result;

     }


     function getCharactersFullInfo() {
          $sql_charsList = "SELECT * FROM `characters`";
          $result_charsList = mysqli_query($this->_conn, $sql_charsList);

          $result = array();

          if ($sqlResult=mysqli_query($this->_conn, $sql_charsList)) {

               while ($obj=mysqli_fetch_object($sqlResult))
               {

                    $obj->temperament = null;


                    $sql_temperament = "SELECT * FROM `temperament` where `character_id` = $obj->id";
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

}

?>