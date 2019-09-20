// Copyright 2018-2019, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  const EqualityExplorerModel = require( 'EQUALITY_EXPLORER/common/model/EqualityExplorerModel' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LabScene = require( 'EQUALITY_EXPLORER_BASICS/lab/model/LabScene' );

  /**
   * @constructor
   */
  function LabModel() {
    EqualityExplorerModel.call( this, [ new LabScene() ] );
  }

  equalityExplorerBasics.register( 'LabModel', LabModel );

  return inherit( EqualityExplorerModel, LabModel );
} );