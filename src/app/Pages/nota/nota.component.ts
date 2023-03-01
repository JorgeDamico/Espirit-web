import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  public nota:any | undefined

  constructor(
    private activatedRoute:ActivatedRoute,
    private notasSrv:BlogService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("notaID")
    this.activatedRoute.params
    .subscribe(data=>{
      console.log(data)
    })
    console.log("id",id)
    if(id){
      this.notasSrv.getNotaById(id).subscribe((response:any)=>{
        this.nota = response                        
        console.log(this.nota)
      })
    }
  }

  ngOnInit(): void {
  }

}
