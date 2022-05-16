import React from 'react'
import {getByText, render} from '@testing-library/react'
import Card from './index'
import {WORKSDATA } from "../../mocks/WorksData";

describe('<Card/>', () => {
    it('show important card infos', () => {
        const { getByText } = render(
            <Card
                info={WORKSDATA[0]}
                viewType="Grid"
            />
        )
        expect(getByText((content)=>content.includes(WORKSDATA[0].name.toUpperCase()))).toBeInTheDocument()
        expect(getByText(WORKSDATA[0].title)).toBeInTheDocument()
    })
})