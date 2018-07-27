import { NgModule } from '@angular/core';
import { SearchPipe } from './search/search';
import { DateConvertPipe } from './date-convert/date-convert';
import { SafeImagePipe } from './safe-image/safe-image';

@NgModule({
	declarations: [SearchPipe, DateConvertPipe, SafeImagePipe],
	imports: [],
	exports: [SearchPipe, DateConvertPipe, SafeImagePipe]
})

export class PipesModule {}
