function commonElements(arri, arri2) {
    for (let element of arri) {
        for (let element2 of arri2) {
            if (element === element2) {
                console.log(element2);
            }
        }
    }
} // moje i sas .includes we
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
); 
// 100/100 si,ezz