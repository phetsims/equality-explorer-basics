// Copyright 2018-2026, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import Tandem from '../../../../tandem/js/Tandem.js';
import LabScene from './LabScene.js';

export default class LabModel extends EqualityExplorerModel {

  public constructor( tandem: Tandem ) {

    const scenes = [
      new LabScene( tandem.createTandem( 'labScene' ) )
    ];

    super( scenes, tandem );
  }
}
