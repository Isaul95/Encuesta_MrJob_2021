<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Dashboard extends CI_Controller {

  public function __construct(){
	 	 parent::__construct();

	 	   if (!$this->session->userdata("login")) {
	       	     	  redirect(base_url());
	       	     }

	 $this->load->model("Registro_Usuarios/Modelo_RegistroUsuarios");
	 }

	public function index()
	{
	   /* $this->load->view('admin/login');*/
		$this->load->view('layouts/header');
		$this->load->view('layouts/aside');
		$this->load->view('admin/dashboard');
		$this->load->view('layouts/footer');

	}



//  Se consulta la lista de todos los servicios por catalogo en el dashboard
  	public function MostrarCatalogoServicios() {
  	    $MostrarConsulta = $this->Modelo_RegistroUsuarios->ListarCatalogoServicios();
  	    echo json_encode($MostrarConsulta);
  	  }


}
