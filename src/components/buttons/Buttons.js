// import Prism from 'prismjs';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Button from '../button/Button';

const code = {
    default: `<Button clickHandler={clickHandler}>Button</Button>`,
    outline: `<Button
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
</Button>`,
    textOnly: ` <Button
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
</Button>`,
    disableShadow: `<Button disableShadow>
`,
    disabled: `<Button disabled>`,
    withIcon: `<Button
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
</Button>`,
    size: `<Button
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
</Button>`,
    color: `<Button color="default" clickHandler={clickHandler}>
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
</Button>`,
};

const Buttons = () => {
    const highlightCode = (codeToDisplay) => {
        return (
            <Highlight {...defaultProps} code={codeToDisplay} language="jsx">
                {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                }) => (
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        );
    };
    const clickHandler = () => {
        console.log('click');
    };

    const alertPriya = () => {
        window.alert('ATTENTION !!!!! Priya la caca');
    };

    // const icon = <FontAwesomeIcon icon="cart-arrow-down" />;
    return (
        <div className="App">
            <h1>Buttons</h1>
            <div>
                <div className="btnType">Default:</div>
                <Button clickHandler={clickHandler}>Button</Button>
                {highlightCode(code.default)}
            </div>
            <div>
                <div className="btnType">Outline:</div>
                <div className="flexRow">
                    <Button
                        variant="outline"
                        color="default"
                        clickHandler={clickHandler}
                    >
                        Outline
                    </Button>

                    <Button
                        variant="outline"
                        color="primary"
                        clickHandler={clickHandler}
                    >
                        Outline
                    </Button>

                    <Button
                        variant="outline"
                        color="secondary"
                        clickHandler={clickHandler}
                    >
                        Outline
                    </Button>

                    <Button
                        variant="outline"
                        color="danger"
                        clickHandler={clickHandler}
                    >
                        Outline
                    </Button>
                </div>
                {highlightCode(code.outline)}
            </div>
            <div>
                <div className="btnType">Text only:</div>
                <div className="flexRow">
                    <Button
                        variant="text"
                        color="default"
                        clickHandler={clickHandler}
                    >
                        Text
                    </Button>
                    <Button
                        variant="text"
                        color="primary"
                        clickHandler={clickHandler}
                    >
                        Text
                    </Button>
                    <Button
                        variant="text"
                        color="secondary"
                        clickHandler={clickHandler}
                    >
                        Text
                    </Button>
                    <Button
                        variant="text"
                        color="danger"
                        clickHandler={clickHandler}
                    >
                        Text
                    </Button>
                </div>
                {highlightCode(code.textOnly)}
            </div>
            <div>
                <div className="btnType">No shadow:</div>

                <Button clickHandler={clickHandler} disableShadow>
                    No Shadow
                </Button>
                {highlightCode(code.disableShadow)}
            </div>
            <div>
                <div className="btnType">Disabled:</div>
                <Button clickHandler={clickHandler} disabled>
                    Disabled
                </Button>
                {highlightCode(code.disabled)}
            </div>
            <div>
                <div className="btnType">With icon:</div>
                <div className="flexRow">
                    <Button
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
                    </Button>
                </div>
                {highlightCode(code.withIcon)}
            </div>
            <div>
                <div className="btnType">Size:</div>
                <div className="flexRow">
                    <Button
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
                    </Button>
                </div>
                {highlightCode(code.size)}
            </div>
            <div>
                <div className="btnType">Color:</div>
                <div className="flexRow">
                    <Button color="default" clickHandler={clickHandler}>
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
                    </Button>
                </div>
                {highlightCode(code.color)}
            </div>
            <div>
                <div className="btnType">Error:</div>
                <Button
                    variant="tgfdext"
                    color="fds"
                    clickHandler={clickHandler}
                >
                    Text
                </Button>
            </div>
            <Button color="danger" clickHandler={alertPriya} size="lg">
                Priya la caca
            </Button>
        </div>
    );
};

export default Buttons;
