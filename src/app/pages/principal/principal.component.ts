import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrincipalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
