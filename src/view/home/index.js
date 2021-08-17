import React from 'react';
import './home.css';
import {Link} from 'react-router-dom';
import NavbarTop from '../../components/navbarTop';
import NavbarMenu from '../../components/navbarMenu';
import Footer from '../../components/footer';
import dinheiro from '../../img/page/dinheiro.jpg'
import duvida from '../../img/page/dúvida.jpg'
import quarto from '../../img/page/quarto.jpg'

function Home(){
    return(
        <div className="home">
            
            <NavbarTop />
            <NavbarMenu />
        
            <div id="conteudo" className="container mt-3">
                <div className="row justify-content-center">
                    <div className="col-sm-10 text-center texto">
                        <p>
                            O MeuSetup foi feito para você configurar o seu próprio Setup Gamer. 
                            Entretanto para quem está começando no mundo 
                            gamer as perguntas mais comuns são: 
                        </p>
                            <br/>
                            <div className="row">
                                <div className="col-sm-7">
                                    <p>
                                        "O que é um Setup Gamer?" 
                                        Você pode pensar no Setup Gamer como o espaço físico que o 
                                        jogador tem para instalar seus equipamentos, geralmente o 
                                        próprio quarto é o espaço preferido da maioria das pessoas, 
                                        mas é claro que existem salas de jogos dedicadas, sendo, 
                                        geralmente, o passo mais avançado na construção de um 
                                        Setup Gamer.
                                    </p>
                                </div>
                                <div className="col-sm-4">
                                    <img className="setup" src={quarto}/>
                                </div>
                            </div>
                        <br/>    
                        <br/>
                        <div className="row">
                            <div className="col-sm-4">
                                <img className="custo"src={dinheiro}/>
                            </div>
                            <div className="col-sm-7">
                                <p>
                                    "Quanto custa um setup gamer?" Para uma 
                                    composição de Cadeira Gamer, Teclado Gamer, Mouse Gamer e 
                                    Headset Gamer o valor pode ficar entre de R$ 1500 - R$ 3000. 
                                    Já para o que vai realmente vai ser o "coração" do seu Setup, 
                                    nós chamamos de Rig, geralmente o PC Gamer, Notebook Gamer ou 
                                    Console esses podem ter preços que variam de R$ 1000 a 
                                    R$ 15.000 ou até mais.
                                </p>
                            </div>
                        </div> 
                        <br/>
                        <br/>
                        <div className="row">
                            <div className="col-sm-7">
                                <p>
                                    "Como montar um Setup Gamer?" 
                                    Nossa recomendação é começar devagar e ir melhorando aos 
                                    poucos tentando aproveitar aqueles itens que você já tem. 
                                    Se você já tem um Pc Gamer ou um console você pode começar 
                                    investindo no seu conforto, optando por uma cadeira gamer. 
                                    Itens de alta performance como um bom teclado mecânico, 
                                    headsets de qualidade e um mouse de alta precisão podem vir 
                                    depois, assim como os detalhes de decoração e iluminação. 
                                </p>
                            </div>
                            <div className="col-sm-4">
                                <img className="duvida" src={duvida}/>
                            </div>
                        </div>
                        <p>
                            
                            <br/>
                            Aqui em nosso portal, indicaremos componentes para que você mesmo
                            possa montar o seu tão sonhado PC Gamer, bem como mostraremos 
                            quais componentes são compatíveis entre si, afinal a parte mais 
                            difícil na hora de montar o seu Setup Gamer é saber quais peças se 
                            encaixam nesse quebra-cabeças.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
            
        </div>
    );
}

export default Home;