import Button from '../../button/Button';

const code = `<Button
startIcon="cart-arrow-down"
color="primary"
clickHandler={clickHandler}
>
Start Icon
</Button>
<Button
endIcon="cart-arrow-down"
color="primary"
clickHandler={clickHandler}
>
End Icon
</Button>
<Button
startIcon="cart-arrow-down"
endIcon="cart-arrow-down"
color="primary"
clickHandler={clickHandler}
>
Start & End Icon
</Button>`;

const WithIconButton = (props) => {
    return (
        <div>
            <div className="btnType">With icon:</div>
            <div className="flexRow">
                <Button
                    startIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={props.clickHandler}
                >
                    Start Icon
                </Button>
                <Button
                    endIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={props.clickHandler}
                >
                    End Icon
                </Button>
                <Button
                    startIcon="cart-arrow-down"
                    endIcon="cart-arrow-down"
                    color="primary"
                    clickHandler={props.clickHandler}
                >
                    Start & End Icon
                </Button>
            </div>
            {props.highlightCode(code)}
        </div>
    );
};

export default WithIconButton;
