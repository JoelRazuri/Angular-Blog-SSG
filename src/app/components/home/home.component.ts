import { Component, OnInit } from '@angular/core';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { HeaderData, HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PostPreviewComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  private uiData: HeaderData = {
    title: 'Nuestro excelente blog',
    subtitle: 'Este es el subtitulo',
    thumbnail: 'https://placehold.art/1200x400'
  }
  constructor(private headerService: HeaderService) { }
  
  ngOnInit(){
    this.headerService.uiData.set(this.uiData)
  }

}
