<script setup lang="ts">
import { useDPC } from '@/composables/useDPC'
import { CONFIGS } from '@/configs'
import _ from 'lodash';

const season = $ref<number>(CONFIGS.SEASONS.THE_INTERNATIONAL_11);
const currentExpandId = ref(null);
const selectValue = ref(_.findKey(CONFIGS.SEASONS, i => i === season));
const isExpandSelect = ref(false);
const { standings, getStandings, isLoading, error } = useDPC()

watch(season, () => {
  getStandings(season)
}, { immediate: true })

const handleCardClick = (index) => {
  if (currentExpandId.value === index) {
    currentExpandId.value = -1;
  } else {
    currentExpandId.value = index;
  }
}

const toggleSelect = () => {
  isExpandSelect.value = !isExpandSelect.value;
}

const selectOption = (value) => {
  season = value;
  getStandings(season);
  selectValue.value = _.findKey(CONFIGS.SEASONS, i => i === value);
  isExpandSelect.value = false;
}
</script>

<template>
  <div class="p-index pb-14">
    <div class="pl-23 pr-23 pt-12 mb-5" style="text-align: center;">
      <h1 class="title mb-8">DPC Standings for {{ season }} season</h1>
      <!-- <select v-model="season" name="season">
        <option v-for="(value, key) in CONFIGS.SEASONS" :key="key" :value="value">
          {{ key }}
        </option>
      </select> -->
    </div>

    <div class="pl-23 pr-23 mb-5">
      <div class="select" style="width: 250px;">
        <div class="select-input" @click="toggleSelect">
          <div class="value">{{selectValue}}</div>
          <div></div>
          <div class="right-bar" style="background-image: url(&quot;https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/arrow_solid_left.png&quot;);"></div>
        </div>
        <div :class="'option-box ' + (isExpandSelect ? 'show' : 'unshow')">
          <div class="option" v-for="(value, key) in CONFIGS.SEASONS" :key="key" :value="value" @click="selectOption(value)">
            {{ key }}
          </div>
        </div>
      </div>
    </div>

    <h2 v-if="isLoading" class="loading">
      <img src="https://hbimg.huaban.com/87106f0be2e8064143ed6c91a911f81e2cf13fb81bd840-OinHaZ_fw658" />
    </h2>
    <ul v-else class="pl-15 pr-15">
      <li v-for="team in standings" :key="team.team_id" class="mb-2" @click="handleCardClick(team.team_id)">
        <card :team="team" :isExpand="currentExpandId === team.team_id"></card>
      </li>
    </ul>
    <div v-if="error" class="error">{{error}}</div>
  </div>
</template>

