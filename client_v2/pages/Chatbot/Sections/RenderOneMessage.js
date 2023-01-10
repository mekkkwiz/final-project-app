import React from 'react'
import { List, Avatar } from 'antd';
import { RobotOutlined, SmileOutlined } from '@ant-design/icons'


export default function RenderOneMessage(props) {

    const AvatarSrc = (props.who ==='bot') ?
    <RobotOutlined style={{display: 'inline-block',verticalAlign: 'middle', fontSize: '20px', color: 'black'}}/>
    : <SmileOutlined style={{display: 'inline-block',verticalAlign: 'middle', fontSize: '20px', color: 'black'}}/>

    return(
        <List.Item style={{ padding: '1rem' }}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={props.who}
                description={props.text}
            />
        </List.Item>
    )
}
