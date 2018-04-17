// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BasicsScreen = require( 'EQUALITY_EXPLORER/basics/BasicsScreen' );
  var EqualityExplorerConstants = require( 'EQUALITY_EXPLORER/common/EqualityExplorerConstants' );
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var equalityExplorerBasicsTitleString = require( 'string!EQUALITY_EXPLORER_BASICS/equality-explorer-basics.title' );

  SimLauncher.launch( function() {
    var sim = new Sim( equalityExplorerBasicsTitleString, [ new BasicsScreen() ], {
      credits: EqualityExplorerConstants.CREDITS
    } );
    sim.start();
  } );
} );