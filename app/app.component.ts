import { Component } from '@angular/core';

export class AppComponent {
    title = 'List of Factions';
    faction = 'Wizards';
}

@Component({
    selector: 'my-description',
    template: `
      <h1>{{ocmp.title}}</h1>
        <h2>{{ocmp.faction}}dsds</h2>`
})

export class Description {
    ocmp = new AppComponent();
}

@Component({
    selector: 'my-header',
    template: `
    <h1>{{ocmp.title}}</h1>
      <h2>{{ocmp.faction}}dsds</h2>
        <h3><my-description></my-description></h3>`,
    directives: [Description]
})

export class Header {
    ocmp = new AppComponent();

    constructor(){
      console.log("Header");
      console.log(this.ocmp);
    }
}
