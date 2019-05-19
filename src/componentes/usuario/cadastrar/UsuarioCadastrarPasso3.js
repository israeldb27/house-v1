import React, { Component } from 'react'
import HeaderUsuarioCadastrar from './HeaderUsuarioCadastrar';
import { Link } from 'react-router-dom';
import history from '../../History';

class UsuarioCadastrarPasso3 extends Component {

    cadastrarFinalizar(e){
        e.preventDefault();
        console.log('Path foto: ' + this.pathFoto.value);        
        history.push('/usuarioCadastrarPasso3');
   }        

   retornarPasso(){
        console.log('chamou retornarPasso');
        history.push('/usuarioCadastrarPasso2');
    }


  render() {
    return (
      <div>
        <HeaderUsuarioCadastrar />

        <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">                                 

                                        </div>{/*--main-left-sidebar end*/}
                                    </div>

                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="tab-content" id="nav-tabContent">
                                            <div className="tab-pane fade show active" id="nav-acc" role="tabpanel" aria-labelledby="nav-acc-tab">
                                                <div className="acc-setting">
                                                    <h3>Novo Usuário</h3>
                                                    <form onSubmit={this.cadastrarFinalizar.bind(this)}>
                                                        <div className="cp-field">
                                                            <h5>Selecione uma foto</h5>
                                                            <div className="cpp-fiel">
                                                                <input type="text" ref={(input) => this.pathFoto = input} name="pathFoto" placeholder="Password" />
                                                            </div>
                                                        </div>  

                                                        <div className="save-stngs pd2">
                                                            <ul>
                                                                <li><button type="button" onClick={this.retornarPasso.bind(this)}>Retornar Cadastro</button></li>        
                                                                <li><button type="submit">Finalizar Cadastro</button></li>                                                                
                                                            </ul>
                                                        </div>{/*save-stngs end*/}
                                                    </form>
                                                </div>{/*acc-setting end*/}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
        
      </div>
    )
  }
}

export default UsuarioCadastrarPasso3;
