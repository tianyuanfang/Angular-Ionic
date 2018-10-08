import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdlparentComponent } from './tdlparent.component';

describe('TdlparentComponent', () => {
  let component: TdlparentComponent;
  let fixture: ComponentFixture<TdlparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdlparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdlparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
