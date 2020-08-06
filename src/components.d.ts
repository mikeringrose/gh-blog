/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GhBlog {
        "name": string;
    }
    interface GhPost {
        "gistId": string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLGhBlogElement extends Components.GhBlog, HTMLStencilElement {
    }
    var HTMLGhBlogElement: {
        prototype: HTMLGhBlogElement;
        new (): HTMLGhBlogElement;
    };
    interface HTMLGhPostElement extends Components.GhPost, HTMLStencilElement {
    }
    var HTMLGhPostElement: {
        prototype: HTMLGhPostElement;
        new (): HTMLGhPostElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLElementTagNameMap {
        "gh-blog": HTMLGhBlogElement;
        "gh-post": HTMLGhPostElement;
        "my-component": HTMLMyComponentElement;
    }
}
declare namespace LocalJSX {
    interface GhBlog {
        "name"?: string;
    }
    interface GhPost {
        "gistId"?: string;
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "gh-blog": GhBlog;
        "gh-post": GhPost;
        "my-component": MyComponent;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gh-blog": LocalJSX.GhBlog & JSXBase.HTMLAttributes<HTMLGhBlogElement>;
            "gh-post": LocalJSX.GhPost & JSXBase.HTMLAttributes<HTMLGhPostElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
        }
    }
}