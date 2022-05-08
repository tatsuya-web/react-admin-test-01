import * as React from "react";
import { Admin, Resource } from 'react-admin';

// pages
import { PostList, PostEdit, PostCreate } from './pages/posts'
import { UserEdit, UserList } from './pages/users';
import dashboard from './pages/dashboard';
import CustomLoginPage from './pages/auth/CustomLoginPage';

// mui
import PostIcon from '@mui/icons-material/Book';
import UserIcon from '@mui/icons-material/Group';

// firebase provider
import { dataProvider } from "./firebase/provider/dataProvider";
import { authProvider } from "./firebase/provider/authProvider";

import { theme } from "./confing/theme";

const App = () => (
    <Admin dashboard={dashboard} theme={theme} loginPage={CustomLoginPage} authProvider={authProvider} dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
        <Resource name="users" list={UserList} edit={UserEdit} icon={UserIcon} />
    </Admin>
);

export default App;
