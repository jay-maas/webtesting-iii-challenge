import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/react/cleanup-after-each'

import Controls from './Controls'

describe('<Controls />', () => {
    
    it('renders without errors', () => {
        render(<Controls />)
    })

    it('renders containing div', () => {
        render(<Controls />)
        expect(document.querySelector('.panel')).toBeTruthy()
    })

    it('renders unlock/lock button', () => {
        const { getByText } = render(<Controls />)
        expect(getByText(/lock gate/i))
    })

    it('renders unlock/lock button', () => {
        const { getByText } = render(<Controls />)
        expect(getByText(/close gate/i))
    })

    it('matches snapshot', () => {
        const { container } = render(<Controls />)
        expect(container).toMatchSnapshot()
    })

})