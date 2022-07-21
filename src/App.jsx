import { Header } from './components/header/Header'
import { Post } from './components/post/Post'
import { Sidebar } from './components/sidebar/Sidebar'

import './global.css'
import styles from './App.module.css'

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
      name: 'Darth Vader',
      role: 'Sith Lord'
    },
    content: [
      {type: 'paragraph', content: 'Lorem, ipsum dolor.'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem enim a adipisci'},
      {type: 'link', content: 'Segue o link'}
    ],
    publishedAt: new Date('2022-06-03 11:00:00'),
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://images.unsplash.com/photo-1546561892-65bf811416b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50',
      name: 'Darth Vader',
      role: 'Sith Lord'
    },
    content: [
      {type: 'paragraph', content: 'Lorem, ipsum dolor.'},
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet'},
      {type: 'link', content: 'Segue o link'}
    ],
    publishedAt: new Date('2022-07-03 12:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return( 
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


