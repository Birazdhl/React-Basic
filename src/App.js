import React, { Component } from 'react';
import './App.css';

 import {UserProvider} from './Component/25.Context/ContextC'
 import CompA from '../src/Component/25.Context/CompA'

class App extends Component{
  render(){
    return (
      <div className="App">


{/*  Error Boundry */}
{/* 
<ErrorBoundry>
      <Hero heroName="Captain America"></Hero>
      </ErrorBoundry>
<ErrorBoundry>
      <Hero heroName="Thor"></Hero>
      </ErrorBoundry>
<ErrorBoundry>
      <Hero heroName="Thanos"></Hero>
</ErrorBoundry> */}


{/* Render Porps */}

{/* <User render={(isLoggedIn) => isLoggedIn ? 'Biraz' : 'Guest'} /> */}

{/* <CounterTwo 
    render={(count, incrementCount) => (
      <ClickCounterTwo count={count} incrementCount={incrementCount} />
    )} />

<CounterTwo 
    render={(count, incrementCount) => (
      <HoverCounterTwo count={count} incrementCount={incrementCount} />
    )} /> */}

{/* Context */}

{/* { 
      <UserProvider value="Brutal">
        <CompA />
      </UserProvider> } */}

<CompA />
    
      </div>
    )
  }
}

export default App;
