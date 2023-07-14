const seccion_star_wars = document.querySelector(".star__wars");
const div_lista = document.createElement("div");
div_lista.classList.add("lista_productos");

const listaProductos = () => {
    return fetch("http://localhost:3000/productos").then( (respuesta) => {
        return respuesta.json();
    });
};

const crearLineaHtml = (nombre, precio, link) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    const linea = `<img src="${link}" alt="" class="imagen__producto">
    <p class="titulo__producto">${nombre}</p>
    <p class="precio__producto">$ ${precio}</p>
    <a href="" class="enlace_ver_producto">Ver producto</a>`;
    div.innerHTML = linea;
    div_lista.appendChild(div);
    return div_lista;
}

listaProductos().then( (data) => {
    data.forEach(element => {
        if(element.categoria == "star wars") {
            seccion_star_wars.appendChild(crearLineaHtml(element.nombre, element.precio, element.imagenUrl));
        }
    });
});