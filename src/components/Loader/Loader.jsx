import { Audio } from 'react-loader-spinner'
import { Component} from "react";

export default class Loader extends Component{
    render(){
        return(<div style={{marginLeft:'auto',marginRight:'auto'}}><Audio
            height="80"
            width="80"
            radius="9"
            color="blue"
            ariaLabel="loading"
          /></div>
        )
    }
}