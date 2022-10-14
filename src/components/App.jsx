import { Component } from "react";
import Seartchbar from '../components/Searchbar/Searchbar'
import Gallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";

export class App extends Component{
state ={
  search: '',
  open:false,
  img:'',
  page:1
}
submit=(e)=>{
  e.preventDefault()
  if(e.target.elements[1].value.trim()===''){
    return
  }
  this.setState({search:e.target.elements[1].value})
  e.target.elements[1].value=''
  this.setState({page:1})
}

modalClose=()=>{
  this.setState({
    open:false})
}

openModal=(e)=>{
if(e.target.nodeName==='IMG'){
  this.setState({
    open:true,
    img:e.target.src
  })
 }
}
downloadMore=()=>{
  this.setState(prevState=>({page:prevState.page + 1}))
}
  render(){
    const {search,img,open,page} = this.state
    return (
<>
<div className="App">
<Seartchbar onSubmit={this.submit}/>
<Gallery search={search} click={this.openModal} page={page} downloadMore={this.downloadMore}/>
{open && <Modal src={img} close={this.modalClose} />}
</div>

</>
  );
}};
