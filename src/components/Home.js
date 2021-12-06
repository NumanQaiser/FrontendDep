import React from 'react'
import "./home.css"
import {BrowserRouter as Link, Router,Routes} from "react-router-dom";
function Home() {
    return (
        <div >
            <section>
                <div>
                    <div className='parent'>
                         <img className='back'/>
                    </div>
                    <div className='child'>
                        <h3>i'm</h3>
                        <br/>
                        <h1>numan</h1>
                        <br/>
                        <h3>full stack web developer</h3>
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Home
