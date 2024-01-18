import { Component } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap'
import { EditDialogComponent } from 'src/app/components/common/edit-dialog/edit-dialog.component'
import { DEFAULT_MATCHING_ALGORITHM } from 'src/app/data/matching-model'
import { Equipment } from 'src/app/data/equipment'
import { EquipmentService } from 'src/app/services/rest/equipment.service'
import { UserService } from 'src/app/services/rest/user.service'
import { SettingsService } from 'src/app/services/settings.service'

@Component({
  selector: 'pngx-equipment-edit-dialog',
  templateUrl: './equipment-edit-dialog.component.html',
  styleUrls: ['./equipment-edit-dialog.component.scss'],
})
export class EquipmentEditDialogComponent extends EditDialogComponent<Equipment> {
  constructor(
    service: EquipmentService,
    activeModal: NgbActiveModal,
    userService: UserService,
    settingsService: SettingsService
  ) {
    super(service, activeModal, userService, settingsService)
  }

  getCreateTitle() {
    return $localize`Create new equipment`
  }

  getEditTitle() {
    return $localize`Edit equipment`
  }

  getForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(''),
      vin_number: new FormControl(''),
      matching_algorithm: new FormControl(DEFAULT_MATCHING_ALGORITHM),
      match: new FormControl(''),
      is_insensitive: new FormControl(true),
      permissions_form: new FormControl(null),
    })
  }
}
