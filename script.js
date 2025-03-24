let balance = 1000; // Başlangıç bakiyesi
let symbols = ['🍒', '🍊', '🍋', '🍉', '🍇']; // Kullanılacak semboller

// Bahis miktarını ve slotları çevirmeyi kontrol et
function spin() {
    let bet = parseInt(document.getElementById('bet').value);

    // Bahis miktarının geçerli olup olmadığını kontrol et
    if (isNaN(bet) || bet <= 0) {
        document.getElementById('message').innerText = "Geçerli bir bahis miktarı girin.";
        return;
    }
    if (bet > balance) {
        document.getElementById('message').innerText = "Bakiyeniz yetersiz.";
        return;
    }

    // Bakiyeyi güncelle
    balance -= bet;
    document.getElementById('balance').innerText = `Bakiye: ${balance} TL`;

    // Slotları rastgele döndür
    let symbol1 = symbols[Math.floor(Math.random() * symbols.length)];
    let symbol2 = symbols[Math.floor(Math.random() * symbols.length)];
    let symbol3 = symbols[Math.floor(Math.random() * symbols.length)];

    // Slotları güncelle
    document.getElementById('symbol1').innerText = symbol1;
    document.getElementById('symbol2').innerText = symbol2;
    document.getElementById('symbol3').innerText = symbol3;

    // Kazanma durumunu kontrol et
    checkWin(symbol1, symbol2, symbol3, bet);
}

// Kazanma durumunu kontrol et
function checkWin(symbol1, symbol2, symbol3, bet) {
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        // 3 sembol aynıysa, bahis 5 ile çarpılır
        if (symbol1 === '🍒') {
            balance += bet * 5;
            document.getElementById('balance').innerText = `Bakiye: ${balance} TL`;
            document.getElementById('message').innerText = "Tebrikler! 3 aynı sembol, 5x kazanç!";
        } else {
            balance += bet * 3;
            document.getElementById('balance').innerText = `Bakiye: ${balance} TL`;
            document.getElementById('message').innerText = "Tebrikler! 3 sembol aynı, 3x kazanç!";
        }
    } else if (symbol1 === symbol2 || symbol2 === symbol3 || symbol1 === symbol3) {
        // 2 sembol aynıysa, bahis 3 ile çarpılır
        balance += bet * 3;
        document.getElementById('balance').innerText = `Bakiye: ${balance} TL`;
        document.getElementById('message').innerText = "2 aynı sembol, 3x kazanç!";
    } else {
        // Kazanılmazsa
        document.getElementById('message').innerText = "Maalesef kaybettiniz. Tekrar deneyin!";
    }
}
