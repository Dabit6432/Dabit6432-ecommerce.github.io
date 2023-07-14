const mes = document.querySelector(".mes");
const fecha = new Date();
const mesActual = fecha.getMonth() + 1;

switch(mesActual) {
    case 1:
        mes.textContent = "Enero";
        break;
    case 2:
        mes.textContent = "Febrero";
        break;
    case 3:
        mes.textContent = "Marzo";
        break;
    case 4:
        mes.textContent = "Abril";
        break;
    case 5:
        mes.textContent = "Mayo";
        break;
    case 6:
        mes.textContent = "Junio";
        break;
    case 7:
        mes.textContent = "Julio";
        break;
    case 8:
        mes.textContent = "Agosto";
        break;
    case 9:
        mes.textContent = "Septiembre";
        break;
    case 10:
        mes.textContent = "Octubre";
        break;
    case 11:
        mes.textContent = "Noviembre";
        break;
    case 12:
        mes.textContent = "Diciembre";
        break;
}