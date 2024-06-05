import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        category: 'johndoe@yahoo.com',
        price: '10/08/2020',
        description: 120,
        choice: 'Complete',
        type: '5 min ago',
        variation: '40%',
        addon: 'Developer',
    },

    {
        id: 2,
        name: 'John Doe',
        category: 'johndoe@yahoo.com',
        price: '10/08/2020',
        description: 120,
        choice: 'Complete',
        type: '5 min ago',
        variation: '40%',
        addon: 'Developer',
    },

    {
        id: 3,
        name: 'John Doe',
        category: 'johndoe@yahoo.com',
        price: '10/08/2020',
        description: 120,
        choice: 'Complete',
        type: '5 min ago',
        variation: '40%',
        addon: 'Developer',
    },

    {
        id: 4,
        name: 'John Doe',
        category: 'johndoe@yahoo.com',
        price: '10/08/2020',
        description: 120,
        choice: 'Complete',
        type: '5 min ago',
        variation: '40%',
        addon: 'Developer',
    },

    {
        id: 5,
        name: 'John Doe',
        category: 'johndoe@yahoo.com',
        price: '10/08/2020',
        description: 120,
        choice: 'Complete',
        type: '5 min ago',
        variation: '40%',
        addon: 'Developer',
    },

];
export default function Additem({ setAction }) {

    console.log(setAction)
    return (

        <div className='panel'>


            <div className='flex gap-3 mb-4'>
                <button className='btn btn-sm btn-danger'>Save & Exit</button>

                <button className='btn btn-sm btn-danger'>Save & Add Menu Items</button>

                <button className='btn btn-sm btn-dark' onClick={() => setAction('items')}>Back</button>
            </div>

            <div className="table-responsive mb-5">
                <table className="table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th >Category</th>
                            <th>Price</th>
                            <th>Description</th>
                            <th>Choice</th>
                            <th >Type</th>
                            <th>Add Variation</th>
                            <th className="text-center">Add Addon</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data) => {
                            return (
                                <tr key={data.id}>

                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>

                                    <td>
                                        <select name="" id="" className='form-select'>
                                            <option disabled selected> Select Category</option>
                                            <option value="">BBQ</option>
                                        </select>
                                    </td>
                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>
                                    <td>
                                        <input type="text" className='form-input' />
                                    </td>

                                    <td>
                                        <label className="inline-flex">
                                            <input type="radio" name="default_radio" className="form-radio text-success" />
                                            <span>Veg</span>
                                        </label>
                                        <label className="inline-flex">
                                            <input type="radio" name="default_radio" className="form-radio text-danger" />
                                            <span>Non-Veg</span>
                                        </label>
                                        <label className="inline-flex">
                                            <input type="radio" name="default_radio" className="form-radio text-warning" />
                                            <span>Egg</span>
                                        </label>
                                    </td>

                                    <td>
                                        <label className="inline-flex me-2">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                            <span>Dinein</span>
                                        </label>
                                        <label className="inline-flex me-2">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                            <span>Pickup</span>
                                        </label>
                                        <label className="inline-flex me-2">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                            <span>Online</span>
                                        </label>
                                        <label className="inline-flex me-2">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                            <span>Delivery</span>
                                        </label>
                                    </td>

                                    <td>
                                        <label className="inline-flex">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                        </label>
                                    </td>
                                    <td>
                                        <label className="inline-flex">
                                            <input type="checkbox" className="form-checkbox text-secondary" />
                                        </label>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
