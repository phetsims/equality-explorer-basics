// Copyright 2018, University of Colorado Boulder

/**
 * View for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var EqualityExplorerScreenView = require( 'EQUALITY_EXPLORER/common/view/EqualityExplorerScreenView' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LabSceneNode = require( 'EQUALITY_EXPLORER_BASICS/lab/view/LabSceneNode' );

  /**
   * @param {LabModel} model
   * @constructor
   */
  function LabScreenView( model ) {
    EqualityExplorerScreenView.call( this, model, {
      createSceneNode: function( scene, sceneProperty, layoutBounds, options ) {
        return new LabSceneNode( scene, sceneProperty, layoutBounds, options );
      },
      hasNegativeTermsInToolbox: false // create Node for positive terms only in the toolbox
    } );
  }

  equalityExplorerBasics.register( 'LabScreenView', LabScreenView );

  return inherit( EqualityExplorerScreenView, LabScreenView );
} );