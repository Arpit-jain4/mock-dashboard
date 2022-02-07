import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'graviats-ai';
  mobileQuery:any;
  isSideNavOpen: boolean;
  private _mobileQueryListener: () => void;
  constructor(public media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
    ) {
      this.isSideNavOpen = false;
    this.mobileQuery = media.matchMedia('(max-width: 769px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    
  }

  maintainSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard')
  }

  connection() {

  }

}
