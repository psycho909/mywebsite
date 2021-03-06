define(["jquery","particlesJS"],function($,particlesJS){
    function particleJS(){
        particlesJS('particles-js',{
            "particles": {
                "number": {
                    "value": 8,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#f00"
                },
                "shape": {
                    "type": "image",//[image,circle,star...]如果是image以下不管用
                    "stroke": {
                        "width": 1,//筆畫
                        "color": "#f0f"//筆畫顏色
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": 'images/fire.png',
                        "width": 20,
                        "height": 20
                    }
                },
                "opacity": {
                    "value": 1,
                    "random": true,
                    "anim": {
                        "enable": true,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 20,//產生大小
                    "random": true,//隨機
                    "anim": {
                        "enable": true,//產生閃爍
                        "speed": 6,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": false,//是否產生連線
                    "distance": 300,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 2
                },
                "move": {
                    "enable": true,//true
                    "speed": 5,//移動速度
                    "direction": "top-right",//移動方向
                    "random": true,
                    "straight": false,//是否隨著方向固定移動
                    "out_mode": "out",//移動出視窗
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 100,
                        "rotateY": 100
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": false,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": false,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                          "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 800,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0.8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        })
    };
    return{
    	particleJS:particleJS
    }
})