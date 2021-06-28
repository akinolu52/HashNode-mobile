import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';
// import { useAuth } from './authProvider';

const API_URL = 'https://api.hashnode.com/';

const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
        Authorization: 'Bearer ccd886a9-dd11-4822-95d2-17ce0afbf64'
    }
});

export function useGetPosts() {
    return useQuery('get-posts', async () => {
        const { getPostList } = await graphQLClient.request(gql`
            query {
                storiesFeed(type: NEW){
                _id,
                followersCount,
                author{
                    _id,
                    username,
                    name,
                    tagline,
                    dateJoined,
                    isEvangelist,
                    photo,
                    coverImage,
                    numPosts,
                    numFollowers,
                    numFollowing
                },
                cuid,
                slug,
                title,
                type,
                popularity,
                # reactionsByCurrentUser, 
                totalReactions,
                bookmarkedIn,
                partOfPublication,
                # contributors,
                isActive,
                replyCount,
                responseCount,
                dateAdded,
                # tags,
                brief,
                coverImage,
                isAnonymous,
                dateUpdated,
                dateFeatured,
                # reactions,
                # poll,
                contentMarkdown
                }
            }
        `);
        return getPostList;
    });
}

export function useGetPost(postId) {
    return useQuery(['get-post', postId], async () => {
        const { getPost } = await graphQLClient.request(
            gql`
          query getPost($postId: ID!) {
            getPost(_id: $postId) {
              _id
              content
              description
              title
            }
          }
        `,
            { postId }
        );
        return getPost;
    });
}


// export { useGetPosts, useGetPost };