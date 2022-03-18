const productos = ["Jean", "Camisa", "Short", "Top","Campera","Pollera"];
const carrito = [];
const ul = document.getElementById("listaRopa");
//Dentro de este nodo, cargaré los <li> con los productos
const listadoCarrito = document.getElementById("listaCarrito"); //En este otro, los productos a comprar

const cargarProductos = () => {
  for (ropa of productos) {
    const liProductos = document.createElement("li");
    liProductos.className = "list-group-item";
    liProductos.innerText = ropa;
    liProductos.setAttribute("onclick", `agregarAlCarrito('${ropa}')`);
    ul.append(liProductos);
  }
};

// SI QUEREMOS CREAR LOS ELEMENTOS HTML DE FORMA DINAMICA
const agregarAlCarrito = (prod) => {
  if (prod > "") {
    const id = prod + "enCarrito"; 
    const liCarrito = document.createElement("li");
    liCarrito.className = "list-group-item";
    liCarrito.innerText = prod;
    liCarrito.id = id; //ID dinámico
    liCarrito.setAttribute("ondblclick", `eliminarDelCarrito('${id}')`);
    listadoCarrito.append(liCarrito);
    // convierto la lista de nodos del ul a una array
    let carritoEnvio = [...listadoCarrito.childNodes];
    // obtengo la cantidad de productos del array
    let cantidadCarrito = carritoEnvio.length - 1;
    // Pinto el resultado de la operación dentro del envio
    envio.innerHTML = cantidadCarrito * 60;
  }
};

//Para crear la opción de eliminar del carrito, debemos generar un ID dinámico
//al momento de crear un <li> por cada producto agregado al Carrito.
const eliminarDelCarrito = (productoID) => {
  if (confirm("¿Desea eliminar el producto del carrito?")) {
    let carritoEnvio = [...listadoCarrito.childNodes];
    // obtengo la cantidad de productos del array
    let cantidadCarrito = carritoEnvio.length - 2;
    envio.innerHTML = cantidadCarrito * 60;
    const itemAeliminar = document.getElementById(productoID);
    itemAeliminar.remove();
    return ;
  }
};


document.addEventListener("submit", (event)=> {
  event.preventDefault()
  alert(`Tu ${cantidadCarrito}`)
})


//CARGAR LISTADO DE PRODUCTOS AL INGRESAR A LA PÁGINA
cargarProductos();
