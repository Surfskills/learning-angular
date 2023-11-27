import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-leaves',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './leaves.component.html',
  styleUrl: './leaves.component.scss'
})
export class LeavesComponent {
  leaves = [
    {id: 1, 
    leave_type: "Maternity", 
    start_date: "Dec 20, 2023", 
    end_date: "March 20, 2024",
    status: "PENDING",
    created_by: "Fred",
    last_modified: "Nov 27, 2013",
    status_changed_by: "Delight"},

    {id: 1, 
      leave_type: "Maternity", 
      start_date: "Dec 20, 2023", 
      end_date: "March 20, 2024",
      status: "PENDING",
      created_by: "Fred",
      last_modified: "Nov 27, 2013",
      status_changed_by: "Delight"},
      
      {id: 1, 
        leave_type: "Maternity", 
        start_date: "Dec 20, 2023", 
        end_date: "March 20, 2024",
        status: "PENDING",
        created_by: "Fred",
        last_modified: "Nov 27, 2013",
        status_changed_by: "Delight"}
  ];

}
