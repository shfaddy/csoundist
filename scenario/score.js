export default class Score extends Map {

ticket = 0;

$_director ( { play: $ }, ... argv ) {

switch ( argv .length ) {

case 0:

return [ ... this .values () ] .join ( '\n\n' );

case 1:

return this .get ( argv .shift () );

default:

this .set ( ( ++this .ticket ) .toString (), argv .join ( ' ' ) );

return this .ticket;

}

};

$clear ( { play: $ } ) { return this .clear () };
$delete ( _, ticket ) { return this .delete ( ticket ) };

};
