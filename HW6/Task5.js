
function throttle(func, interval) {
    let last = 0;

    return function() {
        const context = this;
        const args = arguments;
        const currentTime = Date.now();

        if (currentTime - last > interval) {
            func.apply(context, args);
            last = currentTime;
        }
    };
}




function onScroll(event) {
	// Handle scroll event
	console.log("Scroll event:", event);
}

const throttledScrollHandler = throttle(onScroll, 1000);

window.addEventListener("scroll", throttledScrollHandler);