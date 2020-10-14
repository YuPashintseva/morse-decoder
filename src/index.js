
function morzeCode(inputChar) {
    let map = new Map();
    map.set('.-', 'a' );
    map.set('-...', 'b');
    map.set('-.-.', 'c');
    map.set('-..', 'd');
    map.set('.', 'e');
    map.set('..-.', 'f');
    map.set('--.', 'g');
    map.set('....', 'h');
    map.set('..', 'i');
    map.set('.---', 'j');
    map.set('-.-', 'k');
    map.set('.-..', 'l');
    map.set('--', 'm');
    map.set('-.', 'n');
    map.set('---', 'o');
    map.set('.--.', 'p');
    map.set('--.-', 'q');
    map.set('.-.', 'r');
    map.set('...', 's');
    map.set('-', 't');
    map.set('..-', 'u');
    map.set('...-', 'v');
    map.set('.--', 'w');
    map.set('-..-', 'x');
    map.set('-.--', 'y');
    map.set('--..', 'z');
    map.set('.----', '1');
    map.set('..---', '2');
    map.set('...--', '3');
    map.set('....-', '4');
    map.set('.....','5');
    map.set('-....', '6');
    map.set('--...', '7');
    map.set('---..', '8');
    map.set('----.', '9');
    map.set('-----', '0');

    return map.get(inputChar);

}

function decode(expr) {
    var resultStr = '';
    var arr = expr.match(/.{1,10}/g);

    for (let i=0; i < arr.length; i+=1) {
        if (arr[i] === '**********') {
            resultStr+=' ';
        } else {
            var innerArray = arr[i].match(/.{1,2}/g);
            var resultStr2 = '';
            for (let j=0; j<innerArray.length; j+=1) {
                if (innerArray[j] === "10") {
                    resultStr2+="."
                } else if (innerArray[j] == "11") {
                    resultStr2+="-"
                }
            }
            //console.log('test'+resultStr2);
            resultStr+=morzeCode(resultStr2);
        }
    }

    return resultStr;
  };

//console.log(decode('11111111110000000010101010101011111111101110101010101011111111111111111111111111'))
module.exports = {
    decode
}
