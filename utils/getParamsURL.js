export function getPageNumberURL() {
    const pathURL = new URL(window.location.href).pathname.split('/');
    return (typeof Number(pathURL) === 'number' ? Number(pathURL[3]) : -1);
}