import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularrepoComponent } from './angularrepo.component';

describe('AngularrepoComponent', () => {
  let component: AngularrepoComponent;
  let fixture: ComponentFixture<AngularrepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularrepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
