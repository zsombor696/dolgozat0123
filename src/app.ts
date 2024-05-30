"use strict";
// File: app.ts
// Author: Juhász Zsombor
// Copyright: 2024, Juhász Zsombor
// Group: I-2-N
// Date: 2024-05-30
// Github: https://github.com/zsombor696/
// Licenc: GNU GPL
class Atlo {
    a_side?: HTMLInputElement | null;
    b_side?: HTMLInputElement | null;
    atlo?: HTMLInputElement | null;
    calcButton?: HTMLButtonElement | null;

    constructor() {
        this.bindHtml();
        this.handleEvent();
    }
    bindHtml() {
        this.a_side = document.querySelector('#a_side');
        this.b_side = document.querySelector('#b_side');
        this.atlo = document.querySelector('#atlo');
        this.calcButton = document.querySelector('#calcButton');
    }
    handleEvent() {
        this.calcButton?.addEventListener('click', () => {
            this.startCalc();
        })
    }
    startCalc() {
        const aSide = Number(this.a_side?.value);
        const bSide = Number(this.b_side?.value)
        const perimeter = this.calcAtlo(aSide, bSide);
        this.atlo!.value = String(perimeter);
    }
    calcAtlo(aSide: number, bSide:number):number {
        return Math.sqrt(aSide * aSide + bSide * bSide);
    }
}
new Atlo();