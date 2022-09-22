// Copyright 2018-2022, University of Colorado Boulder

/**
 * View of a scene in the 'Lab' screen.
 * Same as the 'Basics' screen, but with controls for changing the values of object types.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import BooleanProperty from '../../../../axon/js/BooleanProperty.js';
import Property from '../../../../axon/js/Property.js';
import Bounds2 from '../../../../dot/js/Bounds2.js';
import BasicsSceneNode, { BasicsSceneNodeOptions } from '../../../../equality-explorer/js/basics/view/BasicsSceneNode.js';
import VariablesAccordionBox from '../../../../equality-explorer/js/common/view/VariablesAccordionBox.js';
import optionize, { EmptySelfOptions } from '../../../../phet-core/js/optionize.js';
import StrictOmit from '../../../../phet-core/js/types/StrictOmit.js';
import equalityExplorerBasics from '../../equalityExplorerBasics.js';
import EqualityExplorerBasicsStrings from '../../EqualityExplorerBasicsStrings.js';
import LabScene from '../model/LabScene.js';

type SelfOptions = EmptySelfOptions;

export type LabSceneNodeOptions = SelfOptions & StrictOmit<BasicsSceneNodeOptions, 'variableValuesVisibleProperty'>;

export default class LabSceneNode extends BasicsSceneNode {

  private readonly valuesAccordionBoxExpandedProperty: Property<boolean>;
  private readonly variableValuesVisibleProperty: Property<boolean>;

  public constructor( scene: LabScene,
                      sceneProperty: Property<LabScene>,
                      equationAccordionBoxExpandedProperty: Property<boolean>,
                      snapshotsAccordionBoxExpandedProperty: Property<boolean>,
                      layoutBounds: Bounds2,
                      providedOptions?: LabSceneNodeOptions ) {

    const options = optionize<LabSceneNodeOptions, SelfOptions, BasicsSceneNodeOptions>()( {

      // BasicsSceneNodeOptions
      termsToolboxSpacing: 50, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical', // put variable values below equations in Snapshots
        controlHeight: 70, // height of each snapshot, a bit taller than default since values are below equations
        commaSeparated: false, // don't separate variable values with commas in Snapshots
        variableValuesOpacity: 0.75 // de-emphasize variable values in Snapshots
      }
    }, providedOptions );

    // whether the Values accordion box is expanded or collapsed
    const valuesAccordionBoxExpandedProperty = new BooleanProperty( true );

    // whether variable values are visible in snapshots
    const variableValuesVisibleProperty = new BooleanProperty( true );
    options.variableValuesVisibleProperty = variableValuesVisibleProperty;

    super( scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );

    this.valuesAccordionBoxExpandedProperty = valuesAccordionBoxExpandedProperty;
    this.variableValuesVisibleProperty = variableValuesVisibleProperty;

    const variables = scene.variables!;
    assert && assert( variables );

    // Values accordion box, above the Snapshots accordion box
    const valuesAccordionBox = new VariablesAccordionBox( variables, {
      titleStringProperty: EqualityExplorerBasicsStrings.valuesStringProperty,
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

  public override dispose(): void {
    assert && assert( false, 'dispose is not supported, exists for the lifetime of the sim' );
    super.dispose();
  }

  public reset(): void {
    this.valuesAccordionBoxExpandedProperty.reset();
    this.variableValuesVisibleProperty.reset();
  }
}

equalityExplorerBasics.register( 'LabSceneNode', LabSceneNode );