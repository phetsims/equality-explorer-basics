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
  var appleImage = require( 'image!EQUALITY_EXPLORER/apple.png' );
  var appleShadowImage = require( 'image!EQUALITY_EXPLORER/appleShadow.png' );
  var lemonImage = require( 'image!EQUALITY_EXPLORER/lemon.png' );
  var lemonShadowImage = require( 'image!EQUALITY_EXPLORER/lemonShadow.png' );
  var orangeImage = require( 'image!EQUALITY_EXPLORER/orange.png' );
  var orangeShadowImage = require( 'image!EQUALITY_EXPLORER/orangeShadow.png' );

  /**
   * @constructor
   */
  function LabScene() {

    var variables = [

      // name, image, shadow
      new ObjectVariable( 'apple', appleImage, appleShadowImage ),
      new ObjectVariable( 'lemon', lemonImage, lemonShadowImage ),
      new ObjectVariable( 'orange', orangeImage, orangeShadowImage )
    ];

    BasicsScene.call( this, variables, {
      debugName: 'lab',
      numberOfSnapshots: 4
    } );
  }

  equalityExplorerBasics.register( 'LabScene', LabScene );

  return inherit( BasicsScene, LabScene );
} );
