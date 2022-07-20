import {users} from './data.js'

// CONECCION A LA ETIQUETA ROOT
let root = document.getElementById("root");

// VARIABLE QUE ALMACENA UN LISTADP ORDENADO HECHO CON HTML
let titulo = '<h1 class="titulo">' + 'Tabla de usuarios' + '</h1>';

let table = '<table border="1" id="tabla">' + 
                '<tr>' + '<td class="td">' + 'Id' + '</td>' + '<td class="td">' + 'User' + '</td>' + '<td class="td">' + 'E-mail' + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[0].id + '</td>' + '<td>' + users[0].username + '</td>' + '<td>' + users[0].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[1].id + '</td>' + '<td>' + users[1].username + '</td>' + '<td>' + users[1].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[2].id + '</td>' + '<td>' + users[2].username + '</td>' + '<td>' + users[2].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[3].id + '</td>' + '<td>' + users[3].username + '</td>' + '<td>' + users[3].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[4].id + '</td>' + '<td>' + users[4].username + '</td>' + '<td>' + users[4].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[5].id + '</td>' + '<td>' + users[5].username + '</td>' + '<td>' + users[5].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[6].id + '</td>' + '<td>' + users[6].username + '</td>' + '<td>' + users[6].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[7].id + '</td>' + '<td>' + users[7].username + '</td>' + '<td>' + users[7].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[8].id + '</td>' + '<td>' + users[8].username + '</td>' + '<td>' + users[8].email + '</td>' + '</tr>' +
                '<tr>' + '<td>' + users[9].id + '</td>' + '<td>' + users[9].username + '</td>' + '<td>' + users[9].email + '</td>' + '</tr>' +
             '</table>';

// SE AGREGA LA ETIQUETA ROOT DEL DOM LA VARIABLE LISTADO
root.innerHTML = titulo + table;
