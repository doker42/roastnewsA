import React from 'react'
import './../App.css'
import './css/comment.css'

class SubComment extends React.Component{

  constructor(props){
    super(props)
    this.state = {
        isOpen: false,
        isOpenComments: false
    }
  }

  render(){

    const { data } = this.props
    
    return (

        <div className='commentitem container'>

          <div className="card-body">

            <div className="row">
              <div className="col-6">
                  <h6 className="card-title text-left sub">{data.username}</h6>                
              </div>
              <div className="col-6">
                  <span className="text-right commentdate"> SubComment date: { data.created_at }</span>
              </div>
            </div>

            <p className="card-text text-left">Text: {data.text}</p>  
            
          </div>

        </div>
    )
  }
}

export default SubComment;