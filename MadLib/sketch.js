function setup() {

  Tabletop.init( {
    key: '0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE',
      callback: function(data, tabletop) {
        console.log(data)
      },
      simpleSheet: true
    } )
}
