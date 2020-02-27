// Copyright 2018-2019, University of Colorado Boulder

/**
 * View for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerScreenView from '../../../../equality-explorer/js/common/view/EqualityExplorerScreenView.js';
import inherit from '../../../../phet-core/js/inherit.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabSceneNode from './LabSceneNode.js';

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

export default inherit( EqualityExplorerScreenView, LabScreenView, {

  /**
   * Creates the Node for this scene.
   * @param {EqualityExplorerScene} scene
   * @param {Property.<EqualityExplorerScene>} sceneProperty - the selected scene
   * @param {BooleanProperty} equationAccordionBoxExpandedProperty
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @returns {Node}
   * @protected
   * @override
   */
  createSceneNode: function( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                             snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {
    return new LabSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }
} );