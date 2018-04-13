




function permAlone(str) {
    const OriginalString = document.getElementById("string").value;
    let finalArray = [];
    originalArray = Array.from(OriginalString);
    console.log(originalArray);

    let position = 0;


    function insertCharInsubPerm(ch, arr) {
        /*this function takes one new char and forms all the combinations with it, 
        it moves it around except in the place where it was found (it talkes it out
            of the place where it was found and puts it in the other places)
            , it makes strings of every combination


        */
        let char = ch;
        let subPermutation = arr;
        let temp = [];
        let dest = [];



        console.log(char);
        for (let i = 0; i < arr.length; i++) {
            if (i !== position) {
                temp = subPermutation.slice(0);
                console.log("position", position);
                console.log("temp[i]", temp[i]);
                lastCharTemp = temp[i];//moves the  character be eplaced to a temp location
                temp[i] = temp[position];//puts the moving character in its place
                temp.splice(i, 1, char);
                temp[position] = lastCharTemp;//puts the replaced character in place of the moving one
                dest.push(temp.join(''));
            };
        };
        console.log(dest);
        finalArray.push(dest);
    };

    for (let j = 0; j < originalArray.length; j++) {
        //calls the function that moves each character for every character in the string
        position = j;
        console.log(position);
        insertCharInsubPerm(originalArray[j], originalArray);
    };



    console.log("finalArray", finalArray);

    function checkRegexInResult() {
        let permutation = "aabc";
        for (let v of permutation) {
            console.log(v);


            let testedLetter = "a";
            re = new RegExp(`${testedLetter}{2}`, 'g');
            console.log(re);
            console.log(re.test(permutation));
        }
    };
    checkRegexInResult();
    return finalArray;
}

function runProgram() {

    document.getElementById("result").innerHTML = permAlone();
}

 // permAlone('aab');

