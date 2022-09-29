import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='blog-1' >
                <h1>How does React Work?</h1>
                <div className='container-box'>
                    <div className='blog-cart'>
                     <h4>JSX</h4>
                     <p>JSX is a JavaScript syntax extension used in React element creation. Developers employ it to embed HTML code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it can simplify complex code structures.JSX also helps combat Cross-Site Scripting (XSS) attacks. By default, React DOM converts values embedded in JSX to strings before rendering them. Consequently, third parties cannot inject extra code through user input unless it is explicitly written in the application.</p>
                     </div>
                    <div className='blog-cart'> 
                        <h4>Virtual DOM</h4> 
                        <p>The Document Object Model (DOM) presents a web page in a data tree structure. ReactJS stores Virtual DOM trees in the memory. By doing so, React can apply updates to specific parts of the data tree, which is faster than re-rendering the entirety of the DOM tree.

Whenever there’s a change in data, ReactJS will generate a new Virtual DOM tree and compare it with the previous one to find the quickest possible way to implement changes in the real DOM. This process is known as diffing.</p>
                    </div>
                    <div className='blog-cart'> 
                        <h4>Components and Props</h4> 
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

Returned React elements determine how the UI will look at the client end. Here’s an example of a function component that returns a React element</p>
                    </div>
                    <div className='blog-cart'> 
                        <h4>State Management</h4> 
                        <p>A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.

State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed.</p>
                    </div>
                </div>
            </div>
            <div className='blog-1' >
                <h1>Difference between props and state?</h1>
                <div className='container-box'>
                    <div className='blog-cart'>
                     <h4>props</h4>
                     <p>Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.</p>
                     </div>
                    <div className='blog-cart'> 
                    <h4>Components and Props</h4> 
                        <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

Returned React elements determine how the UI will look at the client end. Here’s an example of a function component that returns a React element</p>
                    </div>
                    <div className='blog-cart'> 
                        <h4>state</h4> 
                        <p>The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.

A Component manages its own state internally. Besides setting an initial state, it has no business fiddling with the state of its children. You might conceptualize state as private to that component.</p>
                    </div>
                    <div className='blog-cart'> 
                        <h4>State Management</h4> 
                        <p>A state is a JavaScript object that represents a part of a component. It changes whenever a user interacts with the application, rendering a new UI to reflect the modifications.

State management refers to the practice of managing React application states. It includes storing data in third-party state management libraries and triggering the re-rendering process each time data is changed.</p>
                    </div>
                </div>
            </div>
            <div className='blog-1' >
                <h1> what's the Use useeffect without data loader work?</h1>
                <div className='container-box'>
                    <div className='blog-cart'>
                     <p>Although useEffect is deferred until after the browser has painted, it's guaranteed to fire before any new renders. React will always flush a previous render's effects before starting a new update.</p>
                    </div>
                    <div className='blog-cart'> 
                        
                        <p>By default useEffect will trigger anytime an update happens to the React component. This means if the component receives new props from its parent component or even when you change the state locally, the effect will run again.</p>
                    </div>
                    <div className='blog-cart'> 
                        <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;