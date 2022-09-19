// Copyright 2018-2021, University of Colorado Boulder

// @ts-nocheck
/**
 * The sole scene in the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Range from '../../../../dot/js/Range.js';
import sphere_png from '../../../../equality-explorer/images/sphere_png.js';
import sphereShadow_png from '../../../../equality-explorer/images/sphereShadow_png.js';
import square_png from '../../../../equality-explorer/images/square_png.js';
import squareShadow_png from '../../../../equality-explorer/images/squareShadow_png.js';
import BasicsScene from '../../../../equality-explorer/js/basics/model/BasicsScene.js';
import ObjectVariable from '../../../../equality-explorer/js/basics/model/ObjectVariable.js';
import triangle_png from '../../../images/triangle_png.js';
import triangleShadow_png from '../../../images/triangleShadow_png.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';

// constants
const VARIABLE_RANGE = new Range( 1, 20 );

export default class LabScene extends BasicsScene {

  constructor() {

    const variables = [

      // name, image, shadow
      new ObjectVariable( 'sphere', sphere_png, sphereShadow_png, {
        value: 1,
        range: VARIABLE_RANGE
      } ),
      new ObjectVariable( 'square', square_png, squareShadow_png, {
        value: 2,
        range: VARIABLE_RANGE
      } ),
      new ObjectVariable( 'triangle', triangle_png, triangleShadow_png, {
        value: 3,
        range: VARIABLE_RANGE
      } )
    ];

    super( variables, {
      debugName: 'lab',
      numberOfSnapshots: 4 // fewer snapshots in this screen because we're short on vertical space
    } );
  }
}

equalityExplorerBasics.register( 'LabScene', LabScene );