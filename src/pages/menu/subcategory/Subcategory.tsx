import React, { useEffect, useState } from 'react'
import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import sortBy from 'lodash/sortBy';
import { useDispatch } from 'react-redux';
import { setPageTitle } from '../../../store/themeConfigSlice';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaEye } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaBook } from "react-icons/fa";

const rowData = [
    {
        id: 1,
        sub_category_name: 'Sub Category One',
        category_name: 'Category One',
        status: 1,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        action: 1,
    },

    {
        id: 2,
        sub_category_name: 'Sub Category Two',
        category_name: 'Category Two',
        status: 0,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        action: 2,
    },

    {
        id: 3,
        sub_category_name: 'Sub Category Three',
        category_name: 'Category One',
        status: 1,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        action: 3,
    },

    {
        id: 4,
        sub_category_name: 'Sub Category Four',
        category_name: 'Category One',
        status: 1,
        created_at: '2004-05-28',
        updated_at: '2004-05-28',
        action: 4,
    },

];

export default function Subcategory({ setAction }) {


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
                    item.category_name.toLowerCase().includes(search.toLowerCase())
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


    return (
        <div className='panel'>

            <div className="flex gap-3 ltr:ml-auto rtl:mr-auto justify-between mb-5">

                <button className='btn btn-info btn-sm shadow' onClick={() => setAction('add-subcategory')}>Add Sub Category</button>
                <input type="text" className="form-input w-auto" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="datatables">
                <DataTable
                    className="whitespace-nowrap table-hover"
                    records={recordsData}
                    columns={[


                        {
                            accessor: 'sub_category_name',
                            sortable: true,
                            title: 'Sub Category',
                            // render: (category) => <input type="text" className="form-input w-auto" value={category.category_name} />,
                        },

                        {
                            accessor: 'category_name',
                            sortable: true,
                            title: 'Category',
                            // render: (category) => <input type="text" className="form-input w-auto" value={category.category_name} />,
                        },


                        {
                            accessor: 'status',
                            sortable: true,
                            title: 'Status',
                            render: (category) => <span>{category.status ? 'Active' : 'Blocked'}</span>,
                        },

                        {
                            accessor: 'created_at',
                            sortable: true,
                            title: 'Created',
                        },

                        {
                            accessor: 'updated_at',
                            sortable: true,
                            title: 'Modified',
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
                                            <MdEdit size={18} />
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
    )
}
