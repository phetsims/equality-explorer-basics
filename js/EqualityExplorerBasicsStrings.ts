// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import equalityExplorerBasics from './equalityExplorerBasics.js';

type StringsType = {
  'equality-explorer-basics': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'lab': string;
    'labStringProperty': TReadOnlyProperty<string>;
  };
  'values': string;
  'valuesStringProperty': TReadOnlyProperty<string>;
};

const EqualityExplorerBasicsStrings = getStringModule( 'EQUALITY_EXPLORER_BASICS' ) as StringsType;

equalityExplorerBasics.register( 'EqualityExplorerBasicsStrings', EqualityExplorerBasicsStrings );

export default EqualityExplorerBasicsStrings;
