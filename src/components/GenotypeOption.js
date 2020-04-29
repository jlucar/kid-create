import React from 'react';
import { connect } from 'react-redux';
import { drawGenotype } from '../actions';

class GenotypeOption extends React.Component {
  state = {
    buttonClass: ''
  };

  verifyGeneratedGenotype = ( selections ) => {
    const verified = selections.find( selection => {
      return ( this.props.genotype.fatherGene + this.props.genotype.motherGene ) === selection;
    });

    if ( verified ) {
      this.setState({ buttonClass: 'green' })
      this.props.drawGenotype( this.props.genotype );
    } else {
      this.setState({ buttonClass: 'red' });
    }
  }

  render() {
    const className = `ui button ${ this.state.buttonClass }`;
    return (
      <div className={ className } style={{ fontSize: '0.9rem' }} onClick={ () => this.verifyGeneratedGenotype( this.props.value ) }>{ this.props.label }</div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    genotypes: Object.values( state.genotypes )
  };
};

export default connect( mapStateToProps, {
  drawGenotype
} )( GenotypeOption );