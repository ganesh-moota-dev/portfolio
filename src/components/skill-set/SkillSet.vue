<template>
  <div class="skill-sets container">
    <div class="skill-set-header center">
      <form
        class="search-skills-form"
        onsubmit="return false"
      >
        <img :src="ICONS.searchIcon" alt="search-icon" />
        <input
          v-model="searchText"
          type="search"
          placeholder="Search my Skills"
          @input="runSearchQuery"
        />
      </form>
    </div>
    <div class="skill-set-body">
      <div v-for="skill of filteredSkills" class="skill-set" :key="skill.title">
        <template v-if="isListNotEmpty(skill.list)">
      
        <p class="skills-title">{{ skill.title }}</p>
        <div class="frontend-basics d-flex flex-wrap">
          <div
            v-for="lang in skill.list"
            :key="lang.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="lang.iconPath" alt="" />
            <p class="skill-icon-name">{{ lang.name }}</p>
          </div>
        </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script src="./SkillSet.js"></script>
<style scoped src="./SkillSet.css"></style>
