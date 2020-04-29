import React from 'react';
import { connect } from 'react-redux';
import GenotypeCard from './GenotypeCard';

class BabyQuestions extends React.Component {
  renderList() {
    return this.props.genotypes.map( genotype => {
      return (
        <GenotypeCard genotype={ genotype } key={ genotype.id } />
      );
    });
  }

  render(){
    return (
      <div className="nine wide column">
        <div className="ui cards">
          { this.renderList() }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    genotypes: Object.values( state.genotypes )
  };
};

export default connect( mapStateToProps, {

} )( BabyQuestions );