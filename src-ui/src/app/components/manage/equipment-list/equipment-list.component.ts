import { Component } from '@angular/core'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { FILTER_HAS_EQUIPMENT_ANY } from 'src/app/data/filter-rule-type'
import { Equipment } from 'src/app/data/equipment'
import { CustomDatePipe } from 'src/app/pipes/custom-date.pipe'
import { DocumentListViewService } from 'src/app/services/document-list-view.service'
import {
  PermissionsService,
  PermissionType,
} from 'src/app/services/permissions.service'
import { EquipmentService } from 'src/app/services/rest/equipment.service'
import { ToastService } from 'src/app/services/toast.service'
import { EquipmentEditDialogComponent} from '../../common/edit-dialog/equipment-edit-dialog/equipment-edit-dialog.component'
import { ManagementListComponent } from '../management-list/management-list.component'

@Component({
  selector: 'pngx-equipment-list',
  templateUrl: './../management-list/management-list.component.html',
  styleUrls: ['./../management-list/management-list.component.scss'],
  providers: [{ provide: CustomDatePipe }],
})
export class EquipmentListComponent extends ManagementListComponent<Equipment> {
  constructor(
    equipmentService: EquipmentService,
    modalService: NgbModal,
    toastService: ToastService,
    documentListViewService: DocumentListViewService,
    permissionsService: PermissionsService,
    private datePipe: CustomDatePipe,
  ) {
    super(
      equipmentService,
      modalService,
      EquipmentEditDialogComponent,
      toastService,
      documentListViewService,
      permissionsService,
      FILTER_HAS_EQUIPMENT_ANY,
      $localize`equipment`,
      $localize`equipments`,
      PermissionType.Equipment,
      [
        {
          key: 'last_equipment',
          name: $localize`Last used`,
          valueFn: (c: Equipment) => {
            if (c.last_equipment) {
              let date = new Date(c.last_equipment)
              if (date.toString() == 'Invalid Date') {
                // very old date strings are unable to be parsed
                date = new Date(
                  c.last_equipment
                    ?.toString()
                    .replace(/-(\d\d):\d\d:\d\d/gm, `-$1:00`)
                )
              }
              return this.datePipe.transform(date)
            }
            return ''
          },
        },
        {
          key: 'vin_number',
          name: $localize`VIN Number`,
          valueFn: (equipment: Equipment) => equipment.vin_number,
        },
      ]
    )
  }

  getDeleteMessage(object: Equipment) {
    return $localize`Do you really want to delete the equipment "${object.name}"?`
  }
}
