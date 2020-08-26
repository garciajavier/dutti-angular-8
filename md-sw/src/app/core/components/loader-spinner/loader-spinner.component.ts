import { NgxSpinnerService } from 'ngx-spinner';
import { Component, OnInit } from '@angular/core';

import { debounceTime, tap } from 'rxjs/operators';

import { LoaderService } from '@/services/loader.service';


@Component({
  selector: 'app-loader-spinner',
  templateUrl: './loader-spinner.component.html',
  styleUrls: ['./loader-spinner.component.scss']
})
export class LoaderSpinnerComponent implements OnInit {
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
        debounceTime(300)
      )
      .subscribe((value) => {
        if (value) {
          this.spinner.show();
        } else {
          this.spinner.hide();
        }
      });
  }
}
