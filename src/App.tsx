import { Post, PostType } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/guirodrigues9876.png",
      name: 'Guilherme Santos',
      role: 'Student'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-13 1:24:10'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/filipedeschamps.png",
      name: 'Filipe Deschamps',
      role: 'Software Engineer',
    },
    content: [
      { type: 'paragraph', content: 'E aí pessoal 👋'},
      { type: 'paragraph', content: "Olha esse projeto que acabei de fazer."},
      { link: 'Link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-13 3:54:07'),
  },
]

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
            {posts.map(post => {
              return (
                <Post
                  key = {post.id} 
                  post={post}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

export default App



