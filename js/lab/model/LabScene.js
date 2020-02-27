// Copyright 2018-2020, University of Colorado Boulder

/**
 * The sole scene in the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Range from '../../../../dot/js/Range.js';
import sphereImage from '../../../../equality-explorer/images/sphere_png.js';
import sphereShadowImage from '../../../../equality-explorer/images/sphereShadow_png.js';
import squareImage from '../../../../equality-explorer/images/square_png.js';
import squareShadowImage from '../../../../equality-explorer/images/squareShadow_png.js';
import BasicsScene from '../../../../equality-explorer/js/basics/model/BasicsScene.js';
import ObjectVariable from '../../../../equality-explorer/js/basics/model/ObjectVariable.js';
import inherit from '../../../../phet-core/js/inherit.js';
import triangleImage from '../../../images/triangle_png.js';
import triangleShadowImage from '../../../images/triangleShadow_png.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';

// constants
const VARIABLE_RANGE = new Range( 1, 20 );

/**
 * @constructor
 */
function LabScene() {

  const variables = [

    // name, image, shadow
    new ObjectVariable( 'sphere', sphereImage, sphereShadowImage, {
      value: 1,
      range: VARIABLE_RANGE
    } ),
    new ObjectVariable( 'square', squareImage, squareShadowImage, {
      value: 2,
      range: VARIABLE_RANGE
    } ),
    new ObjectVariable( 'triangle', triangleImage, triangleShadowImage, {
      value: 3,
      range: VARIABLE_RANGE
    } )
  ];

  BasicsScene.call( this, variables, {
    debugName: 'lab',
    numberOfSnapshots: 4 // fewer snapshots in this screen because we're short on vertical space
  } );
}

equalityExplorerBasics.register( 'LabScene', LabScene );

inherit( BasicsScene, LabScene );
export default LabScene;