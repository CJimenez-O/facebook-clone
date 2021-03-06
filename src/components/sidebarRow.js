import React from 'react'
import {Avatar} from '@material-ui/core'
import '../styles/sidebarRow.css'

function sidebarRow({src, Icon, title}) {
    return (
        <div className="sidebarRow">
        {src && <Avatar src={src}/> }
        {Icon && <Icon />}
            <h4>{title}</h4>
        </div>
    )
}

export default sidebarRow
