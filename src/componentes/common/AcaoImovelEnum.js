import {Enum} from 'enumify';

class AcaoImovelEnum extends Enum {}

AcaoImovelEnum.initEnum({   
    COMPRA: {
        description: 'Compra',
        id: 'C',
    },
    VENDA: {
        description: 'Venda',
        id: 'V',
    },
    ALUGUEL: {
        description: 'Aluguel',
        id: 'A',
    },
    TEMPORADA: {
        description: 'Temporada',
        id: 'T',
    },
});

export default AcaoImovelEnum;