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
      customerName: ['', Validators.required],
      loanAmount: ['', [Validators.required, Validators.min(1)]],
      interestRate: ['', [Validators.required, Validators.min(0)]],
      loanTerm: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      loanType: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.loadLoans();
  }

  loadLoans() {
    const storedLoans = localStorage.getItem('loans');
    this.loans = storedLoans ? JSON.parse(storedLoans) : [];
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


}

