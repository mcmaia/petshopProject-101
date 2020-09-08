//This is an array. It contains objects with properties -> name; type, race, age, gender
let pets = [
    {
    name: 'Fids',
    type: 'Dog',
    race: 'Shitzsu',
    age: 2,
    gender: 'Male',
    vaccinated: true
    },
    {
    name: 'Lorena',
    type: 'Dog',
    race: 'Golden',
    age: 9,
    gender: 'Female',
    vaccinated: false
    }
];


//Here I am listing the properties from the array.
function listingPets(){
    for (let i = 0; i < pets.length; i++) {
        console.log("Name: " + pets[i].name)
        console.log("Tyoe: " + pets[i].type)
        console.log("Race: " + pets[i].race)
        console.log("Age: " + pets[i].age)
        console.log("Gender: " + pets[i].gender)
    };
};


//Validating the data
function validatingDataPets(newPet){
    return (newPet.name && newPet.type && newPet.race && newPet.age && newPet.gender) 
};

//Here I created a function in which I add a new object in the array
function addPet(...objetcPet) {
    if(typeof objetcPet == "object"){ //verifying
        if(validatingDataPets(...objetcPet)){ 
            pets.push(...objetcPet)
            listingPets();
        }else{
            console.log("The object does not have all the properties nedeed");
        };
    }else{
        console.log("Please, insert a valid object");

    };
};


let newPetObj = { //New Pet
    name: "Nina",
    type: "bird",
    race: "cockatiel",
    age: 10,
    gender: "Female",
    
};

let newPetObjTwo = { //New Pet 2
    name: "Sarah",
    type: "Cat",
    race: "unknown",
    age: 29,
    gender: "Female"
};

 addPet(newPetObj, newPetObjTwo); //adding two objects to an array

