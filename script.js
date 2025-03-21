
const formulario = document.getElementById('formulario');
const form = document.getElementById('form');

const boton = document.getElementById('boton');
const botonticket  = document.getElementById('ticket');
const totalElement = document.getElementById('total');

boton.addEventListener('click', (e) => {
  e.preventDefault();
  const pizza1 = document.getElementById('pizza1').value;
  const pizza2 = document.getElementById('pizza2').value;
  const pizza3 = document.getElementById('pizza3').value;

  const precios = {
    'Mexicana': 10,
    'Pepperoni': 12,
    'Hawaiana': 11
  };

  const total = precios[pizza1] + precios[pizza2] + precios[pizza3];
  totalElement.textContent = `Total: $${total}`;

});


function esSitioActivo(horaApertura, horaCierre) {
            const ahora = new Date();
            const horaActual = ahora.getHours();
            return horaActual >= horaApertura && horaActual < horaCierre;
        }

        const horaApertura = 5;
        const horaCierre = 20;

        // Verificar si el sitio está activo
        const estadoElemento = document.getElementById("estado");
        if (esSitioActivo(horaApertura, horaCierre)) {
            estadoElemento.textContent = "Bienvenido a la pizzeria bro.";
            
        } else {
            estadoElemento.textContent= "Gracias por su preferencia, lo esperamos en el horario laboral";
            document.getElementById("formulario").style.display = "none";
        }


function guardarComida() {
    localStorage.setItem("pizza1", document.getElementById('pizza1').value);
    localStorage.setItem("pizza2", document.getElementById('pizza2').value);
    localStorage.setItem("pizza3", document.getElementById('pizza3').value);
}

function guardarDireccion() {
    localStorage.setItem("calle", document.getElementById('calle').value);
    localStorage.setItem("numero", document.getElementById('numero').value);
    localStorage.setItem("colonia", document.getElementById('colonia').value);
    localStorage.setItem("municipio", document.getElementById('municipio').value);
    localStorage.setItem("edo", document.getElementById('edo').value);
        
}
 
function guardarPago() {
    localStorage.setItem("n-tarjeta", document.getElementById('n-tarjeta').value);
    localStorage.setItem("cvv", document.getElementById('cvv').value);
    localStorage.setItem("fecha-exp", document.getElementById('fecha-exp').value);
}

document.addEventListener("DOMContentLoaded", function() {
    let resumen = `
        <strong> Pizzas:</strong><br>
        ${localStorage.getItem("pizza1")} <br>
        ${localStorage.getItem("pizza2")} <br><br>

        <strong> Dirección:</strong><br>
        ${localStorage.getItem("calle")} #${localStorage.getItem("numero")}, 
        ${localStorage.getItem("colonia")}, 
        ${localStorage.getItem("municipio")}, 
        ${localStorage.getItem("edo")} <br><br>

        <strong> Pago:</strong><br>
        Tarjeta terminada en ****${localStorage.getItem("n-tarjeta").slice(-4)} <br>
        Expira el ${localStorage.getItem("fecha-exp")}
    `;

    document.getElementById("resumen").innerHTML = resumen;
});


