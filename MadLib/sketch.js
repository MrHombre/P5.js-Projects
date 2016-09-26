//SpreadSheet fyi
var sheet;

function setup() {

  Tabletop.init( {
    key: '1grB0v27HNKxTppSnBL4zQ67I00v_vfrL40hUNy5MnI8',
      callback: gotData,
      simpleSheet: true
    } )
}

function gotData(data, tabletop) {
  sheet = data;
}
