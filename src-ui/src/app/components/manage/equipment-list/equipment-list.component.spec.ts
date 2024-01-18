import { ComponentFixture, TestBed } from '@angular/core/testing'
import { EquipmentListComponent } from './equipment-list.component'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { DatePipe } from '@angular/common'
import { SortableDirective } from 'src/app/directives/sortable.directive'
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { PageHeaderComponent } from '../../common/page-header/page-header.component'
import { IfPermissionsDirective } from 'src/app/directives/if-permissions.directive'
import { EquipmentService } from 'src/app/services/rest/equipment.service'
import { of } from 'rxjs'

describe('EquipmentListComponent', () => {
  let component: EquipmentListComponent
  let fixture: ComponentFixture<EquipmentListComponent>
  let equipmentsService: EquipmentService

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        EquipmentListComponent,
        SortableDirective,
        PageHeaderComponent,
        IfPermissionsDirective,
      ],
      providers: [DatePipe],
      imports: [
        HttpClientTestingModule,
        NgbPaginationModule,
        FormsModule,
        ReactiveFormsModule,
      ],
    }).compileComponents()
    equipmentsService = TestBed.inject(EquipmentService)
  })

  // Tests are included in management-list.compontent.spec.ts

  it('should use correct delete message', () => {
    jest.spyOn(equipmentsService, 'listFiltered').mockReturnValue(
      of({
        count: 3,
        all: [1, 2, 3],
        results: [
          {
            id: 1,
            name: 'Equipment1',
          },
          {
            id: 2,
            name: 'Equipment2',
          },
          {
            id: 3,
            name: 'Equipment3',
          },
        ],
      })
    )
    fixture = TestBed.createComponent(EquipmentListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()

    expect(
      component.getDeleteMessage({ id: 1, name: 'Equipment1' })
    ).toEqual(
      'Do you really want to delete the equipment "Equipment1"?'
    )
  })

  it('should support very old date strings', () => {
    jest.spyOn(equipmentsService, 'listFiltered').mockReturnValue(
      of({
        count: 1,
        all: [1],
        results: [
          {
            id: 1,
            name: 'Equipment1',
            last_equipment: '1832-12-31T15:32:54-07:52:58',
          },
        ],
      })
    )
    fixture = TestBed.createComponent(EquipmentListComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })
})
