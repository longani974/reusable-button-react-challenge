import Button from '../../button/Button';

const code = `<Button
variant="outline"
color="default"
>
Outline
</Button>

<Button
variant="outline"
color="primary"
>
Outline
</Button>

<Button
variant="outline"
color="secondary"
>
Outline
</Button>

<Button
variant="outline"
color="danger"
>
Outline
</Button>`;

function OutlineButton(props) {
    return (
        <div>
            <div className="btnType">Outline:</div>
            <div className="flexRow">
                <Button
                    variant="outline"
                    color="default"
                    clickHandler={props.clickHandler}
                >
                    Outline
                </Button>

                <Button
                    variant="outline"
                    color="primary"
                    clickHandler={props.clickHandler}
                >
                    Outline
                </Button>

                <Button
                    variant="outline"
                    color="secondary"
                    clickHandler={props.clickHandler}
                >
                    Outline
                </Button>

                <Button
                    variant="outline"
                    color="danger"
                    clickHandler={props.clickHandler}
                >
                    Outline
                </Button>
            </div>
            {props.highlightCode(code)}
        </div>
    );
}

export default OutlineButton;
