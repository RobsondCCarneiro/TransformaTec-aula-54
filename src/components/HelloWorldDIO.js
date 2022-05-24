import HelloDev from './HelloDev';								  

//Declarando o componente de função
function HelloWorldDIO(){

    //Retornando o componente HTML na função
    return(

        //Componente HTML que será renderizado no browser
        <div>
            <HelloDev />
            <p>Salve galera da DIO! Tudo beleza?</p>
        </div>

    )

}

//Exportar o componente pra ser consumido em outros componentes ou páginas
export default HelloWorldDIO
