import {Post} from "./models";

export const POSTS: Post[] = [];

for (let i = 0; i < 10; i++) {
  POSTS.push(
    {
      id: i + 1,
      title: `title ${i + 1}`,
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ea eligendi inventore ipsa molestias officia temporibus tenetur voluptates. Ab aliquid deleniti et neque nesciunt nostrum, officia porro praesentium tempora totam?'
    }
  )
}
