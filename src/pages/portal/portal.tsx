import { useState, type FC } from 'react';
import { ResizableBox } from 'react-resizable';
import { Chats } from '../../features/chats/components/chats/chats';

export const ErrorPage: FC = () => {
  const [chatsWidth, setChatsWidth] = useState(240);
  const [panelWidth, setPanelWidth] = useState(240);

  return (
    <section className="flex h-full w-full min-w-0 overflow-hidden">
      <ResizableBox
        height={Infinity}
        width={chatsWidth}
        axis="x"
        resizeHandles={['e']}
        minConstraints={[180, 100]}
        maxConstraints={[400, 1000]}
        onResize={(_, { size }) => setChatsWidth(size.width)}
        className="h-full min-h-0 shrink-0 overflow-auto border-r border-gray-200"
      >
        <Chats />
      </ResizableBox>

      <section>
        {/* CHAT content */}
      </section>

      <ResizableBox
        height={Infinity}
        width={panelWidth}
        axis="x"
        resizeHandles={['e']}
        minConstraints={[180, 100]}
        maxConstraints={[400, 1000]}
        onResize={(_, { size }) => setPanelWidth(size.width)}
        className="h-full min-h-0 shrink-0 overflow-auto border-l border-gray-200"
      >
        <Chats />
      </ResizableBox>

      {/* handle size */}
      {/* className="absolute right-0 top-0 z-10 h-full w-1.5 cursor-col-resize hover:bg-blue-400" */}
    </section>
  );
};
