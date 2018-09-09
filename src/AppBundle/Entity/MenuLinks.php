<?php

namespace AppBundle\Entity;

/*
* This class holds menu links
*/
class MenuLinks {

  /*
  * Variable to store label form translator to display
  * @param String $name
  */
  public $name;

  /*
  * Variable to store source of link
  * @param String $src
  */
  public $src;

  /*
  * Variable to store sublinks of a link
  * @param Array $sublinks
  */
  public $sublinks = [];

  public function __constructor($name, $src, $sublink){
    $this->name = $name;
    $this->src = $src;
    $this->sublinks = $sublinks;
  }

}
