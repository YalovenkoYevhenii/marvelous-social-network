import React from 'react';

import {
  InfoBlockWrapper, InfoBlockRow, PostAvatar, PostBlockUserBlock,
  PostUserName, PostContent, PostDate,
} from './styles';

const PostBlock = () => (
  <InfoBlockWrapper>
    <InfoBlockRow>
      <PostBlockUserBlock>
        <PostAvatar />
        <PostUserName>
          Евгений Яловенко
        </PostUserName>
      </PostBlockUserBlock>
    </InfoBlockRow>
    <InfoBlockRow>
      <PostContent>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Itaque cum quod eum quia nihil aliquid tempore, sunt praesentium cumque,
        dicta quo id doloribus sed asperiores soluta ut minima laudantium voluptas.
        Sit laborum recusandae dolore dolor iste vero sint voluptatum cum rerum dolorem
        enim officiis molestiae ipsam fugit facere officia, exercitationem aut ducimus omnis
        porro quis!
        Officia illum accusantium corporis. Asperiores illo eveniet nam explicabo ipsam
        eligendi? Fuga doloremque, quos cumque possimus temporibus ab, nemo ad,
        consequatur laudantium ex veritatis iure velit itaque aliquam harum pariatur
        deserunt omnis eius dolorem dolore fugit voluptates!
        Velit reiciendis error repudiandae dolor. Laborum, distinctio nemo.
      </PostContent>
    </InfoBlockRow>
    <hr />
    <InfoBlockRow>

      <PostDate>
        30.07.2021
      </PostDate>
    </InfoBlockRow>
  </InfoBlockWrapper>
);

export default PostBlock;
