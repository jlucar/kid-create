import React from 'react';
import { connect } from 'react-redux';
import { generateGenotype } from '../actions';
import GenotypeOption from './GenotypeOption';

class GenotypeCard extends React.Component {
  renderGenerateGenotype = () => {
    return (
      <div className="ui bottom attached button" onClick={ () => this.props.generateGenotype( this.props.genotype ) }>
        <i className="sync alternate icon" />
        Generate { this.props.genotype.name }
      </div>
    );
  }

  renderSexGenotypeResult = () => {
    if ( this.props.genotype.fatherGene + this.props.genotype.motherGene === 'TT' ||
      this.props.genotype.fatherGene + this.props.genotype.motherGene === 'tt' ) {
        return <div className="value">XY</div>;
      }

    if ( this.props.genotype.fatherGene + this.props.genotype.motherGene === 'Tt' ||
      this.props.genotype.fatherGene + this.props.genotype.motherGene === 'tT' ) {
        return <div className="value">XX</div>;
      }
  }

  renderGenotypeResults = () => {
    return (
      <div className="description">
        Genotype:&nbsp;&nbsp;
        <div className="ui mini horizontal statistic">
          { this.props.genotype.name === 'Sex' ?
          this.renderSexGenotypeResult()
          :
          (
            <div className="value" style={{ textTransform: 'none' }}>{ this.props.genotype.fatherGene } { this.props.genotype.motherGene }</div>
          )
          }
        </div>
      </div>
    );
  }

  renderGenotypeOptions = () => {
    if ( this.props.genotype.name === 'Sex' ) {
      return (
        <div className="ui two bottom attached buttons">
          <GenotypeOption genotype={ this.props.genotype } label="Male" value={ [ 'TT', 'tt' ] } />
          <GenotypeOption genotype={ this.props.genotype } label="Female" value={ [ 'Tt', 'tT' ] } />
        </div>
      );
    } else {
      return (
        <div className="ui three bottom attached buttons">
          <GenotypeOption genotype={ this.props.genotype } label="Homozygous Dominant" value={ [ 'TT' ] } />
          <GenotypeOption genotype={ this.props.genotype } label="Heterozygous" value={ [ 'Tt', 'tT' ] } />
          <GenotypeOption genotype={ this.props.genotype } label="Homozygous Recessive" value={ [ 'tt' ] } />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="card" style={{ width: '400px' }}>
        <div className="content">
          <div className="header">{ this.props.genotype.name }</div>
          { this.props.genotype.inheritedGeneName ? this.renderGenotypeResults() : null }
        </div>
        { !this.props.genotype.inheritedGeneName ? this.renderGenerateGenotype() : this.renderGenotypeOptions() }
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
  generateGenotype
} )( GenotypeCard );
