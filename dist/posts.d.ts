type Post = {
    title: string;
    postBody: string;
};
declare const posts: {
    title: string;
    postBody: string;
}[];
declare const createPost: (post: Post, callback: () => void) => void;
declare const getPosts: () => void;
declare const createPostPromise: (post: Post) => Promise<unknown>;
