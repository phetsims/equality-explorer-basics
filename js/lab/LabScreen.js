// Copyright 2018, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var EqualityExplorerColors = require( 'EQUALITY_EXPLORER/common/EqualityExplorerColors' );
  var EqualityExplorerScreen = require( 'EQUALITY_EXPLORER/common/EqualityExplorerScreen' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var LabModel = require( 'EQUALITY_EXPLORER_BASICS/lab/model/LabModel' );
  var LabScreenView = require( 'EQUALITY_EXPLORER_BASICS/lab/view/LabScreenView' );
  var NumberPicker = require( 'SCENERY_PHET/NumberPicker' );
  var Property = require( 'AXON/Property' );
  var Range = require( 'DOT/Range' );
  var ScreenIcon = require( 'JOIST/ScreenIcon' );

  // images
  var squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );

  // strings
  var screenLabString = require( 'string!EQUALITY_EXPLORER_BASICS/screen.lab' );

  /**
   * @param {Object} [options]
   * @constructor
   */
  function LabScreen( options ) {

    options = _.extend( {
      name: screenLabString,
      backgroundColorProperty: new Property( EqualityExplorerColors.BASICS_SCREEN_BACKGROUND ),
      homeScreenIcon: createScreenIcon()
    }, options );

    EqualityExplorerScreen.call( this,
      function() { return new LabModel(); },
      function( model ) { return new LabScreenView( model ); },
      options
    );
  }

  equalityExplorerBasics.register( 'LabScreen', LabScreen );

  // Creates the icon for this screen, a shape and a picker
  function createScreenIcon() {

    var squareNode = new Image( squareImage, {
      scale: 0.75
    } );

    var pickerNode = new NumberPicker( new Property( 7 ), new Property( new Range( 0, 10 ) ), {
      color: 'black'
    } );

    var iconNode = new HBox( {
      spacing: 10,
      children: [ squareNode, pickerNode ]
    } );

    return new ScreenIcon( iconNode, {
      maxIconWidthProportion: 0.75,
      fill: EqualityExplorerColors.VARIABLES_SCREEN_BACKGROUND
    } );
  }

  return inherit( EqualityExplorerScreen, LabScreen );
} );