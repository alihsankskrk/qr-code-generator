document.getElementById('generate-btn').addEventListener('click', function() {
    var text = document.getElementById('text').value;
    var qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Önceki QR kodu temizle

    if (text.trim() === "") {
        alert("Lütfen bir metin girin.");
        return;
    }

    new QRCode(qrcodeContainer, {
        text: text,
        width: 128,
        height: 128
    });
});
