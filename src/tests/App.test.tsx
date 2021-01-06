import React from 'react'
import { render, screen } from '@testing-library/react'
import DownCard from 'pages/Main/DownCard'

describe('<DownCard />', () => {
  it('renders header', () => {
    const { getByText } = render(<DownCard />)
    const button = screen.getByText('D-7')
    expect(button).toBeInTheDocument()
  })
})
