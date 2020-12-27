import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const { data, indices} = React.useMemo(() => {
    const Items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>Following</Heading>,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Following Categories</Title>,
        isTitle: true,
      },

      {
        key: 'C1',
        render: () => <View />,
      },

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },

      {
        key: 'C2',
        render: () => <View />,
      },

      {
        key: 'CANTINUE_WATCHING',
        render: () => <Title>Cantinue Watching</Title>,
        isTitle: true,
      },

      {
        key: 'C3',
        render: () => <View />,
      },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Offline Channels</Title>,
        isTitle: true,
      },

      {
        key: 'C4',
        render: () => <View />,
      },
    ];

    //Array  que contém apenas os indices dos elementos que são títulos;
    const indices: number[] = [];

    //Se o item ele for isTitle, passa dentro da array (index)
    Items.forEach((item, index) => item.isTitle && indices.push(index));

    //Depois retorna data e index
    return {
      data: Items,
      indices,
    }


  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={item => item.key}
            stickyHeaderIndices={indices}
            //Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
