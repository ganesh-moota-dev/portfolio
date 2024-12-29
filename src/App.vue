<template>
  <div id="app" class="center">
    <ContactMe />
    <template>
      <router-view></router-view>
    </template>
    <Navbar />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue"
import ContactMe from "@/components/contact-me/ContactMe.vue"

export default {
  name: "App",
  components: {
    Navbar,
    ContactMe
  }
};
</script>

<style src="./App.css"></style>>
