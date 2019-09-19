// Copyright 2018, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BasicsScreen = require( 'EQUALITY_EXPLORER/basics/BasicsScreen' );
  const EqualityExplorerConstants = require( 'EQUALITY_EXPLORER/common/EqualityExplorerConstants' );
  const LabScreen = require( 'EQUALITY_EXPLORER_BASICS/lab/LabScreen' );
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );

  // strings
  const equalityExplorerBasicsTitleString = require( 'string!EQUALITY_EXPLORER_BASICS/equality-explorer-basics.title' );

  SimLauncher.launch( function() {
    const sim = new Sim( equalityExplorerBasicsTitleString, [ new BasicsScreen(), new LabScreen() ], {
      credits: EqualityExplorerConstants.CREDITS
    } );
    sim.start();
  } );
} );