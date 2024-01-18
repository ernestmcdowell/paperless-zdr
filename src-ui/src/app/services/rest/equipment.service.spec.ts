import { EquipmentService } from './equipment.service'
import { commonAbstractNameFilterPaperlessServiceTests } from './abstract-name-filter-service.spec'

commonAbstractNameFilterPaperlessServiceTests(
  'equipments',
  EquipmentService
)
