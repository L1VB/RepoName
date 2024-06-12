document.addEventListener("DOMContentLoaded", function() {
    var videos = document.querySelectorAll('.spotify-video');

    videos.forEach(function(video) {
        video.addEventListener('click', function() {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        video.addEventListener('ended', function() {
            // Get the next video index
            var currentIndex = Array.from(videos).indexOf(video);
            var nextIndex = (currentIndex === videos.length - 1) ? 0 : currentIndex + 1;

            // Pause the current video and play the next one
            video.pause();
            videos[nextIndex].play();
        });
    });
});


// image click through 
const images = [
    'Assig2/YourPhotos-MarkPariani.jpeg',
    'Assig2/YourPhotos-DaveWisbon.jpeg',
    'Assig2/YourPhotos-IgnacioNogueira.jpeg',
    'Assig2/YourPhotos-KyleBassett.jpeg',
    'Assig2/MyPhoto-2.jpeg',
    'Assig2/MyPhoto.jpeg',
    'Assig2/MyPhoto-3.jpeg'
];

let currentIndexImage = 0;

const currentImage = document.getElementById('currentImage');
const prevImageButton = document.getElementById('prevImageButton');
const nextImageButton = document.getElementById('nextImageButton');

prevImageButton.addEventListener('click', () => {
    currentIndexImage = (currentIndexImage === 0) ? images.length - 1 : currentIndexImage - 1;
    currentImage.src = images[currentIndexImage];
});

nextImageButton.addEventListener('click', () => {
    currentIndexImage = (currentIndexImage === images.length - 1) ? 0 : currentIndexImage + 1;
    currentImage.src = images[currentIndexImage];
});

// video click through
const videos = [
    'Assig2/Foo Fighters Official.mp4',
    'Assig2/Foo Fighters Official (1).mp4',
    'Assig2/FooFighters TikTok.mp4',
    'Assig2/FooFighters TikTok (1).mp4'
];

let currentIndexVideo = 0;

const currentVideo = document.getElementById('currentVideo');
const prevVideoButton = document.getElementById('prevVideoButton');
const nextVideoButton = document.getElementById('nextVideoButton');

prevVideoButton.addEventListener('click', () => {
    currentIndexVideo = (currentIndexVideo === 0) ? videos.length - 1 : currentIndexVideo - 1;
    currentVideo.src = videos[currentIndexVideo];
    currentVideo.play();
});

nextVideoButton.addEventListener('click', () => {
    currentIndexVideo = (currentIndexVideo === videos.length - 1) ? 0 : currentIndexVideo + 1;
    currentVideo.src = videos[currentIndexVideo];
    currentVideo.play();
});




// random image 
document.getElementById('selectImageBtn').addEventListener('click', function() {
    const images = [
        "Assig2/FF-funny-photo-1.jpeg",
        "Assig2/FF-funny-photo-2.jpeg",
        "Assig2/FF-funny-photos-3.jpeg",
        "Assig2/FF-funny-photo-4.jpeg",
        "Assig2/FF-funny-photos-5.ipeg.webp"
    ];

    // Randomly select an image
    const selectedImage = images[Math.floor(Math.random() * images.length)];

    // Display the selected image
    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = `<img src="${selectedImage}" alt="Random Image">`;
});

// moving images - background
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".Album-1, .Album-2, .Album-3");

    window.addEventListener("scroll", function() {
        sections.forEach(function(section) {
            var scrollPosition = window.scrollY;
            var sectionOffset = section.offsetTop;
            var backgroundPosition = (scrollPosition - sectionOffset) * 0.5; // Adjust the multiplier for desired effect

            section.style.backgroundPosition = "center " + backgroundPosition + "px";
        });
    });
});
