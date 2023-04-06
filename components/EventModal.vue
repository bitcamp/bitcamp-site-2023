<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal';
import dayjs from 'dayjs';
import type { Event } from '../types/event';

defineProps<{
  event?: Event;
}>();
const emit = defineEmits<{
  (e: 'close'): void;
}>();

function formatCategory(category: string | undefined) {
  if (!category) return '';
  return category
    .split('-')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

function formatTime(startTime?: string, endTime?: string) {
  if (!startTime || !endTime) return;
  return `
    ${dayjs(startTime).format('dddd')}, ${dayjs(startTime).format(
    'h:mm A'
  )} - ${dayjs(endTime).format('h:mm A')}
  `;
}
</script>

<template>
  <VueFinalModal
    class="modal"
    :content-class="'modal-content ' + event?.category"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal-header">
      <h1 class="event-title">{{ event?.event_name }}</h1>
      <img
        class="close-modal-button"
        src="../assets/images/icons/plus.svg"
        @click="emit('close')"
      />
    </div>
    <div class="modal-body">
      <p class="event-category">{{ formatCategory(event?.category) }}</p>
      <div>
        <p class="event-time">
          {{ formatTime(event?.start_time, event?.end_time) }}
        </p>
        <p class="event-location">{{ event?.location }}</p>
      </div>
      <p class="event-description">{{ event?.description }}</p>
    </div>
  </VueFinalModal>
</template>

<style lang="scss">
@import '../assets/css/schedule.scss';

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-style: solid;
  border-radius: 0.5rem;
  border-width: 0.25rem;
  box-shadow: 0.3rem 0.3rem 0.7rem rgba(black, 0.5);
  width: 50rem;
  margin: 2rem;

  &.main-event {
    background-color: $COLOR_MAIN_EVENT;
    border-color: $COLOR_MAIN_EVENT_BORDER;
  }
  &.workshop-event {
    background-color: $COLOR_WORKSHOP;
    border-color: $COLOR_WORKSHOP_BORDER;
  }
  &.mini-event {
    background-color: $COLOR_MINI_EVENT;
    border-color: $COLOR_MINI_EVENT_BORDER;
  }
  &.sponsor-event {
    background-color: $COLOR_SPONSOR;
    border-color: $COLOR_SPONSOR_BORDER;
  }
  &.food-event {
    background-color: $COLOR_FOOD;
    border-color: $COLOR_FOOD_BORDER;
  }
}
.modal-content > * + * {
  margin: 0.5rem 0;
}
.modal-header {
  display: flex;
  gap: 1rem;
}
.close-modal-button {
  min-width: 2rem;
  min-height: 2rem;
  max-width: 2rem;
  max-height: 2rem;
  transform: rotate(45deg);
  cursor: pointer;
}
.event-title {
  flex: 1;
}
.event-category {
  font-size: 1.125rem;
  color: rgba(white, 0.9);
  margin-top: -0.25rem;
  margin-bottom: 1rem;
}
.event-time {
  font-size: 0.875rem;
  color: rgba(white, 0.75);
  margin-bottom: 0.25rem;
}
.event-location {
  font-size: 0.875rem;
  color: rgba(white, 0.75);
}
.event-description {
  margin-top: 1rem;
  font-size: 1rem;
}
</style>
