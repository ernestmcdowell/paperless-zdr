import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Equipment } from 'src/app/data/equipment'
import { AbstractNameFilterService } from './abstract-name-filter-service'

@Injectable({
  providedIn: 'root',
})
export class EquipmentService extends AbstractNameFilterService<Equipment> {
  constructor(http: HttpClient) {
    super(http, 'equipments')
  }
}
