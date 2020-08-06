import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'gh-blog',
  styleUrl: 'blog.css',
  shadow: true
})
export class Blog {

  @Prop() name: string;

  render() {
    return [
    <header>
      <slot name="blog-name">
        <h2>{this.name}</h2>
      </slot>
    </header>,
    <main>
      <ul>
        <slot />
      </ul>
    </main>
    ];
  }
}
