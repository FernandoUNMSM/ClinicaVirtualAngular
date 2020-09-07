import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DoctoresComponent } from "./doctores.component";

describe("DoctoresComponent", () => {
  let component: DoctoresComponent;
  let fixture: ComponentFixture<DoctoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
