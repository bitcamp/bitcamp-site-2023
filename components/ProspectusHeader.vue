<template>
  <section class="Rtable js-RtableTabs">
    <div class="Rtable-grid">
      <div class="Rtable-cell Rtable-cell-blank Rtable-cell--head"></div>
      <div
        v-for="(tier, index) in tierNames"
        :key="index"
        class="Rtable-cell Rtable-cell--head"
        :class="'Rtable-cell-' + tier"
      >
        {{ tier }}
      </div>

      <div
        class="Rtable-cell Rtable-category-cell Rtable-category-cell-full first-row"
        style="font-weight: bolder"
      >
        Contribution
      </div>

      <div
        v-for="(price, index) in prices"
        :key="index"
        class="Rtable-cell first-row"
        :class="'Rtable-cell-' + tierNames[index]"
      >
        {{ price }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SponsorshipProspectusSection',
  props: {
    tierNames: {
      type: Array,
      required: true,
    },
    prices: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
/* Hey :). Make sure to reference the color variables in the `bitcamp.css` file. Ex:
  - background-color: var(--color-bitcamp);
  - color: var(--color-midnight);
*/

/* Variables
================================== */
:root {
  --border-radius: 15px;
  --color-primary: var(--color-bitcamp);
  --color-Byte: #e7d8cc;
  --color-Kilo: #ffaf00;
  --color-Mega: #ff6312;
  --color-Giga: #ff062b;
  --color-Tera: #7f6c5f;
  --color-Peta: #538da4;
  --color-Virtual: #009151;
  --color-category: var(--color-sky);
  --color-light-text: white;
  --color-dark-text: var(--color-midnight);
  --color-border: white;
  --color-focus: cornflowerblue;
  --color-highlight: #ffaf3f;
  --icon-height: 18px;
}

*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

/* Overall Layout
================================== */
main {
  padding: 2rem 0;
}

hr.divider {
  height: 7px;
  opacity: 1;
  color: var(--color-highlight);
  margin: 3rem 0 0.5rem;
}

/* Typography
================================== */
body {
  /* Defaults */
  font-family: Avenir;
  font-size: 20px;
  line-height: 26px;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  color: var(--color-primary);
  text-decoration: underline;
}

.SupportTitle {
  color: var(--color-dark-text);
}

h1,
h2 {
  font-family: Aleo;
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  color: var(--color-primary);
}

h2 {
  text-transform: lowercase;
}

/* Home link
================================== */
.home-link {
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.home-link img {
  height: var(--icon-height);
  margin-right: 0.5em;
}

@media all and (max-width: 992px) {
  .home-link {
    position: static;
    margin-bottom: 1em;
  }
}

/* Tables
================================== */
.Rtable-grid {
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: 2fr (1fr);
  grid-template-columns: 2fr repeat(7, 1fr);
}

.Rtable-cell {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  padding: 0.5em 0.5em;
  overflow: hidden;
  border: solid 1px var(--color-border);
  font-family: Avenir;
  font-weight: 800;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

/* Cell styles
================================== */
.Rtable-cell {
  color: var(--color-dark-text);
  border-color: var(--color-light-text);
}

.Rtable-cell img {
  height: var(--icon-height);
}

.Rtable-cell p {
  margin: 0;
}

.Rtable-cell--head {
  font-family: Avenir;
  font-weight: 800;
  text-align: center;
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

.Rtable-cell-Byte {
  background-color: var(--color-Byte);
}

.Rtable-cell-Kilo {
  background-color: var(--color-Kilo);
}

.Rtable-cell-Mega {
  color: var(--color-light-text);
  background-color: var(--color-Mega);
}

.Rtable-cell-Giga {
  color: var(--color-light-text);
  background-color: var(--color-Giga);
}

.Rtable-cell-Tera {
  color: var(--color-light-text);
  background-color: var(--color-Tera);
}

.Rtable-cell-Peta {
  color: var(--color-light-text);
  background-color: var(--color-Peta);
}

.Rtable-cell-Virtual {
  color: var(--color-light-text);
  background-color: var(--color-Virtual);
}

.Rtable-cell--foot {
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  min-height: 30px;
  border-bottom: 0;
}

.Rtable-cell-blank {
  background-color: transparent;
}

.Rtable-category-cell {
  background-color: var(--color-category);
  font-weight: normal;
  text-align: left;
  -webkit-box-pack: left;
  -ms-flex-pack: left;
  justify-content: left;
}

.Rtable-category-cell-full {
  border-radius: var(--border-radius) 0 0 var(--border-radius);
  text-align: center;
}

.Rtable-category-cell.title-row {
  font-weight: 800;
  margin-top: 30px;
  border-top-left-radius: var(--border-radius);
}

.Rtable-category-cell-bottom {
  border-bottom-left-radius: var(--border-radius);
}

.Rtable-category-cell.title-row,
.Rtable-category-cell.first-row {
  /* Extra padding to account for missing question mark image */
  padding-left: 38px;
}

/* Question Popover
==================================== */
.popover {
  margin-right: 2em !important;
  border: 2px solid var(--color-highlight);
  border-radius: var(--border-radius);
  font-family: Avenir;
  font-size: 14px;
  line-height: 19px;
}

.popover-header {
  padding-top: 1rem;
  background-color: transparent;
  border: 0;
  font-family: Avenir;
  font-size: 14px;
  font-weight: bold;
  padding-bottom: 0.5em;
}

.popover-body {
  padding-top: 0;
}

.popover .popover-arrow {
  display: none;
}

.question-btn {
  line-height: 0;
  font-size: 16px;
  border: none;
  cursor: pointer;
  padding: 0.25em;
  margin-right: 0.25em;
}

.question-btn img {
  height: var(--icon-height);
  /* Turn the yellow question mark black when the popover is inactive */
  -webkit-filter: brightness(0);
  filter: brightness(0);
}

.question-btn[aria-describedby^='popover'] {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.question-btn[aria-describedby^='popover'] img {
  /* Turn the yellow question mark black when the popover is inactive */
  -webkit-filter: none;
  filter: none;
}

@media all and (max-width: 768px) {
  .Mega-active .question-btn img,
  .Giga-active .question-btn img,
  .Tera-active .question-btn img {
    -webkit-filter: brightness(0) invert(1);
    filter: brightness(0) invert(1);
  }

  .question-btn[aria-describedby^='popover'] img {
    /* Magic filters to match the focus color from https://codepen.io/sosuke/pen/Pjoqqp */
    -webkit-filter: brightness(0) invert(73%) sepia(44%) saturate(5841%)
      hue-rotate(194deg) brightness(96%) contrast(93%);
    filter: brightness(0) invert(73%) sepia(44%) saturate(5841%)
      hue-rotate(194deg) brightness(96%) contrast(93%);
  }

  .popover {
    border-color: var(--color-focus);
  }
}

/* Responsive
==================================== */
@media all and (max-width: 768px) {
  .Rtable-grid {
    -ms-grid-columns: 1.75fr 1fr;
    grid-template-columns: 1.75fr 1fr;
    -webkit-transition: background-color 250ms ease-in-out;
    -o-transition: background-color 250ms ease-in-out;
    transition: background-color 250ms ease-in-out;
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }

  /* Cell Colors
  ==================================== */
  .Rtable.Byte-active .Rtable-grid {
    background-color: var(--color-Byte);
  }

  .Rtable.Kilo-active .Rtable-grid {
    background-color: var(--color-Kilo);
  }

  .Rtable.Mega-active .Rtable-grid {
    background-color: var(--color-Mega);
  }

  .Rtable.Giga-active .Rtable-grid {
    background-color: var(--color-Giga);
  }

  .Rtable.Tera-active .Rtable-grid {
    background-color: var(--color-Tera);
  }

  .Rtable.Mega-active .Rtable-cell,
  .Rtable.Giga-active .Rtable-cell,
  .Rtable.Tera-active .Rtable-cell {
    color: var(--color-light-text);
  }

  /* Cell Styles
  ==================================== */
  .Rtable-cell {
    background-color: transparent;
    border-left: 0;
    border-right: 0;
    border-width: 1.5px;
    border-radius: 0;
  }

  .Rtable-cell.first-row {
    border-top: 0;
  }

  .Rtable-cell.last-row {
    border-bottom: 0;
  }

  .Rtable-category-cell {
    border-radius: 0;
    border-right: 2px solid var(--color-border);
  }

  .Rtable-category-cell-full {
    border-radius: 0;
  }

  /* Hidden Cells
  ==================================== */
  .Rtable-cell.title-row,
  .Rtable-cell--head,
  .Rtable-cell--foot,
  .hiddenSmall {
    display: none;
  }
}

/* Tab Styling
====================================== */
.Tablist {
  display: none;
}

@media all and (max-width: 768px) {
  .Tablist {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
    -webkit-box-pack: stretch;
    -ms-flex-pack: stretch;
    justify-content: stretch;
  }
}

.Tab {
  font-family: Avenir;
  width: 25%;
  text-align: center;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  padding: 0.5em 0;
  border: 0;
  border-top: 2px solid transparent;
  font-weight: 800;
  color: var(--color-dark-text);
  text-decoration: none;
  cursor: pointer;
  outline: 0;
}

.Tab.Byte {
  background-color: var(--color-Byte);
}

.Tab.Kilo {
  background-color: var(--color-Kilo);
}

.Tab.Mega {
  background-color: var(--color-Mega);
  color: var(--color-light-text);
}

.Tab.Giga {
  background-color: var(--color-Giga);
  color: var(--color-light-text);
}

.Tab.Tera {
  background-color: var(--color-Tera);
  color: var(--color-light-text);
}

.Tab.Peta {
  background-color: var(--color-Peta);
  color: var(--color-light-text);
}

.Tab.Virtual {
  background-color: var(--color-Virtual);
  color: var(--color-light-text);
}

.Tab:active,
.Tab:hover,
.Tab:focus {
  border: 2px solid var(--color-focus);
  -webkit-box-shadow: 0px 0px 3px var(--color-focus);
  box-shadow: 0px 0px 3px var(--color-focus);
  -webkit-clip-path: inset(-3px -3px 0px -3px);
  clip-path: inset(-3px -3px 0px -3px);
  border-bottom: 0;
  outline: 0;
}

.Tab[aria-selected='true'] {
  cursor: default;
}

/* Connect Section
=================================== */
.ConnectSection a {
  text-decoration: none;
  color: var(--color-dark-text);
}

.ConnectSection a:hover {
  text-decoration: underline;
}

.ConnectSection img {
  margin-right: 0.75em;
  width: 1em;
  line-height: 0;
}
</style>
