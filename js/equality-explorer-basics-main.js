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
  var Sim = require( 'JOIST/Sim' );
  var SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  var equalityExplorerBasicsTitleString = require( 'string!EQUALITY_EXPLORER_BASICS/equality-explorer-basics.title' );

  //TODO fill in credits, https://github.com/phetsims/equality-explorer-basics/issues/2
  var options = {
    credits: {
      leadDesign: 'Amanda McGarry',
      softwareDevelopment: 'Chris Malley (PixelZoom, Inc.)',
      team: 'Diana Berenice L\u00f3pez Tavares, Ariel Paul, Kathy Perkins, Argenta Price, Beth Stade, David Webb',
      qualityAssurance: '',
      graphicArts: 'Mariah Hermsmeyer, Cheryl McCutchan',
      thanks: ''
    }
  };

  SimLauncher.launch( function() {
    var sim = new Sim( equalityExplorerBasicsTitleString, [ new BasicsScreen() ], options );
    sim.start();
  } );
} );