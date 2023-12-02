import { getLocaleEraNames } from '@angular/common';
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
    status_changed_by: "Delight",
    leave_details: "I am writing to formally request a leave of absence from work starting [start date] to [end date]. The reason for this leave is [briefly explain the reason, such as personal reasons, family matters, or health concerns].I have ensured that my responsibilities are up to date, and I will make every effort to complete any pending tasks before my departure. I am willing to delegate my duties and provide any necessary training for the smooth continuation of projects during my absence.I kindly request your approval for this leave and am willing to discuss further details at your convenience.",
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