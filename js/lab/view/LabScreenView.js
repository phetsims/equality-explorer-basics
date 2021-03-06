// Copyright 2018-2021, University of Colorado Boulder

/**
 * View for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerScreenView from '../../../../equality-explorer/js/common/view/EqualityExplorerScreenView.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabSceneNode from './LabSceneNode.js';

class LabScreenView extends EqualityExplorerScreenView {

  /**
   * @param {LabModel} model
   */
  constructor( model ) {
    super( model, {
      hasNegativeTermsInToolbox: false // only positive terms in the toolbox
    } );
  }

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
  createSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                   snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {
    return new LabSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );
  }
}

equalityExplorerBasics.register( 'LabScreenView', LabScreenView );

export default LabScreenView;