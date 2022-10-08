import { Component } from "react";
import Seartchbar from '../components/Searchbar/Searchbar'
import Gallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export class App extends Component{
state ={
  search: '',
  open:false,
  img:''
}
submit=(e)=>{
  e.preventDefault()
  this.setState({search:e.target.elements[1].value})
  e.target.elements[1].value=''
}

modalClose=()=>{
  this.setState({
    open:false})
}

backdropClick=e=>{
  if(e.currentTarget===e.target){
    this.setState({
      open:false})
  }
}


openModal=(e)=>{
if(e.target.nodeName==='IMG'){
  this.setState({
    open:true,
    img:e.target.src
  })
 }
}
  render(){
    const {search,img,open} = this.state
    return (
<>
<div className="App">
<Seartchbar onSubmit={this.submit}/>
<Gallery search={search} click={this.openModal}/>
{open && <Modal src={img} close={this.modalClose} click={this.backdropClick}/>}
</div>

</>
  );
}};
