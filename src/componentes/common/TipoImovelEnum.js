import {Enum} from 'enumify';

class TipoImovelEnum extends Enum {}

TipoImovelEnum.initEnum({   
  APARTAMENTO: {
    description: 'Apartamento',
    id: 'A',
  },
  CASA: {
      description: 'Casa',
      id: 'C',
  },
  COBERTURA: {
    description: 'Cobertura',
    id: 'O',
  },
  FAZENDA: {
    description: 'Fazenda',
    id: 'F',
  },
  QUARTO: {
    description: 'Quarto',
    id: 'Q',
  },
  POUSADA: {
    description: 'Pousada',
    id: 'P',
  },
  MANSAO: {
    description: 'Mansão',
    id: 'M',
  },
  TERRENO: {
    description: 'Terreno',
    id: 'T',
  },
  HARAS: {
    description: 'Haras',
    id: 'H',
  },
  LOFT: {
    description: 'Loft',
    id: 'LO',
  },
  FLAT: {
    description: 'Flat',
    id: 'L',
  },
  KITINETE: {
    description: 'Kitinete',
    id: 'K',
  },
  CONJUGADO: {
    description: 'Conjugado',
    id: 'N',
  },
  SITIO: {
    description: 'Sítio',
    id: 'ST',
  },
  CASA_VILA: {
    description: 'Casa de Vila',
    id: 'CV'
  },
  HOTEL: {
    description: 'Hotel',
    id: 'HO',
  },
  CASA_CONDOMINIO: {
    description: 'Casa de condomínio',
    id: 'CC',
  },
  GALPAO: {
    description: 'Galpão',
    id: 'GA',
  },
  PREDIO: {
    description: 'Prédio',
    id: 'PR',
  },
  CHACARA: {
    description: 'Chacará',
    id: 'CH',
  },
  PREDIO_COMERCIAL: {
    description: 'Prédio Comercial',
    id: 'PC',
  },
});

export default TipoImovelEnum;