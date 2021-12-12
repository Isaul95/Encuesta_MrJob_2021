<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>.:: Servicios ::. "Mr. Job"</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

  <!-- base_url() = http://localhost/ventas_ci/-->

  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/bootstrap/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/font-awesome/css/font-awesome.min.css">

  <!-- Theme style -->
  <link rel="stylesheet" href="<?php echo base_url();?>assets/template/dist/css/AdminLTE.min.css">

</head>


<body class="hold-transition login-page">  <!--COLOR background NEGRO => style="background-color: #060405;"-->



    <!-- Modal Agregar registro para recibo de pago -->
      <!-- <div class="modal fade" id="ModalEventos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header bg-primary text-center">
              <strong class="modal-title" id="exampleModalLabel">Todo el diseño del job</strong>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <!-- Add Record Form -->
          <form id="frm_registro">

                <div class="form-group">
                  <label for="">Nombre completo: *</label>
                  <input type="text" class="form-control" id="registro_nombre" placeholder="Titulo del evento...">
                </div>

                <div class="form-group">
                  <label for="">Email: *</label>
                  <input type="text" class="form-control" id="registro_email"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                  <label for="">Ubicacion: *</label>
                  <input type="text" class="form-control" id="registro_ubicacion"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                  <label for="">Telefono: *</label>
                  <input type="text" class="form-control" id="registro_telefono"  placeholder="Horario del evento...">
                </div>

                <div class="form-group">
                      <button type="button" id="btn">Albañilería / construcción</button>
                      <div class="caja" id="caja">Hola</div>
                  </div>

          </form>
            </div>
            <div class="modal-footer">
              <!-- Insert Button -->
              <button type="button" class="btn btn-primary" id="btn_registroUsuario">Registrarme</button>
              <a type="button" href="<?php echo base_url();?>" class="btn btn-success">Regresar</a>
            </div>
          </div>
        </div>

<br>
<br>


	      <!-- FOOTER -->
	      <footer>
					<center>
	        <p><a href="#">Politicas de Privacidad</a> &middot; <a href="#">Terminos y Condiciones</a>
					<a class="pull-right">Versión 0.0.1</a></p>
					</center>
	      </footer>

<br>

<input type="hidden" id="base_urlReg" name="base_urlReg" value="<?php echo base_url();?>" >

<!-- jQuery 3 -->
<script src="<?php echo base_url();?>assets/template/jquery/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="<?php echo base_url();?>assets/template/bootstrap/js/bootstrap.min.js"></script>

</body>
</html>


<style type="text/css">

.caja{
  border: red solid 2px;
  width: 100px;
  margin: 20px;
}

.caja.azul{
  border: black 2px solid;
  background: rgb(27,27,131);
  color: white;
}



</style>
