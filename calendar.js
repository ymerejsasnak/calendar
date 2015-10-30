'use strict';

$(function() {


function Calendar() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                    'September', 'October', 'November', 'December'];
    const GRID_DAYS = 42; // 7 days per week, 6 week rows to fit any possible week overlaps for each month
    const CALENDAR_DIV = $('#calendar');

    
    this.dateObject = new Date();
    this.currentMonth = this.dateObject.getMonth();


    this.makeDayDivs = function() {
        for (let id = 0; id < GRID_DAYS; id++) {
            CALENDAR_DIV.append($('<div class="day" id="day' + id + '"></div>'));
        }
    }

    this.setDateLocations = function() {
        // cycle days back to the first of the month
        while (this.dateObject.getDate() != 1) {
            this.dateObject.setDate(this.dateObject.getDate() - 1);            
        }

        // then cycle back to that monday (so can show last x days of previous month)
        while (this.dateObject.getDay() > 0) {
            this.dateObject.setDate(this.dateObject.getDate() - 1);            
        }

        // then run through, putting in the dates
        for (let gridDay = 0; gridDay < GRID_DAYS; gridDay++) {
            let currentDiv = $('#day' + gridDay)
            currentDiv.text(this.dateObject.getDate());
            // make text gray if date is from previous or next month
            if (this.dateObject.getMonth() !== this.currentMonth) {
                currentDiv.addClass('other-month');
            }
            this.dateObject.setDate(this.dateObject.getDate() + 1);
        }

    }
    
}




let cal = new Calendar;
cal.makeDayDivs();
cal.setDateLocations();



});