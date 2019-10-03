interface Persona{
    name: string,
    age: number
}

let contactos:Persona[]=[];

function addPerson(){

    let age1=parseInt((<HTMLInputElement>document.getElementById("age")).value);
    let name1=(<HTMLInputElement>document.getElementById("name")).value;
    let nuevo:Persona = {
        name: name1,
        age: age1
    }
    contactos.push(nuevo);
    
}

function listPeople(){
   
   console.log(contactos); 
    
}