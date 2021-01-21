// import Prism from 'prismjs';
import Highlight, { defaultProps } from 'prism-react-renderer';
import Button from '../button/Button';

import DefaultButton from './buttonsComponents/DefaultButton';
import OutlineButton from './buttonsComponents/OutlineButton';
import TextOnlyButton from './buttonsComponents/TextOnlyButton';
import DisableShadowButton from './buttonsComponents/DisableShadowButton';
import DisabledButton from './buttonsComponents/DisabledButton';
import WithIconButton from './buttonsComponents/WithIconButton';
import SizeButton from './buttonsComponents/SizeButton';
import ColorButton from './buttonsComponents/ColorButton';
import ErrorButton from './buttonsComponents/ErrorButton';

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
            <DefaultButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <OutlineButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <TextOnlyButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <DisableShadowButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <DisabledButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <WithIconButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <SizeButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <ColorButton
                highlightCode={highlightCode}
                clickHandler={clickHandler}
            />
            <ErrorButton clickHandler={clickHandler} />
            <Button color="danger" clickHandler={alertPriya} size="lg">
                Priya la caca
            </Button>
        </div>
    );
};

export default Buttons;
