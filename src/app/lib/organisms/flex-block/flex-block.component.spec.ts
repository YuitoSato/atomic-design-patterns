import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexBlockComponent } from './flex-block.component';

describe('FlexBlockComponent', () => {
  let component: FlexBlockComponent;
  let fixture: ComponentFixture<FlexBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
