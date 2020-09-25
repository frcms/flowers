import Head from 'next/head'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Link from '../src/Link'
import Button from '@material-ui/core/Button'
import React from 'react'
import Box from '@material-ui/core/Box'

export default function Index() {
  return (
    <Container>
      <Typography variant="h1" component="h1">
        Hello world!
      </Typography>
      <Button variant="contained" component={Link} href="https://github.com/frcms/" color="primary">
        GitHub
      </Button>
    </Container>
  )
}