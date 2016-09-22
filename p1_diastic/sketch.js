//Diastic Machine algorithm
function diastic(seed, words) {

  var phrase = "";

  for (var i = 0; i < seed.length; i++) {
    var c = seed.charAt(i);

    for (var j = 0; j < words.length; j++) {
      if (wrods[j].charAt(i) == c) {
        phrase += words[j];
        //console.log(words[j]);
        break;
      }
    }
  }
  return phrase;
}



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
    createP(phrase);
    //createP(seed.value());
    //createP(srctxt);
  });





}
