<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class ListaServices extends CI_Controller {

		 // private $permisos;
	   public function __construct(){
	 	 parent::__construct();
		 $this->load->helper(array('form', 'url'));
	 	 $this->load->library(array('session', 'form_validation'));
		 // $this->permisos = $this->backend_lib->control();
	 	 $this->load->model("Registro_Usuarios/Modelo_RegistroUsuarios");
	 }


	public function index(){
					// $data = array(
					// 	'permisos' => $this->permisos,
					// 	'username' => $this->session->userdata('username'),
					// );
		$this->load->view('layouts/header_sin_aside');
		// $this->load->view('layouts/header');
		// $this->load->view('layouts/aside');
		$this->load->view('admin/agradecimientos_MrJob');  // ,$data
		// $this->load->view('layouts/footer');
	}

	//
	//
	// public function MostrarSalones() {
	//     $MostrarConsulta = $this->Modelo_RegistroUsuarios->EnlistarSalones();
	//     echo json_encode($MostrarConsulta);
	//   }



}  // Fin del controller
