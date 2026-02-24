// Ambil element
const rasaSelect = document.getElementById("rasa");
const jumlahInput = document.getElementById("jumlah");
const totalSpan = document.getElementById("total");

// Update total otomatis
function updateTotal() {
  const harga = parseInt(rasaSelect.value);
  const jumlah = parseInt(jumlahInput.value);
  totalSpan.innerText = (harga * jumlah).toLocaleString();
}

rasaSelect.addEventListener("change", updateTotal);
jumlahInput.addEventListener("input", updateTotal);
updateTotal();

// Fungsi tombol WA
function pesan() {
  const nama = document.getElementById("nama").value || "Pembeli";
  const rasaText = rasaSelect.options[rasaSelect.selectedIndex].text;
  const jumlah = jumlahInput.value;
  const total = totalSpan.innerText;

  const nomorWA = "6289678342552"; // ganti sesuai nomormu

  const pesanWA = Halo, saya ${nama}%0ASaya ingin memesan:%0A${rasaText}%0AJumlah: ${jumlah}%0ATotal: Rp${total};

  window.open('https://wa.me/${nomorWA}?text=${pesanWA}, "_blank");

}

