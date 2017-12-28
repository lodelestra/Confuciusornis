export const ADD_PSU = 'ADD_PSU';
export const REMOVE_PSU = 'REMOVE_PSU';

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

export const addMotherboard = motherboard => {
  return {
    type: 'ADD_MOTHERBOARD',
    motherboard,
  }
}

export const removeMotherboard = () => {
  return {
    type: 'REMOVE_MOTHERBOARD',
  }
}

export const addPSU = PSU => {
  return {
    type: ADD_PSU,
    PSU,
  }
}

export const removePSU = () => {
  return {
    type: REMOVE_PSU,
  }
}
