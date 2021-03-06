var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");
planets.forEach(function(p) {
    el.innerHTML = planets
});

// Use the map method to create a new array where the first letter of each planet is capitalized

var newPlanets = planets.map(function(x) {
    return x.charAt(0).toUpperCase() + x.substr(1);
});
console.log("newPlanets", newPlanets);


// Use the filter method to create a new array that contains planets with the letter 'e'
var newPlanets = planets.filter(function(e) {
    return e.includes("e");
});
console.log("newPlanets", newPlanets);


// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var newWords = words.reduce(function(first, second) {
    return first + " " + second
});
console.log("newWords" + " =", newWords);