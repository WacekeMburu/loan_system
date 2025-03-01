import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manage-loans',
  templateUrl: './manage-loans.component.html',
  styleUrls: ['./manage-loans.component.css']
})
export class ManageLoansComponent implements OnInit {
  loans: any[] = [];
  loanForm: FormGroup;
  editIndex: number | null = null;


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


  ngOnInit() {
    this.loadLoans();
  }

  loadLoans() {
    this.loans =JSON.parse(localStorage.getItem('loans') || '[]');
  //   const storedLoans = localStorage.getItem('loans');
  //   this.loans = storedLoans ? JSON.parse(storedLoans) : [];
  }

  editLoan(index: number) {
    this.editIndex = index;
    this.loanForm.setValue(this.loans[index]);
    
  }

  updateLoan() {
    if (this.loanForm.valid && this.editIndex !== null) {
      this.loans[this.editIndex] = this.loanForm.value;
      localStorage.setItem('loans', JSON.stringify(this.loans));
      this.editIndex = null;
      this.loanForm.reset();
    }
  }
  deleteLoan(index: number) {
    if (confirm('Are you sure you want to delete this loan?')) {
      this.loans.splice(index, 1);
      localStorage.setItem('loans', JSON.stringify(this.loans));
    }
  }


}

