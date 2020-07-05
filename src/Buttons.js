import React from 'react';

export default class Buttons extends React.Component{
    btnClick (data){ this.props.onCalc(data); }
	render(){
		return <div>
            <div>
                <button onClick={(e) => this.btnClick(['reset',''])}>reset</button>
            </div>
            <div>
                <button onClick={(e) => this.btnClick(['operation','plus'])} >+</button>
                <button onClick={(e) => this.btnClick(['operation','minus'])} >-</button>
                <button onClick={(e) => this.btnClick(['operation','mult'])} >*</button>
                <button onClick={(e) => this.btnClick(['operation','divide'])} >/</button>
                <button onClick={(e) => this.btnClick(['eq',''])}>=</button>
            </div>
            <div>
                <div>
                    <button onClick={(e) => this.btnClick(['num','1'])}>1</button>
                    <button onClick={(e) => this.btnClick(['num','2'])}>2</button>
                    <button onClick={(e) => this.btnClick(['num','3'])}>3</button>
                </div>
                <div>
                    <button onClick={(e) => this.btnClick(['num','4'])}>4</button>
                    <button onClick={(e) => this.btnClick(['num','5'])}>5</button>
                    <button onClick={(e) => this.btnClick(['num','6'])}>6</button>
                </div>
                <div>
                    <button onClick={(e) => this.btnClick(['num','7'])}>7</button>
                    <button onClick={(e) => this.btnClick(['num','8'])}>8</button>
                    <button onClick={(e) => this.btnClick(['num','9'])}>9</button>
                    <button onClick={(e) => this.btnClick(['num','0'])}>0</button>
                </div>
            </div> 
        </div>
	}
}








