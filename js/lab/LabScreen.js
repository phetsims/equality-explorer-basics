// Copyright 2018, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var EqualityExplorerColors = require( 'EQUALITY_EXPLORER/common/EqualityExplorerColors' );
  var inherit = require( 'PHET_CORE/inherit' );
  var Property = require( 'AXON/Property' );
  var Screen = require( 'JOIST/Screen' );
  var LabModel = require( 'EQUALITY_EXPLORER_BASICS/lab/model/LabModel' );
  var LabScreenView = require( 'EQUALITY_EXPLORER_BASICS/lab/view/LabScreenView' );

  // strings
  var screenLabString = require( 'string!EQUALITY_EXPLORER_BASICS/screen.lab' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function LabScreen( options ) {

    options = _.extend( {
      name: screenLabString,
      backgroundColorProperty: new Property( EqualityExplorerColors.BASICS_SCREEN_BACKGROUND )
      //TODO homeScreenIcon
    }, options );

    Screen.call( this,
      function() { return new LabModel(); },
      function( model ) { return new LabScreenView( model ); },
      options
    );
  }

  equalityExplorerBasics.register( 'LabScreen', LabScreen );

  return inherit( Screen, LabScreen );
} );