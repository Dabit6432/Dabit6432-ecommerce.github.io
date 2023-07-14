
const borrarPorducto = (id) => {
    return fetch(`http://localhost:3000/productos/${id}` , {
        method: "DELETE",
    });
};

const url_btn = new URL(window.location);
const id_producto = url_btn.searchParams.get("id");

if(id_producto == null) {
    window.alert("Ups ocurrio un error, el id no existe.");
}

borrarPorducto(id_producto);

