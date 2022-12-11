import { Validators } from "@angular/forms";

const FORM_CREATE_HERO = {
  hero: ['', [Validators.required]],
  name: ['', [Validators.required]],
  id: ['', [Validators.required]],
}

export { FORM_CREATE_HERO }
