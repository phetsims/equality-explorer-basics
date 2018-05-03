// Copyright 2018, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var EqualityExplorerModel = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerModel' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LabScene = require( 'EQUALITY_EXPLORER_BASICS/lab/model/LabScene' );

  /**
   * @constructor
   */
  function LabModel() {
    EqualityExplorerModel.call( this, [ new LabScene() ] );
  }

  equalityExplorerBasics.register( 'LabModel', LabModel );

  return inherit( EqualityExplorerModel, LabModel );
} );