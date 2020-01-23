
let div;
var height;
var width;
var rainArray;
let personImg;

function setup()
{

  var cnv = createCanvas(windowWidth-20, 500);
  height = 500;
  width = windowWidth - 20;
  cnv.style('display', 'block');
  personImg = loadImage('resources/person.png');
  //cnv.parent('sketch-holder');
  imageMode(CORNERS);
  background(255, 255, 255);


  rainArray = [];
  
}

function draw()
{
  background(0);
  
  
  image(personImg, width/4, height/2, width/4 * 3, height - 5);

  
  //div = createButton('Hello ').size(100, 15);
  //div.html('World', true);

  rainArray.forEach(function(element){
    element.update(); 
  });

  rainArray.forEach(function(element){
    element.draw(); 
  });

}

function mousePressed()
{
  //div = createButton('Hello ').size(100, 15);
  //div.html('World', true);

  var newRainDrop = new RainDrop(Math.random()*width, 0);
  rainArray.push(newRainDrop);
  console.log("Mouse Pressed");

}

class RainDrop
{

  constructor(xpos, ypos)
  {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = 1;

  }

  draw() {
   
    fill(255);
    ellipse(this.xpos, this.ypos, 2, 4);
    console.log("drawing" + this.xpos);
    
  }

  update()
  {
    this.ypos = this.ypos - this.speed;
  }

}