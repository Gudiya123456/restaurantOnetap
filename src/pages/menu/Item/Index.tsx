import React, { useState } from 'react'
import Item from './Item'
import Additem from './Additem'
import Edititem from './Edititem'

export default function Index() {

    const [action, setAction] = useState('items')
    return (


        <div>

            {action == 'items' ? <Item setAction={setAction} />
                : action == 'add-item' ? <Additem setAction={setAction} />
                    : action == 'edit-item' ? <Edititem setAction={setAction} />
                        : ''}

            {/* { setAction } */}
        </div>
    )
}
