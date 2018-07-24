import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { DateConvertPipe } from './date-convert/date-convert';


@NgModule({
	declarations: [SearchPipe, DateConvertPipe],
	imports: [],
	exports: [SearchPipe, DateConvertPipe]
})

export class PipesModule {}
