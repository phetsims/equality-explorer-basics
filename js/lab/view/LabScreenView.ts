// Copyright 2018-2022, University of Colorado Boulder

/**
 * View for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerScreenView from '../../../../equality-explorer/js/common/view/EqualityExplorerScreenView.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabSceneNode, { LabSceneNodeOptions } from './LabSceneNode.js';
import Property from '../../../../axon/js/Property.js';
import EqualityExplorerScene from '../../../../equality-explorer/js/common/model/EqualityExplorerScene.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import LabModel from '../model/LabModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import EqualityExplorerSceneNode from '../../../../equality-explorer/js/common/view/EqualityExplorerSceneNode.js';

export default class LabScreenView extends EqualityExplorerScreenView {

  public constructor( model: LabModel, tandem: Tandem ) {
    super( model, tandem, {
      hasNegativeTermsInToolbox: false // only positive terms in the toolbox
    } );
  }

  /**
   * Creates the Node for this scene.
   */
  public override createSceneNode( scene: EqualityExplorerScene,
                                   sceneProperty: Property<EqualityExplorerScene>,
                                   equationAccordionBoxExpandedProperty: Property<boolean>,
                                   snapshotsAccordionBoxExpandedProperty: Property<boolean>,
                                   layoutBounds: Bounds2,
                                   providedOptions?: LabSceneNodeOptions ): EqualityExplorerSceneNode {
    return new LabSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, providedOptions );
  }
}

equalityExplorerBasics.register( 'LabScreenView', LabScreenView );