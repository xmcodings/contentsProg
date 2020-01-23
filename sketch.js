
let div;
var height;
var width;

let personImg;

function setup()
{

  var cnv = createCanvas(windowWidth-20, 500);
  height = 500;
  width = windowWidth - 20;
  cnv.style('display', 'block');
  personImg = loadImage('resources/person.png');
  //cnv.parent('sketch-holder');
  background(255, 255, 255);
}

function draw()
{

  background(0);
  
  image(personImg, width/4, height/2, Width/2, height);

  if(mouseIsPressed)
  {
   
    
  }
  //div = createButton('Hello ').size(100, 15);
  //div.html('World', true);



}



