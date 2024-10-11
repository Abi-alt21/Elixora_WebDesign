function calculateResult() {
    let scoreDry = 0;
    let scoreOily = 0;
    let scoreNormal = 0;
    let scoreCombination = 0;
  
    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            const value = selectedOption.value;
  
            if (i === 1) {
                if (value === "dry") scoreDry++;
                if (value === "oily") scoreOily++;
                if (value === "normal") scoreNormal++;
                if (value === "combination") scoreCombination++;
            } else if (i === 2) {
                if (value === "hydration") scoreDry++;
                if (value === "acne") scoreOily++;
                if (value === "dark-spots") scoreNormal++;
                if (value === "hydration") scoreCombination++;
            } else if (i === 3) {
                if (value === "Acne and blackheads") scoreDry++;
                if (value === "Skin feels dry and flaky") scoreOily++;
                if (value === "Skin looks oily and shiny") scoreNormal++;
                if (value === "Skin looks dull and lacks radiance") scoreCombination++;
            } else if (i === 4) {
                if (value === "Every day") scoreDry++;
                if (value === "3-4 times") scoreOily++;
                if (value === "1-2 times") scoreNormal++;
                if (value === "Never") scoreCombination++;
            } else if (i === 5) {
                if (value === "Every day") scoreDry++;
                if (value === "3-4 times") scoreOily++;
                if (value === "1-2 times") scoreNormal++;
                if (value === "Never") scoreCombination++;
            }
        }
    }
  
    let result= "";
    let UrlDirect= "";
    if (scoreDry >= scoreOily && scoreDry >= scoreNormal && scoreDry >= scoreCombination) {
        result = "Dry Skin";
        UrlDirect = "dry-skin.html";  // Pastikan url sudah benar
    } else if (scoreOily >= scoreDry && scoreOily >= scoreNormal && scoreOily >= scoreCombination) {
        result = "Oily Skin";
        UrlDirect = "oily-skin.html";  // Pastikan url sudah benar
    } else if (scoreNormal >= scoreDry && scoreNormal >= scoreOily && scoreNormal >= scoreCombination) {
        result = "Normal Skin";
        UrlDirect = "normal-skin.html";  // Pastikan url sudah benar
    } else if (scoreCombination >= scoreDry && scoreCombination >= scoreOily && scoreCombination >= scoreNormal) {
        result = "Combination Skin";
        UrlDirect = "combination-skin.html";  // Pastikan url sudah benar
    } else {
        result = "Unknown Skin Type";
    }
  
    // Menampilkan hasil quiz
    document.getElementById("skinType").textContent = result;
    document.getElementById("result").style.display = "block";
  
    // Menunggu 3 detik, kemudian mengarahkan pengguna ke halaman yang sesuai
    setTimeout(function() {
        window.location.href = UrlDirect;
    }, 3000);  // Tunggu 3 detik sebelum mengarahkan
  }  
