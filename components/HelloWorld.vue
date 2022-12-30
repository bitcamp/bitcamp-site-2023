<template>
  <div>Hello world!</div>
  <p>Lorem ipsum</p>
  <div style="display: flex; flex-direction: row">
    <CheckmarkBox
      v-model="checked1"
      text="disabled"
      color="orange"
      :disabled="true"
    />
    <CheckmarkBox
      v-model="checked2"
      :text="'orange'"
      color="orange"
      :disabled="true"
    />
    <CheckmarkBox
      v-model="checked3"
      :value="true"
      :text="'magenta'"
      color="magenta"
    />
  </div>
  <div style="display: flex; flex-direction: row">
    <RadioButton
      v-model="pressed1"
      text="disabled"
      color="orange"
      :disabled="true"
    />
    <RadioButton
      v-model="pressed2"
      :text="'orange'"
      color="orange"
      :disabled="true"
    />
    <RadioButton
      v-model="pressed3"
      :value="true"
      :text="'magenta'"
      color="magenta"
    />
  </div>
  <div style="display: flex; flex-direction: row">
    <SelectionControlComponent
      v-model="final1"
      type="checkbox"
      :value="true"
      :text="'magenta'"
      color="red"
    />
    <SelectionControlComponent
      v-model="final2"
      type="radio"
      :value="true"
      :text="'magenta'"
      color="green"
    />
  </div>
</template>

<script setup lang="ts">
const checked1 = ref(false);
const checked2 = ref(true);
const checked3 = ref(false);

const pressed1 = ref(false);
const pressed2 = ref(true);
const pressed3 = ref(false);

const final1 = ref(false);
const final2 = ref(false);
</script>

<style scoped lang="scss"></style>
