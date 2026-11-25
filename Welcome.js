console.log("Welcome");

function greet(language){
    const MyObj = {
      english: "Welcome",
      czech: "Vitejte",
      danish: "Velkomst",
      dutch: "Welkom",
      estonian: "Tere tulemast",
      finnish: "Tervetuloa",
      flemish: "Welgekomen",
      french: "Bienvenue",
      german: "Willkommen",
      irish: "Failte",
      italian: "Benvenuto",
      latvian: "Gaidits",
      lithuanian: "Laukiamas",
      polish: "Witamy",
      spanish: "Bienvenido",
      swedish: "Valkommen",
      welsh: "Croeso",
    };

    return MyObj[language] || MyObj[english]
}

let result = greet("spanish");
console.log(result)