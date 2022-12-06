function createData(id, date, name, status, paymentMethod, amount) {
    return {id, date, name, status, paymentMethod, amount};
}

function getCurrentDay() {
    const date = new Date();
  
    let day = date.getDate();
    let month = date.getMonth() + 1;
  
    let currentDay = `${month}/${day}`;
  
    return currentDay;
}

function getYear() {
    const date = new Date();
  
    return date.getFullYear();
}


// Date: MM/DD/YYYY
// Name: string
// Status: Pending ? Completed
// Payment Method: CARD xxxx LA4D (LA4D - last four digits of card)
// Amount: $
const Data = [
    createData(0, '12/1/'+getYear(), 'Balenciaga', 'Completed', 'VISA xxxx 1234', 1000),
    createData(1, '12/2/'+getYear(), 'Louis Vuitton', 'Pending', 'VISA xxxx 1234', 755.56),
    createData(2, '12/3/'+getYear(), 'Nike', 'Pending', 'VISA xxxx 1234', 59.22),
    createData(3, '12/4/'+getYear(), 'Nobu', 'Pending', 'VISA xxxx 1234', 500),
    createData(getCurrentDay(), undefined),
];


export default Data;