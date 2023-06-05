import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionPersonalExtraComponent } from './informacion-personal-extra.component';

describe('InformacionPersonalExtraComponent', () => {
  let component: InformacionPersonalExtraComponent;
  let fixture: ComponentFixture<InformacionPersonalExtraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionPersonalExtraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionPersonalExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
