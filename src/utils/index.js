// import React from 'react';
export * from './variables';
export * from './authProvider';
import Clipboard from '@react-native-clipboard/clipboard';

export const getRouteIconName = (route, isFocused) => {
    let iconName;

    switch (route) {
        case 'Story':
            iconName = isFocused ? 'home-sharp' : 'home-outline';
            break;
        case 'Explore':
            iconName = isFocused ? 'search' : 'search-outline';
            break;
        case 'Profile':
            iconName = isFocused ? 'person-circle-outline' : 'person-circle-outline';
            break;
        default:
            break;
    }

    return iconName;
};


export const pasteFromClipboard = async () => {
    const content = await Clipboard.getString();
    if (content) {
        return content;
    } else {
        return false;
    }
};


export const feeds = [
    {
        "_id": "60da03b968364a2e7b2cefbb",
        "followersCount": 1,
        "author": {
            "_id": "60d58cb312f77505a833d307",
            "username": "ProCoder88",
            "name": "Muhammad Maaz Shakeel",
            "tagline": "I am a Self-Taught Developer. Learning Mobile App Development With React-Native",
            "dateJoined": "2021-06-25T07:58:43.042Z",
            "isEvangelist": false,
            "photo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1624607923738/kfBSuQSsc.jpeg",
            "coverImage": null,
            "numPosts": 5,
            "numFollowers": 0,
            "numFollowing": 9
        },
        "cuid": "ckqgvtr2m08qe6js124eab5r7",
        "slug": "10-linux-commands-for-beginners",
        "title": "10 Linux Commands For Beginners",
        "type": "story",
        "popularity": null,
        "totalReactions": 0,
        "bookmarkedIn": [],
        "partOfPublication": true,
        "isActive": true,
        "replyCount": 0,
        "responseCount": 0,
        "dateAdded": "2021-06-28T17:15:37.618Z",
        "brief": "Note: If there is a command ls then you need to only type ls but not to type Ls.   Linux and Unix Commands are case-sensitive..\n\n1. pwd\npwd is a command that shows you the path where you are currently is.\n2. ls\nls is a command that shows you the list...",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1624897324129/5M32nIWhN.png",
        "isAnonymous": false,
        "dateUpdated": "2021-06-28T17:18:41.015Z",
        "dateFeatured": null,
        "contentMarkdown": null
    },
    {
        "_id": "60da02e0703d372ea06c89f6",
        "followersCount": 1,
        "author": {
            "_id": "60d9fe6b68364a2e7b2ceeb8",
            "username": "anto",
            "name": "Anto P V",
            "tagline": "developing",
            "dateJoined": "2021-06-28T16:52:59.101Z",
            "isEvangelist": false,
            "photo": "https://cdn.hashnode.com/res/hashnode/image/upload/v1624899179883/ngE6nLYOC.png",
            "coverImage": null,
            "numPosts": 1,
            "numFollowers": 0,
            "numFollowing": 0
        },
        "cuid": "ckqgvp3mv08yl7ks1d3851q8g",
        "slug": "cloud-cart",
        "title": "Cloud Cart",
        "type": "story",
        "popularity": null,
        "totalReactions": 0,
        "bookmarkedIn": [],
        "partOfPublication": true,
        "isActive": true,
        "replyCount": 0,
        "responseCount": 0,
        "dateAdded": "2021-06-28T17:12:00.617Z",
        "brief": "In this era of the internet, e-commerce is growing by leaps and bounds keeping the growth of brick and- mortar businesses in the dust. In many cases, brick-and-mortar businesses are resorting to having a counterpart which is internet or e-commerce dr...",
        "coverImage": "https://cdn.hashnode.com/res/hashnode/image/upload/v1624900011538/gGLcqrXi4.jpeg",
        "isAnonymous": false,
        "dateUpdated": null,
        "dateFeatured": null,
        "contentMarkdown": null
    }
];