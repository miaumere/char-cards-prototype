<?php

class Error_DTO {

     public $error;

     function __construct($msg) {
          $this->error = $msg;
     }

}



class profilePics_DTO {

     public $profilePics;

     function __construct($dir) {
          $this->profilePics = $this->pics($dir);
     }

     function pics($dir) {

          $pics_list = array();

          if (is_dir($dir) == true) {
                    
               $files = scandir($dir);

               $supported_images = array(
                    'gif',
                    'jpg',
                    'jpeg',
                    'png'
               );

               if(is_array($files)) {
                    foreach ($files as $key => $value) {
                         $ext = strtolower(pathinfo($value, PATHINFO_EXTENSION));
                         if (in_array($ext, $supported_images)) {
                              array_push($pics_list, $value);
                         }
                    }
               }
               return $pics_list;
          } else {
               return $pics_list;
          }

     }
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
          $this->profilePics = $profilePics->profilePics;
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