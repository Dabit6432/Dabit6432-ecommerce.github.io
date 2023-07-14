const cargarInfoProducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}`).then( (respuesta) => {
        return respuesta.json();
    });
};

const mostrarInfoProducto = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if(id == null) {
        window.alert("Ups ocurrio un error, el id no existe.");
    }

    const inputs = document.querySelectorAll("input");
    const textAreas = document.querySelectorAll("textarea");
    const selects = document.querySelectorAll("select");
    const nombre_producto = inputs[2];
    const url_imagen = inputs[1];
    const precio_producto = inputs[3];
    const categoria_producto = selects[0];
    const descripcion_producto = textAreas[0];

    cargarInfoProducto(id).then( (producto) => {
        nombre_producto.value = producto.nombre;
        url_imagen.value = producto.imagenUrl;
        precio_producto.value = producto.precio;
        categoria_producto.value = producto.categoria;
        descripcion_producto.value = producto.descripcion;
    });
};

mostrarInfoProducto();

const inputs = document.querySelectorAll("input");
const textAreas = document.querySelectorAll("textarea");

inputs.forEach(input => {
    input.addEventListener("blur", (input) =>{
        verificarDatos(input.target);
    });
});

textAreas.forEach(textarea => {
    textarea.addEventListener("blur", (textarea) =>{
        verificarDatos(textarea.target);
    });
});

const verificarDatos = (input) => {
    const tipoDataSet = input.dataset.tipo;    
    
    if (input.validity.valid) {
        input.parentElement.classList.remove("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = "";
    } else {
        input.parentElement.classList.add("campo--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDataSet, input);
    }
    
};

function mostrarMensajeError(tipoDataSet, input) {
    let mensaje = "";
    tipoDeErrores.forEach((error) => {
        if(input.validity[error]) {
            console.log(tipoDataSet, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDataSet][error]);
            mensaje = mensajesDeError[tipoDataSet][error];
        }
    });

    return mensaje;
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    url: {
        valueMissing : "El campo URL no puede estar vacío",
    },

    categoria: {
        valueMissing : "El campo categoria no puede estar vacío",
    },

    nombre: {
        valueMissing : "El campo nombre no puede estar vacío",
    },

    precio: {
        valueMissing : "El campo precio no puede estar vacío",
    },

    descripcion: {
        valueMissing : "El campo descripcion no puede estar vacío",
    },
};



const actualizarProducto = (nombre, imagenUrl, precio, categoria, descripcion, id) => {
    return fetch(`http://localhost:3000/productos/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify( {nombre, imagenUrl, precio, categoria, descripcion} ),
    }).then( (respuesta) => {
        return respuesta;
    });
};

const formulario_actualizar = document.querySelector(".formulario_agregar_producto");

formulario_actualizar.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const inputs = document.querySelectorAll("input");
    const textAreas = document.querySelectorAll("textarea");
    const selects = document.querySelectorAll("select");
    const nombre_producto = inputs[2].value;
    const url_producto = inputs[1].value;
    const precio_producto = inputs[3].value;
    const categoria_producto = selects[0].value;
    const descripcion_producto = textAreas[0].value;

    actualizarProducto(nombre_producto, url_producto, precio_producto, categoria_producto, descripcion_producto, id);
});