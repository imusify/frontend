import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftpaneComponent } from './leftpane.component';

describe('LeftpaneComponent', () => {
  let component: LeftpaneComponent;
  let fixture: ComponentFixture<LeftpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
