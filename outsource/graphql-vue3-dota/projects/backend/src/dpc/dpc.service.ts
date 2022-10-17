import { Inject, Service } from 'typedi';
import type { TeamStandingResponse } from './dpc.type';
import type { GetStandingsArgs } from './dpc.args';
import 'reflect-metadata';
import type { DPCClient } from '@/providers/dpc.provider';
import { dpcProvider } from '@/providers/dpc.provider';

@Service()
export class DPCService {
  constructor(
    @Inject(dpcProvider)
    private dpcClient: DPCClient,
  ) { }

  async getStandings({ registrationPeriod }: GetStandingsArgs): Promise<TeamStandingResponse> {
    const standingsResponse: TeamStandingResponse = {
      standings: [],
    };

    try {
      const standings = await this.dpcClient.getDPCStandings(registrationPeriod);
      standingsResponse.standings = standings;
    } catch (e) {
      console.error(e);
      standingsResponse.error = 'Failed to get DPC standings';
      return standingsResponse;
    }

    return standingsResponse;
  }
}
