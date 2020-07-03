import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from 'src/app/models/contacto.models';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  public fragment: string;

  public listo = false;

  // itemRef: AngularFireObject<any>;
  // item: Observable<any>;
  // itemname: PathReference = 'contacto';
  contactonuevo: Contacto;

  bandera: boolean;
  envie: boolean;

  constructor(private route: ActivatedRoute) {
    this.route.fragment.subscribe((fragment: string) => {
      this.fragment = fragment;
      // console.log(this.fragment);
    });

    this.contactonuevo = new Contacto('', '', '', '');
    this.envie = false;
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.save();
    console.log(this.contactonuevo);
    this.contactonuevo = new Contacto('', '', '', '');
    this.bandera = true;
    this.envie = true;
  }

}
