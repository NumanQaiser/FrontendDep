import React from 'react'
import "./about.css"
import person from '../Assests/person.JPG'
function about() {
    return (
        <div className='bg-dark'>
            <div className='information container mt-1 mb-2'>
                <h1 className="title">personal information</h1>
                <div className='row'>
                <p className='col-8 para'>i'm numnan qaiser naqvi professional full stack web developer .i can build responsive websites
                    and also andriod application .i am very passsionate about this filed because this is a way to take 
                    world on the next level.i can make e-commerce ,attendance portal offfice managemnet and students portal 
                    kinds of app . feel free to conatact with me .
                </p>
                <img className='col-4 mb-2'  src={person}/>
                </div>
                <br/>
                <div className='container '>
                    <h3 className='title bg-dark'>skills</h3>
                    <div>
                        <label>html</label>
                        <div className='box'>80%</div>
                    </div>
                    <div>
                        <label>css</label>
                        <div className='box'>80%</div>
                    </div>
                    <div>
                        <label>bootstrap</label>
                        <div className='box'>90%</div>
                    </div>
                    <div>
                        <label>Javascript</label>
                        <div className='box'>70%</div>
                    </div>
                    <div>
                        <label>react</label>
                        <div className='box'>70%</div>
                    </div>
                    <div>
                        <label>node js</label>
                        <div className='box'>80%</div>
                    </div>
                    <div>
                        <label>express</label>
                        <div className='box'>80%</div>
                    </div>
                    <div>
                        <label>mongoDB</label>
                        <div className='box'>75%</div>
                    </div>
                    <div>
                        <label>redux</label>
                        <div className='box'>80%</div>
                    </div>
                    <div>
                        <label>socket.io</label>
                        <div className='box'>70%</div>
                    </div>
                    
                </div>
                <br/>
                <div className='experience'>
                    <h1 className='title bg-dark'>experience</h1>
                    <p className='para'>i'm working in this field since last 1 year and learning new technology because i'm passionate about learning new
                        technology.
                    </p>
                </div>
                <br/>
                <div className='links'>
                    <h1 className='title bg-dark'> links</h1>
                    <p className='para'>if you want to ckeck my work you can do with a just one click.here is all my websites links </p>
                    <ul>
                        <li className='text-white'>
                            GITHUB
                        </li>
                        <li className='text-white'>
                            facebook
                        </li>
                        <li className='text-white'>
                            instagram
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}

export default about
