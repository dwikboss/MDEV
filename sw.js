self.addEventListener("install", e => {
    console.log("install");
    e.waitUntil(
        caches.open("shell").then(cache => {
            return cache.addAll([
                "./", 
                "./css/style.css", 
                "./css/fonts/Poppins-Bold.ttf", 
                "./css/fonts/Poppins-ExtraBold.ttf", 
                "./css/fonts/Poppins-Light.ttf", 
                "./css/fonts/Poppins-Regular.ttf", 
                "./css/fonts/Poppins-Medium.ttf", 
                "./css/fonts/Poppins-SemiBold.ttf", 
                "./icon/icon-192.png"
            ]);
        })
    );
});

self.addEventListener('activate', event => {
    console.log('Service worker geactiveerd!');
    return self.clients.claim();
});

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request);
        })
    );
});