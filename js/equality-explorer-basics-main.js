// Copyright 2018-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BasicsScreen from '../../equality-explorer/js/basics/BasicsScreen.js';
import EqualityExplorerConstants from '../../equality-explorer/js/common/EqualityExplorerConstants.js';
import Sim from '../../joist/js/Sim.js';
import SimLauncher from '../../joist/js/SimLauncher.js';
import equalityExplorerBasicsStrings from './equalityExplorerBasicsStrings.js';
import LabScreen from './lab/LabScreen.js';

const equalityExplorerBasicsTitleString = equalityExplorerBasicsStrings[ 'equality-explorer-basics' ].title;

SimLauncher.launch( () => {
  const sim = new Sim( equalityExplorerBasicsTitleString, [ new BasicsScreen(), new LabScreen() ], {
    credits: EqualityExplorerConstants.CREDITS
  } );
  sim.start();
} );