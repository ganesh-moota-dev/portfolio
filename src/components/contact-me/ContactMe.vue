<template>
    <section class="contact-me">
        <div v-for="contact in contacts" :key="contact.text" class="folder-icon" @click="openContactLink(contact.contactURL)">
            <img :src="folderIconPath" class="folder-icon-img" alt="icon-img">
            <p class="folder-icon-text">{{contact.text}}</p>
        </div>
    </section>
</template>

<script src="./ContactMe.js"></script>
<style scoped src="./ContactMe.css"></style>