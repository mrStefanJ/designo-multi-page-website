import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  imgCAN: string = '../../../assets/images/contact/illustration-canada.svg';
  imgAUS: string = '../../../assets/images/contact/illustration-australia.svg';
  imgUK: string = '../../../assets/images/contact/illustration-united-kingdom.svg';

  constructor(private service: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  contacUs() {
    if (this.contactForm.valid) {
      this.service.addContactUs(this.contactForm.value).subscribe((res) => {
        console.log(res);
        this.contactForm.reset();
      });
    }
  }
}
