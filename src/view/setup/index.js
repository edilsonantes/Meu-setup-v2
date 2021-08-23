import React from 'react';
import './setup.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import ComponentCard from '../../components/componentcard';


function Setup() {
    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div id="conteudo" className="col-md-12 text-center">
                        <div className="row justify-content-center">
                            <div id="renderComponentes" className="col-md-8 col-sm-6">
                                <div className="row">                            
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                    <ComponentCard />
                                                            
                                </div>
                            </div>
                            <div className="col-md-4 justify-content-center col-sm-6">
                                <div className="row my-2">
                                    <label for="nome" className="form-label">Nome do Setup:</label><br/>
                                    <input type="text" name="nome" className="campo mb-3" id="nome"/>
                                </div>                        
                                <div id="procEscolhido" className="row componenteEscolhido my-2">
                                    <p> Processador</p>
                                </div>
                                <div className="row componenteEscolhido my-2">
                                    <p> Placa-mãe</p>
                                </div>
                                <div className="row componenteEscolhido my-2">
                                    <p> Memória RAM</p>
                                </div>
                                <div className="row componenteEscolhido my-2">
                                    <p> Placa de vídeo </p>
                                </div>
                                <div className="row componenteEscolhido my-2">
                                    <p> Fonte</p>
                                </div>
                                <div className="row my-2 justify-content-center">
                                    <input type="button" value="Salvar" className="btn btn-warning salvar" id="salvar"/>
                                </div>
                                <div className="row my-2 justify-content-center">
                                    <input type="button" value="Cancelar" className="btn btn-outline-secondary cancelar" id="cancelar"/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                
            </div>
            
            <Footer />
            
        </div>
    )
}

export default Setup;