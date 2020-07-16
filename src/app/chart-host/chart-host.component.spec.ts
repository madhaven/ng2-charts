import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartHostComponent } from './chart-host.component';
import { HIGHLIGHT_OPTIONS, HighlightModule } from 'ngx-highlightjs';
import { MaterialModule } from '../material/material.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

export function hljsLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    // html: import('highlight.js/lib/languages/html'),
    // scss: import('highlight.js/lib/languages/scss'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

describe('ChartHostComponent', () => {
  let component: ChartHostComponent;
  let fixture: ComponentFixture<ChartHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartHostComponent ],
      imports: [
        NoopAnimationsModule,
        MaterialModule,
        HighlightModule,
      ],
      providers: [{
        provide: HIGHLIGHT_OPTIONS,
        useValue: {
          languages: hljsLanguages()
        }
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
