import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroeModel } from 'src/app/core/models/heroe/heroe.model';
import { AlertProvider } from 'src/app/core/providers/alert.provider';
import { LoadingProvider } from 'src/app/core/providers/loading.provider';
import { ToastProvider } from 'src/app/core/providers/toast.provider';
import { HeroeService } from 'src/app/core/services/heroe/heroe.service';

@Component({
  selector: 'app-list-heroe',
  templateUrl: './list-heroe.component.html',
  styleUrls: ['./list-heroe.component.scss']
})
export class ListHeroeComponent implements OnInit {
  public heroes: HeroeModel[] = [];
  public displayedColumns: string[] = ['position', 'name', 'description', 'birthdate', 'type', 'other'];
  public tableSetting: {length: string, pageSize: string, pageSizeOptions: number[]} = {length: "", pageSize: "", pageSizeOptions: [5, 10]};
  public lastValue: string = '';

  constructor(
    private heroeService: HeroeService,
    private toastProvider: ToastProvider,
    private alertProvider: AlertProvider,
    private router: Router,
    private loadingProvider: LoadingProvider
  ) {
    console.log('ListHeroeComponent');
   }

  ngOnInit(): void {
    this.getHeroes();
    console.log('ListHeroeComponent');
  }
  
  async getHeroes(params?: {pageSize?: number, page?: number, value?: string}) {
    if (!params) params = {pageSize: 5, page: 0};
    if (!params.pageSize || !params.page) {
      !params.pageSize && (params.pageSize = 5);
      !params.page && (params.page = 0);
    }
    if (this.lastValue) params.value = this.lastValue;
    this.loadingProvider.setLoading(true);
    try {
      const response: {data: HeroeModel[], metaData: {rows: number}} = await this.heroeService.getHeroes(params);
      this.heroes = response.data;
      this.tableSetting.length = String(response.metaData.rows);
      this.tableSetting.pageSize = String(params.pageSize);
      this.loadingProvider.setLoading(false);
    } catch (error) {
      console.log('ERROR ', error);
      this.toastProvider.presentToast('Se produjo un error al obtener los registros');
      this.loadingProvider.setLoading(false);
    }
  }

  getServerData(event: { pageIndex: number, pageSize: number, previousPageIndex?: number}) {
    this.getHeroes({pageSize: event.pageSize, page: event.pageIndex});
  } 

  onClickEdit(element: any) {
    this.router.navigate(['add-edit-heroe'], {queryParams: {heroeId: element.id}});
  }

  async onClickDelete(element: any) {
    const response = await this.alertProvider.presentAlert('¡Atención!', '¿Esta seguro de que desea eliminar este registro?');
    if (!response) return;
    this.loadingProvider.setLoading(true);
    try {
      this.heroeService.deleteHeroe(element.id);
      this.loadingProvider.setLoading(false);
    } catch (error) {
      console.log('ERROR ', error);
      this.toastProvider.presentToast('Se produjo un error al eliminar el registro');
      this.loadingProvider.setLoading(false);
    }
    this.getHeroes();
    this.toastProvider.presentToast('Registro eliminado correctamente');
  }

  filter(event: any) {
    const filter = (event.target as HTMLInputElement).value;
    this.lastValue = filter.trim().toLowerCase();
    this.getHeroes();
  }

  onClickAdd() {
    this.router.navigateByUrl('add-edit-heroe');
  }
}
