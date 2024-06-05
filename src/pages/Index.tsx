import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '../store';
import ReactApexChart from 'react-apexcharts';

import Dropdown from '../components/Dropdown';
import { setPageTitle } from '../store/themeConfigSlice';
import IconHorizontalDots from '../components/Icon/IconHorizontalDots';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { AiOutlineReload } from "react-icons/ai";

import IconDollarSign from '../components/Icon/IconDollarSign';
import IconInbox from '../components/Icon/IconInbox';
import IconTag from '../components/Icon/IconTag';
import IconCreditCard from '../components/Icon/IconCreditCard';
import IconShoppingCart from '../components/Icon/IconShoppingCart';


const Index = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Sales Admin'));
    });
    const isDark = useSelector((state: IRootState) => state.themeConfig.theme === 'dark' || state.themeConfig.isDarkMode);
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;

    const [loading] = useState(false);





    const [date3, setDate3] = useState<any>('2022-07-05 to 2022-07-10');

    //Revenue Chart
    const revenueChart: any = {
        series: [
            {
                name: 'Dine In',
                data: [1500, 2000, 1800, 1600, 2100, 1000],
            },
            {
                name: 'Pick Up',
                data: [2000, 1600, 1400, 2000, 1400, 1800],
            },

            {
                name: 'Delivery',
                data: [1000, 1400, 1700, 1800, 1000, 1500],
            },
        ],
        options: {
            chart: {
                height: 325,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                zoom: {
                    enabled: false,
                },
                toolbar: {
                    show: false,
                },
            },

            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                curve: 'smooth',
                width: 2,
                lineCap: 'square',
            },
            dropShadow: {
                enabled: true,
                opacity: 0.2,
                blur: 10,
                left: -7,
                top: 22,
            },
            colors: isDark ? ['#2196f3', '#fea301', '#48b703'] : ['#2196f3', '#fea301', '#48b703'],
            markers: {
                discrete: [
                    {
                        seriesIndex: 0,
                        dataPointIndex: 6,
                        fillColor: '#1B55E2',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                    {
                        seriesIndex: 1,
                        dataPointIndex: 5,
                        fillColor: '#E7515A',
                        strokeColor: 'transparent',
                        size: 7,
                    },
                ],
            },
            labels: ['12am - 4am', '4am - 8am', '8am - 12am', '12am - 4am', '4am - 8am', '8am - 12am'],
            xaxis: {
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
                crosshairs: {
                    show: true,
                },
                labels: {
                    offsetX: isRtl ? 2 : 0,
                    offsetY: 5,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-xaxis-title',
                    },
                },
            },
            yaxis: {
                tickAmount: 7,
                labels: {
                    formatter: (value: number) => {
                        return value / 1000 + 'K';
                    },
                    offsetX: isRtl ? -30 : -10,
                    offsetY: 0,
                    style: {
                        fontSize: '12px',
                        cssClass: 'apexcharts-yaxis-title',
                    },
                },
                opposite: isRtl ? true : false,
            },
            grid: {
                borderColor: isDark ? '#191E3A' : '#E0E6ED',
                strokeDashArray: 5,
                xaxis: {
                    lines: {
                        show: true,
                    },
                },
                yaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                fontSize: '16px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                itemMargin: {
                    horizontal: 10,
                    vertical: 5,
                },
            },
            tooltip: {
                marker: {
                    show: true,
                },
                x: {
                    show: false,
                },
            },
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: isDark ? 0.19 : 0.28,
                    opacityTo: 0.05,
                    stops: isDark ? [100, 100] : [45, 100],
                },
            },
        },
    };

    //Sales By Category
    const salesByCategory: any = {
        series: [985, 737, 270],
        options: {
            chart: {
                type: 'donut',
                height: 460,
                fontFamily: 'Nunito, sans-serif',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 25,
                colors: isDark ? '#0e1726' : '#fff',
            },
            colors: isDark ? ['#5c1ac3', '#e2a03f', '#e7515a', '#e2a03f'] : ['#e2a03f', '#5c1ac3', '#e7515a'],
            legend: {
                position: 'bottom',
                horizontalAlign: 'center',
                fontSize: '14px',
                markers: {
                    width: 10,
                    height: 10,
                    offsetX: -2,
                },
                height: 50,
                offsetY: 20,
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        background: 'transparent',
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '29px',
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: '26px',
                                color: isDark ? '#bfc9d4' : undefined,
                                offsetY: 16,
                                formatter: (val: any) => {
                                    return val;
                                },
                            },
                            total: {
                                show: true,
                                label: 'Total',
                                color: '#888ea8',
                                fontSize: '29px',
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce(function (a: any, b: any) {
                                        return a + b;
                                    }, 0);
                                },
                            },
                        },
                    },
                },
            },
            labels: ['Apparel', 'Sports', 'Others'],
            states: {
                hover: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
                active: {
                    filter: {
                        type: 'none',
                        value: 0.15,
                    },
                },
            },
        },
    };

    //Daily Sales
    const dailySales: any = {
        series: [
            {
                name: 'Sales',
                data: [44, 55, 41, 67, 22, 43, 21],
            },
            {
                name: 'Last Week',
                data: [13, 23, 20, 8, 13, 27, 33],
            },
        ],
        options: {
            chart: {
                height: 160,
                type: 'bar',
                fontFamily: 'Nunito, sans-serif',
                toolbar: {
                    show: false,
                },
                stacked: true,
                stackType: '100%',
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 1,
            },
            colors: ['#e2a03f', '#e0e6ed'],
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        legend: {
                            position: 'bottom',
                            offsetX: -10,
                            offsetY: 0,
                        },
                    },
                },
            ],
            xaxis: {
                labels: {
                    show: false,
                },
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            },
            yaxis: {
                show: false,
            },
            fill: {
                opacity: 1,
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                },
            },
            legend: {
                show: false,
            },
            grid: {
                show: false,
                xaxis: {
                    lines: {
                        show: false,
                    },
                },
                padding: {
                    top: 10,
                    right: -20,
                    bottom: -20,
                    left: -20,
                },
            },
        },
    };

    //Total Orders
    const totalOrders: any = {
        series: [
            {
                name: 'Sales',
                data: [28, 40, 36, 52, 38, 60, 38, 52, 36, 40],
            },
        ],
        options: {
            chart: {
                height: 290,
                type: 'area',
                fontFamily: 'Nunito, sans-serif',
                sparkline: {
                    enabled: true,
                },
            },
            stroke: {
                curve: 'smooth',
                width: 2,
            },
            colors: isDark ? ['#00ab55'] : ['#00ab55'],
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
            yaxis: {
                min: 0,
                show: false,
            },
            grid: {
                padding: {
                    top: 125,
                    right: 0,
                    bottom: 0,
                    left: 0,
                },
            },
            fill: {
                opacity: 1,
                type: 'gradient',
                gradient: {
                    type: 'vertical',
                    shadeIntensity: 1,
                    inverseColors: !1,
                    opacityFrom: 0.3,
                    opacityTo: 0.05,
                    stops: [100, 100],
                },
            },
            tooltip: {
                x: {
                    show: false,
                },
            },
        },
    };
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link to="/" className="text-primary hover:underline">
                        Dashboard
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Sales</span>
                </li>
            </ul>

            <div className="pt-5">
                <div className="grid grid-cols-12 gap-6 mb-6">
                    <div className="panel h-full col-span-6">
                        <div className="flex items-center justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg">Revenue</h5>
                            <div className='flex gap-6'>
                                <div>
                                    <Flatpickr
                                        options={{
                                            mode: 'range',
                                            dateFormat: 'Y-m-d',
                                            position: isRtl ? 'auto right' : 'auto left',
                                        }}
                                        value={date3}
                                        className="form-input"
                                        onChange={(date3) => setDate3(date3)}
                                    />
                                </div>

                                <div>
                                    <button type="button" className="btn  shadow">
                                        <AiOutlineReload />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-around'>
                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold '>Total Sales - 13 orders</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>10000</strong>
                            </div>

                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold text-info'>Dine In (10)</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>2000</strong>
                            </div>

                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold text-success'>Pick Up (2)</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>3000</strong>
                            </div>

                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold text-warning'>Delivery (5)</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>5000</strong>
                            </div>


                        </div>

                        <div className="mt-4">
                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                                {loading ? (
                                    <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                                    </div>
                                ) : (
                                    <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full col-span-6">
                        <div className="flex items-center justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg">Orders</h5>
                            <div className='flex gap-6'>
                                <div>
                                    <Flatpickr
                                        options={{
                                            mode: 'range',
                                            dateFormat: 'Y-m-d',
                                            position: isRtl ? 'auto right' : 'auto left',
                                        }}
                                        value={date3}
                                        className="form-input"
                                        onChange={(date3) => setDate3(date3)}
                                    />
                                </div>

                                <div>
                                    <button type="button" className="btn  shadow">
                                        <AiOutlineReload />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-around'>
                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold '>Total Orders - 13 orders</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>10000</strong>
                            </div>

                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold text-info'>Online Orders (10)</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>2000</strong>
                            </div>

                            <div className='text-centerpx-4 text-center'>
                                <p className='font-extrabold text-success'>Online Payments (2)</p>
                                <strong> <span className='text-white-dark me-1'>₹</span>3000</strong>
                            </div>




                        </div>

                        <div className="mt-4">
                            <div className="bg-white dark:bg-black rounded-lg overflow-hidden">
                                {loading ? (
                                    <div className="min-h-[325px] grid place-content-center bg-white-light/30 dark:bg-dark dark:bg-opacity-[0.08] ">
                                        <span className="animate-spin border-2 border-black dark:border-white !border-l-transparent  rounded-full w-5 h-5 inline-flex"></span>
                                    </div>
                                ) : (
                                    <ReactApexChart series={revenueChart.series} options={revenueChart.options} type="area" height={325} />
                                )}
                            </div>
                        </div>
                    </div>
                </div>



                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">

                    <div className="panel h-full sm:col-span-2 xl:col-span-1">
                        <div className="flex items-center justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg">Total Sales <strong className='text-sm'> ( <span className='text-white-dark me-1'>₹</span>10000)</strong></h5>

                        </div>
                        <div className="space-y-9">
                            <div className="flex items-center">
                                <div className="w-9 h-9 ltr:mr-3 rtl:ml-3">
                                    <div className="bg-secondary-light dark:bg-secondary text-secondary dark:text-secondary-light  rounded-full w-9 h-9 grid place-content-center">
                                        <IconInbox />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex font-semibold text-white-dark mb-2">
                                        <h6>Cash</h6>
                                        <p className="ltr:ml-auto rtl:mr-auto">$92,600</p>
                                    </div>
                                    <div className="rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                                        <div className="bg-gradient-to-r from-[#7579ff] to-[#b224ef] w-11/12 h-full rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-9 h-9 ltr:mr-3 rtl:ml-3">
                                    <div className="bg-success-light dark:bg-success text-success dark:text-success-light rounded-full w-9 h-9 grid place-content-center">
                                        <IconTag />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex font-semibold text-white-dark mb-2">
                                        <h6>Card</h6>
                                        <p className="ltr:ml-auto rtl:mr-auto">$37,515</p>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                                        <div className="bg-gradient-to-r from-[#3cba92] to-[#0ba360] w-full h-full rounded-full" style={{ width: '65%' }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-9 h-9 ltr:mr-3 rtl:ml-3">
                                    <div className="bg-warning-light dark:bg-warning text-warning dark:text-warning-light rounded-full w-9 h-9 grid place-content-center">
                                        <IconCreditCard />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex font-semibold text-white-dark mb-2">
                                        <h6>Online Payment</h6>
                                        <p className="ltr:ml-auto rtl:mr-auto">$55,085</p>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                                        <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-9 h-9 ltr:mr-3 rtl:ml-3">
                                    <div className="bg-warning-light dark:bg-warning text-warning dark:text-warning-light rounded-full w-9 h-9 grid place-content-center">
                                        <IconCreditCard />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex font-semibold text-white-dark mb-2">
                                        <h6>Online COD</h6>
                                        <p className="ltr:ml-auto rtl:mr-auto">$55,085</p>
                                    </div>
                                    <div className="w-full rounded-full h-2 bg-dark-light dark:bg-[#1b2e4b] shadow">
                                        <div className="bg-gradient-to-r from-[#f09819] to-[#ff5858] w-full h-full rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="panel h-full ">
                        <div className="flex items-center justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg">Discount <strong className='text-sm'> ( <span className='text-white-dark me-1'>₹</span>0)</strong></h5>

                        </div>
                    </div>

                    <div className="panel h-full ">
                        <div className="flex items-center justify-between dark:text-white-light mb-5">
                            <h5 className="font-semibold text-lg">Taxes  <strong className='text-sm'> ( <span className='text-white-dark me-1'>SGST - ₹</span>0)</strong></h5>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Index;
