import Button from '../../button/Button';

const code = `<Button disabled>`;

const DisabledButton = (props) => {
    return (
        <div>
            <div className="btnType">Disabled:</div>
            <Button clickHandler={props.clickHandler} disabled>
                Disabled
            </Button>
            {props.highlightCode(code)}
        </div>
    );
};

export default DisabledButton;
