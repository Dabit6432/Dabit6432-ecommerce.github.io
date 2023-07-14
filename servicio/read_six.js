
const seccion_star_wars = document.querySelector(".star__wars");
const seccion_consolas = document.querySelector(".consolas");
const seccion_varios = document.querySelector(".varios");

const div_lista = document.createElement("div");
div_lista.classList.add("lista_productos");
//_________________________________________________
const div_lista_consolas = document.createElement("div");
div_lista_consolas.classList.add("lista_productos");
//____________________________________________________
const div_lista_varios = document.createElement("div");
div_lista_varios.classList.add("lista_productos");

const listaProductos = () => {
    return fetch("http://localhost:3000/productos").then( (respuesta) => {
        return respuesta.json();
    });
};

const crearLineaHtmlStar = (nombre, precio, link) => {
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

const crearLineaHtmlConsolas = (nombre, precio, link) => {
    const div_consolas = document.createElement("div");
    div_consolas.classList.add("producto");
    const linea = `<img src="${link}" alt="" class="imagen__producto">
    <p class="titulo__producto">${nombre}</p>
    <p class="precio__producto">$ ${precio}</p>
    <a href="" class="enlace_ver_producto">Ver producto</a>`;
    div_consolas.innerHTML = linea;
    div_lista_consolas.appendChild(div_consolas);
    return div_lista_consolas;
}

const crearLineaHtmlVarios = (nombre, precio, link) => {
    const div = document.createElement("div");
    div.classList.add("producto");
    const linea = `<img src="${link}" alt="" class="imagen__producto">
    <p class="titulo__producto">${nombre}</p>
    <p class="precio__producto">$ ${precio}</p>
    <a href="" class="enlace_ver_producto">Ver producto</a>`;
    div.innerHTML = linea;
    div_lista_varios.appendChild(div);
    return div_lista_varios;
}

listaProductos().then( (data) => {

    if (window.screen.width < 821 && window.screen.height < 1185) {
        let index = 0;
        data.forEach(element => {
            if(element.categoria == "consolas" && index < 4) {
                seccion_consolas.appendChild(crearLineaHtmlConsolas(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });

        index = 0;
        data.forEach(element => {
            if(element.categoria == "star wars" && index < 4) {
                seccion_star_wars.appendChild(crearLineaHtmlStar(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });
        
        index = 0;
        data.forEach(element => {
            if(element.categoria == "varios" && index < 4) {
                seccion_varios.appendChild(crearLineaHtmlVarios(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });
        
    } else {
        let index = 0;
        data.forEach(element => {
            if(element.categoria == "consolas" && index < 6) {
                seccion_consolas.appendChild(crearLineaHtmlConsolas(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });

        index = 0;
        data.forEach(element => {
            if(element.categoria == "star wars" && index < 6) {
                seccion_star_wars.appendChild(crearLineaHtmlStar(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });
        
        index = 0;
        data.forEach(element => {
            if(element.categoria == "varios" && index < 6) {
                seccion_varios.appendChild(crearLineaHtmlVarios(element.nombre, element.precio, element.imagenUrl));
                index++;
            }
        });
    }
});


