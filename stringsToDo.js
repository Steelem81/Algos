function removeBlanks(string){
    var newString = "";
    for(var i=0; i<string.length; i++){
        string[i]!=' ' ? newString += string[i] : null 
    }
    return newString
}

function getDigits(string) {
    var digits = ""
    for(i=0; i<string.length; i++){
        var temp = Number(string[i])
        if(!isNaN(temp)){
        digits += temp
        }

    }
    return digits
}

function acronyms(string){
    var acronym = "";
    var splitString = string.split(" ")
    for(var i=0; i < splitString.length; i++){
        acronym += splitString[i][0].toUpperCase();
        // acronym += toUpperCase(splitString[i][0])
    }
    return acronym;
    
}

function countNonSpaces(string){
    var sum = 0
    for(i=0; i<string.length; i++){
        string[i] != ' '? sum += 1: sum+=0
    }
    return sum;
}

function removeShorterStrings(array, number) {
    var newArray = []
    for(i=0; i<array.length; i++){
        array[i].length>=number ? newArray.push(array[i]) :null
    }
    return newArray
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(getDigits('abc8c0d1ngd0j0!8'));
console.log(acronyms("there's no free lunch - gotta pay yer way."));
console.log(acronyms("Live from New York, it's Saturday Night!"));
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))