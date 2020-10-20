import * as React from 'react';
import { render, themesList } from '@utils/tests';

// Components
import Button from '../Button';

const getRenderElement = (props: any) => render(
    <Button { ...props } />
);

describe('<Button />', () => {
    describe('Theme rendering: ', () => {
        test.each(themesList)('%p theme',
            (theme) => {
                const { getByTestId } = getRenderElement({ theme });

                const component = getByTestId('Button');

                expect(component).toBeVisible();
            }
        );
    });

    describe('Basic rendering: ', () => {
        it('should render properly', () => {
            const { getByTestId } = getRenderElement({});

            const component = getByTestId('Button');

            expect(component).toBeVisible();
        });
    });
});
