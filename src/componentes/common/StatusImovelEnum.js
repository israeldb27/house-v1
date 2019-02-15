import {Enum} from 'enumify';

class StatusImovelEnum extends Enum {}

StatusImovelEnum.initEnum({   
    NOVO: {
        description: 'Novo',
        id: 'N',
    },
    LANCAMENTO: {
        description: 'Lançamento',
        id: 'L',
    },
    USADO: {
        description: 'Usado',
        id: 'U',
    }
});

export default StatusImovelEnum;