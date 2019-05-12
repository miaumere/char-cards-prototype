<?php
namespace DAO;
class CharDetailsDAO {

     function __construct() {
          $this->birthday = strtotime($this->birthday);
          $this->death_date = strtotime($this->death_date);
     }

}

?>