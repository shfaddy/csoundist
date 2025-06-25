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
this .$controller = new Controller ( {

controls: this .controller

} );

};

get $instrument () { return this .instrument };
get $number () { return this .number };
get $instance () { return this .instance };

};
