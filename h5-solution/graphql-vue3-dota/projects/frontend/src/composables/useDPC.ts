import type { TeamStanding } from '@/types'
import { getStandings as getStandingsSvc } from '@/services/DPCService'
import _ from 'lodash'

export function useDPC() {
    const standings = ref<TeamStanding[]>([])
    const isLoading = ref<boolean>(false)
    const error = ref<string>('')

    const getStandings = async (season: number): Promise<TeamStanding[]> => {
        isLoading.value = true

        const response = await getStandingsSvc(season)

        if (_.isEmpty(response.standings)) {
            error.value = 'Get data failed. Please try again later.';
        }

        standings.value = response.standings

        isLoading.value = false

        return response.standings
    }

    return {
        isLoading,
        standings,
        getStandings,
        error,
    }
}
