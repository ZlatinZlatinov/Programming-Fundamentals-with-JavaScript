function requiredReading(numberPages, numPagesPerHour, numDays) {
    let res = (numberPages / numPagesPerHour) / numDays;
    console.log(res);
}
requiredReading(212, 20, 2);
// 100/100