<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Usuarios_model extends CI_Model {

	public function getUsuarios(){
		$this->db->select("u.*,r.nombre as rol");
		$this->db->from("usuarios u");
		$this->db->join("roles r","u.rol_id = r.id");
		$this->db->where("u.estado","1");
		$resultados = $this->db->get();
		return $resultados->result();
	}

	public function getUsuario($id){
		$this->db->select("u.*,r.nombre as rol");
		$this->db->from("usuarios u");
		$this->db->join("roles r","u.rol_id = r.id");
		$this->db->where("u.id",$id);
		$this->db->where("u.estado","1");
		$resultado = $this->db->get();
		return $resultado->row();
	}
	public function getRoles(){
		$resultados = $this->db->get("roles");
		return $resultados->result();
	}
	public function save($data){
		return $this->db->insert("usuarios",$data);
	}
	public function update($id,$data){
		$this->db->where("id",$id);
		return $this->db->update("usuarios",$data);
	}

	public function login($username, $password){


		$this->db->select("us.ID_USER, us.NOMBRES, us.APELLIDOS, us.TELEFONO, us.EMAIL, us.USERNAME, us.PASSWR, us.ROL_ID, us.ESTADO , r.NOMBRE as ROL");
		$this->db->from("POLLERIA.USUARIOS us");
		$this->db->join("POLLERIA.ROL_USUARIO r","us.ROL_ID = r.ID_ROL");
		$this->db->where("USERNAME", $username);
		$this->db->where("PASSWR", $password);

				$resultados = $this->db->get();
		// $resultados = $this->db->get("usuarios");
		// if($resultados != null){
				if ($resultados->num_rows() > 0) {
					echo "Yesss CONECTED....";
					return $resultados->row();
				}
				else{
					echo "NO CONECTED....";
					return false;
				}
	// }else {
	// 	echo "NO hay vista o tabla .......";
	// }

	}

}
