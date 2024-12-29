<template>
  <div class="app-navbar d-flex">
    <div class="app-nav-items">
      <div
        v-for="navItem in navItems"
        :key="navItem.tooltipText"
        class="app-nav-item"
        :class="navItem.isActive ? 'active' : ''"
        @click="navigateTo(navItem)"
      >
        <img :src="navItem.iconPath" class="nav-icon" alt="nav-icon" />
        <span class="nav-item-tooltip">{{ navItem.tooltipText }}</span>
        <span class="active-link" v-if="navItem.isActive"></span>
      </div>
    </div>

    <div
      class="app-nav-item last-nav-item"
      :class="lastNavItem.isActive ? 'active' : ''"
      @click="navigateTo(lastNavItem)"
    >
      <div class="nav-icon grid">
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
        <span class="grid-item white-square"></span>
      </div>
      <span class="nav-item-tooltip">{{ lastNavItem.tooltipText }}</span>
    </div>
  </div>
</template>

<script src="./Navbar.js"></script>
<style scoped src="./Navbar.css"></style>
