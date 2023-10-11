/* eslint-disable import/first */
import React from 'react';
import { Icon } from '@cloudflare/component-icon';
import IconComponents from './reactsvgs/index.js'

const iconTypes = Object.keys(IconComponents)
console.log(iconTypes)

import { createComponent } from '@cloudflare/style-container';

const ColorWrapper = createComponent(
    () => ({
        backgroundColor: '#f1f1f1',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '15px',
        maxWidth: 750,
        display: 'block'
    }),
    'span'
);

const TextWrapper = createComponent(
    () => ({
        paddingRight: '20px',
        paddingLeft: '5px'
    }),
    'span'
);

const IconComponent = () => (
    <div>
        <p>Types:</p>
        <Icons>
            {iconTypes.map(iconType => (
                <IconWrapper key={iconType}>
                    <Icon label={iconType} type={iconType} size="3x" />
                    <pre>{iconType}</pre>
                </IconWrapper>
            ))}
        </Icons>

        <p>Sizes:</p>
        <p>
            <Icon label="2x" size="2x" type="gear" />
            <TextWrapper>2x</TextWrapper>
            <Icon label="2.5x" size="2.5x" type="gear" />
            <TextWrapper>2.5x</TextWrapper>
            <Icon label="3x" size="3x" type="gear" />
            <TextWrapper>3x</TextWrapper>
            <Icon label="3.5x" size="3.5x" type="gear" />
            <TextWrapper>3.5x</TextWrapper>
            <Icon label="4x" size="4x" type="gear" />
            <TextWrapper>4x</TextWrapper>
        </p>

        <p>Colors:</p>
        <p>
            <ColorWrapper>
                <Icon label="default" size="2x" type="search" color="default" />
                <TextWrapper>Default</TextWrapper>
                <Icon label="primary" size="2x" type="caret-right" color="primary" />
                <TextWrapper>Primary</TextWrapper>
                <Icon label="success" size="2x" type="ok" color="success" />
                <TextWrapper>Success</TextWrapper>
                <Icon label="warning" size="2x" type="info-sign" color="warning" />
                <TextWrapper>Warning</TextWrapper>
                <Icon label="danger" size="2x" type="exclamation-sign" color="danger" />
                <TextWrapper>Danger</TextWrapper>
                <Icon label="black" size="2x" type="remove" color="black" />
                <TextWrapper>Black</TextWrapper>
                <Icon label="white" size="2x" type="shield" color="white" />
                <TextWrapper>White</TextWrapper>
            </ColorWrapper>
        </p>
    </div>
);

const gutterSize = '0.5em';
const Icons = createComponent(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(8rem, 1fr))',
    gridAutoRows: '1fr',
    margin: `0 -${gutterSize}`,
    '&::before': {
        content: `''`,
        width: '0',
        paddingBottom: '100%',
        gridRow: '1 / 1',
        gridColumn: '1 / 1'
    }
}));


const IconWrapper = createComponent(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: gutterSize,
    background: theme.colors.gray[9],
    '& svg': {
        flex: 1,
        marginTop: '1.5em'
    },
    '&:first-child': {
        gridRow: '1 / 1',
        gridColumn: '1 / 1'
    }
}));

/*
const IconComponent = () => (
    <Icon />
);
*/

export default IconComponent;