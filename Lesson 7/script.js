let imagesToLoad = document.querySelector("img[data-src]");
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("data-src"));
    image.onLoad = () => {
        image.removeAttribute("data-src");
    };
};

imagesToLoad.array.forEach((img) => {
    loadImages(img);
    
})

if ("InsersectionObserver" in window) {
    const observer = new IntersectionObserver ((items,observer) => {
        items.forEach((item) => {
        if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);    
        };
    });
});

imagesToLoad.forEach((img) => {
    observer.observe(img);
});

} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}