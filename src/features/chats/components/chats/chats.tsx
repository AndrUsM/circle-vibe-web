import { type FC } from 'react';
import { Chat } from './chat';

export const Chats: FC = () => {
  const chats: string[] = [];

  return (
    <section>
      {chats.map((_chat, index) => <Chat key={index}></Chat>)}    
    </section>
  )
}