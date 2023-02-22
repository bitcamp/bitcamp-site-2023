<template>
  <a class="button-link" :href="link" target="_blank">
    <div
      :class="[
        disabled ? 'disabled' : '',
        'button',
        size === 'small' ? 'small' : '',
        size === 'medium' ? 'medium' : '',
        size === 'large' ? 'large' : '',
        size === 'xl' ? 'xl' : '',
      ]"
      :style="{ backgroundColor: color }"
    >
      {{ text }}
    </div>
  </a>
</template>

<script lang="ts">
export default {
  name: 'ButtonComponent',
};
</script>

<script setup lang="ts">
export interface Props {
  text: string;
  link: string;
  color: string;
  disabled: boolean;
  size: string;
}

withDefaults(defineProps<Props>(), {
  text: 'Button',
  color: '#ff6f3f',
  disabled: false,
  size: 'small',
});
</script>

<style scoped>
.button-link {
  text-decoration: none;
}

.button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 19px;
  gap: 10px;

  border-radius: 4px;

  font-family: 'Avenir';
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  display: flex;
  align-items: center;

  color: var(--color-white);
  border: 0px;
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
  width: 130px;
  height: 37px;
  font-size: 16px;
  line-height: 24px;
}

.xl {
  width: 215px;
  height: 45.54px;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
}

.disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
