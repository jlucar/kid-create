export const fetchGenotypes = () => {
  return {
    type: 'FETCH_GENOTYPES'
  };
};

export const generateGenotype = ( genotype ) => {
  genotype.fatherGene = Math.random() > 0.5 ? 'T' : 't';
  genotype.motherGene = Math.random() > 0.5 ? 'T' : 't';
  genotype.inheritedGeneName = genotype.combinations[ genotype.fatherGene + genotype.motherGene ];

  return {
    type: 'GENOTYPE_GENERATED',
    payload: genotype
  };
}

export const drawGenotype = ( genotype ) => {
  genotype.draw = true;

  return {
    type: 'DRAW_GENOTYPE',
    payload: genotype
  }
};