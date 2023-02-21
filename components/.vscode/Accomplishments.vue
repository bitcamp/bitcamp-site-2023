<template>
    <div class="container">
      <div class="years">
        <div class="big">9</div>
        <div class="description">years of Bitcamp</div>
      </div>
      <div class="hackers">
        <div class="big">1200+</div>
        <div class="description">hackers and counting</div>
      </div>
      <div class="sponsors">
        <div class="big">20+</div>
        <div class="description">sponsors each year</div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts"></script>
  
  <style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5%;
    // background-color: rgba(53, 88, 148, 255);
    border-radius: 35px;
    min-width: 200px;
    border-style: solid;
  }
  
  .years {
    display: flex;
    flex-direction: column;
    float: left;
    width: 33%;
    text-align: center;
    // background-color: lightcoral;
    justify-content: center;
    margin: 2%;
  }
  
  .hackers {
    display: flex;
    flex-direction: column;
    float: left;
    text-align: center;
    width: 33%;
    // background-color: lightgray;
    justify-content: center;
    margin: 2%;
  }
  
  .sponsors {
    display: flex;
    flex-direction: column;
    float: right;
    text-align: center;
    width: 33%;
    // background-color: lightcoral;
    justify-content: center;
    margin: 2%;
  }
  
  .big {
    // background-color: lightgreen;
    font-size: 4rem;
    align-self: center;
    color: black;
    // font-weight: bold;
  }
  
  .description {
    // background-color: lightblue;
    font-size: 1rem;
    align-self: center;
    color: black;
  }
  
  @media (max-width: 768px) {
    .big {
      font-size: 3rem;
      align-self: center;
      color: black;
    }
  
    .description {
      font-size: 0.8rem;
      align-self: center;
      color: black;
    }
  }
  
  @media (max-width: 576px) {
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 5%;
      // background-color: rgba(53, 88, 148, 255)
      border-radius: 15px;
      // min-width: 200px;
      border-style: solid;
    }
  
    .big {
      // background-color: lightgreen;
      font-size: 3rem;
      align-self: center;
      color: black;
    }
  
    .description {
      // background-color: lightblue;
      font-size: 0.8rem;
      align-self: center;
      color: black;
      width: 100%;
    }
  }
  </style>
  