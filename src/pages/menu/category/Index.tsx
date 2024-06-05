import React, { useState } from 'react'
import Category from './Category'
import Addcategory from './Addcategory'

export default function Index() {

    const [action, setAction] = useState('category')
    return (
        <div>
            {action == 'category' ? <Category setAction={setAction} />
                : action == 'add-category' ? <Addcategory setAction={setAction} />
                    : ''}
        </div>
    )
}
