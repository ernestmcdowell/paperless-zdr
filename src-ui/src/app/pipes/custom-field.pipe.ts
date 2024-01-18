import { Inject, Injectable, LOCALE_ID } from '@angular/core'
import { CustomField } from '../data/custom-field'
import { CustomFieldInstance } from '../data/custom-field-instance'
import { DatePipe } from '@angular/common'
import { SettingsService } from '../services/settings.service'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CustomFieldService {
  private customFields: CustomField[]; // Assuming this gets populated somehow

  constructor(private http: HttpClient) {
     this.loadCustomFields();
   }

   private loadCustomFields() {
     this.http.get<CustomField[]>('/api/custom-fields').subscribe(
       data => this.customFields = data,
       error => console.error('Error loading custom fields', error)
     );
   }


  public getFieldNameById(id: string) : string {
    const field = this.customFields.find(field => field.name === id);
    return field ? field.name : 'Unknown';
  }
}
