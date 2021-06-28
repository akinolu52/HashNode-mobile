import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import {
    Text, Container, Post,
} from '@components';
import { feeds } from '@utils';

function StoryDetailsScreen({ navigation }) {
    return (
        <Container title="Story">

            <View style={{}}>
                <FlatList
                    data={feeds}
                    renderItem={({ item }) => <Post post={item} />}
                    keyExtractor={item => item._id}
                // horizontal={true}
                />
            </View>

        </Container>
    );
}

export { StoryDetailsScreen };
