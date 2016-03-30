function buscarPrimos() {
  var result = document.getElementById("result");
  result.innerHTML = "";
  var worker = new Worker("webworkers.js");
  worker.postMessage(document.getElementById("formulario").input.value);
  worker.onmessage = function(event) {
    result.innerHTML = event.data;
  }
}