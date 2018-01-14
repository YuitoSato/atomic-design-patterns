import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineBlockComponent } from './inline-block.component';

describe('InlineBlockComponent', () => {
  let component: InlineBlockComponent;
  let fixture: ComponentFixture<InlineBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
