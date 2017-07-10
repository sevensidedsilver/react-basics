import React, {Component} from 'react'
import './main.css'


class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      kitties: ['Tom', 'Bernard', 'Whiskers'],
      kitty: ''
    }
    this.inputStuff = this.inputStuff.bind(this)
    this.addKitty = this.addKitty.bind(this)
  }
inputStuff(event){
  this.setState({

        kitty: event.target.value
  })


  console.log(this.state.kitties)
}

addKitty(kitty){
  this.setState({
    kitties: [...this.state.kitties, this.state.kitty]
  })
}
  render(){
    const kittiesArray = this.state.kitties.map(
    (kitty, i) => (
      <h2 key={i}>{kitty}</h2>
    ))
    return (
      <div className="main">
        <h1>This is the main div</h1>
          <input onChange={
            this.inputStuff
          }/>

          <button onClick={this.addKitty}>Create Kitty</button>
          {kittiesArray}



      </div>

    )



  }



}


export default Main
