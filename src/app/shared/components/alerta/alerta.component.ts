import { Component, OnInit } from '@angular/core';

import { AlertaService } from '../../services/alerta.service';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  constructor(public alertaService: AlertaService) { }

  ngOnInit(): void {
  }

}
