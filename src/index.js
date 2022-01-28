const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result='';
    for (let i=0; i<expr.length; i+=10) {
        let line = expr.substring(i, i+10);
        if (line === '**********') {
            result += ' ';
        } else {
            while (line[0] == '0') line = line.substring(1);
            let code = '';
            while (line.length) {
                code += (line.substring(0, 2) == '10' ? '.' : '-');
                line = line.substring(2);
            }
            result += MORSE_TABLE[code];
        }
    }
    return result;
}

module.exports = {
    decode
}