
let div;


function setup()
{

  var cnv = createCanvas(windowWidth-20, 500);

  cnv.style('display', 'block');
  cnv.parent('sketch-holder');
  background(255, 0, 200);
}

function draw()
{
  if(mouseIsPressed)
  {
    div = createButton('Hello ').size(100, 15);
    div.html('World', true);
  }

}



