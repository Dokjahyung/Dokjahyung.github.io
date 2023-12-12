document.addEventListener("DOMContentLoaded", function() {
    const userData = {
        "login": "Dokjahyung",
        "id": 117134089,
        "node_id": "U_kgDOBvtTCQ",
        "avatar_url": "https://avatars.githubusercontent.com/u/117134089?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/Dokjahyung",
        "html_url": "https://github.com/Dokjahyung",
        "followers_url": "https://api.github.com/users/Dokjahyung/followers",
        "following_url": "https://api.github.com/users/Dokjahyung/following{/other_user}",
        "gists_url": "https://api.github.com/users/Dokjahyung/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/Dokjahyung/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/Dokjahyung/subscriptions",
        "organizations_url": "https://api.github.com/users/Dokjahyung/orgs",
        "repos_url": "https://api.github.com/users/Dokjahyung/repos",
        "events_url": "https://api.github.com/users/Dokjahyung/events{/privacy}",
        "received_events_url": "https://api.github.com/users/Dokjahyung/received_events",
        "type": "User",
        "site_admin": false,
        "name": "Gabriel Sirvent",
        "company": null,
        "blog": "",
        "location": "Fresno, California",
        "email": null,
        "hireable": null,
        "bio": "I am shameless in how much I will work to get where I want to be 💯 ",
        "twitter_username": null,
        "public_repos": 16,
        "public_gists": 0,
        "followers": 2,
        "following": 4,
        "created_at": "2022-11-01T02:20:01Z",
        "updated_at": "2023-12-09T06:20:28Z",
        "private_gists": 0,
        "total_private_repos": 0,
        "owned_private_repos": 0,
        "disk_usage": 165950,
        "collaborators": 0,
        "two_factor_authentication": false,
        "plan": {
        "name": "free",
        "space": 976562499,
        "collaborators": 0,
        "private_repos": 10000
        }
    };

    const userObject = JSON.parse(JSON.stringify(userData));

    const container = document.getElementById('githubUserData');

    // Create elements and apply styles
    const avatar = document.createElement('img');
    avatar.src = userObject.avatar_url;
    avatar.className = 'avatar';

    const userInfo = document.createElement('div');
    userInfo.className = 'user-info';

    const username = document.createElement('h1');
    username.textContent = userObject.name || userObject.login;

    const userDetails = document.createElement('p');
    userDetails.textContent = `Followers: ${userObject.followers}, Following: ${userObject.following}`;

    const bio = document.createElement('div');
    bio.className = 'bio';

    const bioText = document.createElement('p');
    bioText.textContent = userObject.bio;

    // Append elements to container
    container.appendChild(avatar);
    userInfo.appendChild(username);
    userInfo.appendChild(userDetails);
    container.appendChild(userInfo);
    bio.appendChild(bioText);
    container.appendChild(bio);
});
