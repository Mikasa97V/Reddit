export interface IPostData {
    id: string;
    title: string;
    author: string;
    num_comments: number;
    ups: number;
    created: number;
    subreddit: string;
    selftext: string;
    upvote_ratio: number;
    sr_detail: {
        icon_img?: string,
        header_img?: string,
        banner_img?: string,
    };
}

export interface IDataChildrenPosts {
    kind: string;
    data: IPostData;
}
