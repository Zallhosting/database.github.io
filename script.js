// Fungsi untuk mengambil data yang disimpan di local storage dan menampilkannya
function displayUserInfo() {
    const userName = localStorage.getItem("name");
    const userEmail = localStorage.getItem("email");
    const userMessage = localStorage.getItem("message");

    if (userName && userEmail && userMessage) {
        document.getElementById("userName").innerText = `Nama: ${userName}`;
        document.getElementById("userEmail").innerText = `Email: ${userEmail}`;
        document.getElementById("userMessage").innerText = `Pesan: ${userMessage}`;
    }
}

// Menyimpan data ke local storage ketika form disubmit
document.getElementById("infoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Menyimpan data ke local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("message", message);

    // Menampilkan data yang baru disimpan
    displayUserInfo();
    // Clear form setelah data disubmit
    document.getElementById("infoForm").reset();
});

// Menampilkan data saat halaman pertama kali dimuat
window.onload = displayUserInfo;
