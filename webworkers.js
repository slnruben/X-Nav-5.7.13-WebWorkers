self.onmessage = function(event) {
  var n = 1;
  primelist = "";
  search: while (n<parseInt(event.data)) {
    n += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0)
        continue search;
    primelist += " " + n;
    
  }
  self.postMessage(primelist);
}