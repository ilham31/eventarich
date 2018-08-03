import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { DateConvertPipe } from './date-convert/date-convert';
import { SafeImagePipe } from './safe-image/safe-image';
import { BreaklinePipe } from './breakline/breakline';
import { TopEventSortPipe } from './top-event-sort/top-event-sort';

@NgModule({
	declarations: [SearchPipe, DateConvertPipe, SafeImagePipe,
    BreaklinePipe,
    TopEventSortPipe],
	imports: [],
	exports: [SearchPipe, DateConvertPipe, SafeImagePipe,
    BreaklinePipe,
    TopEventSortPipe]
})

export class PipesModule {}
