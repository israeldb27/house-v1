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
    COMUM: {
        description: 'Comum',
        id: 'O',
    }
});

export default PerfilUsuarioEnum;