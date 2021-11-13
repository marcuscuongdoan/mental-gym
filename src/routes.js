import Art from "./components/Art";
import Home from "./components/Home";
import Locker from "./components/Locker";
import Lounge from "./components/Lounge";
import Movement from "./components/Movement";
import Spa from "./components/Spa";
import SmoothieBar from "./components/SmoothieBar";
import Write from "./components/Write";
import Yoga from "./components/Yoga";
import Sound from "./components/Sound";
import Theatre from "./components/Theatre";

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
    {
        path: '/locker',
        name: 'Locker',
        component: Locker,
    },
    {
        path: '/lounge',
        name: 'Lounge',
        component: Lounge,
    },
    {
        path: '/movement',
        name: 'Movement',
        component: Movement,
    },
    {
        path: '/sound',
        name: 'Sound',
        component: Sound,
    },
    {
        path: '/spa',
        name: 'Spa',
        component: Spa,
    },
    {
        path: '/smoothie',
        name: 'SmoothieBar',
        component: SmoothieBar,
    },
    {
        path: '/theatre',
        name: 'Theatre',
        component: Theatre,
    },
    {
        path: '/write',
        name: 'Write',
        component: Write,
    },
    {
        path: '/yoga',
        name: 'Yoga',
        component: Yoga,
    },
]

export default routes;