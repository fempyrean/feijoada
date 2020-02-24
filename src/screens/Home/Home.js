import React from 'react';
import {
    ScrollableContainer,
    Container,
    Title,
    Text,
    TextLink,
    SearchBar,
    HomeSectionButton,
    PokeballUpperRightCorner,
    News,
} from '../../components';
import colors from '../../utils/colors';

const news = {
    1: {
        title: 'Pokémon Rumble Rush Arrives Soon',
        date: '10 May 2019',
        source: require('../../assets/images/thumbnails/thumbnail1.png'),
    },
    2: {
        title: 'Detective Pikachu finds out your mom is a whore',
        date: 'Just Now',
        source: require('../../assets/images/thumbnails/thumbnail2.jpg'),
    },
};

export default function Home() {
    function renderButtons() {
        const data = {
            pokedex: {
                title: 'Pokedex',
                bgColor: colors.btn.home.green,
                onPress: () => {},
            },
            moves: {
                title: 'Moves',
                bgColor: colors.btn.home.red,
                onPress: () => {},
            },
            abilities: {
                title: 'Abilities',
                bgColor: colors.btn.home.blue,
                onPress: () => {},
            },
            items: {
                title: 'Items',
                bgColor: colors.btn.home.yellow,
                onPress: () => {},
            },
            locations: {
                title: 'Locations',
                bgColor: colors.btn.home.purple,
                onPress: () => {},
            },
            typeCharts: {
                title: 'Type Charts',
                bgColor: colors.btn.home.brown,
                onPress: () => {},
            },
        };

        const buttons = [];

        Object.keys(data).map(key => {
            const current = data[key];
            buttons.push(
                <HomeSectionButton
                    key={key}
                    title={current.title}
                    background={current.bgColor}
                    onPress={current.onPress}
                />
            );
        });

        return (
            <Container
                style={{
                    flexWrap: 'wrap',
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                }}
                noPadding
                row
            >
                {buttons}
            </Container>
        );
    }

    function renderNews() {
        return Object.keys(news).map(key => {
            const current = news[key];
            return (
                <News
                    title={current.title}
                    date={current.date}
                    thumb={current.source}
                />
            );
        });
    }

    return (
        <ScrollableContainer noPadding background={colors.bg.lightGrey}>
            <Container
                style={{
                    borderBottomLeftRadius: 25,
                    borderBottomRightRadius: 25,
                    paddingBottom: 30,
                }}
            >
                <PokeballUpperRightCorner />
                <Title style={{ marginTop: 20, marginBottom: 15 }} size="28">
                    What Pokemon{'\n'}are you looking for?
                </Title>
                <SearchBar placeholder="Search Pokemon, Moves, Ability, etc" />
                {renderButtons()}
            </Container>
            <Container background={colors.bg.lightGrey}>
                <Container
                    row
                    style={{
                        marginVertical: 35,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                    background={colors.bg.lightGrey}
                >
                    <Text font="Bold">Pokémon News</Text>
                    <TextLink>View All</TextLink>
                </Container>
                {renderNews()}
            </Container>
        </ScrollableContainer>
    );
}
