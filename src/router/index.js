import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    component: () => import('@/layouts/Login.vue')
  },
  {
    path: '/',
    component: () => import('@/layouts/Dashboard.vue'),
    children: [
      {
        path:'/section',
        component: () => import('@/pages/Section.vue')
      },
      {
        path:'/home',
        component: () => import('@/pages/Home.vue')
      },
      {
        path: '/students',
        component: () => import('@/pages/students/Students.vue')
      },
      {
        path: "/teachers",
        component: () => import('@/pages/teachers/Teachers.vue')
      },
      {
        path: "/student-events",
        component: () => import('@/pages/student-events/StudentEvents.vue')
      },
      {
        path: '/create-student',
        component: () => import('@/pages/students/CreateStudent.vue')
      },
      {
        path: "/classes",
        component: () => import('@/pages/Classes.vue')
      },
      {
        path: "/control-access",
        component: () => import('@/pages/ControlAccess.vue')
      },
      {
        path: '/evaluations',
        component: () => import('@/pages/Evaluations.vue')
      },
      {
        path: '/events',
        component: () => import('@/pages/Events.vue')
      },
      {
        path: '/equipments',
        component: () => import('@/pages/Equipments.vue')
      },
      {
        path: '/groups',
        component: () => import('@/pages/Groups.vue')
      },
      {
        path: "/logistic",
        component: () => import('@/pages/Logistic.vue')
      },
      {
        path: "/marks",
        component: () => import('@/pages/Marks.vue')
      },
      {
        path: "/payments-fees",
        component: () => import('@/pages/PaymentFees.vue')
      },
      {
        path: "/payments",
        component: () => import('@/pages/Payments.vue')
      },
      {
        path: "/personnels",
        component: () => import('@/pages/Personnels.vue')
      },
      {
        path: "/registrations",
        component: () => import('@/pages/Registrations.vue')
      },
      {
        path: "/reports",
        component: () => import('@/pages/Reports.vue')
      },
      {
        path: "/rooms",
        component: () => import('@/pages/Rooms.vue')
      },
      {
        path: "/routines",
        component: () => import('@/pages/Routines.vue')
      },
      {
        path: "subjects",
        component: () => import('@/pages/Subjects.vue')
      },
      {
        path: "/statistics",
        component: () => import('@/pages/Statistics.vue')
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
