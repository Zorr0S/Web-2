import { Component, OnInit ,OnDestroy } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  posts: ScullyRoute[] = [];
  private routeSub: Subscription | undefined;
  constructor(private scullysService: ScullyRoutesService) { }

  ngOnInit(): void {
    this.routeSub=
    this.scullysService.available$.subscribe((posts) => {
      this.posts = posts.filter((post) => post.title);
    });
  }

  ngOnDestroy(): void{
    this.routeSub?.unsubscribe();
  }
}
