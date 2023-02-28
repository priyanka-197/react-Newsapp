import React, { Component } from 'react';
import Hlw from './Hlw';
import Loading from './Loading';
import PropTypes from 'prop-types';



export default class News extends Component {
  static defaultProps={
    pagesize:8,
  category:'general'} 

    static propTypes ={
      pageSize :PropTypes.number
    }
  
  
  
  articles = []


constructor(){
  super();

  this.state ={
     articles :this.articles,
    loading:false
    
  }
}
async componentDidMount(){
  this.setState({
    loading:true
  })
 let Apiurl =await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularitycategory=${this.props.category}&apikey=f4d3aeae3cc6408ba0d5ba00bf7937ac&page=1&pageSize=${this.props.pageSize}`);
let data =await Apiurl.json();

this.setState({
  articles :data.articles,
  page:1,
  totalResults :data.totalResults,
  loading:false
}

  ) }
handlepre=async()=>{
  this.setState({
    loading:true
  })
  let Apiurl =await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apikey=f4d3aeae3cc6408ba0d5ba00bf7937ac&page=${this.state.page-1}&pageSize=${this.props.pageSize}`);
  let data =await Apiurl.json();
  
  this.setState({
    articles :data.articles,
    page:this.state.page-1,
    loading:false
  }
    )
}
handlenext=async()=>{
  this.setState({
    loading:true
  })
  if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){}else{
  let Apiurl =await fetch(`https://newsapi.org/v2/everything?q=${this.props.category}&sortBy=popularity&apikey=f4d3aeae3cc6408ba0d5ba00bf7937ac&page=${this.state.page+1}&pageSize=${this.props.pageSize}`);
  let data =await Apiurl.json();
  
  this.setState({
    articles :data.articles,
    page:this.state.page+1,
    loading:false
  }
    )}
}

  render() {

  return (
      <div className='container my-3'>
      <h1 className='text-center'>NewsMonkey</h1>
      {this.state.loading &&<Loading/>}
   
  <div className='row'>
  {!this.state.loading && this.state.articles.map((e)=>{
    return  <div className='col-md-4'key={e.url}>
    <Hlw  title={e.title} discription={e.description.slice(0,88)} imgurl={e.urlToImage} newsurl={e.url} /></div>
  
})}
</div>
<div className='container d-flex justify-content-between'>
<button className='btn-primary'disabled={this.state.page<=1?true:false} onClick={this.handlepre}>previous</button>
<button className='btn-primary' onClick={this.handlenext}>Next</button>
</div>
      </div>

    )
  }
}
