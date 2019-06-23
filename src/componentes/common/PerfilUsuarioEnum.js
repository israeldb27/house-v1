import {Enum} from 'enumify';

class PerfilUsuarioEnum extends Enum {}

PerfilUsuarioEnum.initEnum({   
    CORRETOR: {
        description: 'Corretor',
        id: 'C',
    },
    IMOBILIARIA: {
        description: 'Imobiliária',
        id: 'I',
    },
    NORMAL: {
        description: 'Normal',
        id: 'N',
    }
});

export default PerfilUsuarioEnum;