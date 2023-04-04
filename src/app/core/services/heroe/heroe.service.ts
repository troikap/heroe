import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeModel } from '../../models/heroe/heroe.model'
import { StorageProvider } from '../../providers/storage/storage.provider';
import { GenericHelper } from '../../helpers/generic/generic.helper';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

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
