
export type contact = {
      id: string,
      email: string,
      name: string,
      surname: string,
      phone: string
}

export type history = {
      id: string,
      id_contact: number,
      email: string,
      name: string,
      surname: string,
      phone: string,
      createdAt: string,
      updatedAt: string
}

export type user = {
      email: string,
      password: string,
      name?: string
}

type userState = {
  error: string,
  token: string
}

export type userHook = {
  state: userState
  login: (user: user) => void
  signUp: (user: user ) => void,
  logOut: () => void
}
