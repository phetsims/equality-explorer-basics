// Copyright 2018-2022, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Range from '../../../dot/js/Range.js';
import square_png from '../../../equality-explorer/images/square_png.js';
import EqualityExplorerColors from '../../../equality-explorer/js/common/EqualityExplorerColors.js';
import EqualityExplorerScreen from '../../../equality-explorer/js/common/EqualityExplorerScreen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import merge from '../../../phet-core/js/merge.js';
import MathSymbols from '../../../scenery-phet/js/MathSymbols.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import { HBox, Image, Text } from '../../../scenery/js/imports.js';
import NumberPicker from '../../../sun/js/NumberPicker.js';
import equalityExplorerBasics from '../equalityExplorerBasics.js';
import equalityExplorerBasicsStrings from '../equalityExplorerBasicsStrings.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

// strings
const screenLabString = equalityExplorerBasicsStrings.screen.lab;

// constants
const BACKGROUND_COLOR = EqualityExplorerColors.BASICS_SCREEN_BACKGROUND;

class LabScreen extends EqualityExplorerScreen {

  /**
   * @param {Object} [options]
   */
  constructor( options ) {

    options = merge( {

      // EqualityExplorerScreen options
      name: screenLabString,
      backgroundColorProperty: new Property( BACKGROUND_COLOR ),
      homeScreenIcon: createScreenIcon()
    }, options );

    super(
      () => new LabModel(),
      model => new LabScreenView( model ),
      options
    );
  }
}

// Creates the icon for this screen: square = picker
function createScreenIcon() {

  const squareNode = new Image( square_png, {
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

equalityExplorerBasics.register( 'LabScreen', LabScreen );

export default LabScreen;