import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencydataComponent } from './currencydata.component';

describe('CurrencydataComponent', () => {
  let component: CurrencydataComponent;
  let fixture: ComponentFixture<CurrencydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
