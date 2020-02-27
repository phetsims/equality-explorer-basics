// Copyright 2018-2019, University of Colorado Boulder

/**
 * The 'Lab' screen.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import Property from '../../../axon/js/Property.js';
import Range from '../../../dot/js/Range.js';
import squareImage from '../../../equality-explorer/images/square_png.js';
import EqualityExplorerColors from '../../../equality-explorer/js/common/EqualityExplorerColors.js';
import EqualityExplorerScreen from '../../../equality-explorer/js/common/EqualityExplorerScreen.js';
import ScreenIcon from '../../../joist/js/ScreenIcon.js';
import inherit from '../../../phet-core/js/inherit.js';
import merge from '../../../phet-core/js/merge.js';
import MathSymbols from '../../../scenery-phet/js/MathSymbols.js';
import NumberPicker from '../../../scenery-phet/js/NumberPicker.js';
import PhetFont from '../../../scenery-phet/js/PhetFont.js';
import HBox from '../../../scenery/js/nodes/HBox.js';
import Image from '../../../scenery/js/nodes/Image.js';
import Text from '../../../scenery/js/nodes/Text.js';
import equalityExplorerBasicsStrings from '../equality-explorer-basics-strings.js';
import equalityExplorerBasics from '../equalityExplorerBasics.js';
import LabModel from './model/LabModel.js';
import LabScreenView from './view/LabScreenView.js';

const screenLabString = equalityExplorerBasicsStrings.screen.lab;

// constants
const BACKGROUND_COLOR = EqualityExplorerColors.BASICS_SCREEN_BACKGROUND;

/**
 * @param {Object} [options]
 * @constructor
 */
function LabScreen( options ) {

  options = merge( {

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

inherit( EqualityExplorerScreen, LabScreen );
export default LabScreen;