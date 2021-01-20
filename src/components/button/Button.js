// import React, { useState } from 'react';
import classes from './Button.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {
    let error = false;

    const errorHandler = (msg) => {
        console.error(msg);
        error = true;
    };

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
                if (props.color) {
                    switch (props.color) {
                        case 'default':
                            styles.border = '1px solid #E0E0E0';
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(224, 224, 224, 0.1)';
                            break;
                        case 'primary':
                            styles.border = '1px solid #2962FF';
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(41, 98, 255, 0.1)';
                            break;
                        case 'secondary':
                            styles.border = '1px solid #455A64';
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(69, 90, 100, 0.1)';
                            break;
                        case 'danger':
                            styles.border = '1px solid #D32F2F';
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(211, 47, 47, 0.1)';
                            break;
                        default:
                            errorHandler(`${props.color} is an invalid color`);
                            break;
                    }
                } else {
                    styles.border = '1px solid #E0E0E0';
                    styles.background = 'transparent';
                    styles['--hoverColor'] = 'rgba(224, 224, 224, 0.1)';
                }
                // styles.boxShadow = 'none';
                break;
            case 'text':
                if (props.color) {
                    switch (props.color) {
                        case 'default':
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(224, 224, 224, 0.1)';
                            break;
                        case 'primary':
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(41, 98, 255, 0.1)';
                            break;
                        case 'secondary':
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(69, 90, 100, 0.1)';
                            break;
                        case 'danger':
                            styles.background = 'transparent';
                            styles['--hoverColor'] = 'rgba(211, 47, 47, 0.1)';
                            break;
                        default:
                            errorHandler(`${props.color} is an invalid color`);
                            break;
                    }
                } else {
                    styles.background = 'transparent';
                    styles['--hoverColor'] = 'rgba(41, 98, 255, 0.1)';
                }
                // styles.boxShadow = 'none';
                break;
            default:
                errorHandler(`${props.variant} is an invalid variant`);
                break;
        }
    }

    if (props.color && !props.variant) {
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
                errorHandler(`${props.color} is an invalid color`);
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
                errorHandler(`${props.size} is an invalid size`);
                break;
        }
    }

    let text = props.children ? props.children : 'Default';
    if (error) {
        text = 'ERROR';
        styles.background =
            'repeating-linear-gradient(45deg,red,rgba(0, 0, 0, 0.2) 4px,yellow 4px,rgba(0, 0, 0, 0.3) 8px)';
        styles.color = 'white';
        styles.WebkitTextStroke = '1.2px black';
    }

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
