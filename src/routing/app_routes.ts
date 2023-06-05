export const routesNames = {
    insertion: 'insertion-sort',
    bubble: 'bubble-sort',
    merge: 'merge-sort',
    home: '',
    login: '/login',
    register: '/register',
};

export class AppRoute {
    readonly routeName: string;
    readonly name: string;

    constructor(routeName: string, name: string) {
        this.routeName = routeName;
        this.name = name;
    }

    static homeRoute = new AppRoute(
        routesNames.home,
        'Home',
    );

    static insertionSortRoute = new AppRoute(
        routesNames.insertion,
        'Insertion sort',
    );

    static bubbleSortRoute = new AppRoute(
        routesNames.bubble,
        'Bubble sort',
    );

    static mergeSortRoute = new AppRoute(
        routesNames.merge,
        'Merge sort',
    );

    static sidebarRoutes = new Map<String, AppRoute>([
        [routesNames.insertion, AppRoute.insertionSortRoute],
        [routesNames.bubble, AppRoute.bubbleSortRoute],
        [routesNames.merge, AppRoute.mergeSortRoute],
    ]);

    static loginRoute = new AppRoute(
        routesNames.login,
        'login',
    );

    static registerRoute = new AppRoute(
        routesNames.register,
        'register',
    );

    static defaultAuthRoute = AppRoute.homeRoute;
}
