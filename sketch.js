
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

  for( var i = 0; i < rainArray.length; i++){ 
    
    rainArray[i].outOfsight()
    if ( rainArray[i].isOffSight == true) {
      rainArray.splice(i, 1); 
    }
 }
 //console.log("size = " + rainArray.length);
 

}

function mousePressed()
{
  //div = createButton('Hello ').size(100, 15);
  //div.html('World', true);

  var newRainDrop = new RainDrop(Math.random()*width, 0);
  rainArray.push(newRainDrop);
  //console.log("Mouse Pressed");

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
}

class RainDrop
{

  constructor(xpos, ypos)
  {
    this.xpos = xpos;
    this.ypos = ypos;
    this.speed = 0.2;
    this.accel = 0.02;
    this.isOffSight = false;
    this.size = getRandomInt(10,15);

  }

  draw() {
   
    fill(255);
    noStroke();
    push();
    translate(this.xpos, this.ypos);
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 0, 2, this.size);
      rotate(this.speed);
    }
    pop();
    //console.log("drawing" + this.xpos);
    
  }

  update()
  {
    this.ypos = this.ypos + this.speed;
    this.speed = this.speed + this.accel; 
  }

  outOfsight()
  {
    if(this.ypos > height)
    {
      this.isOffSight = true;
    }
  }


}