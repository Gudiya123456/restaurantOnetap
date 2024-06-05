import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
export default function Edititem({ setAction }) {

    const [value, setValue] = useState('');

    return (
        <div>

            <div className='panel'>

                <div>
                    <b>Configuration</b>
                </div>
                <hr className='mt-4' />

                <form action="" className='mt-5'>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2">
                        <div>
                            <label htmlFor="Txtpassword">Category</label>

                            <select name="" id="" className="form-select">
                                <option value="">Category One</option>
                                <option value="">Category Two</option>
                                <option value="">Category Three</option>
                            </select>
                            {/* <input type="text" placeholder="Enter City" className="form-input " /> */}
                            {/* <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span> */}
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Name</label>
                            <input type="text" placeholder="Enter Item Name" className="form-input " />
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Online Display Name</label>
                            <input type="text" placeholder="Enter Online Display Name" className="form-input " />
                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-8">
                        <div>
                            <label htmlFor="Txtpassword">Short Code</label>
                            <input type="text" placeholder="Enter Short Code" className="form-input " />
                            {/* <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span> */}
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Short Code 2</label>
                            <input type="text" placeholder="Enter Another Short Code" className="form-input " />
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Item Base Price</label>
                            <input type="text" placeholder="Enter Item Base Price" className="form-input " />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-8">
                        <div>
                            <label htmlFor="Txtpassword">Container Charges</label>
                            <input type="text" placeholder="Enter Container Charges" className="form-input " />
                            {/* <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span> */}
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Weight (in grams/ml)</label>
                            <input type="text" placeholder="Enter Weight" className="form-input " />
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Profit Margin (%)</label>
                            <input type="text" placeholder="Enter Profit Margin" className="form-input " />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-8">
                        <div>
                            <label htmlFor="Txtpassword">Dietary</label>
                            <label className="inline-flex me-2">
                                <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                <span>Veg</span>
                            </label>
                            <label className="inline-flex me-2">
                                <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                <span>Non-Veg</span>
                            </label>
                            <label className="inline-flex me-2">
                                <input type="radio" name="square_radio" className="form-radio text-dark rounded-none" />
                                <span>Egg</span>
                            </label>
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">Order Type</label>

                            <div>
                                <label className="inline-flex  me-2">
                                    <input type="checkbox" className="form-checkbox text-dark peer" />
                                    <span className="peer-checked:text-dark">Delivery</span>
                                </label>


                                <label className="inline-flex me-2">
                                    <input type="checkbox" className="form-checkbox text-dark peer" />
                                    <span className="peer-checked:text-dark">Pick Up</span>
                                </label>


                                <label className="inline-flex me-2">
                                    <input type="checkbox" className="form-checkbox text-dark peer" />
                                    <span className="peer-checked:text-dark">Dine In</span>
                                </label>
                            </div>

                            <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Used For the Offline PoS Billing Only</span>
                        </div>
                        <div>
                            <div>
                                <label className="inline-flex cursor-pointer">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="text-white-dark">Don't Allow decimal Value for quantity</span>
                                </label>
                            </div>
                            <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Used For the restrict quantity decimal</span>
                        </div>
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 mt-8">
                        <div>

                            <div>
                                <label htmlFor="Txtpassword">Expose This Items In</label>
                                <label className="inline-flex me-2">
                                    <input type="checkbox" name="square_radio" className="form-checkbox text-dark rounded-none" />
                                    <span>Online Orders</span>
                                </label>
                                <label className="inline-flex me-2">
                                    <input type="checkbox" name="square_radio" className="form-checkbox text-dark rounded-none" />
                                    <span>Captain App</span>
                                </label>
                                <label className="inline-flex me-2">
                                    <input type="checkbox" name="square_radio" className="form-checkbox text-dark rounded-none" />
                                    <span>Kiosk</span>
                                </label>

                                <label className="inline-flex me-2">
                                    <input type="checkbox" name="square_radio" className="form-checkbox text-dark rounded-none" />
                                    <span>Other</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Txtpassword">GST Type</label>
                            <div>
                                <label className="inline-flex me-2">
                                    <input type="radio" className="form-radio text-dark peer" />
                                    <span className="peer-checked:text-dark">Services</span>
                                </label>

                                <label className="inline-flex">
                                    <input type="radio" className="form-radio text-dark peer" />
                                    <span className="peer-checked:text-dark">Goods</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className="inline-flex cursor-pointer">
                                    <input type="checkbox" className="form-checkbox" />
                                    <span className="">All Days</span>
                                </label>
                            </div>
                            <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Used For the offline PoS billing only</span>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <label htmlFor="Txtpassword">Description</label>
                        <ReactQuill theme="snow" value={value} onChange={setValue} />
                    </div>



                    <div className='mt-8 flex gap-6'>

                        <button className='btn btn-dark'>Cancel</button>
                        <button className='btn btn-danger'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    )
}