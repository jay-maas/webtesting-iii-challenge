import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Display from './Display'

describe('<Display />', () => {
    
    it('renders without errors', () => {
        render(<Display />)
    })

    it('renders containing div', () => {
        render(<Display />)
        expect(document.querySelector('.panel')).toBeTruthy()
    })

    it('renders led for locked/unlocked', () => {
        const { getByText } = render(<Display />)
        const unlockedLed = getByText('Unlocked')
        expect(unlockedLed.getAttribute('class')).toBe('led green-led')
    })

    it('renders led for open/closed', () => {
        const { getByText } = render(<Display />)
        const openLed = getByText(/open/i)
        expect(openLed.getAttribute('class')).toBe('led green-led')
    })

    it('matches snapshot', () => {
        const { container } = render(<Display />)
        expect(container).toMatchSnapshot()
    })
})