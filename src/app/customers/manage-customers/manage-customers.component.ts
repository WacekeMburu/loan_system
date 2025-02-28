import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.css']
})
export class ManageCustomersComponent {

  loanForm: FormGroup;
  applications: any[] = []; // Store retrieved applications
  editIndex: number | null = null; //Track index of the application being edited

  constructor(private fb: FormBuilder) {
    this.loanForm = this.fb.group({
      fullName: [''],
      email: [''],
      phone: [''],
      amount: [''],
      term: [''],
      purpose: [''],
      income: ['']
    });

    this.loadApplications(); // Load stored data on component initialization
  }

  onSubmit() {
    const formData = this.loanForm.value;

    // Get existing applications from LocalStorage
    const existingApplications = JSON.parse(localStorage.getItem('loanApplications') || '[]');

    if (this.editIndex !== null) {
      //update existing record
      existingApplications[this.editIndex] = formData;
      this.editIndex = null; //Reset edit mode
    } else {
    // Add new form data to the list
    existingApplications.push(formData);
    }

    // Save back to LocalStorage
    localStorage.setItem('loanApplications', JSON.stringify(existingApplications));

    alert(this.editIndex !== null ? 'Loan application updated successfully!' : 'Loan application submitted successfully!');

    // alert('Loan application submitted successfully!');
    // console.log('Stored Loan Applications:', existingApplications);

    this.loanForm.reset();
    this.loadApplications(); // Refresh displayed data
  }

  loadApplications() {
    this.applications = JSON.parse(localStorage.getItem('loanApplications') || '[]');
  }

  editApplication(index: number) {
    console.log("Edit button clicked for index:", index);
    this.editIndex = index;
    const application = this.applications[index];

    console.log("Selected Application Data:", application); // Check data

    this.loanForm.patchValue(application);//populate form with selected data
    console.log("Form after patchValue:", this.loanForm.value); // Check if form updates

  }

  deleteApplication(index: number) {
    if (confirm("Are you sure you want to delete this application?")) {
      let existingApplications = JSON.parse(localStorage.getItem('loanApplications') || '[]');
  
      existingApplications.splice(index, 1); // Remove the application at the selected index
  
      localStorage.setItem('loanApplications', JSON.stringify(existingApplications)); // Save the updated list
  
      this.loadApplications(); // Refresh the table
  
      alert("Loan application deleted successfully!");
    }
  }
  

  clearApplications() {
    localStorage.removeItem('loanApplications');
    this.applications = [];
  }

}
