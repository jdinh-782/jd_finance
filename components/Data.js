function createData(id, month, day, year, name, status, paymentMethod, amount) {
    return {id, month, day, year, name, status, paymentMethod, amount};
}

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;

let currentDay = `${month}/${day}`;

let currentYear = date.getFullYear();


// Date: MM/DD/YYYY
// Name: string
// Status: Pending ? Completed
// Payment Method: CARD xxxx LA4D (LA4D - last four digits of card)
// Amount: $
const Data = [
    createData(0, '11', '22', currentYear, 'name', 'Completed', 'VISA xxxx 1234', 600.00),
    createData(1, '11', '25', currentYear, 'name', 'Completed', 'VISA xxxx 1234', 354.23),
    createData(2, '11', '26', currentYear, 'name', 'Completed', 'VISA xxxx 1234', 255.34),
    createData(3, '11', '28', currentYear, 'name', 'Completed', 'VISA xxxx 1234', 333.23),
    createData(4, '11', '29', currentYear, 'name', 'Completed', 'VISA xxxx 1234', 539.23),
    createData(5, '12', '1', currentYear, 'name', 'Pending', 'VISA xxxx 1234', 1000.00),
    createData(6, '12', '2', currentYear, 'name', 'Pending', 'VISA xxxx 1234', 755.56),
    createData(7, '12', '3', currentYear, 'name', 'Pending', 'VISA xxxx 1234', 59.22),
    createData(8, '12', '4', currentYear, 'name', 'Pending', 'VISA xxxx 1234', 500.00),
    createData(9, undefined, undefined, undefined, undefined, undefined, undefined, undefined),
];


export default Data;