import React from 'react';


class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      code:"",
      date:  "",
      errormessage: '',
    };
  }
  myChangeHandler = (props) => {
    let nam = props.target.name;
    let val = props.target.value;
    this.setState({[nam]: val});
  }
  render() {
      
    return (
      <form className="credit-card">
            <div className="card">
              
                <h3 className="titre">Company name</h3>
                <img className='puce'  src='https://www.icone-png.com/png/11/11056.png'></img>


          <div className="container">
            <div className="child">
            <h3 className='code'>{ this.state.code.padEnd(16 , '*').replace(/(.{4})/g, '$1 ').trim()}</h3>
            <h3 className='date'> { this.state.date ==="" ? "** / **" : this.state.date.replace(/(.{2})/, '$1 / ').slice(0 , 7)}</h3>
            <h3 className='username'> { this.state.username ==="" ? "YOUR NAME" :this.state.username.toUpperCase()} </h3>

            </div>

            <img className="image" src="http://pngimg.com/uploads/mastercard/mastercard_PNG1.png"/>
          </div>
            </div>


<div className="form">
            <p>Enter your code:</p>
      <input
        type='text'
        name='code'
        onChange={this.myChangeHandler}
        maxLength={16}
      />
       <p>Enter your date:</p>
      <input
        type='text'
        name='date'
        onChange={this.myChangeHandler}
        maxLength={4}
      />
      <p>Enter your name:</p>
      <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
        maxLength={20}
      />
     
     </div>
      </form>
    );
  }
}



export default Card;