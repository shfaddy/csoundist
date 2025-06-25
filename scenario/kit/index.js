import { readdir as list } from 'node:fs/promises';
import { parse } from 'node:path';

export default class Kit {

async $_producer ( _, { csoundist } ) {

const directory = parse ( new URL ( import .meta .url ) .pathname ) .dir + '/';

for ( const design of ( await list ( directory ) )
.filter ( file => file .endsWith ( '.instr.js' ) )
.map ( file => [ file .slice ( 0, -( '.instr.js' .length ) ), directory + file ] ) ) {

const [ factory ] = design;

this [ '$' + factory ] = await csoundist .get ( ... design );

}

};

};
