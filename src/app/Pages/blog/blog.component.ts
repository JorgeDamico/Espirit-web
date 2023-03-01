import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrayNotas:any = []

  constructor(
    private notasSrv:BlogService
  ) {
    this.obtenerNotas()
   }

  ngOnInit(): void {
  }

  obtenerNotas(){
    this.notasSrv.getNotas()
    .subscribe(data=>{
      console.log(data)
      this.arrayNotas = data;
    })
  }

}
