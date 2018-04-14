




function permAlone() {
    /*
    const OriginalString = document.getElementById("string").value;
    let finalArray = [];
    originalArray = Array.from(OriginalString);
    console.log(originalArray);
    let position = 0;
*/
    // Create a regex to match repeated consecutive characters.
    var regex = /(.)\1+/g;

    // Split the string into an array of characters.
    let str = document.getElementById("string").value;
    let arr = Array.from(str);//same as the next commente line
    //var arr = str.split('');
    let permutations = [];
    let tmp;

    // Return 0 if str contains same character.
    if (str.match(regex) !== null && str.match(regex)[0] === str) return 0;
    //the first place in match result match[0] represents the entire matched string


    // Function to swap variables' content.
    function swap(index1, index2) {
        console.log("now runs swap with i",index1,"and arrayLength-1",index2);
        tmp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = tmp;
    };

    // Generate arrays of permutations using the algorithm.
    function generate(arrayLength) {
        if (arrayLength === 1) {
            // We use join as we create  the permutation arrays - to strings
            permutations.push(arr.join(''));
        } else {
            for (let i = 0; i != arrayLength; ++i) {
                console.log("length", arrayLength);
                console.log("i", i);

                generate(arrayLength - 1);
                swap(arrayLength % 2 ? 0 : i, arrayLength - 1);
                //if array length is even, use 0, otherwise use i - part of the Heap algorithm
                //swap runs after inserting new array in permutations
            };
        };
        console.log("permutations", permutations);
    };

    generate(arr.length);

    // Filter the array of repeated permutations.
    var filtered = permutations.filter(function (string) {
        return !string.match(regex);
    });

    // Return how many have no repetitions.
    return filtered.length;
}





/*
my function for regex is working but not needed. On the net I found this:

re=/(.)\1+/g     - which is way much better
it takes a group of any characther and checks to see if it followed by the same group

   
        /*The function bellow checks if you have any letter repeating consequtively in each string
        it checks each letter with the let ...of iterator over strings
        if it founds repeating letters, flag is set to true

        // console.log(re.test(permutation));
           /* VERY IMPORTANT - if you use test() or exec() once with "global"- g set, it will advance
           the index explanation on MDN - even if you use it in console.log!!!  - NOT TO USE CONSOLE.LOG WITH TEST OR EXEC
           

        
       function checkRegexInResult(str) {
        let permutation = str;
        let flag = false;
        let testing = true;
        for (let v of permutation) {
            console.log(v);
            let testedLetter = v;
            re = new RegExp(`${testedLetter}{2}`, 'g');
            console.log(re);
              testing = re.test(permutation);
            console.log("testing",testing);
            if (testing == true) {
                console.log("test");
                flag = true;
            };
        };
        console.log("founddouble",flag);
        return flag;
    };


     /*this function takes one new char and forms all the combinations with it, 
        it moves it around except in the place where it was found (it talkes it out
            of the place where it was found and puts it in the other places)
            , it makes strings of every combination

    function insertCharInsubPerm(ch, arr) {
       
        
        let char = ch;
        let subPermutation = arr;
        let temp = [];
        let temp2 = ""; //same as temp but as string;
        let dest = [];
        let re=/(.)\1+/g;
        console.log(char);





        
/* the next loop didn't work as expected because it was not recursive. It seams that I didn't
manage to reproduce the Heap algorithm. I've used a code that I found on freeCodeCamp hints and 
tried to figure it out how it works, My code did have originaly the keeping in place of one character (keeping the 
    commented out ifs), 
switching between other charachters and only push the filtered arrays. the problem is that it didn't know how to
do it recusevily so it didn't return all the options.

        for (let i = 0; i < arr.length; i++) {
           // if (i !== position) {
                temp = subPermutation.slice(0);
                console.log("position", position);
                console.log("temp[i]", temp[i]);
                lastCharTemp = temp[i];//moves the  character be eplaced to a temp location
                temp[i] = temp[position];//puts the moving character in its place
                temp.splice(i, 1, char);
                temp[position] = lastCharTemp;//puts the replaced character in place of the moving one
                temp2 = temp.join('');
                console.log("temp2",temp2);
               // dest.push(temp2);
               console.log(temp2.match(re)) ;

                if (temp2.match(re)==null) {
                    dest.push(temp2);
                };
                
           // };
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

    return finalArray;
}
*/

function runProgram() {

    document.getElementById("result").innerHTML = permAlone();
}

 // permAlone('aab');

