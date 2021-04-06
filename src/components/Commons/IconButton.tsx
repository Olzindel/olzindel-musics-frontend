import React from "react";
import styled from "styled-components";
import {StyledIcon} from "styled-icons/types";


interface IconButtonProps {
    icon: StyledIcon;
    onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

const Button = styled.button`
  width: 5rem;
  background-color: transparent;
  color: white;
`

export const IconButton: React.FC<IconButtonProps> = ({icon: Icon, onClick}) => {
    return (
        <Button onClick={onClick}>
            <Icon/>
        </Button>
    );
};