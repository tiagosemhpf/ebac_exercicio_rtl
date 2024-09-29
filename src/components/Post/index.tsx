import styles from './Post.module.css';

import PostComments from '../PostComments';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
    imageUrl: string;
}

const Post = ({ children, imageUrl }: Props) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={'https://th.bing.com/th/id/OIP.Fgc2Mvt_g8xerfYO0jNL-QHaHa?rs=1&pid=ImgDetMain'} alt="Descrição da imagem" />
        <p className={styles['post-text']}> {children} </p>
        <PostComments />
    </div>
);

export default Post;