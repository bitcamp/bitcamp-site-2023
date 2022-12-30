<template>
  <div class="checkmark-inner-div">
    <input
      :name="name"
      class="checkmark-input"
      type="checkbox"
      :checked="modelValue"
      disabled
    />
    <span
      class="checkmark-span"
      :class="{
        'checkmark-notchecked': !modelValue,
        'checkmark-checked': modelValue,
        'checkmark-notdisabled': !disabled,
        'checkmark-disabled': disabled,
      }"
      @click="toggle"
    ></span>
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
.checkmark-inner-div {
  display: inline-block;
}

// hide input
.checkmark-input {
  width: 0px;
  height: 0px;
  opacity: 0px;
}

.checkmark-span {
  display: inline-block;
  top: 0;
  left: 0;
  height: 15px;
  width: 15px;
  margin: 2px 2px;
  --color: v-bind(rgb.r), v-bind(rgb.g), v-bind(rgb.b);
  margin-right: 5px;
}

// checkmark
.checkmark-checked.checkmark-span::before {
  content: '✓';
  color: white;
  position: relative;
  bottom: 4px;
}

// hover + center filled
.checkmark-notdisabled.checkmark-span:hover {
  box-shadow: 0 0 0 4px rgba(var(--color), 0.4);
}
.checkmark-notchecked.checkmark-span:hover {
  background-color: rgba(var(--color), 0.4);
}
.checkmark-checked {
  background-color: rgba(var(--color), 1);
}

// border
.checkmark-disabled {
  opacity: 0.5;
  outline: 2px solid grey;
  border-radius: 2px;
}
.checkmark-notdisabled {
  opacity: 0.5;
  outline: 2px solid black;
  border-radius: 2px;
}
</style>
