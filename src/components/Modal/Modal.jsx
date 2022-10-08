import { Component} from "react";
import PropTypes from 'prop-types';

export default class Modal extends Component{
componentDidMount(){
    window.addEventListener('keydown',this.esc)
}
componentWillUnmount(){
    window.removeEventListener('keydown',this.esc)
}
esc=(e)=>{
    if(e.code==='Escape'){
        this.props.close()
    }
}
    render(){
        const {src,click} = this.props
        return(
        <div className="Overlay" onClick={click}>
        <div className="Modal">
          <img src={src} alt="" />
        </div>
      </div>
        )
    }
}


Modal.propTypes = {
    click:PropTypes.func,
    close:PropTypes.func,
    src:PropTypes.string
  };