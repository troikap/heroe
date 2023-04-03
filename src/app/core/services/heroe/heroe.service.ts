import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../../models/heroe/heroe.model'
import { StorageProvider } from '../../providers/storage.provider';
import { GenericHelper } from '../../helpers/generic.helper';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  // public heroesInit: HeroeModel[] = [ 
  //   { id: 1, position: 1, name: 'Batman', description: 'Its cool', birthdate: '05/05/1999', type: 'normal' },
  //   { id: 2, position: 2, name: 'Robin', description: 'Its bad', birthdate: '04/04/1995', type: 'normal' },
  //   { id: 3, position: 3, name: 'Ironman', description: 'He is metal man ', birthdate: '10/10/2000', type: 'legendario' },
  //   { id: 4, position: 4, name: 'Spiderman', description: 'He is spider man ', birthdate: '10/10/2015', type: 'epico' },
  //   { id: 5, position: 5, name: 'Hulk', description: 'He is green man ', birthdate: '10/10/2011', type: 'epico' },
  //   { id: 6, position: 6, name: 'Superman', description: 'He is super man ', birthdate: '10/10/2008', type: 'legendario' },
  //   { id: 7, position: 7, name: 'Batman', description: 'Its cool', birthdate: '05/05/1999', type: 'normal' },
  //   { id: 8, position: 8, name: 'Robin', description: 'Its bad', birthdate: '04/04/1995', type: 'normal' },
  //   { id: 9, position: 9, name: 'Ironman', description: 'He is metal man ', birthdate: '10/10/2000', type: 'legendario' },
  //   { id: 10, position: 10, name: 'Spiderman', description: 'He is spider man ', birthdate: '10/10/2015', type: 'epico' },
  //   { id: 11, position: 11, name: 'Hulk', description: 'He is green man ', birthdate: '10/10/2011', type: 'epico' },
  //   { id: 12, position: 12, name: 'Superman', description: 'He is super man ', birthdate: '10/10/2008', type: 'legendario' },
  // ];

  constructor(
		private httpClient: HttpClient,
    private storageProvider: StorageProvider,
    private genericHelper: GenericHelper
  ) { }

  async getHeroes( params?: {pageSize?: number, page?: number, value?: string} ): Promise<{data: HeroeModel[], metaData: {rows: number}}> {
    let filterData, fullData: HeroeModel[];
		fullData = filterData = await this.getRecords();
    if (params) {
      if (params.value) fullData = fullData.filter( element => element.name.trim().toLowerCase().includes(params.value as string) );
      if (!params.page) params.page = 0;
      if (!params.pageSize) params.pageSize = 5;
      const position = params.page*params.pageSize;
      filterData = filterData.sort(this.genericHelper.compareRecords);
      filterData = fullData.slice(position, position + params.pageSize);
    }
    return {data: filterData, metaData: {rows: fullData.length}} as {data: HeroeModel[], metaData: {rows: number}};
	}

  async setHeroe( data: HeroeModel ) {
    let heroesStorage: HeroeModel[] = await this.getRecords();
    const maxId = this.genericHelper.getMaxId(heroesStorage);
    data.id = maxId+1;
    heroesStorage.push(data);
    this.storageProvider.setObject('HEROES_KEY', heroesStorage);
	}

  async getHeroe( heroeId: number ): Promise<HeroeModel> {
    let heroesStorage: HeroeModel[] = await this.getRecords();
    const response = heroesStorage.find( element => element.id == heroeId );
    return response as HeroeModel;
	}

  async updateHeroe( data: HeroeModel ) {
    let heroesStorage: HeroeModel[] = await this.getRecords();
    heroesStorage = heroesStorage.map( (element) => {
      if (element.id == data.id) return data;
      return element;
    });
    this.storageProvider.setObject('HEROES_KEY', heroesStorage);
	}

  async deleteHeroe( heroeId: number ) {
    let heroesStorage: HeroeModel[] = await this.getRecords();
    heroesStorage = heroesStorage.filter( element => element.id != heroeId );
    this.storageProvider.setObject('HEROES_KEY', heroesStorage);
	}

  async getRecords(): Promise<HeroeModel[]> {
    const heroesStorage: HeroeModel[] = this.storageProvider.getObject('HEROES_KEY');
    return heroesStorage || await this.getHeroesJson();
  }

  async resetHeroe() {
    this.storageProvider.setObject('HEROES_KEY', await this.getHeroesJson());
    location.reload();
	}

  async getHeroesJson() {
    const jsonForm = `/assets/jsons/get-heroes.json?${new Date()}`;
    const records = await lastValueFrom(this.httpClient.get(jsonForm));
    return records;
  }
}
