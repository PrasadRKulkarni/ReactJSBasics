import React from 'react';
import Header from './Header.jsx';
import ListComponent from './ListComponent.jsx';
import Greetings from './Greetings.jsx';
import Basic from './Basic.jsx';
import CallCalculator from './CallCalcModule.jsx';
import Concat from './Props';
import ArrayData from './ArrayEx';  
import ArrowFn from './ComponentWithArrowFn';
import ButtonClick from './ButtonClick';
import RefreshTimeHook from './Hooks';
import FormsExample from './Forms';
import FormsExample2 from './Form2';
import NPMClock from './NPMClock.jsx';
import CompA from './UseContextPassData1';
import UseEffectDemo from './UseEffectDemo.jsx';
import CallAPICovid from './APICovid';
//For Routing
import {Route, Switch} from 'react-router-dom';
import  AboutUs  from './AboutUs.jsx';
import  ContactUs  from './ContactUs.jsx';
import  Menubar  from './Menu.jsx';

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Basic/>
            <h3>Pass variables from different module</h3>
            <ListComponent/>  
            <Greetings/>

            <h3>Simple Calculator</h3>
            <CallCalculator />    
            
            <h3>Props Example with Array</h3>           
            <Concat title="Pk"/> <br/>
            <Concat title="SR"/> <br/>

            <h3>Props Example with Array Index</h3>
            <Concat title={ArrayData[0].title} /> <br/>
            <Concat title={ArrayData[1].title} /> <br/>

            <h3>Props Example with Array without looping</h3>
            {ArrayData.map(ndata)}

            <ArrowFn />

            <ButtonClick />

            <RefreshTimeHook />

            <FormsExample />

            <FormsExample2 />

            <hr />
            <h2>NPM React Digital Clock</h2>
            <NPMClock />

            <hr />
            <h2>Pass Data from one component to another - Context API</h2>
            <CompA />

            <hr />
            <h2>Use Effect Demo</h2>
            <UseEffectDemo />

            {/* <h1>Call API</h1>
            <CallAPICovid /> */}

            <h1>React Routing Example</h1>
            <h3>npm i react-router-dom</h3>
            <Menubar />
            <Switch>
                <Route exact path ='/' component={AboutUs} />
                <Route path ='/contact' component={ContactUs} />
            </Switch>
           



        </React.Fragment>
    );
}

function ndata(val){
    console.log(val);
    return(
        <>
            <Concat 
                key = {val.id}
                title = {val.title}>
            </Concat>
            <br/>
        </>
    );
}

export default App;