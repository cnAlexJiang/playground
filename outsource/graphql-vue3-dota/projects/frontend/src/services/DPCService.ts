import { gql } from '@apollo/client'
import { gqlClient } from './ApiClient'
import type { TeamStandingResponse } from '@/types'

export async function getStandings(season: number) {
  const response = await gqlClient.query<{ getStandings: TeamStandingResponse }>({
    query: gql`
      query GetStandings($registrationPeriod: Int) {
        getStandings(registrationPeriod: $registrationPeriod) {
          error
          standings {
            team_logo
            team_logo_url
            team_abbreviation
            team_id
            team_name
            total_points
            total_earnings
            league_results {
              earnings
              league_id
              points
              standing
              timestamp
              league_info {
                name
              }
            }
          }
        }
      }
    `,
    variables: {
      registrationPeriod: season,
    },
  })

  return response.data.getStandings
}
