'use strict';

$(function() {


function Calendar() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];
    const GRID_DAYS = 42; // 7 days per week, 6 week rows to fit any possible week overlaps for each month
    const CALENDAR_DIV = $('#calendar');

    
    this.dateObject = new Date();


    this.makeDayDivs = function() {
        for (let id = 0; id < GRID_DAYS; id++) {
            CALENDAR_DIV.append($('<div class="day" id="day' + id + '"></div>'));
        }
    }
    
}




let cal = new Calendar;
cal.makeDayDivs();



});