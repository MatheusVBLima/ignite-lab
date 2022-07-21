import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from '../avatar/Avatar'
import styles from './Comment.module.css'

export function Comment({content, onDeleteComment}) {
    
   const [likeCount, setLikeCount] = useState(0)

   function handleDeleteComment(){
    onDeleteComment(content)
   }

   function handleLikeCount(){
    setLikeCount(likeCount + 1)
   }
  
   return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1563782414961-ab4f00d5ffbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"/>
        
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Storm Trooper</strong>
                        <time title='3 de julho às 11:00h' dateTime='3/7/2022 11:00:00'>
                            cerca de 1 hora atrás
                        </time>
                    </div>
                    <button onClick={handleDeleteComment} title='Deletar Comentário'>
                        <Trash size={24} />
                    </button>
                        
                </header>
                <p>{content}</p>
            
            </div>
            <footer>
                
                <button onClick={handleLikeCount}>
                    <ThumbsUp />
                    Aplaudir<span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}
