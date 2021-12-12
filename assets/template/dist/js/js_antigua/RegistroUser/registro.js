/***********************************/

$(document).ready(function () {

  var btn =  document.getElementById('btn'),
     caja = document.getElementById('caja'),
     contador=0;

     // document.getElementById('btn').addEventListener('click',myFunction);
     btn.addEventListener('click',cambio,true)


     function cambio(){
     // alert("cambio");
       if(contador==0){
         caja.classList.add('azul');
         contador=1;
       }else{
         caja.classList.remove('azul');
         contador=0;
       }

     }


});








/* -----------------------   AGREGAR HORA DE SALIDA DEL MOBILIARIO  -------------------------- */

  $(document).on("click", "#btn_registroUsuario", function(e) {
      e.preventDefault();

// La raiz del proyecto, para que cuando se suba al server ya lo tome x default y redireccion de forma correcta
var base_urlMrJob = $("#base_urlReg").val();

// Extrae fecha de registro
          var f = new Date();
          var yyyy = f.getFullYear();
          var mm = f.getMonth()+1;
          var dd = f.getDate();

          if(mm<10){
            mm='0'+mm //agrega cero si el menor de 10
          }

          if(dd<10){
            dd='0'+dd; //agrega cero si el menor de 10
          }

      //  fecha = yyyy + "/" + mm + "/" + dd;
          fecha = dd + "/" + mm + "/" + yyyy;
          var ho = f.getHours();
          var min = f.getMinutes();
          var seg = f.getSeconds();

          if(min<10){
            min='0'+min //agrega cero si el menor de 10
          }

          if(seg<10){
            seg='0'+seg; //agrega cero si el menor de 10
          }
          hora = ho + ":" + min + ":" + seg;

alert("fecgas: " + fecha + hora);

var fechaActual = fecha+" "+hora;
alert("hora: " + fechaActual);
alert("MrJob-> "+base_urlMrJob);

    var datos = {
        ID_REG_ENCUESTA : 8,
        NOMBRE_COMPLETO : $("#registro_nombre").val(),
        EMAIL : $("#registro_email").val(),
        UBICACION : $("#registro_ubicacion").val(),
        TELEFONO : $("#registro_telefono").val(),
        SERVICIO : $("#radio").val(),
        OTRO : $("#radio").val(),
        FECHA_REGISTRO : fechaActual,

        // GENERO : $('input:radio[name=sexo]:checked').val(),
        // CONTRASENIA : $("#registro_pass").val(),
        // VERIFI_CONTRASENIA : $("#registro_passRepeat").val(),

      }

      if (datos.nombres == "") {
          alert("Debe capturar el nombre x moment...!");
      } else {
          $.ajax({
              type: "post",
              url: base_url + 'Registro/RegistroUsuarios/insert_registroUsuario',
              data: (datos),
              dataType: "json",
              success: function(data) {
                  if (data.responce == "success") {
                      toastr["success"](data.message);
// base_url + 'Registro/RegistroUsuarios/insert_registroUsuario',
  // location.href ="http://localhost/Mr_job/Mobiliario/Mobiliario";
  // Dashboard\ListaServices
  location.href = base_urlMrJob+"Mobiliario/Mobiliario";
  // location.href = base_urlMrJob+"/Mobiliario/Mobiliario";
                  } else {
                      toastr["error"](data.message);
                  }
              },
          });
      }
  });
