
function getCurrentMonthAndYear() {
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];

    const currentDate = new Date();
    const currentMonth = months[currentDate.getMonth()];
    const currentYear = currentDate.getFullYear();

     return `${currentMonth} ${currentYear}`;

}

function getLastDateOfMonth() {
    const currentDate = new Date();
    const lastDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

    const day = lastDate.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[lastDate.getMonth()];
    const year = lastDate.getFullYear().toString().slice(2);

   return `${day} ${month} ${year}`;

}

function getCurrentDate() {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear().toString().slice(2);

    return `${day} ${month} ${year}`;

}

function getFirstDateOfMonth() {
    const currentDate = new Date();
    currentDate.setDate(1); // Set the day to 1 to get the first date of the month

    const day = currentDate.getDate().toString().padStart(2, '0'); // Add leading zero if day is less than 10
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear().toString().slice(2);

    return `${day} ${month} ${year}`;
}

function getDateAfter15Days() {
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getTime() + 15 * 24 * 60 * 60 * 1000);

    const day = futureDate.getDate();
    const monthNames = [
        "Jan", "Feb", "Mar", "Apr",
        "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec"
    ];
    const month = monthNames[futureDate.getMonth()];
    const year = futureDate.getFullYear().toString().slice(2);

    return `${day} ${month} ${year}`;
}

function getFormatted21thOfCurrentMonth() {
    // Create a new Date object for the 21th of the current month
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth();
    const date = new Date(year, month, 21);
  
    // Array of weekday names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    // Array of month names
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Get the day of the week
    const weekdayName = weekdays[date.getDay()];
    
    // Get the month name
    const monthName = months[date.getMonth()];
    
    // Format the date as '21, Weekday, Month 21, Year'
    const formattedDate = `21, ${weekdayName}, ${monthName} 21, ${year}`;
    
    return formattedDate;
  }

output.getCurrentDate =
{
    monthYear: getCurrentMonthAndYear(),
    lastDateOfMonth: getLastDateOfMonth(),
    currentDate: getCurrentDate(),
    firstDateOfMonth: getFirstDateOfMonth(),
    date15DaysFromCurrentDate: getDateAfter15Days(),
    get21thOfEachMonth: getFormatted21thOfCurrentMonth(),
    
}
