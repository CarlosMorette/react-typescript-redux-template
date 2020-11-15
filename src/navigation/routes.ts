import Home from './../pages/home'

interface Routes {
    name: string
    component: any,
    path: string
}

const pages: Routes[] = []

export const home: Routes = {
    name: "Home",
    component: Home,
    path: "/"
    
}

export default pages