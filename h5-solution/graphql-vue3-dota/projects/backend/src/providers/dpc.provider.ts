import { Container, Token } from 'typedi';
import type { AxiosInstance } from 'axios';
import axios from 'axios';
import { appConfig } from '../common/config'; // eslint-disable-line @typescript-eslint/consistent-type-imports
import _ from 'lodash';

export const dpcProvider = new Token('DPC_PROVIDER');

const config = Container.get(appConfig);

export interface TeamStandingResponse {
  results: TeamStanding[]
}

export interface LeagueInfoResponse {
  data: any;
}

export interface TeamStanding {
  team_abbreviation: string
  team_id: number
  team_logo: string
  team_logo_url: string
  team_name: string
  total_earnings: number
  total_points: number
  league_results: LeagueResult[]
}

export interface LeagueResult {
  earnings?: number
  league_id?: number
  points?: number
  standing?: number
  audit_action?: number
  timestamp?: number
  league_info?: LeagueInfo
}

export interface LeagueInfo {
  info?: any;
  name?: string;
}

export class DPCClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: config.DOTA2_API_BASE_URL,
    });
  }

  async getDPCStandings(registrationPeriod = 7): Promise<TeamStanding[]> {
    const { data } = await this.client.get<TeamStandingResponse>('IDOTA2DPC/GetDPCStandings/v001', {
      params: {
        registration_period: registrationPeriod,
      },
    });

    const leagueIds: string[] = [];
    for (const team of data.results) {
      for (const league of team.league_results) {
        leagueIds.push(String(league.league_id));
      }
    }
    const leagueInfos = await Promise.all(leagueIds.map(id => this.getLeagueInfo(id)));
    for (const team of data.results) {
      for (const league of team.league_results) {
        const info = _.find(leagueInfos, (info) => league.league_id === (info && info.info.league_id));
        league.league_info = info ? info.info : { name: '' };
      }
    }

    const standings = data.results;

    return standings;
  }

  // @ts-expect-error Please remove this line after you implemented this method
  private async getLeagueInfo(leagueId: string): Promise<LeagueInfo> {
    /**
     * TODO: implement this function
     * get individual league info from dota2 web api
     * The example endpoint URL looks like: https://www.dota2.com/webapi/IDOTA2League/GetLeagueData/v001?league_id=13716&delay_seconds=0
     * You need to send a GET request to the endpoint to get the league info response.
     * Please define correct data types for the response.
    */
    const result = await this.client.get<LeagueInfoResponse>('/IDOTA2League/GetLeagueData/v001', {
      params: {
        league_id: leagueId,
        delay_seconds: 0
      }
    });
    return result.data;
  }
}

const dpcClient = new DPCClient();

Container.set(dpcProvider, dpcClient);
