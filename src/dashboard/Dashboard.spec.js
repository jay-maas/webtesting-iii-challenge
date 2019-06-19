import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
   
    it('renders without errors', () => {
        render(<Dashboard />)
    })

    it('click close gate', () => {
        const { getByText } = render(<Dashboard />)
        const button = getByText(/close gate/i)
       
        fireEvent.click(button)
        
        expect(getByText(/open gate/i))
        expect(getByText(/closed/i))
        expect(getByText('Unlocked'))
        expect(getByText(/lock gate/i))
    })

    it('click open gate', () => {
        const { getByText } = render(<Dashboard />)

        fireEvent.click(getByText(/close gate/i))

        const button = getByText(/open gate/i)

        fireEvent.click(button)

        expect(getByText(/close gate/i))
        expect(getByText(/open/i))
        expect(getByText('Unlocked'))
        expect(getByText(/lock gate/i))
    })

})