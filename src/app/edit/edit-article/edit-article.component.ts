import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.sass']
})
export class EditArticleComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
