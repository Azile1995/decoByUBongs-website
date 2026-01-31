

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-quote',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent {
  quoteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      message: ['']
    });
  }
  submitQuote() {
    if (this.quoteForm.invalid) {
      this.quoteForm.markAllAsTouched();
      return;
    }

    console.log('Quote Request:', this.quoteForm.value);

    // 🔌 Later → send to backend API
    // this.apiService.sendQuote(this.quoteForm.value).subscribe()

    alert('Quote request sent successfully!');
    this.quoteForm.reset();
  }
}
