
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
                 { name }
             </li> 
           )) }  
        </ul>
    )
}
//App component that renders the app to the screen:
    //Note: Use class component when you want to manage component state
class App extends React.Component {
    
    constructor(props) {
        super(props)
        
        this.state = {
            friends: ["Tom", "Leah", "Isaac"]
        }
    }

    handleAddFriend() {

    }
    //41min in video
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

    render() {
        
        return (
            //The friendslist component is passed the friends array:
            <div>
                <FriendsList list = { this.state.friends } />
            </div>
        )
    }
}


//Renders the app component to the screen.
ReactDOM.render(<App />, document.getElementById('app'));
