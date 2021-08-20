import React from 'react';
import './setup.css';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';


function Setup() {
    return(
        <div>
            
            <NavbarTop />
            <NavbarMenu />

            <div className="container mt-3">
                <div className="row justify-content-center">
                    <div id="conteudo" className="col-md-12 text-center">
                        <div className="row justify-content-center">
                            <div id="renderComponentes" className="col-md-8">
                                <div className="tabelaComponentes">                            
                                    <div className="row mb-4">
                                        <div className="componente col-sm-3">
                                            <p id="1">AMD Ryzen 9 3950X</p><br/>
                                            Soquete: AM4<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 16<br/>
                                            Threads: 32<br/>
                                            PCI Express": 4.0 x16<br/>
                                            Cache Total: 64<br/>
                                            Boost Clock: 4.7<br/>
                                            Base Clock: 3.5<br/>
                                            Cooler: NC<br/>
                                            TDP: 105<br/>
                                            Velocidade Memória: 3200<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>                            
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" id="seleciona"/>
                                        </div>
                                        <div className="componente col-sm-3">
                                            <p id="2">AMD Ryzen 9 3900X</p><br/>
                                            Soquete: AM4<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 12<br/>
                                            Threads: 24<br/>
                                            PCI Express": 4.0 x16<br/>
                                            Cache Total: 64<br/>
                                            Boost Clock: 4.6<br/>
                                            Base Clock: 3.8<br/>
                                            Cooler: NC<br/>
                                            TDP: 105<br/>
                                            Velocidade Memória: 3200<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" />
                                        </div>
                                        <div className="componente col-sm-3">
                                            <p id="3">AMD Ryzen 7 3700X</p><br/>
                                            Soquete: AM4<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 8<br/>
                                            Threads: 16<br/>
                                            PCI Express": 4.0 x16<br/>
                                            Cache Total: 64<br/>
                                            Boost Clock: 4.4<br/>
                                            Base Clock: 3.6<br/>
                                            Cooler: NC<br/>
                                            TDP: 105<br/>
                                            Velocidade Memória: 3200<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" />
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="componente col-sm-3 mt-4">
                                            <p id="4">AMD Ryzen 7 2700X</p><br/>
                                            Soquete: AM4<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 8<br/>
                                            Threads: 16<br/>
                                            PCI Express": 4.0 x16<br/>
                                            Cache Total: 64<br/>
                                            Boost Clock: 4.3<br/>
                                            Base Clock: 3.7<br/>
                                            Cooler: NC<br/>
                                            TDP: 105<br/>
                                            Velocidade Memória: 3200<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" />
                                        </div>
                                        <div className="componente col-sm-3 mt-4">
                                            <p id="5">Intel Core i9 9900KS</p><br/>
                                            Soquete: LGA1151<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 8<br/>
                                            Threads: 16<br/>
                                            PCI Express": 4.0 x16<br/>
                                            Cache Total: 20<br/>
                                            Boost Clock: 5.0<br/>
                                            Base Clock: 4.0<br/>
                                            Cooler: NC<br/>
                                            TDP: 127<br/>
                                            Velocidade Memória: 2666<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" />
                                        </div>
                                        <div className="componente col-sm-3 mt-4">
                                            <p id="6">Intel Core i7 10700</p><br/>
                                            Soquete: LGA1200<br/>
                                            Modelo Grafico: Off Board<br/>
                                            Núcleos: 8<br/>
                                            Threads: 16<br/>
                                            PCI Express": 3.0 x16<br/>
                                            Cache Total: 16<br/>
                                            Boost Clock: 4.8<br/>
                                            Base Clock: 2.9<br/>
                                            Cooler: NC<br/>
                                            TDP: 65<br/>
                                            Velocidade Memória: 2666<br/>
                                            Memória: DDR4<br/>
                                            Canais de Memoria: 2<br/><br/>
                                            <input type="button" value="Selecionar" className="btn btn-outline-secondary" />
                                        </div>
                                    </div>                        
                                </div>
                            </div>
                            <div className="col-sm-4 justify-content-center">
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