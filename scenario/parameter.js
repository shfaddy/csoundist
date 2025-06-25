rate = 48000;

$rate ( _, rate = this .value ) {

if ( isNaN ( rate ) || rate < 0 )
throw "Sample rate must be a positive number";

return this .value = parseFloat ( rate );

};
