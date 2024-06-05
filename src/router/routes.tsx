import { lazy } from 'react';
import Orders from '../pages/orders/Orders';
import Table from '../pages/tables/Table';
import Menu from '../pages/menu/Menu';
import Inventory from '../pages/inventory/Inventory';
import Crm from '../pages/crm/Crm';
import Accounting from '../pages/accounting/Accounting';
import Report from '../pages/report/Report';
import Marketplace from '../pages/marketplace/Marketplace';
import Logs from '../pages/logs/Logs';
import Payroll from '../pages/payroll/Payroll';
const Index = lazy(() => import('../pages/Index'));

const routes = [
    // dashboard
    {
        path: '/',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/orders',
        element: <Orders />,
        layout: 'default',
    },
    {
        path: '/tables',
        element: <Table />,
        layout: 'default',
    },
    {
        path: '/menu-management',
        element: <Menu />,
        layout: 'default',
    },
    {
        path: '/inventory',
        element: <Inventory />,
        layout: 'default',
    },
    {
        path: '/crm',
        element: <Crm />,
        layout: 'default',
    },
    {
        path: '/payroll',
        element: <Payroll />,
        layout: 'default',
    },
    {
        path: '/accounting',
        element: <Accounting />,
        layout: 'default',
    },
    {
        path: '/reports',
        element: <Report />,
        layout: 'default',
    },

    {
        path: '/marketplace',
        element: <Marketplace />,
        layout: 'default',
    },

    {
        path: '/logs',
        element: <Logs />,
        layout: 'default',
    },



];

export { routes };
