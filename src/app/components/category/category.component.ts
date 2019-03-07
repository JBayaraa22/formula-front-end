import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/models/category';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories : Category[]
  constructor(private catService : CategoryService , private snackBar : MatSnackBar) { }

  ngOnInit() { 
    this.catService.getCategories().subscribe(data=>{
      if(data.response.code == 200)
      {
        this.categories = data.data
      }
      else {
        this.snackBar.open("Интернет холболтоо шалгана уу 🤔", "Хаах");
      }
    })
  }

}
