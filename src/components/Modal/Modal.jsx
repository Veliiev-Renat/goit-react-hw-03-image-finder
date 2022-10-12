import { Component} from "react";
import PropTypes from 'prop-types';

export default class Modal extends Component{
componentDidMount(){
    window.addEventListener('keydown',this.esc)
}
componentWillUnmount(){
    window.removeEventListener('keydown',this.esc)
}
backdropClick=e=>{
    if(e.currentTarget===e.target){
        this.props.close()
    }
  }
esc=(e)=>{
    if(e.code==='Escape'){
        this.props.close()
    }
}
    render(){
        const {src} = this.props
        return(
        <div className="Overlay" onClick={this.backdropClick}>
        <div className="Modal">
          <img src={src} alt="Your img" />
        </div>
      </div>
        )
    }
}


Modal.propTypes = {
    close:PropTypes.func,
    src:PropTypes.string
  };