import React, {useCallback, useState} from 'react';
import {Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import {
  Head,
  Text,
  Button,
  ButtonsContainer,
  TopTab,
  Tab,
  ExitContainer,
} from './styles';

// Components
import List from '../../components/List';
import PostItem from '../../components/PostItem';
import AlbumItem from '../../components/AlbumItem';

// Actions
import {setUser} from '../../store/modules/user/actions';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();

  const [selectedTab, setSelectedTab] = useState(1);
  const user = useSelector((state) => state.user?.currentUser);

  const handleLogout = useCallback(() => {
    dispatch(setUser(null));
  }, [dispatch]);

  return (
    <>
      <Head first>
        <Text userName>@{user?.username}</Text>
        <Text name>{user?.name}</Text>
        <ButtonsContainer>
          <Button onPress={() => Linking.openURL(`mailto:${user?.email}`)}>
            <Icon name="email-outline" size={30} color="white" />
          </Button>
          <Button onPress={() => Linking.openURL(`tel:${user?.phone}`)}>
            <Icon name="phone-outline" size={30} color="green" />
          </Button>
          <Button
            onPress={() =>
              Linking.openURL(
                `google.navigation:q=${user?.address.geo.lat}+${user?.address.geo.lng}`,
              )
            }>
            <Icon name="map-marker" size={30} color="red" />
          </Button>
          <Button onPress={() => Linking.openURL(`https://${user?.website}`)}>
            <Icon name="web" size={30} color="blue" />
          </Button>
        </ButtonsContainer>
        <ExitContainer>
          <Button onPress={() => handleLogout()}>
            <Icon name="logout" size={30} color="white" />
          </Button>
        </ExitContainer>
      </Head>
      <TopTab>
        <Tab active={selectedTab === 1}>
          <Button tab onPress={() => setSelectedTab(1)}>
            <Icon
              name={selectedTab === 1 ? 'post' : 'post-outline'}
              size={30}
              color="lightgray"
            />
          </Button>
        </Tab>
        <Tab active={selectedTab === 2}>
          <Button tab onPress={() => setSelectedTab(2)}>
            <Icon
              name={
                selectedTab === 2 ? 'image-multiple' : 'image-multiple-outline'
              }
              size={30}
              color="lightgray"
            />
          </Button>
        </Tab>
      </TopTab>

      {selectedTab === 1 && (
        <List
          navigation={navigation}
          idField="userId"
          id={user?.id}
          query="posts"
          Component={PostItem}
        />
      )}
      {selectedTab === 2 && (
        <List
          navigation={navigation}
          idField="userId"
          id={user?.id}
          query="albums"
          Component={AlbumItem}
        />
      )}
    </>
  );
};

export default Profile;
