function fibonacciGenerator (n) {
  var seq = [];
  
  if (n === 1) {
    seq.push(0);
    console.log(seq);
  } else if (n === 2) {
    seq.push(0, 1)
    console.log(seq);
  } else {
    seq.push(0, 1)
    
      while (seq.length < n) {
        var newSeq = seq[seq.length - 1] + seq[seq.length - 2];
        seq.push(newSeq);
      }
    console.log(seq);  
  }
  
}

fibonacciGenerator(11);
