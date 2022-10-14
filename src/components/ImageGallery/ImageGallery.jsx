import { Component} from "react";
import Item from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";
import PropTypes from 'prop-types';

export default class Gallery extends Component{
state={
images:[],
loading:false,
hidden:false
}


componentDidUpdate(prevProps){
    if(this.props.search.trim()===''){
        return
    }
    if( this.props.search !== prevProps.search || prevProps.page !== this.props.page){
    if( this.props.search !== prevProps.search){
        this.setState({images:[]})
    }
    this.setState({hidden:true,
    loading:true})
    fetch(`https://pixabay.com/api/?q=${this.props.search}&page=${this.props.page}&key=30307607-789dc1a943b7edc7609021dec&image_type=photo&orientation=horizontal&per_page=12`)
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
    if(hits.length===0 || hits.length<12){
        this.setState({hidden:false})
    }
    this.setState((prevState)=>({images:[...prevState.images,...hits]}))
})
.catch(()=>console.log('error'))
.finally(()=>this.setState({loading:false}))
}

}
    render(){
        const{images,loading,hidden}=this.state
        const {click,downloadMore} = this.props
        return(
        <>
            <ul className="ImageGallery" onClick={click}>
            {images.length > 0 && <Item results={images}/>}
            </ul>
            {hidden && <Button click={downloadMore}/>}
            {loading && <Loader/>}
            </>
            )
    }
}

Gallery.propTypes = {
    search: PropTypes.string,
    page: PropTypes.number,
    click: PropTypes.func,
    downloadMore: PropTypes.func
  };