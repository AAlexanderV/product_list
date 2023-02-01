export default function urlHandler(key:string, value:string | null) : void {
    const searchParams = new URLSearchParams(document.location.search);
    value ? searchParams.set(key, value) : searchParams.delete(key);
    let newUrl = window.location.pathname + "?" + searchParams.toString();

    window.history.pushState(null, "", newUrl);
}