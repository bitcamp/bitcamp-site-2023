<!-- An events calendar that pulls events from DynamoDB -->
<template>
  <div id="schedule" class="section">
    <h1 class="section-title">Schedule</h1>
    <div class="schedule-page" style="height: 80vh">
      <div class="row schedule-list" style="height: 75vh">
        <!-- FULL SCHEDULE -->
        <div v-if="dataLoaded" class="col pl-5" style="min-height: 0">
          <div no-body class="card h-100">
            <div class="column-card">
              <div class="schedule-header">
                <div
                  v-for="day in days"
                  :key="getDayOfTheWeek(day)"
                  class="schedule-header-day"
                  @click="selectTitleItem(day)"
                >
                  <div>
                    <div class="schedule-day">
                      <span class="day"
                        >{{ getDayOfTheWeek(day).substring(0, 3) }},
                        {{ '' }}
                      </span>
                      <span class="date">April {{ day.getDate() }}</span>
                    </div>
                    <div
                      class="schedule-header-day-bar"
                      :class="{ active: day === selectedDay }"
                    />
                  </div>
                </div>
              </div>

              <!-- SCHEDULE SCROLL -->
              <div class="list-wrapper">
                <div id="schedule-body" class="schedule-body">
                  <div class="schedule-time">
                    <div
                      v-for="timeWindow in displayTimeWindows"
                      :key="timeWindow"
                      class="timewindow"
                    >
                      <span v-if="timeWindow.startsWith('0')">
                        {{ timeWindow.slice(1) }}
                      </span>
                      <span v-else>
                        {{ timeWindow }}
                      </span>
                    </div>
                  </div>
                  <div class="schedule-content">
                    <div
                      v-for="scheduleColumn in scheduleColumns"
                      :key="scheduleColumn"
                      Schedule
                      class="schedule-column"
                    >
                      <div
                        v-for="timeWindow in displayTimeWindows"
                        :key="timeWindow"
                        class="timewindow"
                      >
                        <div
                          v-if="
                            formattedEvents[selectedDay][timeWindow].find(
                              (event) =>
                                event.column === scheduleColumn &&
                                event.display &&
                                event.displayMode
                            )
                          "
                          class="schedule-content-item"
                          :class="
                            formattedEvents[selectedDay][timeWindow].find(
                              (event) => event.column === scheduleColumn
                            ).class
                          "
                        >
                          <div class="schedule-content-item-title">
                            {{
                              formattedEvents[selectedDay][timeWindow].find(
                                (event) => event.column === scheduleColumn
                              ).event_name
                            }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <EventModal :selected-event="selectedEvent" /> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'SchedulePage',
  data() {
    return {
      rawEvents: [],
      formattedEvents: {},
      selectedDay: null,
      days: [],
      timeWindows: [],
      timeWindowColumns: {},
      scheduleColumns: 1,
      dataLoaded: false,
      selectedEvent: {},
      startDate: new Date('2023-04-07T15:00:00-04:00'),
      endDate: new Date('2023-04-09T16:00:00-04:00'),
    };
  },
  computed: {
    timezoneIsUSEastern() {
      const offset = new Date().getTimezoneOffset();
      return offset === 240; // 240 is the offset for us eastern time zone
    },
    displayTimeWindows() {
      const timeWindowColumns = this.timeWindowColumns[this.selectedDay];
      const keys = Object.keys(timeWindowColumns);
      const topExtraRows = 1;
      const bottomExtraRows = 1;
      let startCutoff = 0;
      let endCutoff = -1;
      // 1. trim at the top
      for (let i = 0; i < keys.length; i += 1) {
        if (timeWindowColumns[keys[i]].length > 0) {
          startCutoff = Math.max(i - topExtraRows, 0);
          break;
        }
      }

      // 2. trim at the bottom
      const newTimes = [];
      for (let i = keys.length - 1; i >= 0; i -= 1) {
        if (timeWindowColumns[keys[i]].length > 0) {
          /* Check for events that overflow the end of the time windows */
          endCutoff = i + bottomExtraRows + 1;
          if (endCutoff >= this.timeWindows.length) {
            // Add additional time windows to the end to support long events (up to 1 hour over)
            const midnight = new Date();
            midnight.setHours(0, 0, 0, 0);
            const currentTime = new Date(midnight);
            // Go through every possible 30 minute increment in a day
            while (endCutoff >= keys.length + newTimes.length) {
              newTimes.push(this.formatAMPM(currentTime));
              currentTime.setMinutes(currentTime.getMinutes() + 30);
            }
          }
          break;
        }
      }

      //   return this.timeWindows.concat(newTimes).slice(startCutoff, endCutoff);
      endCutoff -= 1;
      if (this.selectedDay == this.days[this.days.length - 1]) {
        endCutoff = 32; // 4PM
      }
      return this.timeWindows.concat(newTimes).slice(startCutoff, endCutoff);
    },
    timezoneDisplayName() {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz) {
        // apply some light formatting to the time zone
        return tz.replace('_', ' ');
      }
      // some browsers do not support this (e.g. IE11)
      return '';
    },
  },
  async mounted() {
    this.populateDays();
    this.prepareTimeWindows();
    await this.fetchRawEvents();
    this.processRawEvents();
    this.dataLoaded = true;
  },
  methods: {
    selectTitleItem(day) {
      this.selectedDay = day;
    },
    getDayOfTheWeek(date) {
      const weekday = new Array(7);
      weekday[0] = 'Sunday';
      weekday[1] = 'Monday';
      weekday[2] = 'Tuesday';
      weekday[3] = 'Wednesday';
      weekday[4] = 'Thursday';
      weekday[5] = 'Friday';
      weekday[6] = 'Saturday';
      return weekday[date.getDay()];
    },
    formatAMPM(date) {
      // Convert to AM/PM local time
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });
    },
    populateDays() {
      const currentDate = new Date(this.startDate);

      // This code might not work at the end of the month
      while (currentDate.getDate() <= this.endDate.getDate()) {
        this.days.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + 1);
      }

      // Make schedule start on the current day
      const nowString = new Date().toDateString();
      const today = this.days.find((day) => day.toDateString() === nowString);
      this.selectedDay = today || this.days[0];
    },
    prepareTimeWindows() {
      const midnight = new Date();
      midnight.setHours(0, 0, 0, 0);
      const currentTime = new Date(midnight);

      this.days.forEach((day) => {
        this.timeWindowColumns[day] = {};
      });

      // Go through every possible 30 minute increment in a day
      do {
        this.timeWindows.push(this.formatAMPM(currentTime));
        this.days.forEach((day) => {
          this.timeWindowColumns[day][this.formatAMPM(currentTime)] = [];
        });
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      } while (this.formatAMPM(currentTime) !== this.formatAMPM(midnight));
    },
    getDurationOfEvent(start, end) {
      const diff = end.getTime() - start.getTime();
      return diff / 60000;
    },
    processRawEvents() {
      for (let i = 0; i < this.rawEvents.length; i += 1) {
        // deep clone object
        this.rawEvents[i].class = this.rawEvents[i].category;
        const start = new Date(this.rawEvents[i].start_time);
        const end = new Date(this.rawEvents[i].end_time);
        this.rawEvents[i].class += ` length-${this.getDurationOfEvent(
          start,
          end
        )}-min`;

        // handle events starting/ending at xx:15 or xx:45
        if (start.getMinutes() === 15 || start.getMinutes() === 45) {
          this.rawEvents[i].class += ' offset-15-min';
        }
      }
      this.days.forEach((day) => {
        this.formattedEvents[day] = {};
        this.timeWindows.forEach((timeWindow) => {
          this.formattedEvents[day][timeWindow] = this.getEventsForTimeWindow(
            timeWindow,
            day
          );
        });
      });

      // set number of columns to display in schedule
      let maxColumns = 1;
      this.days.forEach((day) => {
        maxColumns = Math.max(
          maxColumns,
          ...[].concat(...Object.values(this.timeWindowColumns[day]))
        );
      });
      this.scheduleColumns = maxColumns;
    },
    getEventsForTimeWindow(timeWindow, day) {
      const eventsForWindow = this.rawEvents.filter((rawEvent) => {
        const rawEventStart = new Date(rawEvent.start_time);
        const rawEventStartMinus15 = new Date(rawEventStart.getTime());
        rawEventStartMinus15.setMinutes(rawEventStartMinus15.getMinutes() - 15);
        return (
          (this.formatAMPM(rawEventStart) === timeWindow ||
            this.formatAMPM(rawEventStartMinus15) === timeWindow) &&
          rawEventStart.getDate() === day.getDate()
        );
      });

      eventsForWindow.forEach((event) => {
        event.display = true;
        event.displayMode = true;

        const midnight = new Date();
        midnight.setHours(0, 0, 0, 0);

        const eventStart = new Date(event.start_time);
        const eventEnd = new Date(event.end_time);
        let column = 1;

        // handle events starting/ending at xx:15 or xx:45
        if (eventStart.getMinutes() === 15 || eventStart.getMinutes() === 45) {
          eventStart.setMinutes(eventStart.getMinutes() - 15);
        }
        if (eventEnd.getMinutes() === 15 || eventEnd.getMinutes() === 45) {
          eventEnd.setMinutes(eventEnd.getMinutes() + 15);
        }

        // find the first column that the event fits into the schedule
        while (column < 20) {
          const currentTime = new Date(eventStart);
          let validColumn = true;
          do {
            if (
              this.timeWindowColumns[day][
                this.formatAMPM(currentTime)
              ].includes(column)
            ) {
              validColumn = false;
            }
            currentTime.setMinutes(currentTime.getMinutes() + 30);
          } while (
            this.formatAMPM(currentTime) !== this.formatAMPM(eventEnd) &&
            this.formatAMPM(currentTime) !== this.formatAMPM(midnight) &&
            validColumn
          );
          if (validColumn) {
            break;
          }
          column++;
        }
        event.column = column;

        // update occupied columns
        const currentTime = new Date(eventStart);
        do {
          this.timeWindowColumns[day][this.formatAMPM(currentTime)].push(
            column
          );
          currentTime.setMinutes(currentTime.getMinutes() + 30);
        } while (
          this.formatAMPM(currentTime) !== this.formatAMPM(eventEnd) &&
          this.formatAMPM(currentTime) !== this.formatAMPM(midnight)
        );
      });
      return eventsForWindow;
    },
    async fetchRawEvents() {
      try {
        // fetch events from DynamoDB
        const eventsRes = await fetch('https://api.bit.camp/schedule');
        const events = await eventsRes.json();
        this.rawEvents = events;
      } catch (error) {
        this.rawEvents = [];
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import 'bootstrap/dist/css/bootstrap.css';

$COLOR_PRIMARY: #ffffff;
$COLOR_PRIMARY_MUTED: lighten($COLOR_PRIMARY, 20%);
$COLOR_PRIMARY_MUTED_MUTED: lighten($COLOR_PRIMARY, 40%);
$COLOR_FOREGROUND: rgba(#ffffff, 15%);
$COLOR_BORDER: rgba(#ffffff, 30%);
$COLOR_LIGHT_TEXT: white;
$COLOR_FOCUS: rgba(38, 143, 255, 0.35);
$COLOR_SHADOW: rgba(117, 84, 84, 0.4);
$BORDER_RADIUS: 15px;

$COLOR_MAIN_EVENT: #ba6541;
$COLOR_MAIN_EVENT_BORDER: darken($COLOR_MAIN_EVENT, 30%);
$COLOR_WORKSHOP: #324a79;
$COLOR_WORKSHOP_BORDER: darken($COLOR_WORKSHOP, 15%);
$COLOR_MINI_EVENT: #962c30;
$COLOR_MINI_EVENT_BORDER: darken($COLOR_MINI_EVENT, 15%);
$COLOR_SPONSOR: #71341c;
$COLOR_SPONSOR_BORDER: darken($COLOR_SPONSOR, 15%);
$COLOR_FOOD: #4ea4d0;
$COLOR_FOOD_BORDER: darken($COLOR_FOOD, 30%);

.section-title {
  text-align: center;
  font-weight: bold;
}
.card {
  border: 0;
  overflow: hidden;
  background-color: $COLOR_FOREGROUND;
  border-radius: $BORDER_RADIUS;
}
.schedule-header {
  /* background-color: $COLOR_PRIMARY_MUTED; */
  font-family: Aleo;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: #324a79;
}
.schedule-header-day {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr; */
  /* background-color: #324a79; */

  & .schedule-day {
    text-align: center;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 0.25rem;
  }
}
.schedule-header-day-bar {
  margin-top: 0.2rem;
  height: 0.3rem;
  background-color: transparent;
  border-radius: 2rem;

  &.active {
    background-color: $COLOR_LIGHT_TEXT;
  }
}
.list-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
}
.column-card {
  display: flex;
  height: 100%;
  flex-direction: column;
  min-height: 0;
}
.schedule-page {
  align-items: center;
}
.schedule-list {
  display: flex;
  flex-flow: column nowrap;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
.schedule-legend {
  display: flex;
  flex-flow: row wrap;
  column-gap: 3rem;
}
.schedule-body {
  background: $COLOR_FOREGROUND;
  border-radius: 8px;
  height: fit-content;
  width: 100%;
  display: flex;
  justify-content: flex-start;
}
.schedule-time {
  display: flex;
  flex-flow: column;
  width: 15%;
}
.schedule-content {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: nowrap;
}
.timewindow {
  font-size: 1.25rem;
  height: 7.5vh;
  border-top: 2px solid $COLOR_BORDER;
  text-align: center;
  color: $COLOR_LIGHT_TEXT;
}
.schedule-column {
  flex: 1;
}
.schedule-content-item {
  height: 4.5vh;
  border-radius: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 90%;
  padding: 4%;
  font-size: 18px;
  position: relative;
  line-height: 20px;
  border: 2px solid $COLOR_BORDER;
  border-radius: 8px;
  color: $COLOR_LIGHT_TEXT;
}
.length-30-min,
.length-45-min {
  font-size: 16px;
}
.schedule-content-item-title {
  font-family: Avenir;
  flex-grow: 1;
  text-align: center;
  max-width: 80%;
  min-width: 80%;
  max-height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.schedule-time-line {
  width: 60vw;
  position: absolute;
  height: 2px;
  margin-left: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.schedule-time-line-inner {
  width: 100%;
  border: 1px solid rgba($COLOR_PRIMARY, 0.8);
}
.schedule-time-line-header {
  border-radius: 50%;
  padding: 8px;
  background-color: rgba($COLOR_PRIMARY, 0.8);
  border: 1px solid rgba($COLOR_PRIMARY, 0.8);
}
.event-passed {
  opacity: 0.5;
}
.offset-15-min {
  margin-top: 3.5vh !important;
}
.length-30-min {
  height: 7vh !important;
}
.length-45-min {
  height: 11.5vh !important;
}
.length-60-min {
  height: 14.5vh !important;
}
.length-75-min {
  height: 11vh !important;
}
.length-90-min {
  height: 22vh !important;
}
.length-120-min {
  height: 29.5vh !important;
}
.length-150-min {
  height: 37vh !important;
}
.length-180-min {
  height: 44.5vh !important;
}
.length-210-min {
  height: 52vh !important;
}
.length-240-min {
  height: 59.5vh !important;
}
.length-270-min {
  height: 67vh !important;
}
.length-300-min {
  height: 74.5vh !important;
}
.length-330-min {
  height: 82vh !important;
}
.length-360-min {
  height: 89.5vh !important;
}
.length-390-min {
  height: 97vh !important;
}
.length-420-min {
  height: 104.5vh !important;
}
.length-450-min {
  height: 112vh !important;
}
.length-480-min {
  height: 119.5vh !important;
}
/* Coloring by Category */
.main-event-text {
  color: $COLOR_MAIN_EVENT;
}
.workshop-text {
  color: $COLOR_WORKSHOP;
}
.mini-event-text {
  color: $COLOR_MINI_EVENT;
}
.sponsor-text {
  color: $COLOR_SPONSOR;
}
.food-text {
  color: $COLOR_FOOD;
}
.main-event {
  background-color: $COLOR_MAIN_EVENT;
  border-color: $COLOR_MAIN_EVENT_BORDER;
}
.workshop-event {
  background-color: $COLOR_WORKSHOP;
  border-color: $COLOR_WORKSHOP_BORDER;
}
.mini-event {
  background-color: $COLOR_MINI_EVENT;
  border-color: $COLOR_MINI_EVENT_BORDER;
}
.sponsor-event {
  background-color: $COLOR_SPONSOR;
  border-color: $COLOR_SPONSOR_BORDER;
}
.food-event {
  background-color: $COLOR_FOOD;
  border-color: $COLOR_FOOD_BORDER;
}
@media only screen and (min-width: 1101px) {
  #schedule {
    padding: 0 5rem;
  }
  .schedule-content-item {
    font-size: 14px !important;
    line-height: 17px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 12px !important; */
    /* line-height: 15px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 2;
    }
  }
  .timewindow,
  .btn {
    font-size: 17px !important;
  }
}
@media only screen and (min-width: 851px) and (max-width: 1100px) {
  #schedule {
    padding: 0 3rem;
  }
  .schedule-list-title-item {
    font-size: 16px !important;
  }
  .schedule-content-item {
    font-size: 11px !important;
    line-height: 13px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 8px !important; */
    /* line-height: 10px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 3;
    }
  }
  .timewindow,
  .btn {
    font-size: 14px !important;
  }
}
@media only screen and (max-width: 850px) {
  .schedule-list {
    margin-left: 1vw;
    margin-right: 1vw;
  }
  .schedule-list-title-item {
    font-size: 14px !important;
  }
  .schedule-content-item {
    font-size: 8px !important;
    line-height: 10px !important;
  }
  .length-30-min,
  .length-45-min {
    /* font-size: 6px !important; */
    /* line-height: 8px !important; */
    & > .schedule-content-item-title {
      -webkit-line-clamp: 4;
    }
  }
  .timewindow,
  .btn {
    font-size: 10px !important;
  }
}
.loading-spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
