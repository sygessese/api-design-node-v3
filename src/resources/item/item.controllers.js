const controllers = {
  getOne: id => {
    return { message: `heres item ${id}` }
  },
  getAll: () => {
    return { message: 'heres all items' }
  },
  deleteOne: () => {
    return { message: 'this item was deleted' }
  },
  updateOne: () => {
    return { message: 'this item was updated' }
  },
  createOne: () => {
    return { message: 'you created this item' }
  }
}
export default controllers
