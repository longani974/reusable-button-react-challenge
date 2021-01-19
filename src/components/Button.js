import React from 'react';
import classes from './Button.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
    const styles = {
        '--hoverColor': '#AEAEAE',
        '--outline': 'none',
        padding: '0.5em 1em',
        borderRadius: '6px',
        background: '#E0E0E0',
        boxShadow: '0px 2px 3px rgba(51, 51, 51, 0.8)',
        border: 'none',
        color: '#3f3f3f',
        fontFamily: "'Noto Sans JP', sans-serif",
        cursor: 'pointer',
        height: 'fit-content',
        width: 'fit-content',
    };

    if (props.variant) {
        switch (props.variant) {
            case 'outline':
                styles.border = '1px solid #3D5AFE';
                styles.background = 'transparent';
                styles['--hoverColor'] = 'rgba(41, 98, 255, 0.1)';
                styles.boxShadow = 'none';
                break;
            case 'text':
                styles.background = 'transparent';
                styles['--hoverColor'] = 'rgba(41, 98, 255, 0.1)';
                styles.boxShadow = 'none';
                break;
            default:
                break;
        }
    }

    if (props.color) {
        switch (props.color) {
            case 'default':
                break;
            case 'primary':
                styles.background = '#2962FF';
                styles['--hoverColor'] = '#0039CB';
                styles.color = '#ffffff';
                break;
            case 'secondary':
                styles.background = '#455A64';
                styles['--hoverColor'] = '#1C313A';
                styles.color = '#ffffff';
                break;
            case 'danger':
                styles.background = '#D32F2F';
                styles['--hoverColor'] = '#9A0007';
                styles.color = '#ffffff';
                break;
            default:
                break;
        }
    }

    if (props.disableShadow) {
        styles.boxShadow = 'none';
    }

    if (props.disabled) {
        styles.background = '#E0E0E0';
        styles['--hoverColor'] = '#E0E0E0';
        styles.color = '#9E9E9E';
        styles.cursor = 'inherit';
    }

    if (props.size) {
        switch (props.size) {
            case 'md':
                break;
            case 'sm':
                styles.padding = '0.375em 0.75em';
                break;
            case 'lg':
                styles.padding = '0.6875em 1.375em';
                break;
            default:
                console.error(
                    'OU la trompe de taille macro. ou peu choisi sm md lg'
                );
                break;
        }
    }

    let text = props.text ? props.text : 'Default';

    let startIcon;
    if (props.startIcon) {
        startIcon = <FontAwesomeIcon icon={props.startIcon} />;
    }

    let endIcon;
    if (props.endIcon) {
        endIcon = <FontAwesomeIcon icon={props.endIcon} />;
    }

    return (
        <button
            style={styles}
            className={classes.hover}
            onClick={props.disabled ? null : props.clickHandler}
        >
            {startIcon} {text} {endIcon}
        </button>
    );
};

export default Button;
