import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Login from "@/pages/Login";

const routes = [
  {
    path: '*',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: "/admin",
    component: DashboardLayout,
    meta: { requiresAuth: true },
    
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { requiresAuth: true },
      },
      {
        path: "user",
        name: "會員資料",
        component: UserProfile,
        meta: { requiresAuth: true },
      },
      {
        path: "table",
        name: "步道資料",
        component: TableList,
        meta: { requiresAuth: true },
      },
      // {
      //   path: "typography",
      //   name: "熱門步道",
      //   component: Typography
      // },
      // {
      //   path: "icons",
      //   name: "Icons",
      //   component: Icons
      // },
      // {
      //   path: "maps",
      //   name: "Maps",
      //   meta: {
      //     hideFooter: true
      //   },
      //   component: Maps
      // },
      // {
      //   path: "notifications",
      //   name: "Notifications",
      //   component: Notifications
      // },
      // {
      //   path: "upgrade",
      //   name: "Upgrade to PRO",
      //   component: UpgradeToPRO
      // }
    ]
  }
];

export default routes;
