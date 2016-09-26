//SpreadSheet fyi
var sheet;

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

function generate() {
  console.log('generate'); //Testing to make sure things work
}

function gotData(data, tabletop) {
  sheet = data;
}
