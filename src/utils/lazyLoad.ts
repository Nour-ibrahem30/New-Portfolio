export const lazyLoadModal = (modalType: string) => {
  switch (modalType) {
    case 'projects':
      return import('../components/Projects').then(module => module.default)
    default:
      return Promise.resolve(null)
  }
}