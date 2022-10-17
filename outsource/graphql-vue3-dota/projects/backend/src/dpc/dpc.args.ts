import { ArgsType, Field, Int } from 'type-graphql';
import 'reflect-metadata';

@ArgsType()
export class GetStandingsArgs {
  @Field(() => Int, { defaultValue: 7 })
  registrationPeriod?: number;
}
