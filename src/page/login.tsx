import React, { useState } from 'react'

const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState(false)
  return {
    isOpen,
    onOpen() {
      setIsOpen(true)
    },
    onClose() {
      setIsOpen(false)
    },
  }
}

const Login: React.FC = () => {
  return (
    <>
      <h3>this is login page.</h3>

    </>
  )
}

export default Login