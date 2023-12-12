const nyala = `background: linear-gradient(135deg, transparent 10px, yellow 10px),linear-gradient(-135deg, transparent 10px, yellow 10px),linear-gradient(45deg, transparent 10px, yellow 10px),linear-gradient(-45deg, transparent 10px, yellow 10px);background-size: 50% 50%;background-position: top left, top right, bottom left, bottom right;background-repeat: no-repeat;`;
const mati = `background: linear-gradient(135deg, transparent 10px, #000 10px),linear-gradient(-135deg, transparent 10px, #000 10px),linear-gradient(45deg, transparent 10px, #000 10px),linear-gradient(-45deg, transparent 10px, #000 10px);background-size: 50% 50%;background-position: top left, top right, bottom left, bottom right;background-repeat: no-repeat;`;
const Output = document.querySelector('.output');
const Tabel = document.querySelector('.table-container');
const btnReset = document.querySelector('.btn-reset');
const BC = document.querySelectorAll('.table-container tbody tr td:nth-child(-n + 4)');
const SSC = document.querySelectorAll('.table-container tbody tr td:nth-child(n+5):nth-child(-n+11)');
const OP = document.querySelectorAll('.container .col span');
const BTN = document.querySelectorAll('.btn');
const nick = document.querySelectorAll('.table-container h2');
const input = document.querySelectorAll('.input');
const DC = document.querySelector('.table-container tbody tr td:last-child');

function output(btn) {
    const SSD = [[0, 1, 2, 4, 5, 6], [2, 5], [0, 2, 3, 4, 6],[0, 2, 3, 5, 6], [1, 2, 3, 5], [0, 1, 3, 5, 6], [0, 1, 3, 4, 5, 6], [0, 2, 5], [0, 1, 2, 3, 4, 5, 6], [0, 1, 2, 3, 5, 6]];
    const BCC = [[], [3], [2], [2, 3], [1], [1, 3], [1,2], [1,2,3], [0], [0, 3]];
    const DCC = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < SSC.length; i++) {
        SSC[i].textContent = SSD[btn].includes(i) ? '1' : '0';
        SSC[i].classList.add('animate__animated', 'animate__fadeIn');
    }
    for (let i = 0; i < BC.length; i++) {
        BC[i].textContent = BCC[btn].includes(i) ? '1' : '0';
        BC[i].classList.add('animate__animated', 'animate__fadeIn');
    }
    for (let i = 0; i < OP.length; i++) {
        SSD[btn].includes(i) ? OP[i].setAttribute('style', nyala) : OP[i].setAttribute('style', mati);
        OP[i].classList.add('animate__animated', 'animate__fadeIn');
    }
    DC.textContent = DCC[btn];
    Output.style.display = 'flex'; Tabel.style.display = 'flex'; btnReset.style.display = 'flex';
}

function reset() {
    // Menambahkan kelas animasi untuk menghilangkan elemen
    Output.classList.add('animate__animated', 'animate__fadeOut');
    Tabel.classList.add('animate__animated', 'animate__fadeOut');
    btnReset.classList.add('animate__animated', 'animate__fadeOut');

    // Menghapus elemen setelah selesai animasi
    setTimeout(() => {
        Output.style.display = 'none';
        Tabel.style.display = 'none';
        btnReset.style.display = 'none';

        // Menghapus kelas animasi setelah elemen dihapus
        Output.classList.remove('animate__animated', 'animate__fadeOut');
        Tabel.classList.remove('animate__animated', 'animate__fadeOut');
        btnReset.classList.remove('animate__animated', 'animate__fadeOut');

    }, 500); // Sesuaikan dengan durasi animasi (dalam milidetik)
}