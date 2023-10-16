var count = 99;

function beerSong() {
  while (count > 0) {
    if (count === 1) {
      console.log(count + " bottle of beer on the wall, " + count-- + " bottle of beer. Take one down and pass it around, " + count + " bottles of beer on the wall.");
    } else {
      console.log(count + " bottles of beer on the wall, " + count-- + " bottles of beer. Take one down and pass it around, " + count + " bottles of beer on the wall.");
    }
  }
  count = 99;
  console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + count + " bottles of beer on the wall.");
}

beerSong();
