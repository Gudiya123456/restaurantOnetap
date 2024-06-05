import React, { useState } from 'react'
import Subcategory from './Subcategory'
import Addsubcategory from './Addsubcategory'


export default function Index() {

    const [action, setAction] = useState('subcategory')
    return (
        <div>
            {action == 'subcategory' ? <Subcategory setAction={setAction} />
                : action == 'add-subcategory' ? <Addsubcategory setAction={setAction} />
                    : ''}
        </div>
    )
}
