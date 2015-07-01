/// <reference path="../typings/tsd.d.ts" />
import { Component, View, bootstrap,  } from 'angular2/angular2';
import { Main } from 'component/main';
import { appServicesInjectables } from 'services/services';

@Component({
	selector: 'app'
})

@View({
	template: 
	`<main title="Details">
		<p>Here's some detailed content.</p>
	</main>`,
	directives: [Main]
})



// Component controller
class App {  }

bootstrap(App, [appServicesInjectables]);