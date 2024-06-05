import React, { useState, useEffect } from 'react'
import { ReactSortable } from 'react-sortablejs';
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import IconBell from '../../../components/Icon/IconBell';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const rowData = [
    {
        id: 1,
        item_name: 'BBQ Gun(full Leg)',
        price: '500',
        description: 'Test description',
        action: '2004-05-28',
        address: {
            street: '529 Scholes Street',
            city: 'Temperanceville',
            zipcode: 5235,
            geo: {
                lat: 23.806115,
                lng: 164.677197,
            },
        },
        item_image: '+1 (821) 447-3782',
        isActive: true,
        age: 39,
        company: 'POLARAX',
    },
    {
        id: 2,
        item_name: 'BBQ Strips',
        price: '750',
        description: 'Fake Description',
        action: '1989-11-19',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        item_image: '+1 (838) 515-3408',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    },
    {
        id: 2,
        item_name: 'BBQ Strips 2',
        price: '350',
        description: 'Another Description',
        action: 'Browse',
        address: {
            street: '639 Kimball Street',
            city: 'Bascom',
            zipcode: 8907,
            geo: {
                lat: 65.954483,
                lng: 98.906478,
            },
        },
        item_image: 'sssss',
        isActive: false,
        age: 32,
        company: 'MANGLO',
    }
];
export default function Item({ setAction }) {



    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Checkbox Table'));
    });
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [selectedRecords, setSelectedRecords] = useState<any>([]);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
        columnAccessor: 'id',
        direction: 'asc',
    });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.item_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.price.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase()) ||
                    item.item_image.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const items1 = [
        {
            id: 1,
            text: 'Need to be approved',
            name: 'Kelly Young',
        },
        {
            id: 2,
            text: 'Meeting with client',
            name: 'Andy King',
        },
        {
            id: 3,
            text: 'Project Detail',
            name: 'Judy Holmes',
        },
        {
            id: 4,
            text: 'Edited Post Apporval',
            name: 'Vincent Carpenter',
        },
        {
            id: 5,
            text: 'Project Lead Pickup',
            name: 'Mary McDonald',
        },
    ];
    const [handler1, setHandler1] = useState(items1);
    return (
        <div>


            <div className='grid grid-cols-12 gap-3'>

                <div className='col-span-4 panel'>


                    <div>
                        <ul id="example5">
                            <ReactSortable list={handler1} setList={setHandler1} animation={200} handle=".handle" group="handler" ghostClass="gu-transit">
                                {handler1.map((item) => {
                                    return (
                                        <li key={item.id} className="mb-2.5 cursor-grab">
                                            <div className="bg-white dark:bg-[#1b2e4b] rounded-md border border-white-light dark:border-dark px-2 py-1 flex md:flex-row flex-col ltr:text-left rtl:text-right items-md-center">

                                                <div className="flex md:flex-row flex-col justify-between items-center flex-1 text-center md:text-left">
                                                    <div className="font-semibold md:my-0 my-3">
                                                        <div className="text-dark dark:text-[#bfc9d4] text-base">{item.name}</div>
                                                    </div>
                                                    <div className="text-white-dark">
                                                        <span className="handle px-2 ltr:mr-1 rtl:ml-1 bg-[#ebedf2] dark:bg-black rounded cursor-move">+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ReactSortable>
                        </ul>
                    </div>

                </div>

                <div className='col-span-8 panel'>


                    <div className="flex gap-3 ltr:ml-auto rtl:mr-auto justify-between mb-5">
                        <select name="" id="" className='form-select w-[230px]' disabled>
                            <option value="">Action</option>
                        </select>
                        <button className='btn btn-info btn-sm shadow' onClick={() => setAction('add-item')}>Add Item</button>
                        <button className='btn btn-success btn-sm shadow'>Save</button>
                        <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>



                    <div className="datatables">
                        <DataTable
                            className="whitespace-nowrap table-hover"
                            records={recordsData}
                            columns={[

                                {
                                    accessor: 'item_name',
                                    sortable: true,
                                    title: 'Name',
                                    render: (item_name) => <input type="text" className="form-input w-auto" value={item_name.item_name} />,
                                },


                                {
                                    accessor: 'price',
                                    sortable: true,
                                    title: 'Price',
                                    render: (item) => <input type="text" className="form-input w-100" value={item.price} />,
                                },

                                {
                                    accessor: 'description',
                                    sortable: true,
                                    title: 'Description',
                                    render: (item) => <input type="text" className="form-input w-100" value={item.description} />,
                                },


                                {
                                    accessor: 'item_image',
                                    sortable: false,
                                    title: 'Image',
                                    titleClassName: '!text-center',
                                    render: () => <button className='btn btn-white shadow btn-sm'>Browse</button>,
                                },


                                {
                                    accessor: 'action',
                                    sortable: false,
                                    title: 'Action',
                                    titleClassName: '!text-center',
                                    render: () => (
                                        <div className="flex items-center w-max mx-auto gap-2">
                                            <Tippy content="Edit">
                                                <button type="button">
                                                    <FaEye size={18} />
                                                </button>
                                            </Tippy>
                                            <Tippy content="Edit">
                                                <button type="button" onClick={() => setAction('edit-item')}>
                                                    <MdEdit size={18} />
                                                </button>
                                            </Tippy>
                                            <Tippy content="Delete">
                                                <button type="button">
                                                    <FaBook size={18} />
                                                </button>
                                            </Tippy>
                                        </div>
                                    ),
                                },
                            ]}
                            highlightOnHover
                            totalRecords={initialRecords.length}
                            recordsPerPage={pageSize}
                            page={page}
                            onPageChange={(p) => setPage(p)}
                            recordsPerPageOptions={PAGE_SIZES}
                            onRecordsPerPageChange={setPageSize}
                            sortStatus={sortStatus}
                            onSortStatusChange={setSortStatus}
                            selectedRecords={selectedRecords}
                            onSelectedRecordsChange={setSelectedRecords}
                            minHeight={200}
                            paginationText={({ from, to, totalRecords }) => `Showing  ${from} to ${to} of ${totalRecords} entries`}
                        />
                    </div>

                </div>
            </div>



        </div>
    )
}
