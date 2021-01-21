import Button from '../../button/Button';

const code = `<Button disableShadow>`;

const DisableShadowButton = (props) => {
    return (
        <div>
            <div className="btnType">No shadow:</div>

            <Button clickHandler={props.clickHandler} disableShadow>
                No Shadow
            </Button>
            {props.highlightCode(code)}
        </div>
    );
};

export default DisableShadowButton;
