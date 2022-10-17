<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  team: object,
  isExpand: boolean,
}>();

document.addEventListener('error', function (e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    e.target.src = 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/team_unknown_web.png';
  }
},true);
</script>

<template>
  <div class="c-card">
    <div class="box" @click="openBoard">
      <div class="logo">
        <img :src="`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/teams_override/${team.team_id}.png`" />
      </div>
      <div class="name">{{team.team_name}}</div>
      <div class="total-points">{{team.total_points}}</div>
    </div>
    <div :class="'expand ' + (isExpand ? 'show' : '')" :style="isExpand ? `height: ${team.league_results.length * 40 + 8}px;` : ''">
      <div class="league" v-for="league in team.league_results" :key="league.league_id">
        <div class="time">{{new Date(league.timestamp * 1000).toDateString()}}</div>
        <div class="img" :style="`background-image: url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/leagues/${league.league_id}/images/image_8.png');`"></div>
        <div class="standing">{{league.standing}}</div>
        <div class="name">{{league.league_info.name}}</div>
        <div class="points">{{league.points}}</div>
      </div>
    </div>
  </div>
</template>