import React, {useEffect, useRef} from 'react';
import KeypadRow from './KeypadRow/KeypadRow';
import Button from '../../../components/Button/Button';
import LargeButton from '../../../components/Button/LargeButton/LargeButton';

const keypad = props => {
    const simulateCode8 = useRef(null);
    const simulateCode53 = useRef(null);
    const simulateCode111 = useRef(null);
    const simulate7 = useRef(null);
    const simulate8 = useRef(null);
    const simulate9 = useRef(null);
    const simulateCode106 = useRef(null);
    const simulate4 = useRef(null);
    const simulate5 = useRef(null);
    const simulate6 = useRef(null);
    const simulateCode109 = useRef(null);
    const simulate1 = useRef(null);
    const simulate2 = useRef(null);
    const simulate3 = useRef(null);
    const simulateCode107 = useRef(null);
    const simulate0 = useRef(null);
    const simulateCode110 = useRef(null);
    const simulateCode13 = useRef(null);

    useEffect(() => {
        document.addEventListener("keydown", simulateButtonClick, false);

        return () => {
        document.removeEventListener("keydown", simulateButtonClick, false);
        };
    });
    
    function simulateButtonClick(event) {
        //console.log(event.keyCode);
        const keyCodes = [8, 53, 111, 106, 109, 107, 110, 13]
        if(event.key >= 0 && event.key <= 9)
        {
            console.log(simulate7)
            //window["simulate" + event.key]();
            //eval("simulate" + event.key + "()")
            //simulate7.current.click();
        }
        else if(keyCodes.includes(event.keyCode))
        {
            //window["simulateCode" + event.keyCode]();
        }
      }

    //   simulateCode8 = (e) => e.click;
    //   simulateCode53 = (e) => e.click;
    //   simulateCode111 = (e) => e.click;

    //   simulate7 = (e) => e.click;
    //   simulate8 = (e) => e.click;
    //   simulate9 = (e) => e.click;
    //   simulateCode106 = (e) => e.click;

    //   simulate4 = (e) => e.click;
    //   simulate5 = (e) => e.click;
    //   simulate6 = (e) => e.click;
    //   simulateCode109 = (e) => e.click;

    //   simulate1 = (e) => e.click;
    //   simulate2 = (e) => e.click;
    //   simulate3 = (e) => e.click;
    //   simulateCode107 = (e) => e.click;

    //   simulate0 = (e) => e.click;
    //   simulateCode110 = (e) => e.click;
    //   simulateCode13 = (e) => e.click;

        return (
            <section className="keypad">
                {/* row #1 */}
                <KeypadRow>
                    <Button type="primary" onButtonPress={props.onButtonPress}>C</Button>
                    <Button ref={simulateCode8} type="primary" onButtonPress={props.onButtonPress}>&larr;</Button>
                    <Button ref={simulateCode53} type="operator" onButtonPress={props.onButtonPress}>%</Button>
                    <Button ref={simulateCode111} type="operator" onButtonPress={props.onButtonPress}>/</Button>
                </KeypadRow>

                {/* row #2 */}
                <KeypadRow>
                    <Button ref={simulate7} onButtonPress={props.onButtonPress}>7</Button>
                    <Button ref={simulate8} onButtonPress={props.onButtonPress}>8</Button>
                    <Button ref={simulate9} onButtonPress={props.onButtonPress}>9</Button>
                    <Button ref={simulateCode106} type="operator" onButtonPress={props.onButtonPress}>*</Button>
                </KeypadRow>

                {/* row #3 */}
                <KeypadRow>
                    <Button ref={simulate4} onButtonPress={props.onButtonPress}>4</Button>
                    <Button ref={simulate5} onButtonPress={props.onButtonPress}>5</Button>
                    <Button ref={simulate6} onButtonPress={props.onButtonPress}>6</Button>
                    <Button ref={simulateCode109} type="operator" onButtonPress={props.onButtonPress}>-</Button>
                </KeypadRow>

                {/* row #4 */}
                <KeypadRow>
                    <Button ref={simulate1} onButtonPress={props.onButtonPress}>1</Button>
                    <Button ref={simulate2} onButtonPress={props.onButtonPress}>2</Button>
                    <Button ref={simulate3} onButtonPress={props.onButtonPress}>3</Button>
                    <Button ref={simulateCode107} type="operator" onButtonPress={props.onButtonPress}>+</Button>
                </KeypadRow>

                {/* row #5 */}
                <KeypadRow>
                    <Button ref={simulate0} onButtonPress={props.onButtonPress}>0</Button>
                    <Button ref={simulateCode110} onButtonPress={props.onButtonPress}>.</Button>
                    <LargeButton ref={simulateCode13} onButtonPress={props.onButtonPress}>=</LargeButton>
                </KeypadRow>
            </section>
        )
}

export default keypad;