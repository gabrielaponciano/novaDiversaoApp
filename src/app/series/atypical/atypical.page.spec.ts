import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtypicalPage } from './atypical.page';

describe('AtypicalPage', () => {
  let component: AtypicalPage;
  let fixture: ComponentFixture<AtypicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtypicalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtypicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
