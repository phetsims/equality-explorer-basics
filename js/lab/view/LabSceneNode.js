// Copyright 2018-2020, University of Colorado Boulder

/**
 * View of a scene in the 'Lab' screen.
 * Same as the 'Basics' screen, but with controls for changing the values of object types.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import BasicsSceneNode from '../../../../equality-explorer/js/basics/view/BasicsSceneNode.js';
import VariablesAccordionBox from '../../../../equality-explorer/js/common/view/VariablesAccordionBox.js';
import merge from '../../../../phet-core/js/merge.js';
import equalityExplorerBasicsStrings from '../../equality-explorer-basics-strings.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';

const valuesString = equalityExplorerBasicsStrings.values;

class LabSceneNode extends BasicsSceneNode {

  /**
   * @param {LabScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {BooleanProperty} equationAccordionBoxExpandedProperty
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   */
  constructor( scene, sceneProperty, equationAccordionBoxExpandedProperty,
               snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {

    options = merge( {

      // BasicsSceneNode options
      termsToolboxSpacing: 50, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical',// put variable values below equations in Snapshots
        controlHeight: 70, // height of each snapshot, a bit taller than default since values are below equations
        commaSeparated: false,// don't separate variable values with commas in Snapshots
        variableValuesOpacity: 0.75 // de-emphasize variable values in Snapshots
      }
    }, options );

    // whether the Values accordion box is expanded or collapsed
    const valuesAccordionBoxExpandedProperty = new BooleanProperty( true );

    // whether variable values are visible in snapshots
    const variableValuesVisibleProperty = new BooleanProperty( true );

    assert && assert( !options.variableValuesVisibleProperty, 'LabSceneNode sets variableValuesVisibleProperty' );
    options.variableValuesVisibleProperty = variableValuesVisibleProperty;

    super( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );

    // @private
    this.valuesAccordionBoxExpandedProperty = valuesAccordionBoxExpandedProperty;
    this.variableValuesVisibleProperty = variableValuesVisibleProperty;

    // Values accordion box, above the Snapshots accordion box
    const valuesAccordionBox = new VariablesAccordionBox( scene.variables, {
      titleString: valuesString,
      expandedProperty: valuesAccordionBoxExpandedProperty,
      fixedWidth: this.snapshotsAccordionBox.width + 40, // wider so that pickers are usable size, see #3
      right: this.snapshotsAccordionBox.right,
      top: this.snapshotsAccordionBox.top
    } );
    this.addChild( valuesAccordionBox );
    valuesAccordionBox.moveToBack();

    // shift the Snapshots accordion box down
    this.snapshotsAccordionBox.top = valuesAccordionBox.bottom + 10;
  }

  /**
   * @public
   */
  reset() {
    this.valuesAccordionBoxExpandedProperty.reset();
    this.variableValuesVisibleProperty.reset();
  }
}

equalityExplorerBasics.register( 'LabSceneNode', LabSceneNode );

export default LabSceneNode;