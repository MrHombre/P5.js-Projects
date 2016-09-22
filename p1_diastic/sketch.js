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

    var phrase = diastic(seed.value(), words);
    //createP(seed.value());
    //createP(srctxt);
  });





}
