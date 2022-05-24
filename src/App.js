import './App.css';

//Importando um componente externo
import HelloWorldDIO from './components/HelloWorldDIO';
import HelloWorldDIOClass from './components/HelloWorldDIOClass';
import HelloPeople from './components/HelloPeople';
import Calculator from './components/Calculator';
import HelloPerson from './components/HelloPerson'

//Função que agrupa todos os componentes que serão renderizados
function App() {

  let a = 44;
  let b = 44;

  let person = {
    name: 'Robson',
    surName: 'Carneiro'
  }

  //Retorno da função
  return (

    //Retorna um componente para ser renderizado
    <div className="App">
        <p>

          {/* Chamando o componente para ser renderizado */}
          <HelloWorldDIO />
          <HelloWorldDIOClass />
          <HelloPeople name="Robson" age={27}/>
          <Calculator n1={a} n2={b} />
          <HelloPerson person={person} />
        </p>
    </div>
  );
}

//Exportar o componente App pra ser renderizado
export default App;
