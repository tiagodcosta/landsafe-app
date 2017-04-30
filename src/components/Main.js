import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Home } from './Home'
import { AlertContainer } from './Alert'
import { Details } from './Details'
import '../scss/index.scss'

export class Main extends React.Component {
  render() {
    return(
        	 <div className="main-container">
          	 <Navbar />
        		    <div className="content-container">
        			     {(this.props.location.pathname === "/") ? 
                      <Home /> :
                    (this.props.location.pathname === "/alert") ?  
                      <AlertContainer /> :
                      <Details />
                    }
        		    </div>
        		  <Footer />
        	 </div>
      )
    }
}


