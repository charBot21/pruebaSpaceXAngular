import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Constants
import * as General from '../../constants/general';

// Graphql
import { CompanyDetailGQL } from '../../services/spacexGraphql.service';

// RXjs
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {

  // icons
  public flickr = General.FLICKR;
  public twitter = General.TWITTER;
  public website = General.WEBSITE;

  constructor( private companyDetailService: CompanyDetailGQL ) {
  }

  detail$ = this.companyDetailService.fetch().pipe(
    map(
      res => res.data.company
    )
  )

  ngOnInit(): void {
  }
  

}
