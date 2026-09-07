async function loadPost() {
  // ① 从 URL 读文章 id，如 post.html?id=wsl-notes → "wsl-notes"
  const id = new URLSearchParams(location.search).get('id')

  // ② 读 posts.json，找到匹配的那篇
  const posts = await (await fetch('posts.json')).json()
  const post = posts.find(p => p.id === id)

  // ③ 找不到就提示（你刚才看到的 404 就靠这步优雅处理）
  if (!post) {
    document.querySelector('#post-title').textContent = '文章不存在'
    return
  }

  // ④ 填标题和日期
  document.title = post.title
  document.querySelector('#post-title').textContent = post.title
  document.querySelector('#post-date').textContent = post.date

  // ⑤ 读 md 原文 → marked 转 HTML → 放进正文
  const md = await (await fetch(post.file)).text()
  document.querySelector('#post-content').innerHTML = marked.parse(md)
}

loadPost()