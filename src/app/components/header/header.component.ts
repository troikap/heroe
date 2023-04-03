import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeService } from 'src/app/core/services/heroe/heroe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private heroeService: HeroeService
  ) {}
  
  async ngOnInit() {}

  onClickOptions(value: string) {
    if (value == 'reset') this.heroeService.resetHeroe();
    if (value == 'list') this.router.navigateByUrl('list-heroe');
    if (value == 'add') this.router.navigateByUrl('add-edit-heroe');
  }
}
