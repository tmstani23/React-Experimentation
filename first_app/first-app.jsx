//Component that renders loading message to the screen until friends data request completes
class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            text: "Loading"
        }
    }
    //When component mounts render loading until the data request completes
    componentDidMount() {
        const stopper = this.state.text + "...";

        this.interval = window.setInterval(() => {
            console.log("running");
            //Once component state gets to Loading... reset to loading
            this.state.text === stopper 
            ? this.setState({ text: "Loading"})
            : this.setState((currentState) => {
                return {
                    text: currentState.text + '.'
                }
            })
        }, 300);
            
    }   
    componentWillUnmount() {
        window.clearInterval(this.interval);
    }
    render() {
        return <p> { this.state.text } </p>
    }
}


function ActiveFriends(props) {
    return (
        //The friends array is mapped to an anonymous function
            //And displays a list for each friend in the array:
        <div>
            <h2>Active Friends</h2>
            <ul>
                { props.list.map( (friend) => (
                //Set name as the key for each list item
                //React needs a unique key to compare states
                    <li  key = { friend.name }>
                        <span> { friend.name } </span>
                        <button onClick = { () => props.onRemoveFriend(friend.name) }>Remove</button>
                        <button onClick = { () => props.onToggleFriend(friend.name) }>Deactivate</button>
                    </li> 
                )) }  
            </ul>
        </div>
    )
}

function InactiveFriends(props) {
    return (
        <div>
            <h2>Inactive Friends</h2>
            <ul>
                { props.list.map( (friend) => (
                //Set name as the key for each list item
                //React needs a unique key to compare states
                    <li  key = { friend.name }>
                        <span> { friend.name } </span>
                        <button onClick = { () => props.onToggleFriend(friend.name) }>Activate</button>
                    </li>
                )) }  
            </ul>
        </div>
    )
}

//App component that renders the app to the screen:
    //Note: Use class component when you want to manage component state
class App extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            friends: [],
            input: "",
            loading: true
            
        };
        this.handleRemoveFriend = this.handleRemoveFriend.bind(this);
        this.updateInput = this.updateInput.bind(this);
        this.handleAddFriend = this.handleAddFriend.bind(this);
        this.handleToggleFriend = this.handleToggleFriend.bind(this);
        
        console.log('--constructor--');

    }
    //invoked whenever the component is mounted to the browser DOM
    componentDidMount() {
        console.log("--componentDidMount--");

        API.fetchFriends()
            .then((friends) => {
                //console.log("friends", friends);
                this.setState({
                    friends,
                    loading: false
                })
            })
    }
    //invoked after the component has updated
    componentDidUpdate() {
        console.log('componentdidUpdate');
    }
    //invoked whenever component is removed from the DOM:
    componentWillUnmount() {
        console.log("--componentwillunmount--");
    }
    //Method that adds friends to the array based on user input:
    handleAddFriend() {
        this.setState((currentState) => {
            //concat the input into the friends array
            //Note:concat copies the array and adds the input parameter
                //Does not modify the original array
            if (currentState.input !== "") {
                return { 
                friends: currentState.friends.concat([{
                    name: currentState.input,
                    active: true
                }]),
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
                friends: currentState.friends.filter((friend) => friend.name !== name)
            }
        })
    }
    
    handleToggleFriend(name) {
        this.setState((currentState) => {
            const friend = currentState.friends.find((friend) => friend.name === name)
            
            return {
                friends: currentState.friends.filter((friend) => friend.name !== name)
                    .concat([{
                        name, 
                        active: !friend.active
                    }])
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
        console.log("--rendering--");
        //Loading screen until the data request is completed:
        if(this.state.loading === true){
            return <Loading />
        }


        return (
            
            //The friendslist component is passed the friends array:
            <div>
                <input type="text" 
                    placeholder = "New Friend"
                    value = {this.state.input}
                    onChange = {this.updateInput}
                />
                <button onClick = { this.handleAddFriend }>Submit</button>
                <div>
                    <button onClick = {() => this.setState({
                        friends: []
                    })}>
                    Clear All
                    </button>
                </div>
                <ActiveFriends 
                    onRemoveFriend = { this.handleRemoveFriend }
                    list = { this.state.friends.filter((friend) => friend.active === true) }
                    onToggleFriend = { this.handleToggleFriend }
                />
                <InactiveFriends 
                    list = { this.state.friends.filter((friend) => friend.active === false) }
                    onToggleFriend = { this.handleToggleFriend }
                />
                
                
            </div>
        )
    }
}


//Renders the app component to the screen.
ReactDOM.render(<App />, document.getElementById('app'));
