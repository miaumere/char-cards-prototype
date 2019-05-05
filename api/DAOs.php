<?php


class char_enity_DAO {
     public $id;
     public $name;
     public $profilePic;
     

     function __construct($id, $imie, $nazwisko, $profilePic) {
          $this->id = $id;
          $this->name = $imie. " ". $nazwisko;

          // $this->profilePic = base64_encode($profilePic);
     }
}


//DataBase DAO's
class postacie_enity_DAO {
     public $id;
     public $imie;
     // public $nazwisko;
     // public $birthday;
     // public $death;
     // public $osobowosc_mbti;
     // public $opis_wygladu;
     // public $historia;

     public function __construct($id = 0)
     {
       if (!$this->id)
       {
          $this->id = $id ;
       }
     }
}

class kolory_enity_DAO {
     private $id;
     private $id_postaci;
}

class temperament_enity_DAO {
     private $id;
     private $id_postaci;
}

class waga_enity_DAO {
     private $id;
     private $id_postaci;
}

class wzrost_enity_DAO {
     private $id;
     private $id_postaci;
}


?>