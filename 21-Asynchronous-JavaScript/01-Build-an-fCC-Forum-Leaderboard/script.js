const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Backend Development", className: "backend" },
};

function timeAgo(isoString) {
  const past = new Date(isoString);
  const now = new Date();

  const diffInMs = now - past;

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (diffInMinutes < 60) {
    return `${diffInMinutes}m ago`;
  } else if (diffInHours < 24) {
    return `${diffInHours}h ago`;
  } else {
    return `${diffInDays}d ago`;
  }
}

function viewCount(count) {
  if (count >= 1000) {
    return `${Math.floor(count / 1000)}k`;
  }
  return count;
}

function forumCategory(id) {
  if (Object.hasOwn(allCategories, id)) {
    const className = allCategories[id].className;
    const category = allCategories[id].category;

    return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${id}">${category}</a>`;
  } else {
    return `<a class="category general" href="${forumCategoryUrl}general/${id}">General</a>`;
  }
}

function avatars(posters, users) {
  let result = "";
  posters.forEach((item) => {
    const user = users.find((u) => u.id === item.user_id);
    const avatarTemplate = user.avatar_template.replace("{size}", "30");
    let src = avatarTemplate;

    if (!src.startsWith("http://") && !src.startsWith("https://")) {
      src = `${avatarUrl}${avatarTemplate}`;
    }

    result += `<img src="${src}" alt="${user.name}">`;
  });
  return result;
}

function showLatestPosts(obj) {
  const { users, topic_list } = obj;
  const topics = topic_list.topics;
  const postsContainer = document.querySelector("#posts-container");

  topics.forEach((item) => {
    const {
      id,
      title,
      views,
      posts_count,
      slug,
      posters,
      category_id,
      bumped_at,
    } = item;

    postsContainer.innerHTML += `<tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>
        ${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">
          ${avatars(posters, users)}
        </div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${viewCount(views)}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
  });
}

async function fetchData() {
  fetch(forumLatest)
    .then((res) => res.json())
    .then((data) => showLatestPosts(data))
    .catch((err) => console.log(err));
}
