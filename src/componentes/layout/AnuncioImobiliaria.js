import React, { Component } from 'react';
import imobiliaria from '../fotos/zirtaeb.png';
import imobiliaria2 from '../fotos/carvas.png';

class AnuncioImobiliaria extends Component {
    render() {
        return (
           <div> 
         <div>
            <div class="widget widget-about">
            <div className="sd-title">
                   <h3>Anuncios</h3>
           </div>
               <img src={imobiliaria} alt="" style={{width: '100px', height: '100px'}}/>   
           </div>         
        </div>

<div>
<div class="widget widget-about">
<div className="sd-title">
       <h3>Anuncios</h3>
</div>
   <img src={imobiliaria2} alt="" style={{width: '100px', height: '100px'}}/>   
</div>         
</div>

</div>
        );
    }
}

export default AnuncioImobiliaria;