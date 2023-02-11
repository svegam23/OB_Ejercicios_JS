//Actividad 2: lista con nombre, edad, ¿eres desarrollador?, fecha, libro favorito

let fecha = new Date(1990, 10, 23);
const miLista = ["Stefania", 32, false, fecha] 

console.log(miLista);

//Libro favorito: Objeto

let fechaPublicacion = new Date(2012, 0, 05 )
const libro = {
    nombre: "Yo antes de tí",
    autor: "Jojo Moyes",
    fecha: fechaPublicacion,
    url: "https://takemybreathawayblog.files.wordpress.com/2014/10/jojo-moyes-yo-antes-de-ti.pdf"
}

console.log(libro)