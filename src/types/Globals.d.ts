declare function useLocation(): Location;

interface Location extends Path {
    state: unknown;
    key: Key;
}
declare global {
    interface Window {
        Modernizr:any
    }
}