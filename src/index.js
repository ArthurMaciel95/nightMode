const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const horarioElemento = document.querySelector(".horario");
const hidden = document.querySelector(".btn-apagar");

btn.addEventListener("click", () => {
  document.body.classList.toggle("black");
  btn.classList.toggle("white");
  container.classList.toggle("container-color");
});

function horario() {
  const data = new Date();
  const hh = zeroAEsquerda(data.getHours());
  const mm = zeroAEsquerda(data.getMinutes());
  const ss = zeroAEsquerda(data.getSeconds());
  const mostrarHorario = `${hh}:${mm}:${ss}`;

  return mostrarHorario;
}

zeroAEsquerda = (value) => (value >= 10 ? `${value}` : `0${value}`);

setInterval(() => {
  return (horarioElemento.innerHTML = horario());
});

hidden.addEventListener("click", () => {
  container.classList.toggle("hidden");
});
