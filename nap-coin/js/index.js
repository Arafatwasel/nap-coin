function updateHeroImage() {
  const heroImg = document.getElementById("hero-img");
    if (window.innerWidth <= 480) {
    heroImg.style.width = "100%";
    heroImg.style.height = "auto"; 
    heroImg.style.objectFit = "contain"; 
    heroImg.style.display = "block";
    heroImg.style.margin = "0 auto";
    } else {
    heroImg.style.width = "100%";
    heroImg.style.height = "auto";
    heroImg.style.objectFit = "contain";
    }
}

// أول تحميل
updateHeroImage();

// عند تغيير حجم الشاشة
window.addEventListener("resize", updateHeroImage);


    const script = document.createElement("script");
    script.src = "./nap-coin/js/main.js?v=" + new Date().getTime();
    document.body.appendChild(script);