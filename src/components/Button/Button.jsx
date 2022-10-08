import { Component} from "react";
import PropTypes from 'prop-types';

export default class Button extends Component{
    render(){
        return(<button className="Button" onClick={this.props.click}>Load more</button>
        )
    }
}

Button.propTypes = {
    click: PropTypes.func
  };