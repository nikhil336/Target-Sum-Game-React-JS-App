import React, { Component } from 'react';
import './MainDiv.css';

class MainDiv extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flag : false,
            gameFlag : false
        }
        //this.timerFlag = false;
        this.sum  = 0;
        this.counter = 0;
        this.target = 0;
        this.randomNumbers = [];
        // this.timeleft = 15;
    }
    
    // downloadTimer = setInterval(() => {
    //     document.getElementById("countdown").innerHTML = this.timeleft + " seconds remaining";
    //     this.timeleft -= 1;
    //     if(this.timerFlag || this.timeleft <= 0){
    //         clearInterval(this.downloadTimer);
    //         document.getElementById("countdown").innerHTML = "Finished";
    //     }
    // }, 1000);

    sumFun = (val) => {
        if(this.state.gameFlag) {
            this.sum += parseInt(val.target.value);
            this.counter++;
            if(this.counter === 4) {
                this.counter = 0;
                if(this.sum === this.target) {
                    //console.log("done");
                    this.refs.rbtn.setAttribute('class','greenbtn');
                }
                else {
                    //console.log("Wrong Answer");
                    this.refs.rbtn.setAttribute('class','redbtn');
                }
                // this.timerFlag = true;
                this.sum = 0;
                // clearInterval(this.downloadTimer());
                // document.getElementById("countdown").innerHTML = "Finished";
            }
        }
    }
    
    shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    playFun = () => {
        this.randomNumbers = Array.from({ length: 6 })
        .map(() => 1 + Math.floor(10 * Math.random()));
        this.target = this.randomNumbers
            .slice(0, 4)
            .reduce((acc, curr) => acc + curr, 0);
        this.shuffle(this.randomNumbers);
        // this.timeleft = 15;
        // this.timerFlag = false; 
        // this.downloadTimer();   
        this.refs.rbtn.setAttribute('class','resultbtn');
        this.setState({gameFlag:true});   
    }

    render() {
        return(
            <div className="mainContainer">
                <div className="resultnumber" id="result">
                    <button className="resultbtn" type="submit" ref="rbtn">{this.state.gameFlag?this.target:"?"}</button>
                </div>
                <div className="numbuttons">
                    <div className="twobtn">
                        <button className="otherbtn" type="submit" value={this.randomNumbers[0]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[0]:"?"}</button>
                        <button className="otherbtn" type="submit" value={this.randomNumbers[1]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[1]:"?"}</button>
                    </div>
                    <div className="twobtn">
                        <button className="otherbtn" type="submit" value={this.randomNumbers[2]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[2]:"?"}</button>
                        <button className="otherbtn" type="submit" value={this.randomNumbers[3]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[3]:"?"}</button>
                    </div>
                    <div className="twobtn">
                        <button className="otherbtn" type="submit" value={this.randomNumbers[4]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[4]:"?"}</button>
                        <button className="otherbtn" type="submit" value={this.randomNumbers[5]} onClick={this.sumFun}>{this.state.gameFlag?this.randomNumbers[5]:"?"}</button>
                    </div>
                </div>
                <div className="playbtn">
                    <button type="submit" id="play" onClick={this.playFun}>Play</button>
                </div>
                <p id="countdown"></p>
            </div>
        );
    }
}

export default MainDiv;