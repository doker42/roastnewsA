import React from 'react'
import './../App.css'
import './css/comment.css'
import FormInputSubComment from './FormInputSubComment.jsx'
// import NewsItem from './NewsItem.jsx'
import SubCommentsList from './SubCommentsList.jsx'


class Comment extends React.Component{

//   constructor(props){
//     super(props)
//   }

  constructor(props){
    super(props)
    this.state = {
        isOpen: false,
        isOpenComments: false
    }
  }

  render(){

    const { data } = this.props

    const formInputSubComment = this.state.isOpen && <div id="formcomment"> 
      <FormInputSubComment id={data.id}
        onButtonClick= { this.handleFormInputSubComment }
      /> 
    </div> 

    const listSubComments = this.state.isOpenComments && <div id="listSubComments"> <SubCommentsList id={data.id}/> </div> 
    
    return (

        <div className='commentitem container'>

          <div className="card-body comment">

            <div className="row">
              <div className="col-6">
                  <h5 className="card-title text-left">{data.username}</h5>                
              </div>
              <div className="col-6">
                  <span className="text-right commentdate"> Comment date: { data.created_at }</span>
              </div>
            </div>

            <p className="card-text text-left">Text: {data.text}</p>  
            
            <p className="card-link text-left comment">
              <button onClick={this.handleFormInputSubComment} className="btn btn-outline-secondary btn-sm font">
                { !this.state.isOpen ? 'Comment on' : 'Close Comment Form' }
              </button>

              <button onClick={this.handleSubCommentsList} className="btn btn-link btn-sm font">
                { !this.state.isOpenComments ? 'Read Comments ' + data.count  : 'Close Comments ' + data.count }
              </button>
            </p>


          </div>

            { formInputSubComment }
            { listSubComments}

        </div>
    )
  }

  handleFormInputSubComment = () => {
    this.setState({
        isOpen: !this.state.isOpen,
    })
  }

  handleSubCommentsList = () => {
    this.setState({
        isOpenComments: !this.state.isOpenComments,
    })
  }

}

export default Comment;