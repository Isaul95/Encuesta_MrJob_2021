<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lista_Servicios_Job extends CI_Controller {

	public function __construct(){
		parent::__construct();
		$this->load->helper(array('form', 'url'));
		$this->load->library(array('session', 'form_validation'));
		// $this->permisos = $this->backend_lib->control();
		$this->load->model("Registro_Usuarios/Modelo_RegistroUsuarios");
	}

	public function index(){
	 $this->load->view("admin/job");
	 $this->load->view('layouts/footer');  // tiene k llamarse el footer para hacer uso del .js
	}


	public function insert_registroUsuario(){
		$ajax_data = $this->input->post();
			if ($this->Modelo_RegistroUsuarios->agregar_NuevoUsuarioJob($ajax_data)) {
				$data = array('responce' => 'success', 'message' => 'Nuevo usuario agregado exitosamente...!');
			} else {
				$data = array('responce' => 'error', 'message' => 'Fallo al agregar nuevo usuario...!');
			}
			echo json_encode($data);
		}



}
