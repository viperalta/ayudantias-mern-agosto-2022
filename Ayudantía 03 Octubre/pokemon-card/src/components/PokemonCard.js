import React, { Component } from 'react';

class PokemonCard extends Component {

    constructor(props){
        super(props);
        this.state={
            power:this.props.power
        };
    }

    addPower = () =>  {
        let powermasuno = this.state.power+1;
        console.log("state",this.state);
        this.setState({power:powermasuno})
    }

    render() {

        const {name,types} = this.props;

        return (
            <div className='pokemon-card'>
                <h2> {name} </h2>
                <h3> {this.state.power} </h3>
                <ul>
                    {types.map((tipo)=><li> {tipo} </li>)}
                </ul>
                <button onClick={this.addPower} >AUMENTAR PODER</button>
        
            </div>
        );
    }
}

export default PokemonCard;


