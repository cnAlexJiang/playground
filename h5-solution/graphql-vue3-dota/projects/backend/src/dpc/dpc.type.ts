import { Field, ObjectType } from 'type-graphql';
import 'reflect-metadata';

@ObjectType()
export class LeagueInfo {
  @Field(() => String, { nullable: true })
  name?: string;
}

@ObjectType()
export class LeagueResult {
  @Field(() => Number, { nullable: true })
  earnings?: number;

  @Field(() => Number, { nullable: true })
  league_id?: number;

  @Field(() => Number, { nullable: true })
  points?: number;

  @Field(() => Number, { nullable: true })
  standing?: number;

  @Field(() => Number, { nullable: true })
  audit_action?: number;

  @Field(() => Number)
  timestamp!: number;

  @Field(() => LeagueInfo, { nullable: true })
  league_info?: LeagueInfo;
}

@ObjectType()
export class TeamStanding {
  @Field(() => String)
  team_logo!: string;

  @Field(() => String)
  team_logo_url!: string;

  @Field(() => String)
  team_abbreviation!: string;

  @Field(() => Number)
  team_id!: number;

  @Field(() => String)
  team_name!: string;

  @Field(() => Number)
  total_points!: number;

  @Field(() => Number)
  total_earnings!: number;

  @Field(() => [LeagueResult])
  league_results!: LeagueResult[];
}

@ObjectType()
export class TeamStandingResponse {
  @Field(() => String, { nullable: true })
  error?: string;

  @Field(() => [TeamStanding])
  standings!: TeamStanding[];
}
