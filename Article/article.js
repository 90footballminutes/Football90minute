const artiId = window.location.hash.substring(1) == '' ? "20250929" : window.location.hash.substring(1)
 
console.log(artiId)
document.addEventListener('DOMContentLoaded',()=>{
    const article = document.getElementById(artiId);
    if(article) {
        const articles = document.querySelectorAll('.article')
        articles.forEach((article) => article.computedStyleMap.display = "none")

        article.style.display = "block";
    }
})