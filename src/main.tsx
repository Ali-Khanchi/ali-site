const path = window.location.pathname;
if (path.endsWith("/") || path.endsWith("/index.html")) {
    const basePath = path.substring(0, path.lastIndexOf("/"));
    window.location.replace(`${basePath}/about`);
}
git