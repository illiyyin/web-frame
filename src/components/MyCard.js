// import React from 'react';
// import { Card, Icon, Avatar } from 'antd';

// const { Meta } = Card;

// class MyCard extends React.Component{
//     render() {
//         return(
//             <Card
//                 style={{ width: 300 }}
//                 cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
//                 actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
//             >
//                 <Meta
//                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
//                     title="Card title"
//                     description="This is the description"
//                 />
//             </Card>
//         )
//     }
// }

// export default MyCard;

import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = () => (
  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard
