function HelloPlus(props){

    var n1 = 40
    var n2 = 121

    return (
        <div>
            <p>
                soma {props.calcNumbers(n1,n2)}
            </p>
        </div>
    )
}

export default HelloPlus;