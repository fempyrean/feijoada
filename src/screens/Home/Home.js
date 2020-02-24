import React from 'react';
import {
    ScrollableContainer,
    Container,
    Title,
    Text,
    SearchBar,
    HomeSectionButton,
    PokeballUpperRightCorner,
} from '../../components';
import colors from '../../utils/colors';

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
            <Container style={{ flexWrap: 'wrap' }} noPadding row>
                {buttons}
            </Container>
        );
    }

    return (
        <ScrollableContainer>
            <Container noPadding>
                <PokeballUpperRightCorner />
                <Title style={{ marginTop: 20, marginBottom: 15 }} size="28">
                    What Pokemon{'\n'}are you looking for?
                </Title>
                <SearchBar placeholder="Search Pokemon, Moves, Ability, etc" />
                {renderButtons()}
            </Container>
        </ScrollableContainer>
    );
}
