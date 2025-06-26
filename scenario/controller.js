export default class Controller extends Map {

constructor ( details ) {

super ( typeof details ?.controls === 'object' ? Object .entries ( details .controls ) : undefined );

};

can = true;

async $_director ( { play: $ }, ... argv ) {
if ( typeof argv [ 0 ] === 'symbol' )
return;

if ( this .can && ! argv .length )
throw `With which control?
Available controls are:

${ [ ... this ] .map (

control => `* ${ control .join ( ' = ' ) }`

) .join ( '\n' ) }`;

if ( ! this .can )
return this .can = true, ( await $ ( Symbol .for ( 'senior' ) ) ) ( ... argv );

const control = argv .shift ();
const value = argv .shift ();

if ( ! this .has ( control ) )
throw "Unknown control: " + control;

if ( value === undefined )
throw `With ${ control } set to what value?`;

this .set ( control, value );

this .can = false;

return $ ( ... argv );

};

$parameters () {

return [ ... this ] .map (

( [ control, value ] ) => isNaN ( `${ value }` [ 0 ] ) ? `"${ value }"` : `[${ value }]`

);

};

};
