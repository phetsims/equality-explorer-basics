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
  var MysteryObject = require( 'EQUALITY_EXPLORER/basics/model/MysteryObject' );

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

    // mystery objects for this scene
    var mysteryObjects = [

      // name, weight, image, shadow
      new MysteryObject( 'apple', 4, appleImage, appleShadowImage ),
      new MysteryObject( 'lemon', 5, lemonImage, lemonShadowImage ),
      new MysteryObject( 'orange', 2, orangeImage, orangeShadowImage )
    ];

    BasicsScene.call( this, mysteryObjects, {
      debugName: 'lab',
      numberOfSnapshots: 4
    } );
  }

  equalityExplorerBasics.register( 'LabScene', LabScene );

  return inherit( BasicsScene, LabScene );
} );
