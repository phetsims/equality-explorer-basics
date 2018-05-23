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

  // images
  var sphereImage = require( 'image!EQUALITY_EXPLORER/sphere.png' );
  var sphereShadowImage = require( 'image!EQUALITY_EXPLORER/sphereShadow.png' );
  var squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );
  var squareShadowImage = require( 'image!EQUALITY_EXPLORER/squareShadow.png' );
  //TODO replace with triangle, see https://github.com/phetsims/equality-explorer-basics/issues/3
  var orangeImage = require( 'image!EQUALITY_EXPLORER/orange.png' );
  var orangeShadowImage = require( 'image!EQUALITY_EXPLORER/orangeShadow.png' );

  /**
   * @constructor
   */
  function LabScene() {

    var variables = [

      // name, image, shadow
      new ObjectVariable( 'sphere', sphereImage, sphereShadowImage ),
      new ObjectVariable( 'square', squareImage, squareShadowImage ),
      new ObjectVariable( 'triangle', orangeImage, orangeShadowImage )
    ];

    BasicsScene.call( this, variables, {
      debugName: 'lab',
      numberOfSnapshots: 4
    } );
  }

  equalityExplorerBasics.register( 'LabScene', LabScene );

  return inherit( BasicsScene, LabScene );
} );