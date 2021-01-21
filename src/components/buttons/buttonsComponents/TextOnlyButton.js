import Button from '../../button/Button';

const code = ` <Button
variant="text"
color="default"
>
Text
</Button>
<Button
variant="text"
color="primary"
>
Text
</Button>
<Button
variant="text"
color="secondary"
>
Text
</Button>
<Button
variant="text"
color="danger"
>
Text
</Button>`;

const TextOnlyButton = (props) => {
    return (
        <div>
            <div className="btnType">Text only:</div>
            <div className="flexRow">
                <Button
                    variant="text"
                    color="default"
                    clickHandler={props.clickHandler}
                >
                    Text
                </Button>
                <Button
                    variant="text"
                    color="primary"
                    clickHandler={props.clickHandler}
                >
                    Text
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    clickHandler={props.clickHandler}
                >
                    Text
                </Button>
                <Button
                    variant="text"
                    color="danger"
                    clickHandler={props.clickHandler}
                >
                    Text
                </Button>
            </div>
            {props.highlightCode(code)}
        </div>
    );
};

export default TextOnlyButton;
