function softuniReception(userInput) { 
    
    userInput = userInput.map(Number);
    let queue = userInput[3];
    let totalStudentsPerHour = 0;

    for (let i = 0; i < 3; i++) {
        totalStudentsPerHour += userInput[i];
    }

    let estimatedHours = Math.ceil(queue / totalStudentsPerHour);

    for (let i = 1; i <= estimatedHours; i++) {
        if (i % 4 == 0) {
            estimatedHours++;
        }
    }

    console.log(`Time needed: ${estimatedHours}h.`);
} // 100/100
softuniReception(['5', '6', '4', '20']);
softuniReception(['1', '2', '3', '45']);
softuniReception(['3', '2', '5', '40']);