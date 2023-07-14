const seccion_todos = document.querySelector(".todos_los_productos");
const div_lista = document.createElement("div");
div_lista.classList.add("lista_productos");

const listaProductos = () => {
    return fetch("http://localhost:3000/productos").then( (respuesta) => {
        return respuesta.json();
    });
};

const crearLineaHtml = (nombre, precio, id) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    const linea = `<div id="${id}">
    <div class="iconos_foto">
    <a href="editar_producto.html?id=${id}" class="lapiz"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-pencil" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
  </svg></a>

      <a href="eliminar_producto.html?id=${id}" class="bote"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" stroke-width="2" stroke="#00b341" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <path d="M4 7l16 0" />
      <path d="M10 11l0 6" />
      <path d="M14 11l0 6" />
      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
    </svg></a>
</div></div>
    <p class="titulo__producto">${nombre}</p>
    <p class="precio__producto">$ ${precio}</p>
    <a href="" class="enlace_ver_producto">Ver producto</a>`;
    div.innerHTML = linea;
    div_lista.appendChild(div);
    return div_lista;
}

listaProductos().then( (data) => {
    data.forEach(element => {
        seccion_todos.appendChild(crearLineaHtml(element.nombre, element.precio, element.id));
        let imagen_producto = document.getElementById(element.id);
        console.log(imagen_producto);
        imagen_producto.style.backgroundImage = `url('${element.imagenUrl}')`;
        imagen_producto.style.backgroundSize = "cover";
        imagen_producto.style.backgroundRepat = "norepeat";
        imagen_producto.style.backgroundPosition = "50% 50%";
        imagen_producto.style.width = "10rem";
        imagen_producto.style.height = "10rem";
    });
});