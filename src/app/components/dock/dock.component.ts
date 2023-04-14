import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { TabMenuModule } from 'primeng/tabmenu';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.css'],
  standalone: true,
  imports: [CommonModule, MenubarModule, TabMenuModule],
})
export class DockComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'movies', icon: 'pi pi-fw pi-video', routerLink: '/movies' },
    ];
  }
}
