import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// Constants
import * as General from '../../constants/general';

// Graphql
import { PastLaunchesListGQL } from '../../services/spacexGraphql.service';

// RXjs
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  // Icons
  public nave = General.NAVE;
  private page = 0;
  private limitPage = 12;
  private offsetPage = 0;

  constructor( private pastLaunchesService: PastLaunchesListGQL ) { 

    //

  }

  pastLaunches$ = this.pastLaunchesService.fetch({offset: this.offsetPage, limit: this.limitPage }).pipe(
    map(
      res => res.data.launchesPast
    )
  )

  ngOnInit(): void {
  }

  public getDate( data: string ) {
    const dataTmp = data.split('T');
    const date = dataTmp[0];
    return date;
  }

  public getHour( data: string ) {
    const dataTmp = data.split('T');
    const timeTmp = dataTmp[1].split('.');
    const time = timeTmp[0];
    return time;

  }


  public changePage( event: any ) {

    if ( this.page < event.pageIndex ) {
      this.offsetPage += 12;
    } else if ( this.page > event.pageIndex ) {
      this.offsetPage -= 12;

    }

    this.pastLaunches$ = this.pastLaunchesService.fetch({offset: this.offsetPage, limit: this.limitPage }).pipe(
      map(
        res => res.data.launchesPast
      )
    )

    this.page = event.pageIndex;
    
  }
  

  public setColor( color: Boolean ) {
    if ( color ) {
      return {
        successMission: true
      }
    } else {
      return {
        failedMission: true
      }
    }
  }

}
