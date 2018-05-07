
//This component includes a state and displays the state when rendered in an h1:
class App extends React.Component {
	// constructor method begins here:
	constructor(props) {
    //required in all react components with state constructors:
    super(props);
    //This represents the initial state of the component
    this.state = { title: "Best App" };
  }
	
  render() {
    return (
      //Here the state object is rendered:
      <h1>
        {this.state.title}
      </h1>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));