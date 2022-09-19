// Copyright 2018-2020, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabScene from './LabScene.js';

export default class LabModel extends EqualityExplorerModel<LabScene> {

  public constructor() {
    super( [ new LabScene() ] );
  }
}

equalityExplorerBasics.register( 'LabModel', LabModel );