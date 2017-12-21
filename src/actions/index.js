export const addTest = text => {
  return {
    type: 'ADD_TEST',
    id: 3,
    text
  }
}

export const addGPU = GPU => {
  return {
    type: 'ADD_GPU',
    GPU,
  }
}

export const removeGPUAt = index => {
  return {
    type: 'REMOVE_GPU_AT',
    index,
  }
}

export const addGPUCountAt = index => {
  return {
    type: 'ADD_GPU_COUNT_AT',
    index,
  }
}

export const removeGPUCountAt = index => {
  return {
    type: 'REMOVE_GPU_COUNT_AT',
    index,
  }
}