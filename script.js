document.getElementById("faq-dropdown").addEventListener("change", function () {
    var selectedQuestion = this.value;
    var faqItems = document.querySelectorAll(".faq-item");
    
    faqItems.forEach(function (item) {
        item.style.display = "none";
    });
    
    document.getElementById(selectedQuestion).style.display = "block";
});
