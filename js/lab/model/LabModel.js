// Copyright 2018-2020, University of Colorado Boulder

/**
 * Model for the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import EqualityExplorerModel from '../../../../equality-explorer/js/common/model/EqualityExplorerModel.js';
import inherit from '../../../../phet-core/js/inherit.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import LabScene from './LabScene.js';

/**
 * @constructor
 */
function LabModel() {
  EqualityExplorerModel.call( this, [ new LabScene() ] );
}

equalityExplorerBasics.register( 'LabModel', LabModel );

inherit( EqualityExplorerModel, LabModel );
export default LabModel;