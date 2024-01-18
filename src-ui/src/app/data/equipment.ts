import { MatchingModel } from './matching-model'

export interface Equipment extends MatchingModel {
  last_equipment?: string // Date
  vin_number?: string
}
