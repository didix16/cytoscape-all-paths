const impl = require('./collection');

// registers the extension on a cytoscape lib ref
let register = function( cytoscape ){
  if( !cytoscape ){ return; } // can't register if cytoscape unspecified

  cytoscape( 'collection', 'cytoscapeAllPaths', impl.allPaths ); // register with cytoscape.js
  cytoscape( 'collection', 'cytoscapeAllPathsTo', impl.allPathsTo)
};

if( typeof cytoscape !== 'undefined' ){ // expose to global cytoscape (i.e. window.cytoscape)
  register( cytoscape );
}

module.exports = register;
