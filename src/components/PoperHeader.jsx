import { Popover } from '@material-ui/core';
import React from 'react';

const PoperHeader = (props) => {
    return (
        <Popover
            id={props.id}
            open={props.open}
            anchorEl={props.anchorEl}
            onClose={props.handlePopupClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >
            {props.children}
        </Popover>
    )
}

export default PoperHeader;