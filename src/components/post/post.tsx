import { Component, h, Prop, State } from '@stencil/core';
import { Octokit } from '@octokit/rest';
import { GistsGetResponseData } from '@octokit/types';

@Component({
  tag: 'gh-post',
  styleUrl: 'post.css',
  shadow: true
})
export class Post {
  readme: string;

  @State() gist: GistsGetResponseData;

  @Prop() gistId: string;

  async componentWillLoad () {
    const octokit = new Octokit();
    const resp = await octokit.gists.get({gist_id: this.gistId});
    
    if (resp.status === 200) {
      this.gist = resp.data;

      const text = resp.data.files['README.md'].content;
      this.readme = (await octokit.markdown.render({ text })).data as string;
    }
  }

  renderPost () {
    const {
      html_url: gistURL,
      created_at: createdAt,
      owner: {
        login,
        html_url: htmlURL
      }
    } = this.gist;
    console.log(this.gist);
    return (
      <article>
        <header>
          <h2>
            <a href={gistURL}>{this.gist.description}</a>
          </h2>
          <p>Posted <relative-time datetime={createdAt}></relative-time> by <a href={htmlURL}>{login}</a></p>
        </header>
        <div class="content" innerHTML={this.readme}></div>
      </article>
    );
  }

  render () {
    return (
      <li>
        {this.gist ? this.renderPost() : <div>Loading...</div>}
      </li>
    )
  }
}
