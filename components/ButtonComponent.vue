<template>
  <link
    href="https://fonts.googleapis.com/css?family=Poppins"
    rel="stylesheet"
  />
  <button
    :class="[
      primary
        ? disabled
          ? 'primary-disabled'
          : 'primary-default'
        : disabled
        ? 'secondary-disabled'
        : 'secondary-default',
      'baseButton',
      size === 'small' ? 'small' : '',
      size === 'medium' ? 'medium' : '',
      size === 'large' ? 'large' : '',
    ]"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
export interface Props {
  text: string;
  primary: boolean;
  disabled: boolean;
  size: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  primary: true,
  disabled: false,
  size: 'small',
});
</script>

<style scoped>
.baseButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 19px;
  gap: 10px;

  position: absolute;

  border-radius: 10px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  display: flex;
  align-items: center;
}

.small {
  width: 80px;
  height: 27px;
  font-size: 14px;
  line-height: 21px;
}

.medium {
  width: 95px;
  height: 30px;
  font-size: 16px;
  line-height: 24px;
}
.large {
  width: 107px;
  height: 37px;
  font-size: 16px;
  line-height: 24px;
}

.primary-default {
  background: var(--color-bitcamp);
  color: var(--color-white);
  border: 0px;
}

.secondary-default {
  background: var(--color-white);
  box-sizing: border-box;
  border: 2px solid var(--color-atlantic);
  color: var(--color-atlantic);
}

.primary-disabled {
  opacity: 0.5;
  background: var(--color-bitcamp);
  color: var(--color-white);
  border: 0px;
  cursor: not-allowed;
}

.secondary-disabled {
  opacity: 0.5;
  background: var(--color-white);
  box-sizing: border-box;
  border: 2px solid var(--color-atlantic);
  color: var(--color-atlantic);
  cursor: not-allowed;
}
</style>
