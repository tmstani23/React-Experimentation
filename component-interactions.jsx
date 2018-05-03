
//Here a message is input into the PropsDisplayer component
  //the props object is made into a string and the message is displayed:
class PropsDisplayer extends React.Component {
  render() {
  	//Here a variable turns the component's props object
    	//into a string for readability:
    const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('name-prop'));