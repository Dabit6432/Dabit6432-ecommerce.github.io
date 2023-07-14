const crearProducto = (nombre, imagenUrl, precio, categoria, descripcion) => {
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, imagenUrl, precio, categoria, descripcion, id: uuid.v4() }),
    });
};

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

//Seleccionamos el form
const formulario_agregar = document.querySelector(".formulario_agregar_producto");

formulario_agregar.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const inputs = document.querySelectorAll("input");
    const textAreas = document.querySelectorAll("textarea");
    const selects = document.querySelectorAll("select");
    const nombre_producto = inputs[2].value;
    const url = inputs[1].value;
    const precio_producto = inputs[3].value;
    const categoria_producto = selects[0].value;
    const descripcion_producto = textAreas[0].value;
    
        crearProducto(nombre_producto, url, precio_producto, categoria_producto, descripcion_producto).then( (respuesta) => {
            window.alert("Articulo creado con éxito");
            window.location.href = "/screeens/administrador.html";
    });

});