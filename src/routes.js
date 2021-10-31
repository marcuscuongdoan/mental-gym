import Art from "./components/Art";
import Home from "./components/Home";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/art',
        name: 'Art',
        component: Art,
    },
]

export default routes;