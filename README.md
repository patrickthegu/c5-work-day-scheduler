# c5-work-day-scheduler

## Application Link
https://github.com/patrickthegu/c5-work-day-scheduler/settings/pages

## Description
This scheduling application uses a variety of third party API's, jquery, Bootstrap and moment.js to write and save text entries for each hour of the working day.  It is colour coded based on past, present and future events.

## User Story
Busy people who need to schedule their day can save important events each day in this application by the hour

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## Usage
The current date is displayed at the top of the page
Working hours from 9am - 5pm are shown on the planner
Each time block is colour coded based on whether or not that time is in the past, present or future
Users can write text entries in each block and save it