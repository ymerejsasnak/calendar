'use strict';

$(function() {

    const PREVIOUS_BUTTON = $('#previous');
    const NEXT_BUTTON = $('#next');


    function Calendar() {
        const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
                        'September', 'October', 'November', 'December'];
        const GRID_DAYS = 42; // 7 days per week, 6 week rows to fit any possible week overlaps for each month
        const MONTH_YEAR_HEADER = $('#top h1');
        const CALENDAR_DIV = $('#calendar');
        

        
        this.dateObject = new Date();
        this.currentMonth = this.dateObject.getMonth();



        this.makeDayDivs = function() {
            // first make sure it is clear if changing months
            $('.day').remove();

            for (let id = 0; id < GRID_DAYS; id++) {
                CALENDAR_DIV.append($(`<div class="day" id="day${id}"></div>`));
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
                currentDiv.html(`<p>${this.dateObject.getDate()}</p>`);
                // make text gray if date is from previous or next month
                if (this.dateObject.getMonth() !== this.currentMonth) {
                    currentDiv.addClass('other-month');
                }
                this.dateObject.setDate(this.dateObject.getDate() + 1);
            }

        }

        this.displayMonthYear = function() {
            MONTH_YEAR_HEADER.text(`${MONTHS[this.currentMonth]} ${this.dateObject.getFullYear()}`);
        }
        
    }


    // main - load calendar
    let cal = new Calendar;
    cal.makeDayDivs();
    cal.setDateLocations();
    cal.displayMonthYear();



    // event listeners

    PREVIOUS_BUTTON.on('click', function() {
        //move date to somewhere in the middle of the previous month so it has to recalculate date positions
        cal.dateObject.setDate(cal.dateObject.getDate() - 15);
        
        cal.dateObject.setMonth(cal.dateObject.getMonth() - 1);
        cal.currentMonth = cal.dateObject.getMonth();

        cal.makeDayDivs();
        cal.setDateLocations();
        cal.displayMonthYear();
    });

    NEXT_BUTTON.on('click', function() {
        //move date to somewhere in the middle of the previous month so it has to recalculate date positions
        cal.dateObject.setDate(cal.dateObject.getDate() - 15);

        cal.dateObject.setMonth(cal.dateObject.getMonth() + 1);
        cal.currentMonth = cal.dateObject.getMonth();

        cal.makeDayDivs();
        cal.setDateLocations();
        cal.displayMonthYear();
    });


});