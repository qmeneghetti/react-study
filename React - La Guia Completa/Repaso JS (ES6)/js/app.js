// Template Strings

const nombre = 'Quetzal';
const trabajo = 'Desarrollador Web';

// concatenar JS
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo);
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// concatenar multiples lineas
const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                 '<li> Nombre: ' + nombre + '</li>' +
//                 '<li> Trabajo: ' + trabajo + '</li>' +
//             '</ul>';

let html = `
        <ul>
            <li> Nombre: ${nombre} </li>
            <li> Trabajo: ${trabajo} </li>
        </ul>
    `;
    
contenedorApp.innerHTML = html;