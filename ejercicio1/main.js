var contactos = [];
function addPerson() {
    var age1 = parseInt(document.getElementById("age").value);
    var name1 = document.getElementById("name").value;
    var nuevo = {
        name: name1,
        age: age1
    };
    contactos.push(nuevo);
    name.value = " ";
    age.value = " ";
}
function listPeople() {
    console.log(contactos);
}
