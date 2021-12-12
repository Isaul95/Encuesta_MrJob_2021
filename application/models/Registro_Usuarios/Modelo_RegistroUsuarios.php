<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Modelo_RegistroUsuarios extends CI_Model { // INICIO DEL MODELO


  public function agregar_NuevoUsuarioJob($data){
      return $this->db->insert('POLLERIA.REGISTRO_ENCUESTA', $data);
    }


  public function agregar_NuevoUsuarioJober($data){
      return $this->db->insert('POLLERIA.REGISTRO_ENCUESTA_JOBER', $data);
    }



  } // FIN / CIERRE DEL MODELO
