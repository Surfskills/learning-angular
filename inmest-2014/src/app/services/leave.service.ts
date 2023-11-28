import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
private leavesDB = [
  {
    id: 1,
    leave_type: "Maternity",
    start_date: "Dec 20, 2023",
    end_date: "Mar 20, 2024",
    created_by: "Fred",
    status: "PENDING",
    last_modified: "Nov 27, 2023",
    status_changed_by: "Delight"
  },

];
  constructor() { }

  getLeaves() {
    return of(this.leavesDB);
  }

  getLeaveById(id: number) {
    const leaveData = this.leavesDB.find(el => el.id === id);
    return of(leaveData);
  }
}