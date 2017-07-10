import React, {Component} from 'react';
import './header.css'


export default class Header extends Component {
  render(){
    return (

      <div className="navBar">
        <nav>


          <li>HOME</li>
          <li>CREATE</li>
          <li>READ</li>
          <li>DESTROY</li>

        </nav>
      </div>

    )


  }

}
