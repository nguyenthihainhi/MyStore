import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
  @Output() sidebarToggle = new EventEmitter<boolean>();
  isSidebarOpen: boolean = true;

  // Hàm để thay đổi trạng thái sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.sidebarToggle.emit(this.isSidebarOpen);
  }
}
