import { Args, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import { GetStandingsArgs } from './dpc.args';
import { DPCService } from './dpc.service'; // eslint-disable-line @typescript-eslint/consistent-type-imports
import { TeamStandingResponse } from './dpc.type';

@Service()
@Resolver()
export class SchemaResolver {
  constructor(private dpcService: DPCService) { }

  @Query(() => TeamStandingResponse)
  async getStandings(@Args(() => GetStandingsArgs) args: GetStandingsArgs): Promise<TeamStandingResponse> {
    return await this.dpcService.getStandings(args);
  }
}
