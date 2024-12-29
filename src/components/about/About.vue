<template>
  <div class="container">
    <div class="about-container">
      <div class="about-header center">
        <div class="about-title">ganesh-moota@dev</div>
        <div
          class="about-header-close-icon-container center"
          @click="navigateToHome"
        >
          <img class="about-header-close-icon" :src="ICONS.cancelIcon" alt="" />
        </div>
      </div>
      <div class="about-body">
        <p class="cmd-prefix">
          <span class="text-green">ganesh-moota@dev</span
          ><span class="text-white">:</span> <span class="text-blue">~</span
          ><span class="text-white">$</span>
          <span class="text-white"> whoami</span>
        </p>
        <p class="cmd-prefix text-white">
          {{ bioDescription }}
        </p>
        <p class="cmd-prefix">
          <span class="text-green">ganesh-moota@dev</span
          ><span class="text-white">:</span> <span class="text-blue">~</span
          ><span class="text-white">$</span>
          <span class="text-white"> pwd</span>
        </p>
        <p class="cmd-prefix text-white">~/India/Maharashtra/Mumbai</p>
      </div>
    </div>
  </div>
</template>

<script src="./About.js"></script>
<style scoped src="./About.css"></style>
