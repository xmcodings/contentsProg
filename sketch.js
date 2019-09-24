

function setup()
{
createCanvas(500,500);
background(20,40,40);

strokeWeight(10);


triangle(100,9,110,100,85,100);

quad(20,20,20,70,60,90,60,40);
quad(200,400,350,410,410,90,60,40);

rect(15,15,40,60);

ellipse(40,40,60,60);



}

function draw()
{

  background(0, 50);
  strokeWeight(5);

  stroke(255,0,0);
  triangle(mouseX, mouseY,110,100,200,100);

  strokeWeight(10);

  stroke(20,241,20);
  triangle(mouseY, mouseX,400,320,160,140);


  stroke(200,0,0);
  fill(255);
  strokeWeight(2);
  textSize(30);

  text('마우스 위치', mouseX-50,mouseY);


}
