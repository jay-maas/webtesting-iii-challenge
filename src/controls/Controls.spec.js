import React from 'react'
import { render } from '@testing-library/react'

import Controls from './Controls'

describe('<Controls />', () => {
    
    it('renders without errors', () => {
        render(<Controls />)
    })

})