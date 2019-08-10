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

        expect(getByText(/lock gate/i).disabled).toBeTruthy()
       
        fireEvent.click(button)

        expect(getByText(/lock gate/i).disabled).not.toBeTruthy()
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

        expect(getByText(/lock gate/i).disabled).toBeTruthy()
        expect(getByText(/close gate/i))
        expect(getByText(/open/i))
        expect(getByText('Unlocked'))
        expect(getByText(/lock gate/i))
    })

    it('click lock gate', () => {
        const { getByText } = render(<Dashboard />)

        fireEvent.click(getByText(/close gate/i))

        const button = getByText(/lock gate/i)

        fireEvent.click(button)

        expect(getByText(/open gate/i).disabled).toBeTruthy()
        expect(getByText(/open gate/i))
        expect(getByText(/closed/i))
        expect(getByText('Locked'))
        expect(getByText('Unlock Gate'))
    })

    it('click unlock gate', () => {
        const { getByText } = render(<Dashboard />)

        fireEvent.click(getByText(/close gate/i))
        fireEvent.click(getByText(/lock gate/i))

        expect(getByText(/open gate/i).disabled).toBeTruthy()

        const button = getByText(/unlock gate/i)

        fireEvent.click(button)

        expect(getByText(/open gate/i).disabled).not.toBeTruthy()
        expect(getByText(/open gate/i))
        expect(getByText(/closed/i))
        expect(getByText('Unlocked'))
        expect(getByText('Lock Gate'))
    })

})