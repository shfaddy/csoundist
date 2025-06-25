#!/usr/bin/env node

import Csoundist from '@shfaddy/csoundist';
import Scenarist from '@shfaddy/scenarist/shell';

try {

await new Scenarist ( new Csoundist ) .publish ();

} catch ( error ) {

console .error ( "Scenarist got killed!" );
console .error ( error );

}
