import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh' }}>
             <PrettyChatWindow
             projectId='38218656-2349-4c1c-bf1e-2bd265e1b131'
             username={props.user.username}
             secret={props.user.secret}
             style={{height:'100%'}}
            />
        </div>
    )
}

export default ChatsPage