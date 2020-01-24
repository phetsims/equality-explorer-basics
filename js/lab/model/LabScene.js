// Copyright 2018-2019, University of Colorado Boulder

/**
 * The sole scene in the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const BasicsScene = require( 'EQUALITY_EXPLORER/basics/model/BasicsScene' );
  const equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  const inherit = require( 'PHET_CORE/inherit' );
  const ObjectVariable = require( 'EQUALITY_EXPLORER/basics/model/ObjectVariable' );
  const Range = require( 'DOT/Range' );

  // images
  const sphereImage = require( 'image!EQUALITY_EXPLORER/sphere.png' );
  const sphereShadowImage = require( 'image!EQUALITY_EXPLORER/sphereShadow.png' );
  const squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );
  const squareShadowImage = require( 'image!EQUALITY_EXPLORER/squareShadow.png' );
  const triangleImage = require( 'image!EQUALITY_EXPLORER_BASICS/triangle.png' );
  const triangleShadowImage = require( 'image!EQUALITY_EXPLORER_BASICS/triangleShadow.png' );

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

  return inherit( BasicsScene, LabScene );
} );
