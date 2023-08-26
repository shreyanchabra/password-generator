const generate = document.getElementById("generate");
const password = document.getElementById("password");
const length = document.getElementById("length");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const copy = document.getElementById('copy');
const copied = document.getElementById('copied');
const toggle = document.getElementById('toggle');

let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789"
let symbol = `~\`\\|!@#$%^&*()-=_+{}[]:";',.<>/?`;

function generatePassword() {
    let string = "";
    let allChar = "";
    if (length.value < 4) {
        length.value = 4;
    }
    else if (length.value > 20) {
        length.value = 20;
    }
    
    let size = length.value;
    allChar += uppercase.checked ? upper : "";
    allChar += lowercase.checked ? lower : "";
    allChar += numbers.checked ? number : "";
    allChar += symbols.checked ? symbol : "";

    if (uppercase.checked || lowercase.checked || numbers.checked || symbols.checked) {
        for (let i = 0; i < size; i++) {
            string += allChar[Math.floor(Math.random() * allChar.length)];
        }
    }
    else {
        string = "Select at least one box";
    }
    return string;
}
generate.addEventListener('click', () => {
    password.value = generatePassword();
});

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(password.value);
    copy.style.display = "none";
    copied.style.display = "block";

    setTimeout(() => {
        copy.style.display = "block";
        copied.style.display = "none";
    }, 5000);
})
toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('fa-moon');
    toggle.classList.toggle('fa-sun');
});
