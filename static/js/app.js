(() => {
    const images = document.querySelectorAll(".slider__li");
    const buttons = document.querySelectorAll(".slider__button");
    const pages = document.querySelectorAll(".slider__pages-li");
    const sliderBlock = document.querySelector(".slider");

    const slider = new Slider(
        images,
        buttons,
        pages
    );
    slider.startSlideShow();

    sliderBlock.addEventListener("click", slider.controllerClick.bind(slider));
    sliderBlock.addEventListener("mouseenter", slider.controllerHover.bind(slider));
    sliderBlock.addEventListener("mouseleave", slider.controllerHover.bind(slider));
})();