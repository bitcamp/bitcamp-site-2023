<template>
  <CheckmarkBox
    v-if="type == 'checkbox'"
    :model-value="modelValue"
    :name="name"
    :color="color"
    :disabled="disabled"
    :text="text"
    @update:model-value="toggle"
  />
  <RadioButton
    v-else-if="type == 'radio'"
    :model-value="modelValue"
    :name="name"
    :color="color"
    :disabled="disabled"
    :text="text"
    @update:model-value="toggle"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  type: 'checkbox' | 'radio';
  name?: string;
  color: string;
  disabled?: boolean;
  text: string;
  modelValue: boolean;
}>();

const emit = defineEmits(['update:modelValue']);
function toggle() {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue);
  }
}
</script>
