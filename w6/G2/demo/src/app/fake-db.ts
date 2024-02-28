import {Post} from "./models";

export const POSTS: Post[] = [];

for (let i = 0; i < 10; i++) {
  POSTS.push(
    {
      id: i + 1,
      title: `title ${i + 1}`,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur consequatur, eaque illum incidunt iure mollitia neque nostrum, officiis, porro quae quia quo tempore vel voluptas? Excepturi illum praesentium repudiandae.'
    }
  )
}
