<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Modelo_RegistroUsuarios extends CI_Model { // INICIO DEL MODELO




    public function agregar_NuevoUsuarioToMrJob($data){
        return $this->db->insert('POLLERIA.REGISTRO_ENCUESTA', $data);
      }


        public function ListarCatalogoServicios() {
        $InformacionTablaSalones = $this->db->get('POLLERIA.SALONES');
        return $InformacionTablaSalones->result();
      }



  } // FIN / CIERRE DEL MODELO
