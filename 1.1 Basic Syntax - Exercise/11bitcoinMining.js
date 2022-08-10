function mining(data) {
  let goldValue = 67.51;
  let bitcoinValue = 11949.16;
  let bitcoinCount = 0;
  let firstDay;
  let totalMoney = 0;
  for (let i = 1; i <= data.length; i++) {
    let goldMined = data[i - 1];
    if (i % 3 == 0) {
      goldMined *= 0.7;
      totalMoney += goldMined * goldValue;
    } else {
      totalMoney += goldMined * goldValue;
    }
    if (totalMoney >= bitcoinValue) {
      if (firstDay === undefined) {
        firstDay = i;
      }
      bitcoinCount += parseInt(totalMoney / bitcoinValue);
      totalMoney -= parseInt(totalMoney / bitcoinValue) * bitcoinValue;
    }
  }
  console.log(`Bought bitcoins: ${bitcoinCount}`);
  if (firstDay !== undefined) {
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
mining([100, 200, 300]);
// 100/ 100 линк към видеото: https://softuni.bg/trainings/resources/video/45816/video-17-january-2020-svetoslav-dimitrov-js-fundamentals-january-2020/2602
// от 17ти януари 2020г 
// подоба можело да има на mid exam
