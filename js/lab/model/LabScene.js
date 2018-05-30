// Copyright 2018, University of Colorado Boulder

/**
 * The sole scene in the 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BasicsScene = require( 'EQUALITY_EXPLORER/basics/model/BasicsScene' );
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var inherit = require( 'PHET_CORE/inherit' );
  var ObjectVariable = require( 'EQUALITY_EXPLORER/basics/model/ObjectVariable' );
  var Range = require( 'DOT/Range' );

  // images
  var sphereImage = require( 'image!EQUALITY_EXPLORER/sphere.png' );
  var sphereShadowImage = require( 'image!EQUALITY_EXPLORER/sphereShadow.png' );
  var squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );
  var squareShadowImage = require( 'image!EQUALITY_EXPLORER/squareShadow.png' );
  var triangleImage = require( 'image!EQUALITY_EXPLORER_BASICS/triangle.png' );
  var triangleShadowImage = require( 'image!EQUALITY_EXPLORER_BASICS/triangleShadow.png' );

  // constants
  var VALUE_RANGE = new Range( 0, 20 );

  /**
   * @constructor
   */
  function LabScene() {

    var variables = [

      // name, image, shadow
      new ObjectVariable( 'sphere', sphereImage, sphereShadowImage, {
        value: 1,
        range: VALUE_RANGE
      } ),
      new ObjectVariable( 'square', squareImage, squareShadowImage, {
        value: 2,
        range: VALUE_RANGE
      } ),
      new ObjectVariable( 'triangle', triangleImage, triangleShadowImage, {
        value: 3,
        range: VALUE_RANGE
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
