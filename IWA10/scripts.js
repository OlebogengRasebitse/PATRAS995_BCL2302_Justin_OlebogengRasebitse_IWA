const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

//Check if an item has been assigned to the 9 key.
if (9 in holidays) {
    console.log('Holiday Name:', holidays.futureId.name);
}
else {
    console.log(`ID ${futureId} not created yet`)
}


//Change time and name.
// const copied = { ...holidays[christmas]}
// copied.name = 'X-mas';
// copied.date.setHours(0 , 0 );

holidays[6].name = 'Xmas';
holidays[6].date.setHours(0, 0);

// check whether the new date is earlier than the current date
const isEarlier = holidays[6].date.getTime < Date.now;
console.log(`New date is earlier:${isEarlier}`)


console.log(`ID change: False`)
console.log(`Date change: ${holidays[6].date}`)
console.log(`Name Change: ${holidays[6].name}`)


// console.log(holidays[1].date.getTime)

const firstHolidayTimestamp = Math.min(
    Date.parse(holidays[0].date),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
);

let holiday1st = new Date(firstHolidayTimestamp)

const dateString = "Sun Jan 01 2023 00:00:00 GMT+0200 (South Africa Standard Time)";
const date = new Date(dateString);
const day = date.getDate().toString().padStart(2, "0");
const month = (date.getMonth() + 1).toString().padStart(2, "0");
const year = date.getFullYear().toString();
const formattedDate = `${day}/${month}/${year}`;
console.log(formattedDate); // Output: 01/01/2023


const lastHolidayTimestamp = Math.max(
    Date.parse(holidays[0].date),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime()
);

let holidaylast = new Date(lastHolidayTimestamp)

const lastDateString = "Tue Dec 26 2023 00:00:00 GMT+0200 (South Africa Standard Time)";
const lastDate = new Date(lastDateString);
const lastDay = lastDate.getDate().toString().padStart(2, "0")
const lastMonth = (lastDate.getMonth() + 1).toString().padStart(2, "0")
const lastYear = lastDate.getFullYear().toString();
const lastFormatedDate = `${lastDay}/${lastMonth}/${lastYear}`;
console.log(lastFormatedDate)//Output: 26/12/2023






