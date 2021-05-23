import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

function App () {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(users => {setRobots(users)});
            console.log(count)
    },[count])
    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);
    }

    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return !robots.length ?
    <div className='tc'> <h1>Loading</h1> </div> :
    (
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <button onClick={()=>setCount(count+1)}>Click</button>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                </ErrorBoundry>
            </Scroll>
        </div>
    );           
}

export default App;