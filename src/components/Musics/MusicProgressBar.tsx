import styled from "styled-components";
import React from "react";

const StyledProgressBar = styled.progress``;

interface Props {
    duration: number;
    currentTime: number;
}

export const MusicProgressBar: React.FunctionComponent<Props> = (props) => {
    return (
        <StyledProgressBar max={props.duration} value={props.currentTime} />
    );
}