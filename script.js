console.log("Hi there! You have some scripts")

var jets = ["Jasper", "Ephraim", "Taavi"]

document.getElementById("picker").addEventListener("click", function(event) {
    console.log("You clicked on your button!!")
    var number = Math.floor(Math.random() * jets.length)
    var chosenBrother = jets[number]
    console.log(chosenBrother)


    document.getElementById("chosen").textContent = chosenBrother + ", I pick you!!"
})