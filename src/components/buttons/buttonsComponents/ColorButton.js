import Button from '../../button/Button';

const code = `<Button color="default" clickHandler={clickHandler}>
Default
</Button>
<Button color="primary" clickHandler={clickHandler}>
Primary
</Button>
<Button color="secondary" clickHandler={clickHandler}>
Secondary
</Button>
<Button color="danger" clickHandler={clickHandler}>
Danger
</Button>`;

const ColorButton = (props) => {
    return (
        <div>
            <div className="btnType">Color:</div>
            <div className="flexRow">
                <Button color="default" clickHandler={props.clickHandler}>
                    Default
                </Button>
                <Button color="primary" clickHandler={props.clickHandler}>
                    Primary
                </Button>
                <Button color="secondary" clickHandler={props.clickHandler}>
                    Secondary
                </Button>
                <Button color="danger" clickHandler={props.clickHandler}>
                    Danger
                </Button>
            </div>
            {props.highlightCode(code)}
        </div>
    );
};

export default ColorButton;
