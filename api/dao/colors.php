<?php
namespace DAO;
class ColorsDAO {

     private $id;
     private $character_id;

     function __construct() {
          $this->outfit_1 = $this->outfit_1 ? "#" . $this->outfit_1 : null;
          $this->outfit_2 = $this->outfit_2 ? "#" . $this->outfit_2 : null;
          $this->outfit_3 = $this->outfit_3 ? "#" . $this->outfit_3 : null;
          $this->skin = $this->skin ? "#" . $this->skin : null;
          $this->hair = $this->hair ? "#" . $this->hair : null;
          $this->eye_1 = $this->eye_1 ? "#" . $this->eye_1 : null;
          $this->eye_2 = $this->eye_2 ? "#" . $this->eye_2 : null;
     }

}

?>