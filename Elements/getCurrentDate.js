
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

  function getFormattedDateAfterDays(days) {
    // Get the current date
    const today = new Date();
    
    // Calculate the future date by adding the specified number of days
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + days);
    
    // Define arrays for weekday and month names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Extract components
    const dayOfMonth = futureDate.getDate();
    const weekday = weekdays[futureDate.getDay()];
    const month = months[futureDate.getMonth()];
    const year = futureDate.getFullYear();
    
    // Format the result
    return `${dayOfMonth}, ${weekday}, ${month} ${dayOfMonth}, ${year}`;
  }
  
  function getCurrentDateFormatted() {
    // Get the current date
    const today = new Date();
    
    // Define arrays for weekday and month names
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    // Extract components
    const dayOfMonth = today.getDate();
    const weekday = weekdays[today.getDay()];
    const month = months[today.getMonth()];
    const year = today.getFullYear();
    
    // Format the result
    return `${dayOfMonth}, ${weekday}, ${month} ${dayOfMonth}, ${year}`;
  }

  function getCurrentDateMonDateYear() {
    // Get the current date
    const today = new Date();
  
    // Define an array for abbreviated month names
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Extract components
    const month = months[today.getMonth()];  // Get abbreviated month name
    const dayOfMonth = String(today.getDate()).padStart(2, '0');  // Get day of the month with leading zero
    const year = today.getFullYear();  // Get full year
    
    // Format the result
    return `${month} ${dayOfMonth} ${year}`;
  }

  function getDaysAfterMonDateYear(days) {
    const today = new Date();
  
  // Calculate the future date by adding 3 days
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + days);
  
  // Define arrays for abbreviated month names
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Extract components
  const month = months[futureDate.getMonth()];  // Get abbreviated month name
  const dayOfMonth = String(futureDate.getDate()).padStart(2, '0');  // Get day of the month with leading zero
  const year = futureDate.getFullYear();  // Get full year
  
  // Format the result
  return `${month} ${dayOfMonth} ${year}`;
  }

  function getDateDaysAfterMonDateYear(days) {
    // Get the current date
    const today = new Date();
    
    // Calculate the future date by adding 3 days
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + days);
    
    // Define an array for abbreviated month names
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    // Extract components
    const month = months[futureDate.getMonth()];  // Get abbreviated month name
    const dayOfMonth = String(futureDate.getDate()).padStart(2, '0');  // Get day of the month with leading zero
    const year = futureDate.getFullYear();  // Get full year
    
    // Format the result
    return `${month} ${dayOfMonth} ${year}`;
  }
  
  output.getCurrentDate =
{
    monthYear: getCurrentMonthAndYear(),
    lastDateOfMonth: getLastDateOfMonth(),
    currentDate: getCurrentDate(),
    firstDateOfMonth: getFirstDateOfMonth(),
    date15DaysFromCurrentDate: getDateAfter15Days(),
    get21thOfEachMonth: getFormatted21thOfCurrentMonth(),

    currentDate: getCurrentDateMonDateYear(),
    dateAfter7DaysFromCurrentDateCalendar: getFormattedDateAfterDays(7),
    dateAfter3DaysBeforeDueDateCalendar: getFormattedDateAfterDays(4),
    dateAfter3DaysAfterDueDateCalendar: getFormattedDateAfterDays(10),

    getDueDateMonDateYear: getDaysAfterMonDateYear(7),
    getDate3DaysBeforeDueMonDateYear: getDaysAfterMonDateYear(4),
    getDate3DaysAfterDueMonDateYear: getDaysAfterMonDateYear(10),

    getDate3DaysAfterCurrentDateMonDateYear: getDateDaysAfterMonDateYear(3),
    getDate5DaysAfterCurrentDateMonDateYear: getDateDaysAfterMonDateYear(5),
    getDate7DaysAfterCurrentDateMonDateYear: getDateDaysAfterMonDateYear(7),

}
