//inisialisasi variabel untuk mengambil artikel dan mengatur halaman
var currentArticle = 1;
var totalArticles = 2; //jumlah artikel yang akan ditampilkan
var articleTitle = document.getElementById("article-title");
var articleContent = document.getElementById("article-content");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");

// list artikel yang akan ditampilkan
var articles = ["artikel1.html", "artikel2.html"];

//menambahkan event listener pada tombol "Next" dan "Previous"
prevButton.addEventListener("click", showPrevArticle);
nextButton.addEventListener("click", showNextArticle);

//fungsi untuk menampilkan artikel sebelumnya
function showPrevArticle() {
  if (currentArticle === 2) {
    nextButton.disabled = false;
    articleTitle.innerHTML = "";
    articleContent.innerHTML = "";
    loadArticle(articles[currentArticle - 2]);
    currentArticle--;
    prevButton.disabled = currentArticle === 1;
  }
}

//fungsi untuk menampilkan artikel selanjutnya
function showNextArticle() {
  if (currentArticle === 1) {
    prevButton.disabled = false;
    articleTitle.innerHTML = "";
    articleContent.innerHTML = "";
    loadArticle(articles[currentArticle]);
    currentArticle++;
    nextButton.disabled = currentArticle === totalArticles;
  }
}

//fungsi untuk mengambil konten artikel dari file html
function loadArticle(url) {
  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      articleContent.innerHTML = data;
    });
}

//menampilkan artikel pertama pada halaman
loadArticle(articles[0]);
