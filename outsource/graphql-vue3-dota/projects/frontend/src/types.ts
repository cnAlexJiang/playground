export interface LeagueInfo {
  // TODO: define league info type fields
  place_holder_field_please_remove_me_later?: number
}

export interface LeagueResult {
  earnings?: number
  league_id?: number
  points?: number
  standing?: number
  audit_action?: number
  timestamp: number
  league_info?: LeagueInfo
}

export interface TeamStanding {
  team_logo: string
  team_logo_url: string
  team_abbreviation: string
  team_id: number
  team_name: string
  total_points: number
  total_earnings: number
  league_results: LeagueResult[]
}

export interface TeamStandingResponse {
  error?: string
  standings: TeamStanding[]
}
