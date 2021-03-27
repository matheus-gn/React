var container = document.getElementById("app")
//var titulo = document.createElement("h1")
//titulo.innerHTML = "Titulo inserido por javascripto :0 "
//container.appendChild(titulo)


function Contador(props) {

    //let num=0;

    const[num, setNum]=React.useState(0);

    function somar()
    {
        //num++
        setNum(num + 1)
        console.log("somado e ficou"+ (num+1))
    }

    function subtrair()
    {
        setNum(num - 1)
        console.log("subtrai e ficou"+ (num+1))
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <img src={props.image}  width="100" height="100"/>
            <h2>{num}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair} >-</button>
        </React.Fragment>

    );

}

function App() {

    return (
        <React.Fragment>
            <Contador titulo="Ios" image="https://tecnoblog.net/wp-content/uploads/2020/11/apple-logo.jpg" />
            
            <Contador titulo="Android" image="http://s2.glbimg.com/VD9XgaIKvSsGQCXNttt1lZHHY9o=/695x0/s.glbimg.com/po/tt2/f/original/2015/09/28/android.jpg" />
            
        </React.Fragment>


    );

}


ReactDOM.render(React.createElement(App, null, null), container);
//ReactDOM.render(App(),container);