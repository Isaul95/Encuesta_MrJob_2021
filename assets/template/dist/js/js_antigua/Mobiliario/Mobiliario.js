// $(document).ready(function () {
//     // llenartablamobiliario(); // SEINICIALIZA LA FUNCTIO DE LA CARGA DEL LISTADO DE LA TABLA
//     //date_picker_carrera();
// });
//
// /* ---------------------------- Add periodo Modal --------------------------- */
// $("#modal_add_mobiliario").on("hide.bs.modal", function (e) {
//     // do something...
//     $("#addmobiliario")[0].reset();
// });
// /* ---------------------------- Edit periodo Modal --------------------------- */
// $("#modaleditmobiliario").on("hide.bs.modal", function (e) {
//     // do something...
//     $("#formeditarmobiliario")[0].reset();
// });
//
// /* -------------------------------------------------------------------------- */
// /*                      Llenar tabla Mobiliario                               */
// /* -------------------------------------------------------------------------- */
// function llenartablamobiliario() {
//     $.ajax({
//         type: "get",
//         url: base_url + 'Mobiliario/Mobiliario/listarMobiliario',
//         dataType: "json",
//         success: function (response) {
//             console.log(response);
//             var i = "1";
//             $("#tbl_mobilario").DataTable({
//                 data: response,
//                 responsive: true,
//                 columns: [
//                     {
//                         data: "ID_SERVICIO",
//                         "visible": false,
//                         "searchable": false
//                     },
//                     {
//                         data: "NOMBRE_SERVICIO",
//                     },
//                     {
//                         data: "COSTO_ALQUILER",
//                     },
//
//                     {
//                         data: "CAPACIDAD",
//                     },
//                     {
//                         data: "DIRECCION",
//                     },
//                     {
//                         data: "DESCRIPCION",
//                     },
//
//                     {
//                         data: 'NOMBRE_IMAGEN',
//                         orderable: false,
//                         searchable: false,
//                         render: function(data, type, row, meta) {
//                             var foto = `${row.NOMBRE_IMAGEN}`;
//                             var imagenMobiliario="";
//                             if(foto!="null"&&foto!="undefined"&&foto!=""){
//                                 imagenMobiliario    = `<img src="Mobiliario/Foto/${row.ID_SERVICIO}" width="150" height="150"/>`;
//
//                             }
//                             else{
//                                 imagenMobiliario="Sin imagen";
//                             }
//
//                           return imagenMobiliario;
//                         },
//                       },
//
//
//                         {
//                         orderable: false,
//                         searchable: false,
//                         data: function (row, type, set) {
//                             return `
//
//                         <a href="#" id="edit_mobiliario" class="btn btn-success btn-remove" value="${row.ID_SERVICIO}"><i class="far fa-edit"></i></a>
//                         <a href="#" id="del_mobiliario" class="btn btn-danger btn-remove" value="${row.ID_SERVICIO}"><i class="fas fa-trash-alt"></i></a>
//                                  `;
//                         },
//                     },
//                 ],
//
//                 "language": language_espaniol,
//             });
//         },
//     });
// } // fin de llenar tabla Mobiliario
//
// /* -------------------------------------------------------------------------- */
// /*                           Agregar Mobiliario                               */
// /* -------------------------------------------------------------------------- */
// $(document).on("click", "#btnaddmobiliario", function (e) {
//     e.preventDefault();
//     debugger;
//     var ID_SERVICIO = 6;
//     var nombre = $("#nombre").val();
//     var precio = parseFloat($("#precio").val());  // Se convierte el texto a un float
//     var stock = $("#stock").val();
//     var descripcion = $("#descripcion").val();
//     // var estado = 'Disponible';
//     var imagen = $("#imagen")[0].files[0];
//     var capacidad = $("#estado22").val();
//
//     //var tipoImagen = '';
//
//
//     if ($("#imagen").val() == '') {
//       // En caso de no agregar imagen
//       imagen = '';
//     }else {
//       // Validacion de la extencion del archivo
//       var extencion = $('#imagen').val().split('.').pop().toLowerCase();
//     //  tipoImagen = extencion;
//       if(jQuery.inArray(extencion, ['gif','png','jpg','jpeg']) == -1){
//         //
//         alert("Archivo no valido");
//         $('#imagen').val(''); // Limpia el input file
//         return false;
//       }
//     }
//
//     if (nombre == "" || precio == "" || stock == "" || descripcion == "") {
//         alert("??Complete todos los campos!");
//     } else {
//         var fd = new FormData();
//         fd.append("ID_SERVICIO", ID_SERVICIO);
//         fd.append("NOMBRE_SERVICIO", nombre);
//         fd.append("DIRECCION", precio);
//         fd.append("COSTO_ALQUILER", stock);
//         fd.append("DESCRIPCION", descripcion);
//         fd.append("CAPACIDAD", capacidad);
//         fd.append("IMAGEN", imagen);
//         //fd.append("tipoImagen", tipoImagen);
//         $.ajax({
//             type: "post",
//             url: base_url + 'Mobiliario/Mobiliario/agregarMobiliario',
//             data: fd,
//             processData: false,
//             contentType: false,
//             dataType: "json",
//             enctype: 'multipart/form-data',
//             success: function (response) {
//                 if (response.res == "success") {
//                     toastr["success"](response.message);
//                     $("#modal_add_mobiliario").modal("hide");
//                     $("#addmobiliario")[0].reset();
//                     $("#tbl_mobilario").DataTable().destroy();
//                     llenartablamobiliario();
//                 } else {
//                     toastr["error"](response.message);
//                 }
//             },
//         });
//     }
// });
//
//
// /* -------------------------------------------------------------------------- */
// /*                             Eliminar registro                              */
// /* -------------------------------------------------------------------------- */
// $(document).on("click", "#del_mobiliario", function (e) {
//     e.preventDefault();
//     var del_id = $(this).attr("value");
//     Swal.fire({
//         title: "??Est??s seguro de Borrar?",
//         text: "??Esta acci??n es irreversile!",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "??Si, b??rralo!",
//         cancelButtonText: "??No, cancelar!",
//     }).then((result) => {
//         if (result.isConfirmed) {
//             $.ajax({
//                 type: "post",
//                 url: base_url + 'Mobiliario/Mobiliario/eliminarMobiliario',
//                 data: {
//                     del_id: del_id,
//                 },
//                 dataType: "json",
//                 success: function (data) {
//                     if (data.responce == "success") {
//                         Swal.fire(
//                             '??Eliminado!',
//                             'El periodo fue eliminado',
//                             'success'
//                         );
//                         $("#tbl_mobilario").DataTable().destroy();
//                         llenartablamobiliario();
//                     }
//                 },
//             });
//         }
//     });
// });
// /* -------------------------------------------------------------------------- */
// /*                 Llenar formulario Actualizar                               */
// /* -------------------------------------------------------------------------- */
// $(document).on("click", "#edit_mobiliario", function (e) {
//     e.preventDefault();
//     var edit_id = $(this).attr("value");
//     $.ajax({
//         type: "post",
//         url: base_url + 'Mobiliario/Mobiliario/editarMobiliario',
//         data: {
//             edit_id: edit_id,
//         },
//         dataType: "json",
//         success: function (data) {
//             console.log(data); //ver la respuesta del json, los valores que contiene
//             $('#modaleditmobiliario').modal('show');
//
//             // Llena los inputs del formulario con los datos a modificar
//             $('#id_mobiliario_update').val(data.post.clave);
//             $('#nombre_nuevo').val(data.post.nombre);
//             $('#precio_nuevo').val(data.post.precio);
//             $('#stock_nuevo').val(data.post.stock);
//             $('#estado_nuevo').val(data.post.estado);
//             $('#descripcion_nueva').val(data.post.descripcion);
//           //  $('#uploaded_image').val(data.post.imagen);
//             $('#MostrarImagenActualMobiliario').html(`
//           <img class="rounded img-thumbnail" src="Mobiliario/Foto/${data.post.clave}" width="250" height="250">
//         `);
//         },
//     });
// });
//
//
// /* -------------------------------------------------------------------------- */
// /*                        Actualizar Mobiliario                               */
// /* -------------------------------------------------------------------------- */
// $(document).on("click", "#update_mobiliario", function (e) {
//     e.preventDefault();
// //debugger;
//     var clave = $("#id_mobiliario_update").val();
//     var nombre = $("#nombre_nuevo").val();
//     var precio = parseFloat($("#precio_nuevo").val());
//     var stock = $("#stock_nuevo").val();
//     var estado = $("#estado_nuevo").val();
//     var descripcion = $("#descripcion_nueva").val();
//     var imgact=$("#uploaded_image").val();
//
//     var imagen = $("#imagen_nueva")[0].files[0];
//
//     if ($("#imagen_nueva").val() == '') {
//       // En caso de no agregar imagen
//       imagen = imgact;
//     }else {
//       // Validacion de la extencion del archivo
//       var extencion = $('#imagen_nueva').val().split('.').pop().toLowerCase();
//
//       if(jQuery.inArray(extencion, ['gif','png','jpg','jpeg']) == -1){
//         //
//         alert("Archivo no valido");
//         $('#imagen_nueva').val(''); // Limpia el input file
//         return false;
//       }
//     }
//
//     if (nombre == "" || precio == "" || stock == "" || estado =="" || descripcion == "") {
//         alert("??Complete todos los campos!");
//     } else {
//       var fd = new FormData();
//       fd.append("clave", clave);
//       fd.append("nombre", nombre);
//       fd.append("precio", precio);
//       fd.append("stock", stock);
//       fd.append("estado", estado);
//       fd.append("descripcion", descripcion);
//       fd.append("imagen", imagen);
//
//       $.ajax({
//           type: "post",
//           url: base_url + 'Mobiliario/Mobiliario/updateMobiliario',
//           data:fd,
//           processData: false,
//           contentType: false,
//           dataType: "json",
//           enctype: 'multipart/form-data',
//           success: function (data) {
//             //console.log(res); //ver la respuesta del json, los valores que contiene
//               if (data.responce == "success") {
//                 toastr["success"](data.message);
//                 $("#modaleditmobiliario").modal("hide");
//                 $("#formeditarmobiliario")[0].reset();
//                 $("#tbl_mobilario").DataTable().destroy();
//                 llenartablamobiliario();
//               } else {
//                   toastr["error"](data.message);
//               }
//           },
//       });
//
//
//     }
// });
//
//
// // ********************   variable PARA CAMBIAR DE IDIOMA AL ESPA??OL EL DataTable  *************************
// var language_espaniol = {
//     "lengthMenu": "Mostrar _MENU_ registros por pagina",
//     "zeroRecords": "No se encontraron resultados en su busqueda",
//     "searchPlaceholder": "Buscar Registros",
//     "info": "Total: _TOTAL_ registros",
//     "infoEmpty": "No Existen Registros",
//     "infoFiltered": "(filtrado de un total de _MAX_ registros)",
//     "search": "Buscar:",
//     "paginate": {
//         "first": "Primero",
//         "last": "??ltimo",
//         "next": "Siguiente",
//         "previous": "Anterior"
//     }, /* TODO ESTO ES PARA CAMBIAR DE IDIOMA */
// }
