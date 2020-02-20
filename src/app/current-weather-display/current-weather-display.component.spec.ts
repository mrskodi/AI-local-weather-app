import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherDisplayComponent } from './current-weather-display.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GetAPIdataService } from '../get-apidata.service';
import { GetFakeApidataService } from '../get-fake-apidata.service';

describe('CurrentWeatherDisplayComponent', () => {
  let component: CurrentWeatherDisplayComponent;
  let fixture: ComponentFixture<CurrentWeatherDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentWeatherDisplayComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: GetAPIdataService, useclass: GetFakeApidataService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentWeatherDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
