import Button from '../../button/Button';

const code = `<Button clickHandler={clickHandler}>Button</Button>`;

const defaultButton = (props) => {
    return (
        <div>
            <div className="btnType">Default:</div>
            <Button clickHandler={props.clickHandler}>Button</Button>
            {props.highlightCode(code)}
        </div>
    );
};

export default defaultButton;
