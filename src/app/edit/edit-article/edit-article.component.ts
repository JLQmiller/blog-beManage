import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../shared';
import { HttpModuleNotImport } from '@ant-design/icons-angular';

@Component({
  selector: 'blog-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {
  title = '';
  pic: any;
  markdown = `## Markdown __rulez__!
  ---

  ### Syntax highlight
  \`\`\`typescript
  const language = 'typescript';
  \`\`\`

  ### Lists
  1. Ordered list


  2. Another bullet point
    - Unordered list
    - Another unordered bullet point

  ### Blockquote
  > Blockquote to the max`;
  abstract = "";
  constructor(
    private http: HttpClient,
    private api: ApiService,
  ) { }

  change() {
    console.log(this.pic);
  }

  createPictureForm() {
    const formData = new FormData();
    formData.append('pic', this.pic);
    this.api.imagePost('/article/picture', formData)
    .subscribe(res => {
      console.log(res);
    })
  }

  ngOnInit() {
    this.api.get('/article/fetch').subscribe(v => console.log(v));
  }

  createArticle() {
    console.log(this.title);

    console.log(this.markdown);
    const article = {
      title: this.title,
      abstract: this.abstract,
      content: this.markdown,
      publish: true,
    }
    this.api.post('/article/create', article).subscribe(v => {
      console.log(v);
    })

  }

}
