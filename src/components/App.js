import React, { Component } from 'react'

export class App extends Component {
    
    render(){
        return(
            <div>
                <nav className="menu"> 
                    <ul className="menu__list">
                        <li className="menu__list-item"><a className="menu_link" href="#"><img src="logoPet.png"></img></a></li>
                        <div className="right">
                            <li className="menu__list-item"><a className="menu__link" href="#sobre">Sobre</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#">Atividades</a></li>
                            <li className="menu__list-item"><a className="menu__link" href="#">Login</a></li>
                        </div>
                    </ul>
                </nav>
                
                <div className="imageCenter">
                    <img src="banner2.jpg"/>
                </div>
                    {/* aqui teria que fazer um container para as publicacoes*/}
                <div>
                    
                </div>
                
                <footer>
                    <div class="infos">
                        <p>Av. Colombo 5790, Jardim Universitário, Maringá-Paraná
                        <br/>Departamento de Informática - Bloco C56 - Sala 001
                        <br/>CEP: 87020-900 </p>
                    </div>
                </footer>
                    
            </div>
        )
    }
  
}

export default App;
