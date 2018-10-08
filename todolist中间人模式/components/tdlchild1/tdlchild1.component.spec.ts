import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdlchild1Component } from './tdlchild1.component';

describe('Tdlchild1Component', () => {
  let component: Tdlchild1Component;
  let fixture: ComponentFixture<Tdlchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tdlchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdlchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
