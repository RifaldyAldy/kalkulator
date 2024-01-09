const screen = (a) => {
  let value = document.getElementById("screen");
  if (value.innerHTML === "0") {
    value.innerHTML = "";
  }
  const hasil = (value.innerHTML = value.innerHTML + a);
  const current = hasil;
  return current;
};
let current;
let operator = "";

const hapus = () => {
  const nilai = document.getElementById("screen");
  if (nilai.innerHTML === "0") {
    return false;
  }
  nilai.innerHTML = nilai.innerHTML.slice(0, -1);
  if (!nilai.innerHTML) {
    nilai.innerHTML = 0;
  }
};

const tambah = (angka) => {
  current = parseInt(document.getElementById("screen").innerHTML);
  operator = "+";
  document.getElementById("screen").innerHTML = 0;
  console.log(current);
};

const kurang = (nilai) => {
  current = parseInt(document.getElementById("screen").innerHTML);
  operator = "-";
  document.getElementById("screen").innerHTML = 0;
  console.log(current);
};
const bagi = () => {
  current = parseInt(document.getElementById("screen").innerHTML);
  operator = "/";
  document.getElementById("screen").innerHTML = 0;
  console.log(current);
};
const kali = () => {
  current = parseInt(document.getElementById("screen").innerHTML);
  operator = "*";
  document.getElementById("screen").innerHTML = 0;
  console.log(current);
};
let result;
const hitung = () => {
  switch (operator) {
    case "+":
      result = current + parseInt(document.getElementById("screen").innerHTML);
      document.getElementById("screen").innerHTML = result;
      result = 0;
      current = 0;
      return;
    case "-":
      result = current - parseInt(document.getElementById("screen").innerHTML);
      document.getElementById("screen").innerHTML = result;
      result = 0;
      current = 0;
      return;
    case "*":
      result = current * parseInt(document.getElementById("screen").innerHTML);
      document.getElementById("screen").innerHTML = result;
      result = 0;
      current = 0;
      return;
    case "/":
      result = current / parseInt(document.getElementById("screen").innerHTML);
      document.getElementById("screen").innerHTML = result;
      result = 0;
      current = 0;
      return;
  }
};

const hapusAll = () => {
  current = 0;
  result = 0;
  document.getElementById("screen").innerHTML = 0;
};
