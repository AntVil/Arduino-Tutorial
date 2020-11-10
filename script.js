
let code = `
int x = 10;

void setup(){

}

void loop(){

    if(x == 2){

    }
}
`.trim();

const keywords = ["void", "int", "float", "if", "for", "while", "pinMode", "INPUT", "OUTPUT", "digitalRead", "digitalWrite", "analogRead", "analogWrite", "HIGH", "LOW"];
//const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const analogPin = ["A0", "A1", "A2", "A3", "A4", "A5"];
const symbols = ["(", ")", "{", "}", "[", "]", "=", "+", "-", "*", "/", "%", "!", "&", "|"];

for(let i=0;i<keywords.length;i++){
    code = code.replaceAll(keywords[i], `<span class="codeKeyword">${keywords[i]}</span>`);
}

for(let i=0;i<symbols.length;i++){
    code = code.replaceAll(symbols[i], `<span class="codeSymbol">${symbols[i]}</span>`);
}

for(let i=0;i<analogPin.length;i++){
    code = code.replaceAll(analogPin[i], `<span class="codeSymbol">${analogPin[i]}</span>`);
}

console.log(code);