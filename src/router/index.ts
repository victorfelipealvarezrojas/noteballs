import {
  createRouter,
  createWebHistory,
} from 'vue-router'
import ViewNotes from '@/views/ViewNotes.vue'
import ViewStats from '@/views/ViewStats.vue'
import ViewEditNote from '@/views/ViewEditNote.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL,
  ),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes,
    },
    {
      path: '/editeNotes/:id',
      name: 'edite-notes',
      component: ViewEditNote,
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () =>
        import('@/views/ViewNotFound.vue'),
    },
  ],
})

export default router
