import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdlchild2Component } from './tdlchild2.component';

describe('Tdlchild2Component', () => {
  let component: Tdlchild2Component;
  let fixture: ComponentFixture<Tdlchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tdlchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdlchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
