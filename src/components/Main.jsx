import React from 'react'
import './../App.css'
import FormInputNews from './FormInputNews'
import NewsList from './NewsList'

import { Link } from 'react-router-dom'

class Main extends React.Component{

      constructor(props){
        super(props)
        this.state = {
            isOpen: false
        }
      }

  render(){

    const formInputNews = this.state.isOpen && <div id="formnews"> 
            <FormInputNews 
                formInputNewsClose= { this.handleFormInputNews } /> 
        </div>
    
    return (

        <div className='main container'>           
                {formInputNews}         
                <NewsList />
        </div>
    )
  }
      handleFormInputNews = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Main;

// * <p> 
 // <button onClick={this.handleFormInputNews} className="btn btn-success">
//    { this.state.isOpen ? 'Close Form' : 'Creat News ' }
//</button> 

// <Link to='/newsform'> FormInputNewsMain</Link> 

 //</p> */
