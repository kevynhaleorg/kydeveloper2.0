import { Component, OnInit, ViewChild } from '@angular/core';
import { select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../models/post.model';
import { KySelectDropdownComponent } from '../../components/ky-select-dropdown/ky-select-dropdown.component';
import 'rxjs/add/operator/skip';
import { BlogActions } from '../../../actions';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  
  dropDownItems: string[] = [ "all", "development", "design", "devops" ]
  @ViewChild(KySelectDropdownComponent) dropdown: KySelectDropdownComponent;

  @select(['blog', 'blog', 'posts']) readonly posts$: Observable<Post[]>

  @select(['blog', 'blog', 'loading']) readonly loading$: Observable<boolean>


  constructor(private _actions: BlogActions) {
    
  }

  ngOnInit(): void {
    this._actions.getPosts()
  }

  ngAfterViewInit() {
    this.dropdown._selected.skip(1).subscribe(
      (selected) => {
        this._actions.setPostsCategory(selected)
      })
  }

  searchBoxInput(value: any) {
    this._actions.setPostsFilter(value)
  }

}
