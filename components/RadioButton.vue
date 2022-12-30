<template>
  <div class="radio-inner-div">
    <input
      :name="name"
      class="radio-input"
      type="radio"
      :disabled="disabled"
      :class="{
        'radio-notpressed': !modelValue,
        'radio-pressed': modelValue,
        'radio-notdisabled': !disabled,
        'radio-disabled': disabled,
      }"
      @click="toggle"
    />
  </div>
</template>

<script setup lang="ts">
import { hex_to_rgb, get_color_hex } from './color_utils';

const props = defineProps<{
  name?: string;
  color: string;
  disabled?: boolean;
  text: string;
  modelValue: boolean;
}>();
const rgb = computed(() => hex_to_rgb(get_color_hex(props.color))!);

const emit = defineEmits(['update:modelValue']);
function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
}
</script>

<style scoped lang="scss">
.radio-div {
  display: inline-block;
}

.radio-input {
  appearance: none;
  background-color: #fff;
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 20px;
  height: 20px;
  --color: v-bind(rgb.r), v-bind(rgb.g), v-bind(rgb.b);
  place-content: center;
  text-align: center;
}

// circle in center
.radio-input::before {
  content: '';
  display: inline-block;
  width: 0.65em;
  height: 0.65em;
  margin-bottom: 0.1em;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: 0px 0px 0px 115px inset rgb(var(--color));
}
.radio-pressed.radio-input::before {
  transform: scale(1);
}

// border
.radio-disabled {
  opacity: 0.5;
  border: 2px solid grey;
  border-radius: 50%;
}
.radio-notdisabled {
  opacity: 0.5;
  border: 2px solid black;
  border-radius: 50%;
}
.radio-pressed {
  opacity: 0.5;
  border: 2px solid rgb(var(--color));
  border-radius: 50%;
}

// hover
.radio-input:hover {
  background-color: rgba(var(--color), 0.4);
  box-shadow: 0 0 0 3px rgba(var(--color), 0.4);
}
.radio-input:active:hover {
  background-color: rgba(var(--color), 0.6);
  box-shadow: 0 0 0 3px rgba(var(--color), 0.6);
}
</style>
