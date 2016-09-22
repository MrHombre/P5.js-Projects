var srctxt;
var words;

function preload() {
  srctxt = loadStrings('text.txt');
}


function setup() {
  noCanvas();
  srctxt = join(srctxt, ' ');
  words = splitTokens(srctxt, ' ,!.?');

  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    createP(seed.value());
    createP(srctxt);
  });





}
