// 1. 先拿到页面上那个空列表元素
const postList = document.querySelector('.post-list')

// 2. async 函数：里面能用 await 等网络请求
async function loadPosts() {
  const response = await fetch('posts.json')  // 发请求拿数据文件
  const posts = await response.json()         // 把响应文本解析成数组
  renderPosts(posts)
}

// 3. 把文章数组变成页面里的 <li>
function renderPosts(posts) {
  postList.innerHTML = ''                     // 先清空（防御性：重复加载不叠加）
  for (const post of posts) {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `post.html?id=${post.id}`        // 模板字符串拼链接
    const title = document.createElement('span')
    title.className = 'post-title'
    title.textContent = post.title
    const time = document.createElement('time')
    time.textContent = post.date
    a.append(title, time)                     // 把标题和时间塞进 <a>
    li.append(a)                              // <a> 塞进 <li>
    postList.append(li)                       // <li> 塞进列表
  }
}

// 4. 入口：页面加载完执行
loadPosts()