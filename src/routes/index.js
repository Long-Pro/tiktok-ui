// pages
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
// layout
import { HeaderOnly } from '../components/Layouts';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/profile', component: Profile },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: HeaderOnly },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
