import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customers',
  templateUrl: './add-customers.component.html',
  styleUrls: ['./add-customers.component.css']
})
export class AddCustomersComponent {

  loanForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      amount: ['', [Validators.required, Validators.min(1000)]],
      term: ['', [Validators.required, Validators.min(6)]],
      purpose: ['', Validators.required],
      income: ['', [Validators.required, Validators.min(5000)]]
    });
  }

  onSubmit() {

    const formData = this.loanForm.value;

    // Get existing applications from LocalStorage
    const existingApplications = JSON.parse(localStorage.getItem('loanApplications') || '[]');

    // Add new form data to the list
    existingApplications.push(formData);

    // Save back to LocalStorage
    localStorage.setItem('loanApplications', JSON.stringify(existingApplications));

    alert('Loan application submitted successfully!');
    console.log('Stored Loan Applications:', existingApplications);

    // Reset the form
    this.loanForm.reset();
  }
    // if (this.loanForm.valid) {
    //   alert('Form submitted successfully!');
    //   console.log('Loan Application Submitted:', this.loanForm.value);
    // } else {
    //   alert('Form is invalid. Please fill all required fields correctly.');
    // }


    // if (this.loanForm.valid) {
    //   const loanData = this.loanForm.value;

    //   localStorage.setItem('Add Loan', JSON.stringify(loanData));

    //   console.log('Add Loan Saved Locally:', loanData);
    // }
  }

  // To retrieve data
//   const savedData = localStorage.getItem('loanApplication');
// if (savedData) {
//   console.log('Retrieved Loan Data:', JSON.parse(savedData));
// }


