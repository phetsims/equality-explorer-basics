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
   * @param {Bounds2} layoutBounds
   * @param {Object} [options]
   * @constructor
   */
  function LabSceneNode( scene, sceneProperty, layoutBounds, options ) {

    options = _.extend( {
      termsToolboxSpacing: 50 // horizontal spacing between terms in the toolbox
    }, options );

    // @private whether the Variable accordion box is expanded or collapsed
    this.valuesAccordionBoxExpandedProperty = new BooleanProperty( true );

    BasicsSceneNode.call( this, scene, sceneProperty, layoutBounds, options );

    // Values accordion box, below the Snapshots accordion box
    var valuesAccordionBox = new VariablesAccordionBox( scene.variables, {
      titleString: valuesString,
      showTitleWhenExpanded: true,
      expandedProperty: this.valuesAccordionBoxExpandedProperty,
      fixedWidth: this.snapshotsAccordionBox.width, // same width as Snapshots
      right: this.snapshotsAccordionBox.right,
      top: this.snapshotsAccordionBox.bottom + 15
    } );
    this.addChild( valuesAccordionBox );
    valuesAccordionBox.moveToBack();
  }

  equalityExplorerBasics.register( 'LabSceneNode', LabSceneNode );

  return inherit( BasicsSceneNode, LabSceneNode, {

    /**
     * @public
     * @override
     */
    reset: function() {
      this.valuesAccordionBoxExpandedProperty.reset();
      BasicsSceneNode.prototype.reset.call( this );
    }
  } );
} );