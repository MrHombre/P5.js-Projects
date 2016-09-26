//SpreadSheet fyi
var sheet;

var txt = '$$Exclamation$$! they said $$Adverb$$ as they jumped into their $$Noun$$ and flew off with their $$Adjective$$ $$PluralNoun$$.';

function setup() {
  noCanvas(); //Remove that Canvas
  Tabletop.init( {
    key: '1grB0v27HNKxTppSnBL4zQ67I00v_vfrL40hUNy5MnI8',
      callback: gotData,
      simpleSheet: true
    });

    var button = createButton('generate madlib'); //Gen button
    button.mousePressed(generate);
}

function replacer(match, pos) {

}

function generate() {
  //console.log('generate'); //Testing to make sure things work
  var madlib = txt.replace(/\$\$(.*?)\$\$/g, replacer);
  createP(madlib);
}

function gotData(data, tabletop) {
  sheet = data;
}
