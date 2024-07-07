import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Style, Styles } from '../../models/style';
import { StyleService } from '../../service/style.service';

@Component({
  selector: 'app-manage-style',
  templateUrl: './manage-style.component.html',
  styleUrl: './manage-style.component.css'
})
export class ManageStyleComponent implements OnInit{
  isSidebarOpen: boolean = false; // Ban đầu sidebar đóng

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  styles: Style[] = [];
  style: Style = new Style();
  searchText: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private styleSevice: StyleService,
    
  ) {}
  ngOnInit(): void{
    this.loadStyle();
  }
  loadStyle(){
    // this.styleSevice.getStyles().subscribe((styles: Styles) =>{
    //   this.styles = styles.styleList;
    // });
    this.styles = this.styleSevice.getStyles().styleList;
  }
  getStyle(id: number, event: any){
    this.styleSevice.getStyle(id).subscribe((style : Style) =>{
      this.style = style;
    });
    event.show()
  }
  addStyle(){
    this.styleSevice.addStyle(this.style).subscribe(() => {
      this.loadStyle();
      this.clearForm();
    });
  }
  updateStyle(){
    this.styleSevice.editStyle(this.style).subscribe(() => {
      this.loadStyle();
      this.clearForm();
    });

  }
  deleteStyle(styleId: number){
    this.styleSevice.deleteStyle(styleId).subscribe(() => {
      this.loadStyle();
    });
  }
  clearForm() {
    this.style = new Style();
  }
  onSearch() {
    this.styleSevice.searchStyle(this.searchText).subscribe(() => {
      this.loadStyle();
    });
  }

}
