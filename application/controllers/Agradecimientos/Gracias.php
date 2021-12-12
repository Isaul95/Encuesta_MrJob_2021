<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gracias extends CI_Controller {
		 // private $permisos;
         public function __construct(){
	 	 parent::__construct();
		 // $this->permisos = $this->backend_lib->control();
		 // $this->load->helper(array('form', 'url'));
	 	 // $this->load->library(array('session', 'form_validation'));
	 	 // $this->load->model("mobiliario/ModeloMobiliario");
	 }

	public function index(){
		// $this->load->view('layouts/header');
		// $this->load->view('layouts/aside');
		$this->load->view('admin/agradecimientos_MrJob'); //,$data
		$this->load->view('layouts/footer');
	}



}  // Fin del controller
