<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lista_Servicios_Jober extends CI_Controller {

	   public function __construct(){
	 	 parent::__construct();
		 $this->load->helper(array('form', 'url'));
	 	 $this->load->library(array('session', 'form_validation'));
		 // $this->permisos = $this->backend_lib->control();
	 	 $this->load->model("Registro_Usuarios/Modelo_RegistroUsuarios");
	 }


	public function index(){
		$this->load->view('admin/jobber');
		$this->load->view('layouts/footer');
	}


	public function insert_registroUsuario_jober(){
		$ajax_data = $this->input->post();
			if ($this->Modelo_RegistroUsuarios->agregar_NuevoUsuarioJober($ajax_data)) {
				$data = array('responce' => 'success', 'message' => 'Nuevo usuario agregado exitosamente...!');
			} else {
				$data = array('responce' => 'error', 'message' => 'Fallo al agregar nuevo usuario...!');
			}
			echo json_encode($data);
		}



}  // Fin del controller
