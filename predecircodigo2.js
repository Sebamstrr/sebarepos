function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//console.log imprime informacion personal ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]//
/*
diagrama en t 
Variables  |  Valores
auntContactInfo  ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345]

*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//console.log inprime informacion personal//
/*
diagrama en t 
variable | valores
produce  ["manzanas", "naranjas"];
frozen  ["brócoli", "helado"]
frozen  ["brócoli", "helado","croqueta de papa"]

*/

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//console.log inprime informacion personal//
/*
diagrama en t 
variable | valores 
movieLibrary  ["Bambi", "E.T.", "Toy Story"]
movieLibrary  ["Bambi", "E.T.", "Toy Story", "Zoro"]
movieLibrary  ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]

*/
