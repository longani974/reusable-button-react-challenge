import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    const styles = {
        "--hoverColor": "#AEAEAE",
        "--outline": "none",
        padding: "0.5em 1em",
        borderRadius: "6px",
        background: "#E0E0E0",
        boxShadow: "0px 2px 3px rgba(51, 51, 51, 0.2)",
        border: "none",
        color: "#3f3f3f",
        fontFamily: "'Noto Sans JP', sans-serif",
    };

    if (props.variant) {
        switch (props.variant) {
            case "outline":
                styles.border = "1px solid #3D5AFE";
                styles.background = "transparent";
                styles["--hoverColor"] = "rgba(41, 98, 255, 0.1)";
                styles.boxShadow = "none";
                break;
            case "text":
                styles.background = "transparent";
                styles["--hoverColor"] = "rgba(41, 98, 255, 0.1)";
                styles.boxShadow = "none";
                break;
            default:
                break;
        }
    }

    if (props.color) {
        switch (props.color) {
            case "default":
                break;
            case "primary":
                styles.background = "#2962FF";
                styles["--hoverColor"] = "#0039CB";
                styles.color = "#ffffff";
                break;
            case "secondary":
                styles.background = "#455A64";
                styles["--hoverColor"] = "#1C313A";
                styles.color = "#ffffff";
                break;
            case "danger":
                styles.background = "#D32F2F";
                styles["--hoverColor"] = "#D32F2F";
                styles.color = "#ffffff";
                break;
            default:
                break;
        }
    }

    if (props.disableShadow) {
        styles.boxShadow = "none";
    }

    const text = props.text ? props.text : "Default";

    return (
        <button style={styles} className={classes.hover}>
            {text}
        </button>
    );
};

export default Button;
