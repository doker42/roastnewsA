import React from 'react'
import './css/header.css'
import './../App.css'
import { Router, Link } from 'react-router-dom'


class UnderHeader extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
      }

  render(){
    
    return (

        <div className='undheader container'>
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
                    <button className="btn btn-primary nolink"
                        onClick={this.handleFormInputNews} >
                       { this.state.isOpen ?  
                            <Link to='main'> Close News Form </Link> : 
                                <Link to='newsform'> Create News </Link> }
                    </button>  
            </div>  
            <div className="col-4"></div>
          </div>            
        </div>
    )
  }

  handleFormInputNews = () => {
    this.setState({
        isOpen: !this.state.isOpen
    })
  }

}

export default UnderHeader;