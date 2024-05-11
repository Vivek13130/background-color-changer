
function random_c_generator() {
      let r = Math.floor(Math.random() * 255);
      let g = Math.floor(Math.random() * 255);
      let b = Math.floor(Math.random() * 255);
      // let alpha = Math.random().toFixed(1);
      //  to fixed will only generate one digit now after the decimal

      let color_string = `rgba(${r}, ${g}, ${b})`;
      
      return color_string;
}

let html_body = document.getElementsByTagName('body')[0];
let buttons = document.querySelectorAll('.color-box')

let previous_color_buttons = document.querySelectorAll('.previous-color')

let color_array = new Array(4);  
//  this array will store the color values :


//  this is initial setup of colors 
for (let i = 0; i < 4; i++) {
      color_array[i] = random_c_generator();
      buttons[i].style.backgroundColor = color_array[i];
      previous_color_buttons[i].style.backgroundColor = color_array[i];

      buttons[i].addEventListener('click', () => {
            html_body.style.backgroundColor = color_array[i];

            // clear all other previous colors : 
            for (let j = 0; j < 4; j++){
                  previous_color_buttons[j].style.backgroundColor = 'rgba(0,0,0,0)';
                  previous_color_buttons[j].style.border = 'none';
            }

            // now set the previous color to only the active one 
            previous_color_buttons[i].style.backgroundColor = color_array[i];
            previous_color_buttons[i].style.border = '2px solid white';
            color_array[i] = random_c_generator();
            buttons[i].style.backgroundColor = color_array[i];
      })
}


//  now we have to implement the click event :

