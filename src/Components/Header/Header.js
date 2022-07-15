import React from 'react';
import './header.css'
function Header(props) {
    return (
        <header>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h2>
                            Good food choices <br/>are good <br/>investments.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/> 
                            Etiam et purus a odio finibus bibendum amet leo.
                        </p>
                        <div>
                                <button className='btn'>order now</button>
                                <button className='btn1'>learn now </button>
                        </div>
                        
                       </div>
                </div>
            </div>
        </header>
        
    );
}

export default Header;