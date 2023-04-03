import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroeModel } from 'src/app/core/models/heroe/heroe.model';
import { LoadingProvider } from 'src/app/core/providers/loading.provider';
import { ToastProvider } from 'src/app/core/providers/toast.provider';
import { HeroeService } from 'src/app/core/services/heroe/heroe.service';

@Component({
  selector: 'app-add-edit-heroe',
  templateUrl: './add-edit-heroe.component.html',
  styleUrls: ['./add-edit-heroe.component.scss']
})
export class AddEditHeroeComponent implements OnInit {
  public form: FormGroup;
   
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private heroeService: HeroeService,
    private toastProvider: ToastProvider,
    private activatedRoute: ActivatedRoute,
    private loadingProvider: LoadingProvider
  ) { 
    this.form = this.formBuilder.group({
      id: [null],
      position: ['', Validators.required],
      name: ['', Validators.compose([ Validators.required, Validators.minLength(3) ])],
      description: ['', Validators.compose([ Validators.required, Validators.minLength(5) ])],
      birthdate: ['', Validators.required],
      type: ['', Validators.required],
    });
    const snapshotData = this.activatedRoute.snapshot;
    const heroeId = snapshotData?.queryParams['heroeId'];
    if (heroeId) this.form.controls['id'].setValue(heroeId);
  }

  ngOnInit(): void {
    if (this.form.value.id) this.getHeroe(this.form.value.id);
  }

  async getHeroe(heroeId: number) {
    this.loadingProvider.setLoading(true);
    try {
      const response: HeroeModel = await this.heroeService.getHeroe(heroeId) as HeroeModel;
      this.form.patchValue(response);
      this.loadingProvider.setLoading(false);
    } catch (error) {
      this.toastProvider.presentToast('Problemas al encontrar heroe');
      this.loadingProvider.setLoading(false);
    }
  }

  onClickSubmitForm() {
    let formValues = this.form.value;
    this.loadingProvider.setLoading(true);
    if (!formValues.id) {
      delete formValues.id;
      try {
        this.heroeService.setHeroe(formValues);
        this.toastProvider.presentToast('Heroe creado correctamente');
        this.router.navigateByUrl('list-heroe');
        this.loadingProvider.setLoading(false);
      } catch (error) {
        this.toastProvider.presentToast('Problemas al crear heroe');
        this.loadingProvider.setLoading(false);
      }
    } else {
      try {
        this.heroeService.updateHeroe(formValues);
        this.toastProvider.presentToast('Heroe editado correctamente');
        this.router.navigateByUrl('list-heroe');
        this.loadingProvider.setLoading(false);
      } catch (error) {
        this.toastProvider.presentToast('Problemas al editar heroe');
        this.loadingProvider.setLoading(false);
      }
    }
  }

  onClickBack() {
    this.router.navigateByUrl('list-heroe');
  }
}
