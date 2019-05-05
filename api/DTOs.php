<?php

class Error_DTO {

     public $error;

     function __construct($msg) {
          $this->error = $msg;
     }

}



class profilePics_DTO {

     public $profilePics;

}



//Char details REST DTO
class CharDetails_REST_DTO {

     public $mainInfo;
     public $profilePics;
     public $kolory;
     public $temperament;
     public $waga;
     public $wzrost;
     public $cytaty;
     public $ciekawostki;

     function __construct($postacie_enity_DAO, $profilePics, $kolory_enity_DAO, $temperament_enity_DAO, $waga_enity_DAO, $wzrost_enity_DAO, $cytaty_enity_DAO, $ciekawostki_enity_DAO) {
          $this->mainInfo = $postacie_enity_DAO;
          $this->kolory = $kolory_enity_DAO;
          $this->temperament = $temperament_enity_DAO;
          $this->waga = $waga_enity_DAO;
          $this->wzrost = $wzrost_enity_DAO;
          $this->cytaty = $cytaty_enity_DAO;
          $this->ciekawostki = $ciekawostki_enity_DAO;

          $this->validateDeath();
     }


     function validateDeath() {
          if($this->mainInfo->death == "") {
               $this->mainInfo->death = false;
          }
     
     }

}



?>