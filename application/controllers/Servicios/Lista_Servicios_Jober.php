<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Lista_Servicios_Jober extends CI_Controller {

	   public function __construct(){
	 	 parent::__construct();
		 // $this->load->helper(array('form', 'url'));
	 	 // $this->load->library(array('session', 'form_validation'));
	 	 // $this->load->model("Modelo_Utensilios");
	 }


	public function index(){
		$this->load->view('admin/jobber');
		$this->load->view('layouts/footer');
	}


	// $this->load->view("admin/login");
	// $this->load->view('layouts/footer');







}  // Fin del controller
