import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';
import Button from './components/Button';

function App() {
    const clickHandler = () => {
        console.log('click');
    };

    const alertPriya = () => {
        window.alert('ATTENTION !!!!! Priya la caca');
    };

    // const icon = <FontAwesomeIcon icon="cart-arrow-down" />;
    return (
        <div className="App">
            <div>
                <Button text="Button" clickHandler={clickHandler} />
            </div>
            <div>
                <Button
                    text="Outline"
                    variant="outline"
                    clickHandler={clickHandler}
                />
            </div>
            <div>
                <Button
                    text="Text"
                    variant="text"
                    clickHandler={clickHandler}
                />
            </div>
            <div>
                <Button
                    text="No Shadow"
                    clickHandler={clickHandler}
                    disableShadow
                />
            </div>
            <div>
                <Button text="Disabled" clickHandler={clickHandler} disabled />
            </div>
            <div className="flexRow">
                <Button
                    text="Start Icon"
                    startIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={clickHandler}
                />
                <Button
                    text="End Icon"
                    endIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={clickHandler}
                />
                <Button
                    text="Start & End Icon"
                    startIcon="cart-arrow-down"
                    endIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={clickHandler}
                />
            </div>
            <div className="flexRow">
                <Button
                    text="Size sm"
                    size="sm"
                    clickHandler={clickHandler}
                    color="primary"
                />
                <Button
                    text="Size md"
                    size="md"
                    clickHandler={clickHandler}
                    color="primary"
                />
                <Button
                    text="Size lg"
                    size="lg"
                    clickHandler={clickHandler}
                    color="primary"
                />
            </div>
            <div className="flexRow">
                <Button
                    text="Default"
                    color="default"
                    clickHandler={clickHandler}
                />
                <Button
                    text="Primary"
                    color="primary"
                    clickHandler={clickHandler}
                />
                <Button
                    text="Secondary"
                    color="secondary"
                    clickHandler={clickHandler}
                />
                <Button
                    text="Danger"
                    color="danger"
                    clickHandler={clickHandler}
                />
            </div>
            <Button
                text="Priya la caca"
                color="danger"
                clickHandler={alertPriya}
                size="lg"
            />
        </div>
    );
}

export default App;
