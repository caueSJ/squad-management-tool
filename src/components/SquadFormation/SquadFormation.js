import React from 'react';
import RoundedImage from '../RoundedImage/RoundedImage';
import Section from '../Section/Section';

import './SquadFormation.scss';

const SquadFormation = () => {
    return (
        <div className="SquadFormation">
            <Section bgGradientV>
                <div class="flex">
                    <RoundedImage dashed alt={'+'} />
                    <RoundedImage dashed alt={'+'} />
                    <RoundedImage dashed alt={'+'} />
                </div>
            </Section>
        </div>
    )
}

export default SquadFormation;