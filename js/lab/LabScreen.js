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
  var MathSymbols = require( 'SCENERY_PHET/MathSymbols' );
  var NumberPicker = require( 'SCENERY_PHET/NumberPicker' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Range = require( 'DOT/Range' );
  var ScreenIcon = require( 'JOIST/ScreenIcon' );
  var Text = require( 'SCENERY/nodes/Text' );

  // images
  var squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );

  // strings
  var screenLabString = require( 'string!EQUALITY_EXPLORER_BASICS/screen.lab' );

  // constants
  var BACKGROUND_COLOR = EqualityExplorerColors.BASICS_SCREEN_BACKGROUND;

  /**
   * @param {Object} [options]
   * @constructor
   */
  function LabScreen( options ) {

    options = _.extend( {
      name: screenLabString,
      backgroundColorProperty: new Property( BACKGROUND_COLOR ),
      homeScreenIcon: createScreenIcon()
    }, options );

    EqualityExplorerScreen.call( this,
      function() { return new LabModel(); },
      function( model ) { return new LabScreenView( model ); },
      options
    );
  }

  equalityExplorerBasics.register( 'LabScreen', LabScreen );

  // Creates the icon for this screen: square = picker
  function createScreenIcon() {

    var squareNode = new Image( squareImage, {
      scale: 0.75
    } );

    var equalsNode = new Text( MathSymbols.EQUAL_TO, {
      font: new PhetFont( { size: 30, weight: 'bold' } )
    } );

    var pickerNode = new NumberPicker( new Property( 7 ), new Property( new Range( 0, 10 ) ), {
      color: 'black'
    } );

    var iconNode = new HBox( {
      spacing: 5,
      children: [ squareNode, equalsNode, pickerNode ]
    } );

    return new ScreenIcon( iconNode, {
      maxIconWidthProportion: 0.8,
      fill: BACKGROUND_COLOR
    } );
  }

  return inherit( EqualityExplorerScreen, LabScreen );
} );