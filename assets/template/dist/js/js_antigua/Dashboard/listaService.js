$(document).ready(function () {

  VisualizarSalones();


});   // FIN DEL DOCUMENT READy


function VisualizarSalones() {
  $.ajax({
    type: 'get',
    url: base_url + 'Dashboard/MostrarCatalogoServicios',
    dataType: 'json',
    success: function(tablaSalones) {
      var textoHTML='';
      for (var salon = 0; salon < tablaSalones.length; salon++) {
        textoHTML+= ""
//    title="+"Ver&nbsp;Galería"+" onclick=verGaleriaSalon('"+ tablaSalones[salon].id_salon +"')
          + "<div class=\"col-sm-4 col-md-4\">"
            + "<div class=\"thumbnail\" style=\"width: 100%;\">"
  + "<img title="+"Ver&nbsp;Galería"+" onclick=verGaleriaSalon('"+ tablaSalones[salon].ID_SALON +"')" +
    // + "<img title="+"Ver&nbsp;Galería"+" onclick=verGaleriaSalon('"+ tablaSalones[salon].ID_SALON +"') src=\"Dashboard/ImagenSalon/" +
     tablaSalones[salon].ID_SALON + "\""
  + "class=\"img-fluid card-img-top\" style=\"width: 100%; height: 200px !important;\">"
              + "<div class=\"caption\" style=\"width: 100%;\">"
                + "<h3>" + tablaSalones[salon].NOMBRE_SALON + "</h3>"
                + "<textarea class=\"text-justify\" style=\"border: none; resize: none; width: 100%;\" rows=\"2\" readonly>"
                + tablaSalones[salon].DIRECCION + "</textarea>"
                + "<h4> <center> <strong> Precio: $" + tablaSalones[salon].COSTO_ALQUILER + "</strong> <center> </h4>"
                + "<h4> Capacidad para: " + tablaSalones[salon].CAPACIDAD + " personas</h4>"
                + "<textarea class=\"text-justify\" style=\"border: none; resize: none; width: 100%;\" rows=\"3\" readonly>"
                + tablaSalones[salon].DESCRIPCION + "</textarea>"
                + "<textarea class=\"text-justify\" style=\"border: none; resize: none; width: 100%;\" rows=\"1\" readonly>"
                + tablaSalones[salon].HORARIOS + "</textarea>"
              + "</div>"

              +  "<button onclick=addSalonVenta('"+ tablaSalones[salon].ID_SALON +"','"+ tablaSalones[salon].COSTO_ALQUILER +"') type='button' class=\"btn btn-danger\" style=\"width: 100%; height: 40px !important;\">"+'Añadir '+"</button>"

            + "</div>"
          + "</div>"
      }
      $('#Salones').html(textoHTML);
    },
  });
}

//
// function VisualizarMobiliario() {
//   $.ajax({
//     type: 'get',
//     url: base_url + 'Eventos/Contratos/MostrarMobiliario',
//     dataType: 'json',
//     success: function(tablaMobiliario) {
//       var textoHTML='';
//       for (var mueble = 0; mueble < tablaMobiliario.length; mueble++) {
//         textoHTML+= ""
//           + "<div class=\"col-sm-4 col-md-4\">"
//             + "<div class=\"thumbnail\" style=\"width: 100%;\">"
//               + "<img src=\"Contratos/Imagen/" + tablaMobiliario[mueble].clave + "\""
//               + "class=\"img-fluid card-img-top\" style=\"width: 100%; height: 200px !important;\">"
//               + "<div class=\"caption\" style=\"width: 100%;\">"
//                 + "<h3>" + tablaMobiliario[mueble].nombre + "</h3>"
//                 + "<h4>$" + tablaMobiliario[mueble].precio + "</h4>"
//                 + "<h4>Hay " + tablaMobiliario[mueble].stock + " piezas disponibles</h4>"
//                 + "<textarea class=\"text-justify\" style=\"border: none; resize: none; width: 100%;\" rows=\"3\" readonly>"
//                 + tablaMobiliario[mueble].descripcion + "</textarea>"
//               + "</div>"
//
//             +  "<button onclick=addMobiliarioVenta('"+ tablaMobiliario[mueble].clave +"','"+ tablaMobiliario[mueble].precio +"') type='button' class=\"btn btn-danger\" style=\"width: 100%; height: 40px !important;\">"+'Añadir '+"</button>"
//
//             + "</div>"
//           + "</div>"
//       }
//       $('#Mobiliario').html(textoHTML);
//     },
//   });
// }
//
//
// function VisualizarPlatillos() {
//   $.ajax({
//     type: 'get',
//     url: base_url + 'Eventos/Contratos/MostrarPlatillos',
//     dataType: 'json',
//     success: function(tablaPlatillos) {
//       var textoHTML='';
//       for (var platillo = 0; platillo < tablaPlatillos.length; platillo++) {
//         textoHTML+= ""
//           + "<div class=\"col-sm-4 col-md-4\">"
//             + "<div class=\"thumbnail\" style=\"width: 100%;\">"
//               + "<img src=\"Contratos/Foto/" + tablaPlatillos[platillo].id_platillo + "\""
//               + "class=\"img-fluid card-img-top\" style=\"width: 100%; height: 200px !important;\">"
//               + "<div class=\"caption\" style=\"width: 100%;\">"
//                 + "<h3>" + tablaPlatillos[platillo].nombre_platillo + "</h3>"
//                 + "<h4>$" + tablaPlatillos[platillo].costo + "</h4>"
//                 + "<textarea class=\"text-justify\" style=\"border: none; resize: none; width: 100%;\" rows=\"3\" readonly>"
//                 + tablaPlatillos[platillo].descripcion + "</textarea>"
//               + "</div>"
//
//       +  "<button onclick=addBanqueteVenta('"+ tablaPlatillos[platillo].id_platillo +"','"+ tablaPlatillos[platillo].costo +"') type='button' class=\"btn btn-danger\" style=\"width: 100%; height: 40px !important;\">"+'Añadir '+"</button>"
//
//             + "</div>"
//           + "</div>"
//           //console.log(document.getElementById('Ima'+platillo).width);
//       }
//       $('#Platillos').html(textoHTML);
//     },
//   });
// }
//
//
//
//
//
//   function addMobiliarioVenta (id_mobiliario, precioMob){
//       // debugger;
//
//           $("#id_modalMobiliario").val(id_mobiliario);
//           $("#precio_modalMobiliario").val(precioMob);
//
//         $("#modalAddCantidadMob").modal("show");
//     //  alert("Id Mobiliario =>" + datos.clave);
//
//
//       }
//
//
//
//
//
//   function addSalonVenta (id_salon, costo_alquiler){
//     debugger;
//
//             var datos = {
//                 salon : id_salon,
//                 cantidad_salon : costo_alquiler,
//                 // venta : 1,
//                 venta : $("#id_ventaDesdeVenta").val(),
//             }
//
//             $.ajax({
//             type: "post",
//             url: base_url + 'Eventos/Contratos/insertSalon',
//             data: (datos),
//             dataType: "json",
//             success: function(data) {
//                 if (data.responce == "success") {
//                     toastr["success"](data.message);
//                     // VisualizarSalones();
//                     $("#tbl_VentaSalon").DataTable().destroy();
//                     llenartablaSalonEnVenta();         // Esta function esta en Clientes.js
//                     verSiYaExisteSalonEnVenta();
//                 } else {
//                     toastr["error"](data.message);
//                 }
//             },
//         });
//
//
//     }
//
//
//
//
//   function verGaleriaSalon (id_salon){
//       $("#id_salonXGaleria").val(id_salon);
//     $("#modalGaleriaFotosxSalon").modal("show");
//     }
//
//
//
//   function addBanqueteVenta (id_platillo, precioPlatillo){
//
//           $("#id_modalPlatillo").val(id_platillo);
//           $("#precio_modalPlatillo").val(precioPlatillo);
//           $("#modalAddCantidadPlatillos").modal("show");
//             // alert("Id Banquete =>" + datos.id_platillo);
//     }
