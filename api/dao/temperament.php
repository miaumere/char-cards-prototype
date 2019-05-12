<?php
namespace DAO;
class TemperamentDAO {
 
     function __construct() {
          $this->sanguine = (int)$this->sanguine;
          $this->spitfire = (int)$this->spitfire;
          $this->phlegmatic = (int)$this->phlegmatic;
          $this->melancholy = (int)$this->melancholy;
     }

}

?>