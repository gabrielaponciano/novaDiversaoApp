import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TomeJerryPage } from './tome-jerry.page';

describe('TomeJerryPage', () => {
  let component: TomeJerryPage;
  let fixture: ComponentFixture<TomeJerryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TomeJerryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TomeJerryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
