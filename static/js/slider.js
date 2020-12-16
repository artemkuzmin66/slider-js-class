class Slider {
    constructor(images, buttons, pages, duration = 5000) {
        this.images = images;
        this.buttons = buttons;
        this.pages = pages;
        this.index = 0;
        this.duration = duration;
        this.animate = true;
    }
    __addActiveClass(index) {
        this.images[index].classList.add("slider__li_active");
        this.pages[index].classList.add("slider__pages-li_active");
    }
    __removeActiveClass(index) {
        this.images[index].classList.remove("slider__li_active");
        this.pages[index].classList.remove("slider__pages-li_active");
    }
    __setIndex(number) {
        if(number >= this.images.length)
            this.index = 0;
        else if(number < 0)
            this.index = this.images.length - 1;
        else
            this.index = number;
    }
    changePage(number) {
        this.__removeActiveClass(this.index);
        if(number >= 0 && number < this.images.length)
            this.__setIndex(number);
        this.__addActiveClass(this.index);
    }
    startSlideShow() {
        this.interval = setInterval(this.nextSlide.bind(this), this.duration);
    }
    stopSlideShow() {
        clearInterval(this.interval);
    }
    nextSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index + 1);
        this.__addActiveClass(this.index);
    }
    prevSlide() {
        this.__removeActiveClass(this.index);
        this.__setIndex(this.index - 1);
        this.__addActiveClass(this.index);
    }
    controllerClick(event) {
        let target = event.target.dataset.target;
        if(target){
            event.preventDefault();
            if(target.toLowerCase() === "next") {
                this.nextSlide();
            } else if(target.toLowerCase() === "prev") {
                this.prevSlide();
            } else if(target >= "0" && target <= "9") {
                this.changePage(Number.parseInt(target));
            }
        }
    }
    controllerHover() {
        this.animate = !this.animate;
        if(this.animate) {
            this.startSlideShow();
        } else {
            this.stopSlideShow();
        }
    }
    
}