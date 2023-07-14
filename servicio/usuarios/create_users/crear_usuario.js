var crearUsuario = (correo, password) => {
    return fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ correo, password, id: uuid.v4() }),
    });
};

const fomulario_login = document.querySelector(".formulario_login");

fomulario_login.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const correo_usuario = document.querySelector("#correo").value;
    const password_usuario = document.querySelector("#contrsenhia").value;
    crearUsuario(correo_usuario, password_usuario).then( (respuesta) => {
        window.location.href = "/screeens/iniciar_sesion.html";
    });
});


const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener("blur", (input) =>{
        verificarDatos(input.target);
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
};


const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ];

const mensajesDeError = {
    correo: {
        valueMissing : "El campo correo no puede estar vacío",
        typeMismatch: "El correo no es válido",
    },

    password: {
        valueMissing : "El campo contraseña no puede estar vacío",
        patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales",
    },
};

