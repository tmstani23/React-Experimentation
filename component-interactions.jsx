
//Below a message is input into the PropsDisplayer component
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
//Rendering the PropsDisplayer component to the screen:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('name-prop'));


//This component takes an input property and displays it within the jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.firstName}!</h1>;
  }
}

ReactDOM.render(
  <Greeting firstName='Lutra' />, 
  document.getElementById('app')
);


//Below is an example of two different components passing properties between each other and displaying:
class AnotherGreeting extends React.Component {
  render() {
    //Here a check on the Greeting component's input property "signedIn":
    if (this.props.signedIn == false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
      //Here it will display the Greeting component input property name:
      return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}
//This component calls the AnotherGreeting component with 2 properties
  //And renders it below an h1 tag:
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <AnotherGreeting name="Timothy" signedIn= {true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}
//Display the app component appended to the greeting div:
ReactDOM.render(
  <App />, 
  document.getElementById('greeting')
);


//Below is an example of a Button component applying the Talker component's talk method
  //as an event handler on button click:
class Button extends React.Component {
  render() {
    return (
      //talk is an input when the Button Component is called it is saved as an instance in this.props:
      <button onClick = {this.props.talk}>
        Click me!
      </button>
    );
  }
}
//This component includes the talk method and renders the Button component:
class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}
//Here the Talker component is rendered appended to the talker div:  
ReactDOM.render(
  <Talker />,
  document.getElementById('talker')
);


//Below two components share child JSX elements by using this.children.props:
//This component takes an input and displays all its children
class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    //If the children are in an array it adds an s to the title text variable
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      //Here the title text and children are displayed as an h1 and ul respectively:
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
//This component creates two instances of the List component and passes them titles and child list elements
  //All JSX elements between the called component tags are considered children as seen in the List component:
class ChildrenApp extends React.Component {
  render() {
    return (
      //List is the component class, type is the passed in property name, li elements are the children:
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <ChildrenApp />, 
  document.getElementById('children')
);


