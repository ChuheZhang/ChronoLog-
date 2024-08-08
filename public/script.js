document.addEventListener('DOMContentLoaded', function() {
    loadPosts();

    document.getElementById('postForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const date = document.getElementById('date').value;
        const content = document.getElementById('content').value;
        addPost(date, content);
    });
});

async function loadPosts() {
    const response = await fetch('/posts');
    const posts = await response.json();
    const timeline = document.querySelector('.timeline');
    timeline.innerHTML = ''; // 清空当前的动态
    posts.forEach(post => {
        const container = document.createElement('div');
        container.className = `container left`; // 你可以根据需要调整位置
        container.innerHTML = `
            <div class="content">
                <h2>${post.date}</h2>
                <p>${post.content}</p>
            </div>
        `;
        timeline.appendChild(container);
    });
}

async function addPost(date, content) {
    const response = await fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, content })
    });
    const newPost = await response.json();
    loadPosts(); // 重新加载动态
}
