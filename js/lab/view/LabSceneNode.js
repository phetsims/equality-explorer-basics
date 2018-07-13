// Copyright 2018, University of Colorado Boulder

/**
 * View of a scene in the 'Lab' screen.
 * Same as the 'Basics' screen, but with controls for changing the values of object types.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var BasicsSceneNode = require( 'EQUALITY_EXPLORER/basics/view/BasicsSceneNode' );
  var BooleanProperty = require( 'AXON/BooleanProperty' );
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var inherit = require( 'PHET_CORE/inherit' );
  var VariablesAccordionBox = require( 'EQUALITY_EXPLORER/common/view/VariablesAccordionBox' );

  // strings
  var valuesString = require( 'string!EQUALITY_EXPLORER_BASICS/values' );

  /**
   * @param {LabScene} scene
   * @param {Property.<Scene>} sceneProperty - the selected scene
   * @param {BooleanProperty} equationAccordionBoxExpandedProperty
   * @param {BooleanProperty} snapshotsAccordionBoxExpandedProperty
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @constructor
   */
  function LabSceneNode( scene, sceneProperty, equationAccordionBoxExpandedProperty,
                         snapshotsAccordionBoxExpandedProperty, layoutBounds, options ) {

    options = _.extend( {

      // BasicsSceneNode options
      termsToolboxSpacing: 50, // horizontal spacing between terms in the toolbox
      snapshotControlOptions: {
        orientation: 'vertical',// put variable values below equations in Snapshots
        controlHeight: 70, // height of each snapshot, a bit taller than default since values are below equations
        commaSeparated: false,// don't separate variable values with commas in Snapshots
        variableValuesOpacity: 0.75 // de-emphasize variable values in Snapshots
      }
    }, options );

    // @private whether the Variable accordion box is expanded or collapsed
    this.valuesAccordionBoxExpandedProperty = new BooleanProperty( true );

    // @private whether variable values are visible in snapshots
    this.variableValuesVisibleProperty = new BooleanProperty( true );

    assert && assert( !options.variableValuesVisibleProperty, 'LabSceneNode sets variableValuesVisibleProperty' );
    options.variableValuesVisibleProperty = this.variableValuesVisibleProperty;

    BasicsSceneNode.call( this, scene, sceneProperty, equationAccordionBoxExpandedProperty,
      snapshotsAccordionBoxExpandedProperty, layoutBounds, options );

    // Values accordion box, above the Snapshots accordion box
    var valuesAccordionBox = new VariablesAccordionBox( scene.variables, {
      titleString: valuesString,
      expandedProperty: this.valuesAccordionBoxExpandedProperty,
      fixedWidth: this.snapshotsAccordionBox.width + 40, // wider so that pickers are usable size, see #3
      right: this.snapshotsAccordionBox.right,
      top: this.snapshotsAccordionBox.top
    } );
    this.addChild( valuesAccordionBox );
    valuesAccordionBox.moveToBack();

    // shift the Snapshots accordion box down
    this.snapshotsAccordionBox.top = valuesAccordionBox.bottom + 10;
  }

  equalityExplorerBasics.register( 'LabSceneNode', LabSceneNode );

  return inherit( BasicsSceneNode, LabSceneNode, {

    /**
     * @public
     * @override
     */
    reset: function() {
      this.valuesAccordionBoxExpandedProperty.reset();
      this.variableValuesVisibleProperty.reset();
    }
  } );
} );