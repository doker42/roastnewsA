import React from 'react'
import './../App.css'
import SubComment from './SubComment.jsx'
import axios from 'axios'


class SubCommentsList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            subcomments: [],
          }
      }
      
  componentDidMount() {
  
    axios.get('http://api.lemonnews.example/getSubComments/', { params: { id: this.props.id}})
      .then(res => {
        const subcomments = res.data;
        this.setState({ subcomments });
      })
  }

  render(){

    const subcomment = this.state.subcomments.map(data => 
      <div key={data.id}> <SubComment data = { data } /> </div>
    )
    
    return (
        <div className='newslist container'>        
         {/* <h5>Sub CommentsList  </h5> */}
          <div>
            { subcomment }
          </div>
        </div>
    )
  }
}

export default SubCommentsList;