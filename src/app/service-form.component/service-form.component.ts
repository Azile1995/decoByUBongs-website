import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api';


@Component({
selector: 'app-service-form',
standalone: true,
imports: [FormsModule],
templateUrl: './service-form.component.html'
})
export class ServiceFormComponent {
model = { title: '', description: '' };


constructor(private api: ApiService) {}


submit() {
this.api.addService(this.model);
alert('Service added');
this.model = { title: '', description: '' };
}
}