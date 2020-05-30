import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { G1917Page } from './g1917.page';

describe('G1917Page', () => {
  let component: G1917Page;
  let fixture: ComponentFixture<G1917Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ G1917Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(G1917Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
