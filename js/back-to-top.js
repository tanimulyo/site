function goToTop() {
    // get the current scroll position
    const scrollY = window.scrollY;
    
    // define the duration of the animation in milliseconds
    const duration = 1000;
    
    // calculate the position to scroll to
    const scrollTarget = 0;
    
    // calculate the distance to scroll
    const distance = scrollTarget - scrollY;
    
    // calculate the start time of the animation
    const startTime = performance.now();
    
    // define the animation function
    function animation(currentTime) {
    // calculate the elapsed time
    const elapsedTime = currentTime - startTime;
    
    // calculate the progress of the animation (0 to 1)
    const progress = Math.min(elapsedTime / duration, 1);
    
    // calculate the next position to scroll to
    const nextScrollY = scrollY + distance * ease(progress);
    
    // scroll to the next position
    window.scrollTo(0, nextScrollY);
    
    // continue the animation until the duration is reached
    if (elapsedTime < duration) {
        requestAnimationFrame(animation);
    }
    }
    
    // define the easing function
    function ease(t) {
    return t * t * t;
    }
    
    // start the animation
    requestAnimationFrame(animation);
}