import { Home, AddStory, About, Story, Success } from '../views/export';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/addstory',
    name: 'Add A Story',
    component: AddStory
  },
  {
    path: '/story/:id',
    // No name because it shouldn't show up in the navbar as a route
    name: '',
    component: Story
  },
  {
    path: '/success',
    // No name because it shouldn't show up in the navbar as a route
    name: '',
    component: Success
  }
]

export default routes;