<template>
  <div class="skill-sets container">
    <div class="skill-set-header center">
      <form
        class="search-skills-form"
        onsubmit="return false"
        data-netlify="true"
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
      <div
        class="skill-set"
        v-if="isListNotEmpty(filteredProgramminglanguages.list)"
      >
        <p class="skills-title">{{ filteredProgramminglanguages.title }}</p>
        <div class="frontend-basics d-flex flex-wrap">
          <div
            v-for="lang in filteredProgramminglanguages.list"
            :key="lang.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="lang.iconPath" alt="" />
            <p class="skill-icon-name">{{ lang.name }}</p>
          </div>
        </div>
      </div>
      <div class="skill-set" v-if="isListNotEmpty(filteredFrontendSkills.list)">
        <p class="skills-title">{{ filteredFrontendSkills.title }}</p>
        <div class="frontend d-flex flex-wrap">
          <div
            v-for="frontendSkill in filteredFrontendSkills.list"
            :key="frontendSkill.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="frontendSkill.iconPath" alt="" />
            <p class="skill-icon-name">{{ frontendSkill.name }}</p>
          </div>
        </div>
      </div>
      <div
        class="skill-set"
        v-if="isListNotEmpty(filteredFrontendFrameworks.list)"
      >
        <p class="skills-title">{{ filteredFrontendFrameworks.title }}</p>
        <div class="frontend-basics d-flex flex-wrap">
          <div
            v-for="frontendFramework in filteredFrontendFrameworks.list"
            :key="frontendFramework.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="frontendFramework.iconPath" alt="" />
            <p class="skill-icon-name">{{ frontendFramework.name }}</p>
          </div>
        </div>
      </div>
      <div class="skill-set" v-if="isListNotEmpty(filteredBackendSkills.list)">
        <p class="skills-title">{{ filteredBackendSkills.title }}</p>
        <div class="frontend d-flex flex-wrap">
          <div
            v-for="backendSkill in filteredBackendSkills.list"
            :key="backendSkill.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="backendSkill.iconPath" alt="" />
            <p class="skill-icon-name">{{ backendSkill.name }}</p>
          </div>
        </div>
      </div>

      <div class="skill-set" v-if="isListNotEmpty(filteredDatabaseSkills.list)">
        <p class="skills-title">{{ filteredDatabaseSkills.title }}</p>
        <div class="frontend d-flex flex-wrap">
          <div
            v-for="databaseSkill in filteredDatabaseSkills.list"
            :key="databaseSkill.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="databaseSkill.iconPath" alt="" />
            <p class="skill-icon-name">{{ databaseSkill.name }}</p>
          </div>
        </div>
      </div>

      <div class="skill-set" v-if="isListNotEmpty(filteredOtherSkills.list)">
        <p class="skills-title">{{ filteredOtherSkills.title }}</p>
        <div class="frontend d-flex flex-wrap">
          <div
            v-for="skill in filteredOtherSkills.list"
            :key="skill.name"
            class="skill-icon-container"
          >
            <img class="skill-icon" :src="skill.iconPath" alt="" />
            <p class="skill-icon-name">{{ skill.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./SkillSet.js"></script>
<style scoped src="./SkillSet.css"></style>
