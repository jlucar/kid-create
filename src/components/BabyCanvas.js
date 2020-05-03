import './BabyCanvas.css';
import React from 'react';
import { connect } from 'react-redux';

import domtoimage from 'dom-to-image';

import { ReactComponent as SquareFace } from '../assets/images/square-face.svg';
import { ReactComponent as RoundFace } from '../assets/images/round-face.svg';

import { ReactComponent as CleftChin } from '../assets/images/cleft-chin.svg';

import { ReactComponent as ManCurlyHair } from '../assets/images/man-curly-hair.svg';
import { ReactComponent as ManWavyHair } from '../assets/images/man-wavy-hair.svg';
import { ReactComponent as ManStraightHair } from '../assets/images/man-straight-hair.svg';

import { ReactComponent as WomanCurlyHair } from '../assets/images/woman-curly-hair.svg';
import { ReactComponent as WomanWavyHair } from '../assets/images/woman-wavy-hair.svg';
import { ReactComponent as WomanStraightHair } from '../assets/images/woman-straight-hair.svg';

import { ReactComponent as ManThickEyebrow } from '../assets/images/man-thick-eyebrow.svg';
import { ReactComponent as ManThinEyebrow } from '../assets/images/man-thin-eyebrow.svg';

import { ReactComponent as WomanThickEyebrow } from '../assets/images/woman-thick-eyebrow.svg';
import { ReactComponent as WomanThinEyebrow } from '../assets/images/woman-thin-eyebrow.svg';

import { ReactComponent as ManRoundEyeShape } from '../assets/images/man-round-eyeshape.svg';
import { ReactComponent as ManAlmondEyeShape } from '../assets/images/man-almond-eyeshape.svg';

import { ReactComponent as WomanRoundEyeShape } from '../assets/images/woman-round-eyeshape.svg';
import { ReactComponent as WomanAlmondEyeShape } from '../assets/images/woman-almond-eyeshape.svg';

import { ReactComponent as Eye } from '../assets/images/eye.svg';

import { ReactComponent as LongEyelashes } from '../assets/images/long-eyelashes.svg';

// TODO: Make sure to default this color to not having lipstick for men
import { ReactComponent as ThickLips } from '../assets/images/thick-lips.svg';
import { ReactComponent as ThinLips } from '../assets/images/thin-lips.svg';

import { ReactComponent as RoundedNoseShape } from '../assets/images/rounded-noseshape.svg';
import { ReactComponent as PointedNoseShape } from '../assets/images/pointed-noseshape.svg';

import { ReactComponent as FreeEarlobe } from '../assets/images/free-earlobe.svg';
import { ReactComponent as AttachedEarlobe } from '../assets/images/attached-earlobe.svg';

import { ReactComponent as Freckles } from '../assets/images/freckles.svg';

class BabyCanvas extends React.Component {
  renderGenotype = ( genotype ) => {
    if ( genotype.name === 'Sex' ) {
      if ( genotype.inheritedGeneName === 'Male' ) {
        return <i key={ genotype.id } className="huge male icon"></i>;
      }
      else
        return <i key={ genotype.id } className="huge female icon"></i>;
    } else if ( genotype.name === 'Face Shape' ) {
      if ( genotype.inheritedGeneName === 'Round' )
        return <RoundFace key={ genotype.id } className="face-shape" style={{ position: 'absolute', top: 100, left: 100, zIndex: 1 }} />;
      else
        return <SquareFace key={ genotype.id } className="face-shape" style={{ position: 'absolute', top: 100, left: 98, zIndex: 1 }} />;
    } else if ( genotype.name === 'Presence of Chin Cleft' ) {
      if ( genotype.inheritedGeneName === 'Cleft Chin' )
        return <CleftChin key={ genotype.id } className="cleft-chin" style={{ position: 'absolute', top: 232, left: 145, zIndex: 2 }} />;
      else
        return null;
    } else if ( genotype.name === 'Hair Type' ) {
      if ( genotype.inheritedGeneName === 'Curly') {
        if ( this.props.config.isMale )
          return <ManCurlyHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 66, left: 86, zIndex: 1 }} />;
        else
          return <WomanCurlyHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 66, left: 86, zIndex: 0 }} />;
      } else if ( genotype.inheritedGeneName === 'Wavy') {
        if ( this.props.config.isMale )
          return <ManWavyHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 66, left: 86, zIndex: 1 }} />;
        else
          return <WomanWavyHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 78, left: 70, zIndex: 0 }} />;
      } else {
        if ( this.props.config.isMale )
          return <ManStraightHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 66, left: 102, zIndex: 1 }} />;
        else
          return <WomanStraightHair key={ genotype.id } className="hair" style={{ position: 'absolute', top: 76, left: 64, zIndex: 0 }} />;
      }
    } else if ( genotype.name === 'Eye Shape' ) {
      if ( genotype.inheritedGeneName === 'Almond') {
        if ( this.props.config.isMale ) {
          return (
            <div key={ genotype.id }>
              <ManAlmondEyeShape style={{ position: 'absolute', top: 140, left: 112, zIndex: 4 }} />
              <ManAlmondEyeShape style={{ position: 'absolute', top: 140, left: 180, transform: 'scaleX( -1 )', zIndex: 4 }} />
            </div>
          );
        }
        else {
          return (
            <div key={ genotype.id }>
              <WomanAlmondEyeShape style={{ position: 'absolute', top: 139, left: 101, zIndex: 4 }} />
              <WomanAlmondEyeShape style={{ position: 'absolute', top: 139, left: 182, transform: 'scaleX( -1 )', zIndex: 4 }} />
            </div>
          );
        }
      } else {
        if ( this.props.config.isMale ) {
          return (
            <div key={ genotype.id }>
              <ManRoundEyeShape style={{ position: 'absolute', top: 140, left: 112, zIndex: 4 }} />
              <ManRoundEyeShape style={{ position: 'absolute', top: 140, left: 182, transform: 'scaleX( -1 )', zIndex: 4 }} />
            </div>
          );
        }
        else {
          return (
            <div key={ genotype.id }>
              <WomanRoundEyeShape style={{ position: 'absolute', top: 140, left: 109, height: '27px', zIndex: 4 }} />
              <WomanRoundEyeShape style={{ position: 'absolute', top: 140, left: 179, height: '27px', transform: 'scaleX( -1 )', zIndex: 4 }} />
            </div>
          );
        }
      }
    } else if ( genotype.name === 'Eye Colour' ) {
      if ( genotype.inheritedGeneName === 'Brown') {
        return (
          <div key={ genotype.id }>
            <Eye style={{ position: 'absolute', top: 142, left: 125, width: '22px', zIndex: 5 }} />
            <Eye style={{ position: 'absolute', top: 142, left: 193, width: '22px', zIndex: 5 }} />
          </div>
        );
      } else {
        return (
          <div key={ genotype.id }>
            <Eye className="eye-blue" style={{ position: 'absolute', top: 142, left: 125, width: '22px', zIndex: 5 }} />
            <Eye className="eye-blue" style={{ position: 'absolute', top: 142, left: 193, width: '22px', zIndex: 5 }} />
          </div>
        );
      }
    } else if ( genotype.name === 'Thickness of Eyebrow' ) {
      if ( genotype.inheritedGeneName === 'Thick') {
        if ( this.props.config.isMale ) {
          return (
            <div key={ genotype.id }>
              <ManThickEyebrow style={{ position: 'absolute', top: 130, left: 110, zIndex: 6 }} />
              <ManThickEyebrow style={{ position: 'absolute', top: 130, left: 178, transform: 'scaleX( -1 )', zIndex: 6 }} />
            </div>
          );
        }
        else {
          return (
            <div key={ genotype.id }>
              <WomanThickEyebrow className="eyebrow" style={{ position: 'absolute', top: 130, left: 106, zIndex: 6 }} />
              <WomanThickEyebrow className="eyebrow" style={{ position: 'absolute', top: 130, left: 176, transform: 'scaleX( -1 )', zIndex: 6 }} />
            </div>
          );
        }
      } else {
        if ( this.props.config.isMale ) {
          return (
            <div key={ genotype.id }>
              <ManThinEyebrow style={{ position: 'absolute', top: 130, left: 112, zIndex: 6 }} />
              <ManThinEyebrow style={{ position: 'absolute', top: 130, left: 182, transform: 'scaleX( -1 )', zIndex: 6 }} />
            </div>
          );
        }
        else {
          return (
            <div key={ genotype.id }>
              <WomanThinEyebrow style={{ position: 'absolute', top: 130, left: 112, zIndex: 6 }} />
              <WomanThinEyebrow style={{ position: 'absolute', top: 130, left: 182, transform: 'scaleX( -1 )', zIndex: 6 }} />
            </div>
          );
        }
      }
    } else if ( genotype.name === 'Eye Lashes' ) {
      if ( genotype.inheritedGeneName === 'Long' ) {
        return (
          <div key={ genotype.id }>
            <LongEyelashes style={{ position: 'absolute', top: 130, left: 102, zIndex: 7 }} />
            <LongEyelashes style={{ position: 'absolute', top: 130, left: 216, transform: 'scaleX( -1 )', zIndex: 7 }} />
          </div>
        );
      } else {
        return null;
      }
    } else if ( genotype.name === 'Nose Shape' ) {
      if ( genotype.inheritedGeneName === 'Rounded' )
        return <RoundedNoseShape key={ genotype.id } className="nose-shape" style={{ position: 'absolute', top: 166, left: 155, zIndex: 8 }} />;
      else
        return <PointedNoseShape key={ genotype.id } className="nose-shape" style={{ position: 'absolute', top: 166, left: 155, zIndex: 8 }} />;
    } else if ( genotype.name === 'Lip Thickness' ) {
      if ( genotype.inheritedGeneName === 'Thick' )
        return <ThickLips key={ genotype.id } style={{ position: 'absolute', top: 198, left: 148, zIndex: 9 }} />;
      else
        return <ThinLips key={ genotype.id } style={{ position: 'absolute', top: 198, left: 148, zIndex: 9 }} />;
    } else if ( genotype.name === 'Earlobe Attachment' ) {
      if ( genotype.inheritedGeneName === 'Free' ){
        return (
          <div key={ genotype.id }>
            <FreeEarlobe className="earlobe" style={{ position: 'absolute', top: 148, left: 84, zIndex: 10 }} />
            <FreeEarlobe className="earlobe" style={{ position: 'absolute', top: 148, left: 228, transform: 'scaleX( -1 )', zIndex: 10 }} />
          </div>
        );
      } else {
        return (
          <div key={ genotype.id }>
            <AttachedEarlobe className="earlobe" style={{ position: 'absolute', top: 148, left: 84, zIndex: 10 }} />
            <AttachedEarlobe className="earlobe" style={{ position: 'absolute', top: 148, left: 228, transform: 'scaleX( -1 )', zIndex: 10 }} />
          </div>
        );
      }
    } else if ( genotype.name === 'Freckles' ) {
      if ( genotype.inheritedGeneName === 'Freckles' ){
        return (
          <div key={ genotype.id }>
            <Freckles className="freckles" style={{ position: 'absolute', top: 176, left: 114, zIndex: 11 }} />
            <Freckles className="freckles" style={{ position: 'absolute', top: 176, left: 194, transform: 'scaleX( -1 )', zIndex: 11 }} />
          </div>
        );
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

  renderFace = () => {
    return this.props.genotypes.map( genotype => {
      if ( !genotype.draw ) return null;

      return this.renderGenotype( genotype );
    });
  }

  filterITags = ( node ) => {
    return ( node.tagName !== 'i' && node.tagName !== 'I' );
  }

  downloadGeneratedBaby = () => {
    domtoimage.toPng( document.getElementById('generated-kid'), { filter: this.filterITags } )
      .then( dataUrl => {
        let link = document.createElement( 'a' );
        link.download = 'my-generated-kid.png';
        link.href = dataUrl;
        link.click();
      });
  }

  allGenerated = () => {
    return this.props.genotypes.every( genotype => genotype.draw );
  }

  renderSummary = () => {
    return this.props.genotypes.map( genotype => {
      if ( !genotype.draw ) return null;

      if ( genotype.name === 'Sex' &&
        ( genotype.fatherGene + genotype.motherGene === 'TT' ||
        genotype.fatherGene + genotype.motherGene === 'tt' ) ) {
          return (
            <div key={ genotype.id }><span style={{ marginRight: '8px', fontWeight: '600' }}>{ genotype.name }:</span> { genotype.inheritedGeneName } ( XY )</div>
          );
        }

      if ( genotype.name === 'Sex' &&
        ( genotype.fatherGene + genotype.motherGene === 'Tt' ||
        genotype.fatherGene + genotype.motherGene === 'tT' ) ) {
          return (
            <div key={ genotype.id }><span style={{ marginRight: '8px', fontWeight: '600' }}>{ genotype.name }:</span> { genotype.inheritedGeneName } ( XX )</div>
          );
        }

      return (
        <div key={ genotype.id } style={{ marginBottom: '2px' }}><span style={{ marginRight: '8px', fontWeight: '600' }}>{ genotype.name }:</span> { genotype.inheritedGeneName } ( { genotype.fatherGene + genotype.motherGene } )</div>
      );
    });
  }

  render(){
    const className = `seven wide column ${ this.props.config.isMale ? 'sex-male' : 'sex-female' }  ${ this.props.config.hairColor ? 'hair-' + this.props.config.hairColor : '' }  ${ this.props.config.skinColor ? 'skin-' + this.props.config.skinColor : '' }`;
    return (
      <div className={ className } style={{ position: 'fixed', right: 0 }}>
        { this.allGenerated() ? (
          <button className="ui right floated primary button" onClick={ this.downloadGeneratedBaby }>Download Generated Kid</button>
        )
        : null
        }
        <div id="generated-kid">
          <div style={{ height: '30vh' }}>
           { this.renderFace() }
          </div>
          <div>
            { this.renderSummary() }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ( state ) => {
  return {
    genotypes: Object.values( state.genotypes ),
    config: state.config
  };
};

export default connect( mapStateToProps, {

} )( BabyCanvas );
