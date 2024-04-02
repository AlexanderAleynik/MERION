const optionMenu = document.querySelector(".select-menu"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    options = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () =>
    optionMenu.classList.toggle("active")
);

options.forEach((option) => {
    option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;

    optionMenu.classList.remove("active");
    });
});

    // Бургер

    document.addEventListener('click', burgerInit)

    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return
        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }

    }
    
    //слайдер

    const swiper = new Swiper('.swiper', {

        spaceBetween: 30,
        slidesPerView: 1,
        loop: true,
        
        effect: 'fade',
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        on: {
            init() {
                this.el.addEventListener('mouseenter', () => {
                this.autoplay.stop();
                });
        
                this.el.addEventListener('mouseleave', () => {
                this.autoplay.start();
                });
            }
        }
    });

    var myswiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,
        breakpoints: {
            346: {
                slidesPerView: 1.2,
            },
            430: {
                slidesPerView: 1.5,
            },
            565: {
                slidesPerView: 2,
            },
            703: {
                slidesPerView: 2.5,
            },
            841: {
                slidesPerView: 3,
            },
            1121: {
                slidesPerView: 4,
            },
            1411: {
                slidesPerView: 5,
            },
            1671: {
                slidesPerView: 6,
            }
        }
    });


    // аккордеон

    document.addEventListener('DOMContentLoaded', function() {
        var accordionGroups = document.querySelectorAll('.accordion__group');
    
        accordionGroups.forEach(function(group) {
        group.addEventListener('click', function() {
            var content = this.nextElementSibling;
    
            content.classList.toggle('collapsed');
            
            this.classList.toggle('active');
    
            if (content.classList.contains('collapsed')) {
                content.style.maxHeight = '0';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
            }
            });
        });
    });

