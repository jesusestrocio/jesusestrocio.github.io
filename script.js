// Stack Data Structure
class Stack {
    constructor() {
      this.items = []; 
    }
  
    // Push operation
    push(element) {
      this.items.push(element);
    }
  
    // Pop operation
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty"; 
      }
      return this.items.pop();
    }
  
    // Peek operation
    peek() {
      if (this.isEmpty()) {
        return 0; 
      }
      return this.items[this.items.length - 1];
    }
  
    // isEmpty operation
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Size operation
    size() {
      return this.items.length;
    }
  
    // Print the stack 
    print() {
    //   console.log(this.items);
    return this.items
    }
    inputFieldPrint(){
        let output = '';
        for(let i in this.items){
            output += this.items[i];
        }
        return output;
    }

  }
  
  // Example Usage
const stack = new Stack();

const closeBracketButton = document.querySelector(".close-bracket");

closeBracketButton.addEventListener("click", (event) => {
  console.log('check open bracket')

});


// Add all valid values in a hash map
let map = {};

map['0'] = 'value 0';
map['1'] = 'value 1';
map['2'] = 'value 2';
map['3'] = 'value 3';
map['4'] = 'value 4';
map['5'] = 'value 5';
map['6'] = 'value 6';
map['7'] = 'value 7';
map['8'] = 'value 8';
map['9'] = 'value 9';

map['('] = 'value (';
map[')'] = 'value )';
map['%'] = 'value %';
map['/'] = 'value /';
map['*'] = 'value *';
map['-'] = 'value -';
map['+'] = 'value +';
map['.'] = 'value .';

map['Backspace'] = 'value backshift';
// map['Shift'] = 'value shift';

let inputField = '' ;

document.addEventListener("keydown", function(event) {
    console.log(event.key)
    
    if (event.key === "Backspace"){
        if (stack.peak() === 0) {
          console.log('Stack Empty')
        }else {
          stack.pop()
          console.log(inputField)
        }
    }

    if (event.key in map){
      if (parseInt(event.key) > 0 || parseInt(event.ke) < 9){
        stack.push(parseInt(event.key))
      }else {
        stack.push(event.key)
      }
        console.log(stack.print())
        inputField = stack.inputFieldPrint();

        document.querySelector('.input-area').value = inputField;
        console.log('Valid Key')

    }
    else if (event.key == 'Enter'){
   
      let no1 = '';
      let no2 = '';
      let symbol = '';
      const stackLen = stack.size();

      for (let i = 0; i < stackLen ; i++) {
        let currentValue = stack.pop();
        console.log(currentValue, no1, no2, symbol)
        if (typeof currentValue == 'number'){
          console.log('Current Value Is A Number')
          if (typeof no1 == 'number'){
            console.log('Third Loop')
            if (symbol == '+'){
              no1 = no1 + currentValue
              console.log(no1, 'Addition')
            }

            if (symbol == '-'){
              no1 = no1 - currentValue
              console.log(no1, 'Subtraction')
            }
            
            if (symbol == '*'){
              no1 = no1 * currentValue
              console.log(no1, 'Multiplication')
            }

            if (symbol == '/'){
              no1 = currentValue / no1
              console.log(no1, 'Division')
            }

          }else {
            no1 = currentValue
          }
        } else {
          symbol = currentValue
        }
          }
    }
    else {
        console.log('Invalid Key')
    }

  });

