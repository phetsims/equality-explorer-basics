// Copyright 2018-2020, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabScene from './LabScene.js';

class LabModel extends EqualityExplorerModel {

  constructor() {
    super( [ new LabScene() ] );
  }
}

equalityExplorerBasics.register( 'LabModel', LabModel );

export default LabModel;