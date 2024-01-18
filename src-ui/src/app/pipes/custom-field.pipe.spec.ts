import { Pipe, PipeTransform } from '@angular/core';
import { CustomFieldService } from './custom-field.pipe'

@Pipe({
  name: 'customFieldName'
})
export class CustomFieldPipe implements PipeTransform {

  constructor(private customFieldService: CustomFieldService) {}

  transform(fieldId: string) : string{
    return this.customFieldService.getFieldNameById(fieldId);
  }
}
