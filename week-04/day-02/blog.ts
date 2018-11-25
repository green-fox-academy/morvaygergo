'use strict';

export { };
import { BlogPost } from './blog-post';

class Blog {
  posts: BlogPost[];

  constructor() {
    this.posts = [];
  }

  add(post:BlogPost): void {
    this.posts.push(post);
  }

  delete(index: number): void {
    this.posts.splice(index, 1);
  }

  update(index: number, post: BlogPost): void {
    this.posts.splice(index, 1, post);
  }

}

let myBlog = new Blog;
let loremIpsum = new BlogPost('John Doe', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet.', "2000.05.04.");
let waitButWhy = new BlogPost('Tim Urban', 'Wait but Why', 'A popular long-form, stick-figure-illustrated blog about almost everything.', "2010.10.10.");
let trumpIBM = new BlogPost('William Turton', "One Engineer Is Trying to Get IBM to Reckon With Trump", 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.', "2017.03.28.");

console.log(myBlog);

myBlog.add(loremIpsum);
myBlog.add(waitButWhy);

console.log(myBlog);

myBlog.delete(1);

console.log(myBlog);

myBlog.update(0, trumpIBM);

console.log(myBlog);
