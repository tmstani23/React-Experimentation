
//Here is an example of a react component returning multiline JSX code and displaying it:
class MyQuote extends React.Component {
  render() {
    return ( 
      <blockquote>
      <p>
        What is important now is to recover our senses.
      </p>
      <cite>
        <a target="_blank" 
          href="https://en.wikipedia.org/wiki/Susan_Sontag">
          Susan Sontag
        </a>
      </cite>
	</blockquote> )
	}
}


//here a react component uses a premade object variable to access object properties and display them:
const owl = {
  title: 'Excellent Owl',
  src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg'
};

class Owl extends React.Component {
  render() {
    return (
      <div>
      	<h1>
        	{owl.title}
        </h1>
        <img 
          src={owl.src}
          alt={owl.title}
        />
      </div> )
  }
}
//Below is a component that adds a variable within the render function
  //Note the component variable must be declared within the render function
  //The variable points to a premade friend object's properties:
  const friends = [
    {
      title: "Yummmmmmm",
      src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys!  Wait Up!",
      src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-alpaca.jpg"
    }
  ];
  
  class Friend extends React.Component {
    render() {
      let friend = friends[2];
      return (
        <div>
          <h1>
            {friend.title}
            <img src = {friend.src} />
          </h1>
        </div>
      );
    }
  }
  
ReactDOM.render(<Friend />, document.getElementById('app'));



ReactDOM.render(<Owl />, document.getElementById("owl-div"));

ReactDOM.render(<MyQuote />, document.getElementById("root"));