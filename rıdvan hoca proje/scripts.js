// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("show-more-btn").addEventListener("click", function() {
    var summary = document.querySelector(".full-summary");
    var showMoreBtn = document.getElementById("show-more-btn");

    // Eğer metin gizli ise göster
    if (summary.style.display === "none" || summary.style.display === "") {
        summary.style.display = "block";
        summary.classList.add("show"); // Animasyon ekle
        showMoreBtn.textContent = "Show Less";
    } else {
        // Eğer metin zaten görünüyorsa gizle
        summary.style.display = "none";
        summary.classList.remove("show"); // Animasyonu kaldır
        showMoreBtn.textContent = "Show More";
    }
});

