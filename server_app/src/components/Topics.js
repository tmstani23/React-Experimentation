import React from 'react';
import {
    Link,
    Route,
} from 'react-router-dom';


//This component renders the topicId in an h2
function Topic({match}) {
    return <h2> {match.params.topicId}</h2> 
}

//Match is a subcomponent of props passed into the component via react router
//See console.log(props) to verify
export default function Topics({match}) {
    
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                {/* match.url preserves the actual path passed in via props
                    used in linking */}
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props vs. State</Link>
                </li>
            </ul>
            
            <hr/>
            {/* match.path designates the path.  Used in the Route.  topicID is an identifier that can be
                used by match.params to designate the dynamic path as rendered in the Topic component */}
            <Route path={`${match.path}/:topicId`} component={Topic} />
            {/* Route render allows you to render jsx within the route rather than creating a separate function
                to pass into the route as a component to render as above */}
            <Route exact path={match.path} render = {() => {
                return <h3>Please select a topic</h3>
            }} />
        </div>
        
    ) 
}
