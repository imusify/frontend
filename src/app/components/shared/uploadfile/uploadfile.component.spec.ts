import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadfileComponent } from './uploadfile.component';

describe('UploadfileComponent', () => {
  let component: UploadfileComponent;
  let fixture: ComponentFixture<UploadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
