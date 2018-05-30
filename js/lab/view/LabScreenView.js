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
      hasNegativeTermsInToolbox: false // only positive terms in the toolbox
    } );
  }

  equalityExplorerBasics.register( 'LabScreenView', LabScreenView );

  return inherit( EqualityExplorerScreenView, LabScreenView, {

    /**
     * Creates the Node for this scene.
     * @param {EqualityExplorerScene} scene
     * @param {Property.<EqualityExplorerScene>} sceneProperty - the selected scene
     * @param {Bounds2} layoutBounds
     * @param {Object} [options]
     * @returns {Node}
     * @protected
     * @override
     */
    createSceneNode: function( scene, sceneProperty, layoutBounds, options ) {
      return new LabSceneNode( scene, sceneProperty, layoutBounds, options );
    }
  } );
} );