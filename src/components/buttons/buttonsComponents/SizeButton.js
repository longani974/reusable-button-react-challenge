import Button from '../../button/Button';

const code = `<Button
size="sm"
clickHandler={clickHandler}
color="primary"
>
Size sm
</Button>
<Button
size="md"
clickHandler={clickHandler}
color="primary"
>
Size md
</Button>
<Button
size="lg"
clickHandler={clickHandler}
color="primary"
>
Size lg
</Button>`;

const SizeButton = (props) => {
    return (
        <div>
            <div className="btnType">Size:</div>
            <div className="flexRow">
                <Button
                    size="sm"
                    clickHandler={props.clickHandler}
                    color="primary"
                >
                    Size sm
                </Button>
                <Button
                    size="md"
                    clickHandler={props.clickHandler}
                    color="primary"
                >
                    Size md
                </Button>
                <Button
                    size="lg"
                    clickHandler={props.clickHandler}
                    color="primary"
                >
                    Size lg
                </Button>
            </div>
            {props.highlightCode(code)}
        </div>
    );
};

export default SizeButton;
