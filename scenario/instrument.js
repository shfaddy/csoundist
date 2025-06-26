import Controller from './controller.js';

export default class Instrument {

static number = {};

static instance ( instrument ) {

if ( this .number [ instrument ] === undefined )
this .number [ instrument ] = 0;

return ++this .number [ instrument ] % 10 === 0 ? ++ this .number [ instrument ] : this .number [ instrument ];

};

constructor ( details ) {

this .details = details;
this .instrument = typeof details ?.instrument === 'string' && details .instrument .length ? details .instrument : 'shfaddys';
this .number = ! isNaN ( details ?.number ) ? details .number : '13';
this .instance = `${ this .number }.${ this .constructor .instance ( this .instrument ) }`;
this .controller = typeof details ?.controller === 'object' ? details .controller : {};
this .$with = new Controller ( { controls: this .controller } );
this .$score = details .csoundist .$score;

};

get $instrument () { return this .instrument };
get $number () { return this .number };
get $instance () { return this .instance };

after = 0;

$after ( { play: $ }, ... argv ) { return $ ( Symbol .for ( 'time' ), 'after', ... argv ) };

for = 1;

$for ( { play: $ }, ... argv ) { return $ ( Symbol .for ( 'time' ), 'for', ... argv ) };

$_time ( { play: $ }, preposition, time, ... argv ) {

if ( time === undefined || isNaN ( time [ 0 ] ) )
throw `${ preposition [ 0 ] .toUpperCase () + preposition .slice ( 1 ) } how long?`;

this [ preposition .toLowerCase () ] = time;

return $ ( ... argv );

};

async $_director ( { play: $ } ) {

console .log ( 'yallah' );

await $ (

'score',
`i ${ await $ ( 'instance' ) }`,
`[ ${ this .after } ]`,
`[ ${ this .for } ]`,
... await $ ( 'with', 'parameters' )

);

};

};
