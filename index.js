const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
    return cats.slice(); 
}


function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats.slice(); 
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats.slice(); 
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats.slice(); 
}

function appendCat(name) {
    return [...cats, name];
}

function prependCat(name) {
    return [name, ...cats]; 
}

function removeLastCat() {
    return cats.slice(0, -1); 
}

function removeFirstCat() {
    return cats.slice(1); 
}
