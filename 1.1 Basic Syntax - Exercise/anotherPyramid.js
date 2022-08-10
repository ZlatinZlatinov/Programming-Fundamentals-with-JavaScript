function materials(size, increment) {
  let stone = 0;
  let marble = 0;
  let lapisLazuli = 0;
  let gold = 0;
  let steps = 1;
  while (size >= 1) {
    if (size > 2) {
      if (steps % 5 == 0) {
        lapisLazuli += size * 4 - 4; //* increment;
      } else {
        marble += size * 4  - 4; //* increment;
      } 
      //marble += size * 4 - 4 * increment;
      steps++;
      stone += Math.pow(size - 2, 2) * increment;
    } else {
      gold += Math.pow(size, 2) * increment;
    }
    size -= 2;
  }
  console.log(`Stone required: ${Math.ceil(stone)}`);
  console.log(`Marble required: ${Math.ceil(marble*increment)}`);
  console.log(`Lapis Lazuli required: ${Math.floor(lapisLazuli * increment)}`);
  console.log(`Gold required: ${Math.ceil(gold)}`);
  console.log(`Final pyramid height: ${Math.floor(steps * increment)}`);
}
materials(23, 0.5); 
// 80/100 lapis i marble ne ba4kat :( ... голем напредък хдд 
// видеото е от януари месец тази година
