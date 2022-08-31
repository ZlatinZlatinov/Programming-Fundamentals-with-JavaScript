function matchDates (inputData) {
    let dates = inputData[0]; 
    let pattern = /\b(?<day>\d{2})(\W)(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g; 
    let dateArr = dates.match(pattern);  

    while ((dateArr = pattern.exec(dates)) !== null) {
        let day = dateArr.groups['day']; 
        let month = dateArr.groups['month']; 
        let year = dateArr.groups['year']; 
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    } 
} // 100/100 not bad at all xdd
matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']); 
matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);