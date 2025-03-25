import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailComponent } from './user-detail.component';
import { Location } from '@angular/common';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;
  let location: Location;

  beforeEach(async () => {
    const locationSpy = jasmine.createSpyObj('Location', ['back']);
    await TestBed.configureTestingModule({
      declarations: [ UserDetailComponent ],
      providers: [
        { provide: Location, useValue: locationSpy },
        provideRouter([])
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
