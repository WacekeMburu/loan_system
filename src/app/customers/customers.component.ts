import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatMenuModule],

})
export class CustomersComponent {
router: any;
// clearApplications() {
// throw new Error('Method not implemented.');
// }
// application: any;


navigateToPage() {
  this.router.navigate(['/add-customers']);
}
}


