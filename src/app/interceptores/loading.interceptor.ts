import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  let _ngxUiLoaderService = inject(NgxUiLoaderService);
  let _activeRequest = 0;

  if (_activeRequest === 0) {
    _ngxUiLoaderService.start();
  }
  _activeRequest++;
  return next(req).pipe(finalize(() => {
    _activeRequest--;
    if(_activeRequest===0){
      _ngxUiLoaderService.stop();
    }
  }));
};
