// Initialize fullPage.js
new fullpage('#fullpage', {
    autoScrolling: true,
    scrollingSpeed: 1000,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Home', 'Education', 'Experience', 'Projects', 'Skills'],
    showActiveTooltip: true,
    onLeave: function(origin, destination, direction) {
        // Add animations when leaving/entering sections
        const content = destination.item.querySelector('.content');
        content.style.opacity = '1';
        content.style.transform = 'translateY(0)';
    }
});

// Initialize particles.js
particlesJS('particles', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#C5A572'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#C5A572',
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            resize: true
        }
    },
    retina_detect: true
});

// Scroll down button functionality
document.querySelector('.scroll-down').addEventListener('click', function() {
    fullpage_api.moveSectionDown();
});

// particlesJS('particles', {
//     particles: {
//         number: {
//             value: 80,
//             density: {
//                 enable: true,
//                 value_area: 800
//             }
//         },
//         color: {
//             value: '#C5A572'
//         },
//         shape: {
//             type: 'circle'
//         },
//         opacity: {
//             value: 0.5,
//             random: false
//         },
//         size: {
//             value: 3,
//             random: true
//         },
//         line_linked: {
//             enable: true,
//             distance: 150,
//             color: '#C5A572',
//             opacity: 0.4,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 2,
//             direction: 'none',
//             random: false,
//             straight: false,
//             out_mode: 'out',
//             bounce: false
//         }
//     },
//     interactivity: {
//         detect_on: 'canvas',
//         events: {
//             onhover: {
//                 enable: true,
//                 mode: 'grab'
//             },
//             resize: true
//         }
//     },
//     retina_detect: true
// });
