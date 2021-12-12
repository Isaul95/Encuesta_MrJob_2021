

<div class=" colorfondo"> <!-- STAR ALL CONTENT -->
             <!-- Main content -->
            <section class="content">
                <!-- Default box -->
                <div class="box box-solid colorfondo">
                    <div class="box-body">
<div class="container">
  <div class="row">
    <div class="col-md-12 mt-5">
      <h3 class="text-center">
      <strong><font color="#D34787">REGISTRO DE USUARIOS DAR DE ALTA 2021--</font></strong>
    </h3>
      <hr style="background-color: black; color: black; height: 1px;">
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">


    <div class="container marketing">


      <!-- START THE FEATURETTES -->


      <hr class="featurette-divider">

      <div class="row featurette">
        <div class="col-md-7 col-md-push-5">
          <h2 class="featurette-heading">Oh yeah, it's that good. <span class="text-muted">See for yourself.</span></h2>
          <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, s ac cursus commodo.</p>
        </div>
        <div class="col-md-5 col-md-pull-7">
<img class="featurette-image img-responsive center-block" src="<?php echo base_url()?>assets/Configuracion_index/3.jpg" class="user-image" alt="User Image" width=420px heigth=820px link="">
<!-- <img src="<?php echo base_url()?>assets/template/dist/img/Logo.png"  class="user-image" alt="User Image" width=420px heigth=420px link=""> -->
        </div>
      </div>

<br>
<br>
<hr> <!-- Le da una linea sombreada para ver la divicion -->
<br><br>
  </div>



<!-- Modal Agregar registro para recibo de pago -->
  <!-- <div class="modal fade" id="ModalEventos" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"> -->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-primary text-center">
          <strong class="modal-title" id="exampleModalLabel">Agregar Nuevo Evento para esta fecha</strong>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- <input type="hidden" id="username" name="username" value="<?php echo $username;?>" > -->
          <input type="hidden" id="id_evento" name="id_evento" >

          <!-- Add Record Form -->
      <form id="addNewEvent">

            <div class="form-group">
              <label for="">Fecha: </label>
              <input type="text" class="form-control" id="fecha_evento" readonly>
            </div>

            <div class="form-group">
              <label for="">Titulo: *</label>
              <input type="text" class="form-control" id="titulo" placeholder="Titulo del evento...">
            </div>

            <div class="form-group input-group clockpicker" data-autoclose="true" >
              <label for="">Hora del evento: *</label>
              <input type="text" class="form-control" id="hora"  placeholder="Horario del evento...">
            </div>

            <div class="form-group">
              <label for="">Descripción: *</label>
              <textarea rows="3" class="form-control" id="descripcion" ></textarea>
            </div>


            <div class="form-group" id="divColor">
            <label for="">Color: </label>
            <input type="color" class="form-control" id="color">
            </div>

      </form>
        </div>
        <div class="modal-footer">
          <!-- Insert Button -->
          <button type="button" class="btn btn-primary" id="nuevoEventoCliente">Agregar Contrato</button>

        </div>
      </div>
    </div>
  <!-- </div> -->



  </div>

  </div>

	      <!-- FOOTER -->
	      <footer>
					<center>
	        <p><a href="#">Politicas de Privacidad</a> &middot; <a href="#">Terminos y Condiciones</a>
					<a class="pull-right">Versión 0.0.1</a></p>
					</center>
	      </footer>
  </div>
  </div>
  </section>
  </div> <!-- /END ALL CONTENT -->
  <input type="hidden" id="base_url" name="base_url" value="'<?php echo base_url();?>';" >

<script>

    var base_url = '<?php echo base_url();?>';
    $("#base_urlReg").val(base_url);

</script>
