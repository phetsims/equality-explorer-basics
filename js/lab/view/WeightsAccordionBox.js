// Copyright 2018, University of Colorado Boulder

/**
 * Accordion box that allows the student to modify the weights of mystery objects.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( function( require ) {
  'use strict';

  // modules
  var AccordionBox = require( 'SUN/AccordionBox' );
  var equalityExplorerBasics = require( 'EQUALITY_EXPLORER_BASICS/equalityExplorerBasics' );
  var EqualityExplorerConstants = require( 'EQUALITY_EXPLORER/common/EqualityExplorerConstants' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var HStrut = require( 'SCENERY/nodes/HStrut' );
  var Image = require( 'SCENERY/nodes/Image' );
  var inherit = require( 'PHET_CORE/inherit' );
  var MathSymbols = require( 'SCENERY_PHET/MathSymbols' );
  var MysteryObject = require( 'EQUALITY_EXPLORER/basics/model/MysteryObject' );
  var Node = require( 'SCENERY/nodes/Node' );
  var NumberPicker = require( 'SCENERY_PHET/NumberPicker' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var Property = require( 'AXON/Property' );
  var Range = require( 'DOT/Range' );
  var Text = require( 'SCENERY/nodes/Text' );

  // strings
  var weightsString = require( 'string!EQUALITY_EXPLORER_BASICS/weights' );

  // constants
  //TODO #2 each MysteryObject should have an associated weightRange, and/or this should move to model
  var WEIGHT_RANGE = new Range( 1, 10 );

  /**
   * @param {MysteryObject[]} mysteryObjects
   * @param {Object} [options]
   * @constructor
   */
  function WeightsAccordionBox( mysteryObjects, options ) {

    options = _.extend( {}, EqualityExplorerConstants.ACCORDION_BOX_OPTIONS, {

      // this accordion box is designed to be a fixed width, regardless of its content
      fixedWidth: 100,
      fontSize: 24,

      // supertype options
      contentXMargin: 20,
      contentYMargin: 10

    }, options );

    assert && assert( options.maxWidth === undefined, 'WeightsAccordionBox sets maxWidth' );
    options.maxWidth = options.fixedWidth;

    var contentWidth = options.fixedWidth - ( 2 * options.contentXMargin );

    assert && assert( !options.titleNode, 'WeightsAccordionBox sets titleNode' );
    options.titleNode = new Text( weightsString, {
      font: EqualityExplorerConstants.ACCORDION_BOX_TITLE_FONT,
      maxWidth: 0.85 * contentWidth
    } );

    var strut = new HStrut( contentWidth );

    var children = [];
    mysteryObjects.forEach( function( mysteryObject ) {
      assert && assert( mysteryObject instanceof MysteryObject, 'invalid mysteryObject: ' + mysteryObject );

      var icon = new Image( mysteryObject.image, {
        maxHeight: EqualityExplorerConstants.SMALL_TERM_DIAMETER
      } );

      var equalsText = new Text( MathSymbols.EQUAL_TO, {
        font: new PhetFont( options.fontSize )
      } );

      // NumberPicker.dispose not needed
      var valuePicker = new NumberPicker( mysteryObject.weightProperty, new Property( WEIGHT_RANGE ), {
        color: 'black',
        font: new PhetFont( options.fontSize ),
        xMargin: 6,
        touchAreaYDilation: 15
      } );

      var control = new HBox( {
        children: [ icon, equalsText, valuePicker ],
        spacing: 3,
        center: strut.center,
        maxWidth: contentWidth
      } );

      children.push( control );
    } );

    var controls = new HBox( {
      children: children,
      spacing: 25,
      maxWidth: contentWidth
    } );

    var contentNode = new Node( {
      children: [ strut, controls ]
    } );

    AccordionBox.call( this, contentNode, options );
  }

  equalityExplorerBasics.register( 'WeightsAccordionBox', WeightsAccordionBox );

  return inherit( AccordionBox, WeightsAccordionBox );
} );
