import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OPocoPage } from './o-poco.page';

describe('OPocoPage', () => {
  let component: OPocoPage;
  let fixture: ComponentFixture<OPocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OPocoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OPocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
