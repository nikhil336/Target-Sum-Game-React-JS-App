import React, { Component } from 'react';

class MainDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag : false
        }
        this.sum  = 0;
        this.counter = 0;
    }

    sumFun = (val) => {
        this.sum += val;
        console.log(val);
        this.counter++;
        if(this.counter === 4) {
            this.counter = 0;
            if(this.sum === 14) {
                console.log("done");
            }
        }
    } 

    render() {
        return(
            <div className="mainContainer">
                <button type="submit">14</button>
                <button type="submit" onClick={this.sumFun}>4</button>
                <button type="submit" onClick={this.sumFun}>4</button>
                <button type="submit" onClick={this.sumFun}>5</button>
                <button type="submit" onClick={this.sumFun}>2</button>
                <button type="submit" onClick={this.sumFun}>3</button>
                <button type="submit" onClick={this.sumFun}>4</button>
            </div>
        );
    }
}

export default MainDiv;