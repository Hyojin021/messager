import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { InputMaskDirective } from './input-mask.directive';
const rendererMock = jasmine.createSpyObj('rendererMock', [
    'createElement',
    'appendChild',
    'addClass',
    'setProperty'
]);
const renderer2Mock = {
    renderComponent: () => {
        return rendererMock;
    }
};
describe('Mask Directive', () => {
    let component;
    let fixture;
    let directive;
    let inputEl;
    const rendererCreateElement = rendererMock.createElement('div');
    beforeEach((() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent],
            imports: [
                CommonModule,
                FormsModule
            ],
            providers: [
                { provide: Renderer2, useValue: rendererMock }
            ]
        });
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;
        directive = new InputMaskDirective(new ElementRef(fixture.nativeElement));
        inputEl = fixture.debugElement.query(By.css('input'));
    });
    it('should create an instance', () => {
        expect(directive).toBeTruthy();
    });
});
let TestComponent = class TestComponent {
};
TestComponent = tslib_1.__decorate([
    Component({
        template: `
  <form #form="ngForm">
    <input name="password" [(ngModel)]="password" mask>
  </form>`
    })
], TestComponent);
//# sourceMappingURL=input-mask.directive.spec.js.map