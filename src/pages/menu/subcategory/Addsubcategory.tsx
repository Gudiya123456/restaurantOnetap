import React from 'react'

export default function Addsubcategory({ setAction }) {
    return (
        <div>

            <div className='panel'>

                <form action="">
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="">
                            <label>Sub Category Name</label>
                            <input type="text" placeholder="Enter Sub Category Name" className="form-input text-white-dark" />
                        </div>

                        <div>
                            <label>Category</label>
                            <select className="form-select text-white-dark">
                                <option disabled selected>Select Category</option>
                                <option>Category One</option>
                                <option>Category Two</option>
                                <option>Category Three</option>
                            </select>
                        </div>

                        <div>
                            <label>Status</label>
                            <select className="form-select text-white-dark">
                                <option disabled selected>Select Status</option>
                                <option>Active</option>
                                <option>Blocked</option>
                            </select>
                        </div>
                        <div>
                            <label>Image</label>
                            <input type="file" className="form-input text-white-dark" />
                        </div>
                    </div>

                    <div className='flex gap-3 mt-4'>
                        <button className='btn btn-sm btn-dark' onClick={() => setAction('subcategory')}>Cancel & Back</button>
                        <button className='btn btn-sm btn-danger' type='button'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

