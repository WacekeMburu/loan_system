import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-loans',
  templateUrl: './add-loans.component.html',
  styleUrls: ['./add-loans.component.css']
})
export class AddLoansComponent {
  loanForm: FormGroup;
  loans: any[] = [] //Temporary storage for loans

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      borrowerName: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(1)]],
      interestRate: ['', [Validators.required, Validators.min(0)]],
      tenure: ['', [Validators.required, Validators.min(1)]],
      loanType: ['', Validators.required],
      startDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loanForm.valid) {
      const loanData = this.loanForm.value;
      let loans = JSON.parse(localStorage.getItem('loans') || '[]');
      loans.push(loanData);
      localStorage.setItem('loans', JSON.stringify(loans));
      console.log('Loan Data Saved:', loanData);
      alert('Loan successfully added and saved to local storage!');
      this.loanForm.reset();
    }}
  }

  //     this.loans.push(this.loanForm.value); // Store loan temporarily
  //     console.log('Loan Added:', this.loanForm.value);
  //     this.loanForm.reset(); // Reset form after submission
  //   }
  // }


  



