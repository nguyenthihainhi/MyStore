import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { Collection, Collections } from '../../models/collection';
import { CollectionService } from '../../service/collection.service';

@Component({
  selector: 'app-manage-collection',
  templateUrl: './manage-collection.component.html',
  styleUrl: './manage-collection.component.css'
})
export class ManageCollectionComponent implements OnInit{
  isSidebarOpen: boolean = false; // Ban đầu sidebar đóng

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  collections: Collection[] = [];
  collection: Collection = new Collection();
  searchText: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private collectionService : CollectionService,
    
  ) {}
  ngOnInit(): void{
    this.loadCollection();
  }
  loadCollection(){
    // this.collectionService.getCollections().subscribe((colls: Collections) =>{
    //   this.collections = colls.collectionList;
    // });
    this.collections = this.collectionService.getCollections().collectionList;
  }
  getCollection(id: number, event: any){
    this.collectionService.getCollection(id).subscribe((coll : Collection) =>{
      this.collection = coll;
    });
    event.show()
  }
  addCollection(){
    this.collectionService.addCollection(this.collection).subscribe(() => {
      this.loadCollection();
      this.clearForm();
    });
  }
  updateCollection(){
    this.collectionService.editCollection(this.collection).subscribe(() => {
      this.loadCollection();
      this.clearForm();
    });

  }
  deleteStyle(Id: number){
    this.collectionService.deleteCollection(Id).subscribe(() => {
      this.loadCollection();
    });
  }
  clearForm() {
    this.collection = new Collection();
  }
  onSearch() {
    this.collectionService.searchCollection(this.searchText).subscribe(() => {
      this.loadCollection();
    });
  }
}
