import { Component, EventEmitter, OnInit, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Heroe } from 'src/app/models/heroes';
import { FORM_CREATE_HERO } from 'src/app/services/constants/forms.constant';

@Component({
  selector: 'app-hero-list-form',
  templateUrl: './hero-list-form.component.html',
  styleUrls: ['./hero-list-form.component.scss']
})
export class HeroListFormComponent implements OnInit, OnChanges {

  @Input() data: Heroe;
  @Output() onSubmit = new EventEmitter();

  public heroFormGroup: FormGroup;


  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.heroFormGroup = this.fb.group(FORM_CREATE_HERO);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'].currentValue) { this.setForm(this.data) };
  }

  submit() {
    this.onSubmit.emit(this.heroFormGroup.value);
  }

  private setForm(heroe) {
    const {
      hero,
      name,
      id
    } = this.heroFormGroup.controls;

    hero.setValue(heroe?.hero);
    name.setValue(heroe?.name);
    id.setValue(heroe?.id);
  }

}
