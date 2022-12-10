import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { DPCClient } from '../../src/providers/dpc.provider';
import _ from 'lodash';

const dpcClient = new DPCClient();

describe('getDPCStandings', () => {
  it('should return a result contain league info', async () => {
    const result = await (dpcClient as any).getDPCStandings(7);
    const team = _.find(result, { team_id: 15 });
    expect(team.team_name).toEqual('PSG.LGD');
    expect(team.league_results).to.toBeTypeOf('object');
    const league = _.find(team.league_results, { league_id: 13716 });
    expect(league.league_info).to.toBeTypeOf('object');
    expect(league.league_info.name).to.toBeTypeOf('string');
  })
})

describe('getLeagueInfo', () => {
  it('should return league info', async () => {
    const result = await (dpcClient as any).getLeagueInfo(13716);
    expect(result.info.league_id).toEqual(13716);
    expect(result.info.name).to.toBeTypeOf('string');
  });
})
