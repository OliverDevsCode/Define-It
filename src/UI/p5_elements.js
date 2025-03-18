function createCustomButton(label,x,y,colour){
  let button = createButton(label)
  let xOFFSET = (windowWidth - width) / 2;
  let yOFFSET = (windowHeight - height) / 2;
  button.position(x+xOFFSET,y+yOFFSET)
  button.style("font-family","Inter")
  button.style("font-size","40px")
  button.style("border-radius","10px")
  button.style("color",colour)
  // Add hover effects
  button.mouseOver(() => {
    button.style("background-color", colour); 
    button.style("color", "white"); 
  });

  button.mouseOut(() => {
    button.style("background-color", "white"); 
    button.style("color", colour); 
  });
  return button;
}

function hideElements(){
  p5_elements.forEach(element => {
    element.hide()
  });
}