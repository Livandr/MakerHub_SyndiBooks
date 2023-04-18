import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsetComponent } from './accountset.component';

describe('AccountsetComponent', () => {
  let component: AccountsetComponent;
  let fixture: ComponentFixture<AccountsetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
