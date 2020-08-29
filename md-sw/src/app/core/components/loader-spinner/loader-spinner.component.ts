import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { debounceTime, tap, takeUntil } from 'rxjs/operators';

import { LoaderService } from '@/services/loader.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss']
})
export class LoaderSpinnerComponent implements OnInit, OnDestroy {

  /**
   * Contains subscriptions to destroy and prevent memory leaks
   */
  private destroy$: Subject<void> = new Subject<void>();

  /**
   *
   * @param spinner Inject spinner service
   * @param loaderService Inject loaderService
   */
  constructor(private loaderService: LoaderService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loaderService.isLoading
      .pipe(
        tap(val => { this.spinner.show(); }),
        debounceTime(300),
        takeUntil(this.destroy$),
      )
      .subscribe((value) => {
        if (value) {
          this.spinner.show();
        } else {
          this.spinner.hide();
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
