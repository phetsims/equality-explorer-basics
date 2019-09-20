// Copyright 2018-2019, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  const EqualityExplorerColors = require( 'EQUALITY_EXPLORER/common/EqualityExplorerColors' );
  const EqualityExplorerScreen = require( 'EQUALITY_EXPLORER/common/EqualityExplorerScreen' );
  const HBox = require( 'SCENERY/nodes/HBox' );
  const Image = require( 'SCENERY/nodes/Image' );
  const inherit = require( 'PHET_CORE/inherit' );
  const LabModel = require( 'EQUALITY_EXPLORER_BASICS/lab/model/LabModel' );
  const LabScreenView = require( 'EQUALITY_EXPLORER_BASICS/lab/view/LabScreenView' );
  const MathSymbols = require( 'SCENERY_PHET/MathSymbols' );
  const NumberPicker = require( 'SCENERY_PHET/NumberPicker' );
  const PhetFont = require( 'SCENERY_PHET/PhetFont' );
  const Property = require( 'AXON/Property' );
  const Range = require( 'DOT/Range' );
  const ScreenIcon = require( 'JOIST/ScreenIcon' );
  const Text = require( 'SCENERY/nodes/Text' );

  // images
  const squareImage = require( 'image!EQUALITY_EXPLORER/square.png' );

  // strings
  const screenLabString = require( 'string!EQUALITY_EXPLORER_BASICS/screen.lab' );

  // constants
  const BACKGROUND_COLOR = EqualityExplorerColors.BASICS_SCREEN_BACKGROUND;

  /**
   * @param {Object} [options]
   * @constructor
   */
  function LabScreen( options ) {

    options = _.extend( {

      // EqualityExplorerScreen options
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

    const squareNode = new Image( squareImage, {
      scale: 0.75
    } );

    const equalsNode = new Text( MathSymbols.EQUAL_TO, {
      font: new PhetFont( { size: 30, weight: 'bold' } )
    } );

    const pickerNode = new NumberPicker( new Property( 7 ), new Property( new Range( 0, 10 ) ), {
      color: 'black'
    } );

    const iconNode = new HBox( {
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