import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { DateConvertPipe } from './date-convert/date-convert';
import { SafeImagePipe } from './safe-image/safe-image';
import { BreaklinePipe } from './breakline/breakline';

@NgModule({
	declarations: [SearchPipe, DateConvertPipe, SafeImagePipe,
    BreaklinePipe],
	imports: [],
	exports: [SearchPipe, DateConvertPipe, SafeImagePipe,
    BreaklinePipe]
})

export class PipesModule {}
