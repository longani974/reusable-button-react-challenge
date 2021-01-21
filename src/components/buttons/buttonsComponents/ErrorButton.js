import Button from '../../button/Button';

const ErrorButton = (props) => {
    return (
        <div>
            <div className="btnType">Error:</div>
            <Button
                variant="tgfdext"
                color="fds"
                clickHandler={props.clickHandler}
            >
                Text
            </Button>
        </div>
    );
};

export default ErrorButton;
