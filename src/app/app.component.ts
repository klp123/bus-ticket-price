import { Component } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  inputVal: string;
  toPrintData: string;
  stopsData = [
    {
      name: 'H.S.R. Layout',
      id: 1,
      km: 0,
    },
    {
      name: 'Madiwala',
      id: 2,
      km: 5,
    },
    {
      name: 'Forum',
      id: 3,
      km: 11,
    },
    {
      name: 'Shanthinagara',
      id: 4,
      km: 15,
    },
    {
      name: 'Richmond Circle',
      id: 5,
      km: 18,
    },

    {
      name: 'Chancery Pavillion',
      id: 6,
      km: 23,
    },
    {
      name: 'Bowring Institute',
      id: 7,
      km: 25,
    },

    {
      name: 'Banglore Club',
      id: 8,
      km: 27,
    },
    {
      name: 'Indian Express',
      id: 9,
      km: 29,
    },
    {
      name: 'Vasantanagara',
      id: 10,
      km: 30,
    },
    {
      name: 'RM Guttahalli',
      id: 11,
      km: 33,
    },
    {
      name: 'Mekhri Circle',
      id: 12,
      km: 35,
    },
    {
      name: 'Hebbala',
      id: 13,
      km: 37,
    },
    {
      name: 'BIAL',
      id: 14,
      km: 62,
    },
  ];

  calPrice(): any {
    let mapData = this.getStopsById(),
      kmDistance: number = mapData.endData.km - mapData.startData.km;
    let baseFare = 3,
      minFare = kmDistance - 20;
    if (minFare > 0) {
      kmDistance = kmDistance - minFare;
      minFare = minFare * 1;
    } else {
      minFare = 0;
    }
    let kmFare = kmDistance * 2;
    kmFare = kmFare - baseFare;
    console.log(minFare, kmFare, baseFare);
    let totalFare = minFare + kmFare;
    this.toPrintData =
      mapData.startData.name + ' > ' + mapData.endData.name + ' = ' + totalFare;
  }

  getStopsById() {
    let startStopData = this.stopsData.filter(
        (data: any) => data.id == this.getInputValues(0)
      ),
      endStopData = this.stopsData.filter(
        (data: any) => data.id == this.getInputValues(1)
      );
    return { startData: startStopData[0], endData: endStopData[0] };
  }

  getInputValues(element: number) {
    let val = this.inputVal.split('>');
    return val[element];
  }
}
