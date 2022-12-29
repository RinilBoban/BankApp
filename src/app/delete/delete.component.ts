import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  @Input() item: string|undefined;
  // input used to hold data from parent component

  @Output() onCancel = new EventEmitter(); 
    // input used to hold data from child component
  // onCanel - user defined event

  @Output() onDelete = new EventEmitter(); 


  constructor() { }

  ngOnInit(): void {
  }
  
  cancel(){
    this.onCancel.emit();
  }

  delete(){
    // alert('delete clicked')
    this.onDelete.emit(this.item);
  }

}
