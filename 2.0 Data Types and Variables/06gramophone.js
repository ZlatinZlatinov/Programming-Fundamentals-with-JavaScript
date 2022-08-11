function gramophone(band, album, song) {
    let result = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(result / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs'); 
// 100/100