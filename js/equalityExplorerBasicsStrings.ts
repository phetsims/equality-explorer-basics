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
    'titleProperty': TReadOnlyProperty<string>;
  };
  'screen': {
    'lab': string;
    'labProperty': TReadOnlyProperty<string>;
  };
  'values': string;
  'valuesProperty': TReadOnlyProperty<string>;
};

const equalityExplorerBasicsStrings = getStringModule( 'EQUALITY_EXPLORER_BASICS' ) as StringsType;

equalityExplorerBasics.register( 'equalityExplorerBasicsStrings', equalityExplorerBasicsStrings );

export default equalityExplorerBasicsStrings;
