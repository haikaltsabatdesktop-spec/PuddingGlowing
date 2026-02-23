<script>
const rasaSelect = document.getElementById("rasa");
const jumlahInput = document.getElementById("jumlah");
const totalSpan = document.getElementById("total");

function updateTotal() {
  let harga = parseInt(rasaSelect.value);
  let jumlah = parseInt(jumlahInput.value);
  let total = harga * jumlah;
  totalSpan.innerText = total.toLocaleString();
}

rasaSelect.addEventListener("change", updateTotal);
jumlahInput.addEventListener("input", updateTotal);
updateTotal();

function pesan() {
  let nama = document.getElementById("nama").value || "Pembeli";
  let rasaText = rasaSelect.options[rasaSelect.selectedIndex].text;
  let jumlah = jumlahInput.value;
  let total = totalSpan.innerText;
  let nomorWA = "6289678342552";

  let pesanWA = Halo, saya ${nama}%0ASaya ingin memesan:%0A${rasaText}%0AJumlah: ${jumlah}%0ATotal: Rp${total};
  window.open(https://wa.me/${nomorWA}?text=${pesanWA}, "_blank");
}
</script>
