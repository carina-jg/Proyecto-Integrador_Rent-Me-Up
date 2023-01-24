import React from "react";
import Text from "./Text";
import {
    ButtonNoBackgroundStyle,
    ButtonStyle,
    ButtonMobilStyle,
} from "../../styles/atoms/ButtonStyle";

function Button({
    text,
    type = "default",
    width = "m",
    fullwidth = false,
    style,
    click,
}) {
    const widthButton =
        width === "xs" ? 164 : width === "s" ? 206 : width === "m" ? 296 : 346;

    const switchType = (type) => {
        switch (type) {
            case "Outline":
                return (
                    <ButtonNoBackgroundStyle
                        style={style}
                        onClick={click}
                        fullwidth={fullwidth}
                        width={width}
                        widthButton={widthButton}
                    >
                        <Text type="h3" color="primary" text={text} />
                    </ButtonNoBackgroundStyle>
                );

            case "text":
                return (
                    <ButtonMobilStyle
                        style={style}
                        onClick={click}
                        fullwidth={fullwidth}
                        width={width}
                        widthButton={widthButton}
                    >
                        <Text type="h3" color="secondary" text={text} />
                    </ButtonMobilStyle>
                );

            case "submit":
                return (
                    <ButtonStyle
                        type="submit"
                        style={style}
                        onClick={click}
                        fullwidth={fullwidth}
                        width={width}
                        widthButton={widthButton}
                        columnStar={4}
                        columnEnd={5}
                        rowStart={1}
                        rowEnd={1}
                    >
                        <Text type="h3" color="white" text={text} />
                    </ButtonStyle>
                );

            default:
                return (
                    <ButtonStyle
                        type="button"
                        style={style}
                        onClick={click}
                        fullwidth={fullwidth}
                        width={width}
                        widthButton={widthButton}
                        columnStar={4}
                        columnEnd={5}
                        rowStart={1}
                        rowEnd={1}
                    >
                        <Text type="h3" color="white" text={text} />
                    </ButtonStyle>
                );
        }
    };

    return <>{switchType(type)}</>;
}

export default Button;
