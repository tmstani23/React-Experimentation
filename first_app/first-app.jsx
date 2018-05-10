
//A friends list function component:
function FriendsList(props) {
    return (
        //The friends array is mapped to an anonymous function
            //And displays a list for each friend in the array:
        <ul>
          { props.list.map( (name) => (
             //Set name as the key for each list item
             //React needs a unique key to compare states
             <li  key = { name }>
                 <span> { name } </span>
                 <button onClick = { () => props.onRemoveFriend(name) }>Remove</button>
             </li> 
           )) }  
        </ul>
    )
}
//App component that renders the app to the screen:
    //Note: Use class component when you want to manage component state
class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            friends: ["Tom", "Leah", "Isaac"],
            input: ""
            
        };
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        

    }
    //Method that adds friends to the array based on user input:
    handleAddFriend() {
        this.setState((currentState) => {
            //concat the input into the friends array
            //Note:concat copies the array and adds the input parameter
                //Does not modify the original array
            if (currentState.input !== "") {
                return { 
                friends: currentState.friends.concat([currentState.input]),
                    input: ""
                }
            }
        })
    }
    //Method that removes friends from the friends array:
    handleRemoveFriend(name) {
        //set state as passed in currentState function
        //Note:the first argument to setState must be a function 
            //that represents the current state of the component
        this.setState((currentState) => {
            return {
                //set current state friend to 
                    // a friend that doesn't have the name passed into this component
                friends: currentState.friends.filter((friend) => friend !== name)
            }
        })
    }   

    updateInput(e) {
        const value = e.target.value;

        this.setState({
            input: value
        })
    }

    render() {
        
        return (
            
            //The friendslist component is passed the friends array:
            <div>
                <input type="text" 
                    placeholder = "New Friend"
                    value = {this.state.input}
                    onChange = {this.updateInput}
                />
                <button onClick = { this.handleAddFriend }>Submit</button>
                <FriendsList 
                    list = { this.state.friends }
                    onRemoveFriend = { this.handleRemoveFriend } />
                
            </div>
        )
    }
}


//Renders the app component to the screen.
ReactDOM.render(<App />, document.getElementById('app'));
