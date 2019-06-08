import ls from 'local-storage';

export function getUsuarioStorage(){
    return ls.get('usuario-storage-session')    
}

export function setUsuarioStorage(usuario){
    console.log('Setando usuario storage: ' + usuario);
    ls.set('usuario-storage-session', usuario)    
}

export function getAcaoImovel(acao){
    if ( acao === 'V') {
        return 'Venda'
    }
    else if ( acao === 'C') {
        return 'Compra'
    }
    else if ( acao === 'A') {
        return 'Aluguel'
    }
}

export function getPerfilUsuario(perfil){
    if ( perfil === 'C' ) {
        return 'Corretor'
    } 
    else if (  perfil === 'I' ) {
        return 'Imobiliária'
    }        
    else  if ( perfil === 'N' ) {
        return 'Normal'
    }  
}


export function getTipoImovel(tipoImovel){
    if ( tipoImovel === 'A' ) {
        return 'Apartamento'
    } 
    else if ( tipoImovel === 'S' ) {
        return 'Studio'
    }        
    else  if ( tipoImovel === 'T' ) {
        return 'Terreno'
    }  
    else  if ( tipoImovel === 'C' ) {
        return 'Casa Padrão'
    }  
    else  if ( tipoImovel === 'CO' ) {
        return 'Cobertura'
    }  
    else  if ( tipoImovel === 'CH' ) {
        return 'Chacara'
    }  
    else  if ( tipoImovel === 'CB' ) {
        return 'Cobertura'
    }  
    else  if ( tipoImovel === 'Q' ) {
        return 'Quarto'
    }  
    else  if ( tipoImovel === 'P' ) {
        return 'Prédio Comercial'
    }  
    else  if ( tipoImovel === 'L' ) {
        return 'Loft'
    }  
    else  if ( tipoImovel === 'F' ) {
        return 'Fazenda'
    }  
    else  if ( tipoImovel === 'FL' ) {
        return 'Flat'
    }  
    else  if ( tipoImovel === 'K' ) {
        return 'Kitinete'
    }  
    else  if ( tipoImovel === 'L' ) {
        return 'Loteamento'
    }  
    else  if ( tipoImovel === 'CN' ) {
        return 'Condomínio'
    }  
    else  if ( tipoImovel === 'CV' ) {
        return 'Casa de Vila'
    }  
    else  if ( tipoImovel === 'G' ) {
        return 'Galpão'
    }  
    else  if ( tipoImovel === 'H' ) {
        return 'Haras'
    } 
    else  if ( tipoImovel === 'M' ) {
        return 'Haras'
    } 
    else  if ( tipoImovel === 'PO' ) {
        return 'Pousada'
    } 
}