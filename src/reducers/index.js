import { combineReducers } from 'redux';
import { genotypesDefault } from '../actions/genotypes';

const genotypesReducer = ( state = genotypesDefault, action ) => {
  switch ( action.type ) {
    case 'GENOTYPE_GENERATED':
    case 'DRAW_GENOTYPE':
      return { ...state, [ action.payload.id ]: action.payload };
    case 'FETCH_GENOTYPES':
    default:
      return state;
  }
};

const configReducer = ( state = { isMale: false }, action ) => {
  switch ( action.type ) {
    case 'GENOTYPE_GENERATED':
      if ( action.payload.name === 'Sex' && action.payload.inheritedGeneName === 'Male' )
        return { ...state, isMale: true };
      else
        return state;
    default:
      return state;
  }
};

export default combineReducers({
  genotypes: genotypesReducer,
  config: configReducer
});