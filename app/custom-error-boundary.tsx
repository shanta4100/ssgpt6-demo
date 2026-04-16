'use client'

import React from 'react'

type ErrorBoundaryProps = {
  children: React.ReactNode
  title: string
}

type ErrorBoundaryState = {
  error: Error | null
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error }
  }

  retry = () => {
    this.setState({ error: null })
  }

  render() {
    if (!this.state.error) {
      return this.props.children
    }

    const { title } = this.props
    const { error } = this.state

    if (!error) {
      return this.props.children
    }

    return (
      <div>
        <h2>{title}</h2>
        <p>{error.message}</p>
        <button onClick={this.retry}>Try again</button>
      </div>
    )
  }
}
