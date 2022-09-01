function extractEmails(string) {
    let regexP = /(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
    let email = string.match(regexP);
    email.forEach(e => console.log(e));
} // 100/100 atm // sam det ne minava s moq e-mail xdd ama za uslovieto ba4ka
extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');