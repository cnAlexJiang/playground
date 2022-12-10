import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import card from '../src/components/card.vue'

const teamMockData = {
  "team_logo": "1768194395980560504",
  "team_logo_url": "https://steamusercontent-a.akamaihd.net/ugc/1768194395980560504/81579A4F0055C88DACF7F52C77767A74D503CA57/",
  "team_abbreviation": "PLGD",
  "team_id": 15,
  "team_name": "PSG.LGD",
  "total_points": 1000,
  "total_earnings": 335000,
  "league_results": [
    {
      "earnings": 30000,
      "league_id": 13716,
      "points": 300,
      "standing": 1,
      "timestamp": 1642948562,
      "__typename": "LeagueResult",
      "league_info": {
        "name": "xxx"
      }
    }
  ]
};

describe('card.vue', () => {
  it('should render', () => {
    const wrapper = mount(card, { props: { team: teamMockData, isExpand: true, } })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
