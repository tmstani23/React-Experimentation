
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

//This component changes the background color of a div using state and bind:
const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    //Here the state is set to color green:
    this.state = { color: green };
    //Here this is explicitly bound to this.changeColor:
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    //If color is green change to yellow else change to green:
    const newColor = this.state.color == green ? yellow : green;
    //Update the component state to newColor:
    this.setState({ color: newColor });
  }
  render() {
    return (
      //Render the div background color to the current state color
      //Call the components changeColor method on click:
      <div style = {{background: this.state.color}}>
        <h1>
          Change my color
        </h1>
        <button onClick = {this.changeColor}>
  				Change color
				</button>
			</div>
    );
  }
}
ReactDOM.render(<Toggle />, document.getElementById("bg-div"));