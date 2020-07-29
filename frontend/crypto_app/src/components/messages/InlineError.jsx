import React from "react";

export default function InlineError(props) {
    return(
        <span style={{ color: '#ae5856' }}>
            {props.text}
        </span>
    )
}