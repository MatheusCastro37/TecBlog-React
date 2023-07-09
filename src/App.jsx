import Header from './components/Header';
import ButtonHeader from './components/ButtonHeader';
import CardContainer from './components/Card';

import './app.css';

function App() {

  return (
    <div className='container'>
      <Header>
        <nav>
          <ButtonHeader title="MENU" />
          <ButtonHeader title="JOGOS" />
          <ButtonHeader title="CELULARES" />
          <ButtonHeader title="INFORMATICA" />
          <ButtonHeader title="ELETRONICOS" />
        </nav>
      </Header>
      <div>
        <main>
          <CardContainer />
          <CardContainer />
        </main>
        <div id='sideContent'>
          <aside>
            <h3>Postagens recentes</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima nisi iste error, tempora adipisci cupiditate a possimus repellendus. Ipsa, perferendis molestiae possimus ipsum nesciunt non. Voluptate cupiditate perferendis expedita?</p>
            <a href="#" >Leia mais...</a>
            <hr/>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo suscipit totam cum aperiam? Ex necessitatibus quisquam quaerat nemo repudiandae commodi eius rerum dolorem earum, molestias fuga assumenda quo perspiciatis eum!</p>
            <a href="#" >Leia mais...</a>
          </aside>

          <aside id='content'>
            <h3>Conteudo</h3>
            <a href="#">Jogos</a>
            <a href="#">Celulares</a>
            <a href="#">Informatica</a>
            <a href="#">Eletronicos</a>
            <a href="#">Computadores</a>
          </aside>
        </div>
      </div>
      <footer>
        <p>Todos os direitos resevados</p>
      </footer>
    </div>
  )
}

export default App