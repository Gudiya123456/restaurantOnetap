import PerfectScrollbar from 'react-perfect-scrollbar';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { toggleSidebar } from '../../store/themeConfigSlice';
import AnimateHeight from 'react-animate-height';
import { IRootState } from '../../store';
import { useState, useEffect } from 'react';

import { RiDashboardFill } from "react-icons/ri";
import { FaBellConcierge } from "react-icons/fa6";
import { IoIosFingerPrint, IoMdPricetags } from "react-icons/io";
import { LiaCoinsSolid } from "react-icons/lia";

import { BsCardHeading } from "react-icons/bs";
import { MdSupportAgent } from "react-icons/md";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FiSettings } from "react-icons/fi";
import IconCaretsDown from '../Icon/IconCaretsDown';
import IconCaretDown from '../Icon/IconCaretDown';
import IconMenuDashboard from '../Icon/Menu/IconMenuDashboard';
import IconMinus from '../Icon/IconMinus';
import IconMenuChat from '../Icon/Menu/IconMenuChat';
import IconMenuMailbox from '../Icon/Menu/IconMenuMailbox';
import IconMenuTodo from '../Icon/Menu/IconMenuTodo';
import IconMenuNotes from '../Icon/Menu/IconMenuNotes';
import IconMenuScrumboard from '../Icon/Menu/IconMenuScrumboard';
import IconMenuContacts from '../Icon/Menu/IconMenuContacts';
import IconMenuInvoice from '../Icon/Menu/IconMenuInvoice';
import IconMenuCalendar from '../Icon/Menu/IconMenuCalendar';
import IconMenuComponents from '../Icon/Menu/IconMenuComponents';
import IconMenuElements from '../Icon/Menu/IconMenuElements';
import IconMenuCharts from '../Icon/Menu/IconMenuCharts';
import IconMenuWidgets from '../Icon/Menu/IconMenuWidgets';
import IconMenuFontIcons from '../Icon/Menu/IconMenuFontIcons';
import IconMenuDragAndDrop from '../Icon/Menu/IconMenuDragAndDrop';
import IconMenuTables from '../Icon/Menu/IconMenuTables';
import IconMenuDatatables from '../Icon/Menu/IconMenuDatatables';
import IconMenuForms from '../Icon/Menu/IconMenuForms';
import IconMenuUsers from '../Icon/Menu/IconMenuUsers';
import IconMenuPages from '../Icon/Menu/IconMenuPages';
import IconMenuAuthentication from '../Icon/Menu/IconMenuAuthentication';
import IconMenuDocumentation from '../Icon/Menu/IconMenuDocumentation';
import { BsMenuButtonWideFill } from "react-icons/bs";
import { IoFastFoodSharp } from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";
import { MdInventory2 } from "react-icons/md";
import { FaUsersLine } from "react-icons/fa6";
import { PiCalculatorBold } from "react-icons/pi";
import { TbReport } from "react-icons/tb";
import { TbLogs } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { FaChalkboardUser } from "react-icons/fa6";

const Sidebar = () => {
    const path = window.location.pathname
    const [currentMenu, setCurrentMenu] = useState<string>('');
    const [errorSubMenu, setErrorSubMenu] = useState(false);
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
    const location = useLocation();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const toggleMenu = (value: string) => {
        setCurrentMenu((oldValue) => {
            return oldValue === value ? '' : value;
        });
    };

    useEffect(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];
                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    }, []);

    useEffect(() => {
        if (window.innerWidth < 1024 && themeConfig.sidebar) {
            dispatch(toggleSidebar());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location]);

    return (
        <div className={semidark ? 'dark' : ''}>
            <nav style={{ marginTop: "75px" }}
                className={`sidebar fixed min-h-screen rounded-r-xl  h-full top-0 bottom-0 w-[260px]  z-50 transition-all duration-300 ${semidark ? 'text-white-dark' : ''}`}
            >
                <div className="bg-white dark:bg-black h-full rounded-r-xl">

                    <PerfectScrollbar className="h-[calc(100vh-80px)] relative ">
                        <ul className="relative font-semibold space-y-0.5 p-4 py-0 mt-4">




                            <li className="nav-item">
                                <ul>
                                    <li className="nav-item ">
                                        <NavLink to="/" className="group active">
                                            <div className="flex items-center">
                                                <RiDashboardFill color="black" className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Dashboard
                                                </span>

                                            </div>
                                        </NavLink>
                                    </li>


                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'orders' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('orders')}>
                                            <div className="flex items-center">
                                                <IoFastFoodSharp color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Orders & Billing
                                                </span>
                                            </div>


                                            <div className={currentMenu !== 'orders' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown className='text-dark' />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'orders' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/orders">All orders</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/orders/kot">KOT</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/orders/online">Online Orders</NavLink>
                                                </li>

                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'tables' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('tables')}>
                                            <div className="flex items-center">
                                                <MdTableRestaurant color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Tables
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'tables' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'tables' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/tables">Live Tables</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'menu-management' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('menu-management')}>
                                            <div className="flex items-center">

                                                <BsMenuButtonWideFill
                                                    className="group-hover:!text-primary shrink-0 " color='black' />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Menu Management
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'menu-management' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'menu-management' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/menu-management">Menu & Discounts</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/menu-management">Online Menu On/Off</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>




                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'inventory' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('inventory')}>
                                            <div className="flex items-center">
                                                <MdInventory2 color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Inventory
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'inventory' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'inventory' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/inventory">Purchase Order</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/inventory">Stock Purchase</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/inventory">Raw Meterials</NavLink>
                                                </li>

                                            </ul>
                                        </AnimateHeight>
                                    </li>


                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'crm' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('crm')}>
                                            <div className="flex items-center">
                                                <FaUsersLine color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    CRM
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'crm' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'crm' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/crm">Customers</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/crm">Feedbacks</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'payroll' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('payroll')}>
                                            <div className="flex items-center">
                                                <FaChalkboardUser color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Payroll
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'payroll' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'payroll' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/crm">Employee Management</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/crm">Reports</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/crm">Device Configuration</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'accounting' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('accounting')}>
                                            <div className="flex items-center">
                                                <PiCalculatorBold color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Accounting
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'accounting' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'accounting' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/accounting">Online Orders</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/accounting">GST Information's</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/accounting">Bank Details</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/accounting">Payment Gateway</NavLink>
                                                </li>
                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="menu nav-item">
                                        <button type="button" className={`${currentMenu === 'reports' ? 'active' : ''} nav-link group w-full`} onClick={() => toggleMenu('reports')}>
                                            <div className="flex items-center">
                                                <TbReport color="black"
                                                    className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Reports
                                                </span>
                                            </div>

                                            <div className={currentMenu !== 'reports' ? 'rtl:rotate-90 -rotate-90' : ''}>
                                                <IconCaretDown />
                                            </div>
                                        </button>

                                        <AnimateHeight duration={300} height={currentMenu === 'reports' ? 'auto' : 0}>
                                            <ul className="sub-menu text-gray-500">
                                                <li>
                                                    <NavLink to="/reports">Day Summary</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/reports/other">Other Reports</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/reports/online">Online Reports</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/reports/online"> User Management</NavLink>
                                                </li>


                                            </ul>
                                        </AnimateHeight>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/marketplace" className="group">
                                            <div className="flex items-center">
                                                <CgWebsite color="black" className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    Marketplace
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/logs" className="group">
                                            <div className="flex items-center">
                                                <TbLogs color="black" className="group-hover:!text-primary shrink-0" />
                                                <span className="ltr:pl-3 rtl:pr-3 text-black dark:text-[#506690] dark:group-hover:text-white-dark">
                                                    User Logs
                                                </span>
                                            </div>
                                        </NavLink>
                                    </li>

                                </ul>
                            </li>



                        </ul>
                    </PerfectScrollbar>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
