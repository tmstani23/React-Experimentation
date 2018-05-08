
const name = 'Timothy Stanislav';
const handle = "@Lutra";

function NameComponent(props) {
    return <h1>{ props.name }</h1>
}

function HandleComponent(props) {
    return <h3>{ props.handle }</h3>
}

function App() {
    return (
        <div id="container">
            <NameComponent name ='Timothy' />
            <HandleComponent handle ="@Rukus" />
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById('app'));
