import ls from 'local-storage';

const USUARIO_STORAGE = 'usuario-storage-session';
const ID_USUARIO_STORAGE = 'usuario-id-storage-session';

export function getUsuarioStorage(){
    return ls.get(USUARIO_STORAGE)    
}

export function setUsuarioStorage(usuario){
    console.log('Setando usuario storage: ' + usuario);
    ls.set(USUARIO_STORAGE, usuario)        
}

export function setIdUsuarioStorage(id){
    return ls.set(ID_USUARIO_STORAGE, id)    
}

export function getIdUsuarioStorage(){
    return ls.get(ID_USUARIO_STORAGE)    
}

export function isEmpty(obj) {
    for ( var prop in obj ) { 
      return false; 
    } 
    return true; 
  }

export function formataDataHora(dataHora){    

        return (new Intl.DateTimeFormat('pt-BR', { 
            month: 'numeric', 
            day: 'numeric',
            year: 'numeric',    
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'                                                                
        }).format(new Date(dataHora)))
    
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