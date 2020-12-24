import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestowaPage } from './testowa.page';

describe('TestowaPage', () => {
  let component: TestowaPage;
  let fixture: ComponentFixture<TestowaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestowaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestowaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
