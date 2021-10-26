import Login from '../pages/Login';
import MyProfile from '../pages/MyProfile';
import NewsFeed from '../pages/NewsFeed';
import ProfileSetting from '../pages/ProfileSetting';
import Register from '../pages/Register';

const route = {
  guest: {
    route: [
      {
        path: '/',
        component: Login,
      },
      {
        path: '/register',
        component: Register,
      },
    ],
    redirect: '/',
  },

  user: {
    route: [
      {
        path: '/profile-setting',
        component: ProfileSetting,
      },
      {
        path: '/myprofile',
        component: MyProfile,
      },
      {
        path: '/myprofile/:userId',
        component: MyProfile,
      },
      {
        path: '/newsfeed',
        component: NewsFeed,
      },
    ],
    redirect: '/newsfeed',
  },
};

export default route;
