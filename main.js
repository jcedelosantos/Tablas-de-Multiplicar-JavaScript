/*
Practica 1 de JavaScript
Generar las tablas de multiplicar tomando en valor que ingrese el usuario en tablas distintas de html
*/

//se toma el valor ingresado y se validad que no supere el valor de 3 12
var numTabla = prompt("Ingrese un numero para desplegas su tabla");
cantidad = 12;
while (numTabla >12) {
  if(numTabla > 12){
      alert("Inserte un valor igual o menor que 12")
      numTabla = prompt("Ingrese un numero");
    }
}
//llamada a la funcion generar tablas
generarTablas(numTabla);

// buble for para asignar los resultados
for (var i = 1; i<=numTabla; i++ ){    
  agregaNode(i);
  for(var j = 1 ; j <= cantidad; j++){
    var td = document.getElementById("id_nodeChild"+i);
    td.innerHTML += i +" X "+j+" = "+i*j +"<br/>";
  }
}

//funcion agrega el nodo en el titulo de la tabla
function agregaNode (num){
  var th = document.createElement("th");
  var node1 =  document.createTextNode("Tabla de del "+ num);
  th.appendChild(node1);
 
  var parent =  document.getElementById("id_tableParent"+num);
  var child =  document.getElementById("id_childTabla"+num);
  parent.replaceChild(th, child);
};

//funcion para generar tablas  toma como parametro
//el numero ingresado por el usuario
function generarTablas(num){

  // getElementsByTagName permite buscar por la etiqueta
  var divParent =  document.getElementsByTagName("div")[0];

  // bucle for para generar las tablas deseadas
  for (a=1; a<=num; a++) {
    //se crea un elemento tabla y se le asignan sus atributos
    var new_table = document.createElement("table");
    new_table.setAttribute("align", "left");
    new_table.setAttribute("border","2");
    new_table.setAttribute("id", "id_Tabla"+a);
    
    // generacion de los elementos (tr) 
    var new_trth_el = document.createElement("tr");
    var new_trtd_el = document.createElement("tr");

    // asignacion de los atributos id de los mismos
    new_trth_el.setAttribute( "id", "id_tableParent"+a);
    new_trtd_el.setAttribute("id", "id_nodeParent"+a);
    
    // creacion de los elementos th y td, los cuales van dentro del elemento tr
    var new_th_el = document.createElement("th");
    var new_td_el = document.createElement("td");
  
    // asignacion de los atributos id de los mismos
    new_th_el.setAttribute("id", "id_childTabla"+a);
    new_td_el.setAttribute("id", "id_nodeChild"+a);
  
    //asignacion del hijo al nodo padre
    new_trth_el.appendChild(new_th_el);
    new_trtd_el.appendChild(new_td_el);
    new_table.appendChild(new_trth_el);
    new_table.appendChild(new_trtd_el);
    divParent.appendChild(new_table);

  }
  
};

