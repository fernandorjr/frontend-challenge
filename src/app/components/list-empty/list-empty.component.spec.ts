import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmptyComponent } from './list-empty.component';

describe('ListEmptyComponent', () => {
  let component: ListEmptyComponent;
  let fixture: ComponentFixture<ListEmptyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmptyComponent]
    });
    fixture = TestBed.createComponent(ListEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
