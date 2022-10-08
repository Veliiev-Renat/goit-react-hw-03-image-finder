import { Component} from "react";
import Item from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';

export default class Gallery extends Component{
state={
images:[],
loading:false,
page:1
}

click=(e)=>{
this.setState(prevState=>({page:prevState.page + 1}))
}

componentDidUpdate(prevProps,prevState){
const newSearch = this.props.search
const prevSearch = prevProps.search
if(prevState.page !== this.state.page){
    setTimeout(()=>{fetch(`https://pixabay.com/api/?q=${newSearch}&page=${this.state.page}&key=30307607-789dc1a943b7edc7609021dec&image_type=photo&orientation=horizontal&per_page=12`)
.then(r=>{
    if(r.ok){
     return r.json()   
    }
    return Promise.reject(
        new Error(`Error`)
    )
    })
.then(images=>{
    const {hits} = images
    this.setState((prevState)=>({images:[...prevState.images,...hits]}))
})
.catch(error=>this.setState({error}))
.finally(()=>this.setState({loading:false}))} ,1000  )
}

if(prevSearch !== newSearch){

this.setState({loading:true,images:[]})

setTimeout(()=>{fetch(`https://pixabay.com/api/?q=${newSearch}&page=${this.state.page}&key=30307607-789dc1a943b7edc7609021dec&image_type=photo&orientation=horizontal&per_page=12`)
.then(r=>{
    if(r.ok){
     return r.json()   
    }
    return Promise.reject(
        new Error(`Error`)
    )
    })
.then(images=>{
    const {hits} = images
    this.setState((prevState)=>({images:[...prevState.images,...hits]}))
})
.catch(error=>this.setState({error}))
.finally(()=>this.setState({loading:false}))} ,1000  )
 
}

}
    render(){
        const{images,loading}=this.state
        const {click} = this.props
        return(
        <>
            <ul className="ImageGallery" onClick={click}>
            {images.length > 0 && <Item results={images}/>}
            </ul>
            {images.length > 0 && <Button click={this.click}/>}
            {loading && <Loader/>}
            </>
            )
    }
}

Gallery.propTypes = {
    click: PropTypes.func
  };