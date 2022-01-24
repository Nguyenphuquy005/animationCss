// -------gsap---------------
gsap.registerPlugin("ScrollTrigger");

function a(obj, num = 0) {

    let rect = document.querySelector(obj).getBoundingClientRect();
    let a = rect.top + window.pageYOffset;
    return a + num;
}

function b(obj, Tstart, Tend, Tmarkers = false, Tscrub = 0.5) {
    let _obj = {
        start: () => {
            return a(obj, Tstart);
        },
        end: () => {
            return a(obj, Tend);
        },
        scrub: Tscrub,
        markers: Tmarkers,
    };
    return _obj;
}


// ------------menu------------------

// deskTop
$(".deskTopBtn .navBarBlock__btn").click(function () {
    var index = $(this).index()
    $(this).addClass("navBarBlock__btn--active").siblings().removeClass("navBarBlock__btn--active");
});

// mobile
$(".hamburgerBar__box").click(function () {
    $(this).toggleClass('hamburgerBar__box--active');
    $(".menu").toggleClass('menu--active');
});

// ------chairGif------
const t1 = gsap.timeline();
t1.repeat(-1);
t1
    .set(".chairGif__figure-absolute", {
        autoAlpha: 0,
    })
    .to(".chairGif__figure-absolute", {
        keyframes: [{
            duration: 2,
            autoAlpha: 1,
            stagger: 1.5,
        }, {
            duration: 2,
            autoAlpha: 0,
            stagger: 1.5,
        }]
    });


// ----------gasp-scroll--------------

let intro_t1 = gsap.timeline();

ScrollTrigger.create({
    trigger: "#videoBoxContainer",
    pin: true,
    // markers: true,
    start: () => {
        return a(".videoPoint", 0);
    },
    end: "+=2000"
});

const c = document.getElementById("hero-lightpass");
const d = c.getContext("2d");

c.width = 1600;
c.height = 900;

const e = 59;

const aegisCurrentFrame = (index) => `../images/rotate/${(index + 1).toString().padStart(4, "0")}.webp`;

const aegisImages = [];



const chair = {
    frame: 0
};

for (let i = 0; i < e; i++) {
    const aegisImg = new Image();
    aegisImg.src = aegisCurrentFrame(i);
    aegisImages.push(aegisImg);
}


intro_t1
    .to(chair, {
        frame: 58,
        snap: "frame",
        scrollTrigger: b("#videoBoxContainer", 0, 1500),
        onUpdate: aegisRender // use animation onUpdate instead of scrollTrigger's onUpdate,
    })

.set(
    ".animateVideoNew", {
        autoAlpha: 0,
        y: 100,
        immediateRender: true,
        ease: "none",
    }
)

.to(
    ".animateVideoNew", {
        scrollTrigger: b("#videoBoxContainer", 200, 1200),
        autoAlpha: 1,
        y: 0,
        immediateRender: false,
        ease: "none",
    }
)

// .to(
//     ".animateVideoNew__position", {
//         scrollTrigger: b("#videoBoxContainer", 700, 1200),
//         autoAlpha: 1,
//         y: -100,
//         immediateRender: false,
//         ease: "none",
//     }
// )

// .to(
//     ".animateVideoNew", {
//         scrollTrigger: b("#videoBoxContainer", 1300, 1900),
//         autoAlpha: 0,
//         y: -400,
//         immediateRender: false,
//         ease: "none",
//     }
// )

.to(
    ".aegisCanvas", {
        scrollTrigger: b("#videoBoxContainer", 3200, 3500),
        autoAlpha: 0.2,
        immediateRender: false,
        ease: "none",
    }
)

aegisImages[0].onload = aegisRender;

function aegisRender() {
    d.clearRect(0, 0, c.width, c.height);
    d.drawImage(aegisImages[chair.frame], 0, 0, 1600, 900);
}


// ----------gasp-scroll2--------------

let intro_t2 = gsap.timeline();

ScrollTrigger.create({
    trigger: "#videoBoxContainer2",
    pin: true,
    // markers: true,
    start: () => {
        return a(".videoPoint2", 0);
    },
    end: "+=2000"
});

const f = document.getElementById("hero-lightpass2");
const g = f.getContext("2d");

f.width = 1600;
f.height = 900;

const e2 = 23;

const aegisCurrentFrame2 = (index) => `../images/lap/lap${(index + 1).toString().padStart(4, "0")}.webp`;

const aegisImages2 = [];



const aegis = {
    frame2: 0
};

for (let i = 0; i < e2; i++) {
    const aegisImg2 = new Image();
    aegisImg2.src = aegisCurrentFrame2(i);
    aegisImages2.push(aegisImg2);
}


intro_t2
    .to(aegis, {
        frame2: 22,
        snap: "frame2",
        scrollTrigger: b("#videoBoxContainer2", 0, 1500),
        onUpdate: aegisRender2 // use animation onUpdate instead of scrollTrigger's onUpdate,
    })

.set(
    ".animateVideoNew2", {
        autoAlpha: 0,
        immediateRender: true,
        ease: "none",
    }
)

.to(
    ".animateVideoNew2", {
        scrollTrigger: b("#videoBoxContainer2", 200, 1200),
        autoAlpha: 1,
        immediateRender: false,
        ease: "none",
    }
)

// .to(
//     ".animateVideoNew2__position", {
//         scrollTrigger: b("#videoBoxContainer2", 700, 1200),
//         autoAlpha: 1,
//         y: -100,
//         immediateRender: false,
//         ease: "none",
//     }
// )

// .to(
//     ".animateVideoNew2", {
//         scrollTrigger: b("#videoBoxContainer2", 1300, 1900),
//         autoAlpha: 0,
//         y: -400,
//         immediateRender: false,
//         ease: "none",
//     }
// )

.to(
    ".animateVideoNew2", {
        scrollTrigger: b("#videoBoxContainer2", 2100, 2500),
        autoAlpha: 0.2,
        immediateRender: false,
        ease: "none",
    }
)

.to(
    ".aegisCanvas2", {
        scrollTrigger: b("#videoBoxContainer2", 2100, 2500),
        autoAlpha: 0.2,
        immediateRender: false,
        ease: "none",
    }
)

aegisImages2[0].onload = aegisRender2;

function aegisRender2() {
    g.clearRect(0, 0, f.width, f.height);
    g.drawImage(aegisImages2[aegis.frame2], 0, 0, 1600, 900);
}

// ------------slider------------------
$(function () {

    // var itemBox = $('.PreOrderBox__flex').height();
    // // console.log(itemBox)
    // $('.PreOrderIconBox').css("height", itemBox);

    // -------lightBox--------
    $('a[data-rel^=lightcase] ').lightcase({
        // shrinkFactor: 0.9,
        forceHeight: true,
        forceWidth: true,
        // inline: {
        //     height: '100% ',
        //     width: '100% '
        // },
        maxWidth: '800',
        maxHeight: '800',
        liveResize: true,

        width: '100%',
        height: '100%',
        showTitle: false,
        showCaption: false,
        showSequenceInfo: false,
        transition: 'scrollVertical ',
        transitionOpen: 'elastic ',
        transitionClose: 'elastic ',
        liveResize: true,
        fixedRatio: true,
        closeOnOverlayClick: false

    });


    // --------twentytwenty---------
    $("#container1").twentytwenty({

        // orientation: 'vertical'
    });

});



// --------swiper js---------

// Swiper img & text change
var swiperTextImg = new Swiper(".swiperText", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});
swiperTextImg.on('slideChange', function () {
    var index = swiperTextImg.realIndex
    if(index === 0){
        $('.swiperTextImgBox__changeText').text('Each game or movie is individually encoded with our proprietary Motion Code and Systems.')
    }else if(index === 1){
        $('.swiperTextImgBox__changeText').text('At D-BOX, Engineers carefully match Motion to Sound output and ensure that each encoded game or movie features a unique experience.')
    }else if(index === 2){
        $('.swiperTextImgBox__changeText').text('This provides a proven immersive experience that delivers great gameplay and enjoyable interaction without sensory overload.')
    }
    });

// lightBox
var swiperLightBox = new Swiper(".swiperLight", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    }, breakpoints: {
        // when window width is >= 320px
        300: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        500: {
            slidesPerView: 1,
        },
        // when window width is >= 640px
        961: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop: true,
        }
    }
});

swiperLightBox.on('slideChange', function () {
    var indexReal = swiperLightBox.realIndex
    // console.log('in',swiperLightBox.activeIndex)
    
    });

console.log(swiperLightBox.realIndex)


// Swiper video
var swiperVideo = new Swiper(".swipervideo", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        961: {
            spaceBetween: 10,
            loop: true,
        }
    }
});

// Swiper Social Media
var swiper = new Swiper(".mySwiperSlider", {
    slidesPerView: 4,
    spaceBetween: 10,
    slidesPerGroup: 2,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    }, breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        400: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        961: {
            slidesPerView: 4,
            spaceBetween: 10,
            slidesPerGroup: 2,
            loop: true,
        }
    }
});

// ------------youtube api------------------
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player("vd1", {
        height: "100%",
        width: "100%",
        playerVars: {
            autoplay: 1,
            playsinline: 1,
            playlist: 'a6TX33dr3Sc',
            // listType: 'playlist',
            // list: 'PLTPGJNsY3U4yka1RCpQ4nscBOJ072Bc0R',
            vq: "1080P",
            loop: 1,
            rel: 0
        },
        videoId: 'a6TX33dr3Sc',
        events: {
            onReady: onPlayerReady,
        },
    });
}
function onPlayerReady(event) {
    event.target.playVideo().mute();
}




