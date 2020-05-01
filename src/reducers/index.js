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
      else if ( action.payload.name === 'Hair Colour' && action.payload.inheritedGeneName === 'Blonde' )
        return { ...state, hairColor: 'blonde' };
      else if ( action.payload.name === 'Hair Colour' && action.payload.inheritedGeneName === 'Brown' )
        return { ...state, hairColor: 'brown' };
      else if ( action.payload.name === 'Skin Colour' && action.payload.inheritedGeneName === 'Light' )
        return { ...state, skinColor: 'light' };
      else if ( action.payload.name === 'Skin Colour' && action.payload.inheritedGeneName === 'Medium' )
        return { ...state, skinColor: 'medium' };
      else if ( action.payload.name === 'Skin Colour' && action.payload.inheritedGeneName === 'Dark' )
        return { ...state, skinColor: 'dark' };
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