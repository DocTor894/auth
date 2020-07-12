export const state = () => ({
  users: {
    user1: {
      id: '1',
      username: 'Jone123',
      password: '123456',
      name: 'Jone',
      phone: '+7(999)-999-99-99',
      photos: [
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' }
      ]
    },
    user2: {
      id: '2',
      username: 'Sara123',
      password: '123456',
      name: 'Sara',
      phone: '+7(999)-999-99-99',
      photos: [
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' }
      ]
    },
    user3: {
      id: '3',
      username: 'Jack123',
      password: '123456',
      name: 'Jack',
      phone: '+7(999)-999-99-99',
      photos: [
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' },
        { photo: 'https://picsum.photos/510/300?random' }
      ]
    },
  },
  user: {
    username: '',
    password: ''
  }
})

export const mutations = {
  setUser (state, user) {
    state.user = { ...user }
  }
}
