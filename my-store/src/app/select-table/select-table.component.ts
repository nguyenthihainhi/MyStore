import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-select-table',
  templateUrl: './select-table.component.html',
  styleUrl: './select-table.component.css'
})
export class SelectTableComponent implements  AfterViewChecked, AfterViewInit{
  @Input() dataSelect!: (number | string)[];
  selectedData: string | null = `size`;
  isOpen: boolean = false;
  @ViewChild('toggleButton') toggleButton!: ElementRef;
  @ViewChild('dropMenuSelect') dropMenuSelect!: ElementRef;



  constructor(private renderer: Renderer2){
  }


  ngAfterViewInit(): void {

    this.renderer.listen('window','click',(e: Event) => {
      /**
       * Only run when toggleButton not clicked
       * And the dropMenuSelect itself is checked here, and it's where we check just outside of
              * the dropMenuSelect and button the condition abbove must close the dropMenuSelect
       */
      if(e.target !== this.toggleButton.nativeElement && e.target !== this.dropMenuSelect.nativeElement){
        this.isOpen = false;
      }
    })
  }
  ngAfterViewChecked(): void {
    
  }

  selectItem(e: MouseEvent){
    if(e.target instanceof HTMLElement ) { 
      this.selectedData = e.target.textContent;
    }
  }

  toggleSelect(e: MouseEvent){
    this.isOpen = !this.isOpen;
    e.stopPropagation();
  }
}
