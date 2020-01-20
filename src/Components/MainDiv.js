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
        this.sum += parseInt(val.target.value);
        //console.log(this.sum);
        //console.log(val.target.value);
        this.counter++;
        if(this.counter === 4) {
            this.counter = 0;
            if(this.sum === 14) {
                console.log("done");
            }
            else {
                console.log("Wrong Answer");
            }
            this.sum = 0;
        }
    } 

    render() {
        return(
            <div className="mainContainer">
                <button type="submit">14</button>
                <button type="submit" value="4" onClick={this.sumFun}>4</button>
                <button type="submit" value="4"onClick={this.sumFun}>4</button>
                <button type="submit" value="5" onClick={this.sumFun}>5</button>
                <button type="submit" value="2" onClick={this.sumFun}>2</button>
                <button type="submit" value="3" onClick={this.sumFun}>3</button>
                <button type="submit" value="4" onClick={this.sumFun}>4</button>
            </div>
        );
    }
}

export default MainDiv;