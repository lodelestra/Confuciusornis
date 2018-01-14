export const ADD_PSU = 'ADD_PSU';
export const REMOVE_PSU = 'REMOVE_PSU';

export const OPEN_GPUS_DIALOG = 'OPEN_GPUS_DIALOG';
export const CLOSE_GPUS_DIALOG = 'CLOSE_GPUS_DIALOG';
export const CHANGE_GPUS_DIALOG_FILTERS = 'CHANGE_GPUS_DIALOG_FILTERS';

export const OPEN_PSUS_DIALOG = 'OPEN_PSUS_DIALOG';
export const CLOSE_PSUS_DIALOG = 'CLOSE_PSUS_DIALOG';

export const OPEN_MOTHERBOARDS_DIALOG = 'OPEN_MOTHERBOARDS_DIALOG';
export const CLOSE_MOTHERBOARDS_DIALOG = 'CLOSE_MOTHERBOARDS_DIALOG';

export const OPEN_LOAD_DEFAULT_DIALOG = 'OPEN_LOAD_DEFAULT_DIALOG';
export const CLOSE_LOAD_DEFAULT_DIALOG = 'CLOSE_LOAD_DEFAULT_DIALOG';
export const LOAD_DEFAULT_CONF = 'LOAD_DEFAULT_CONF';

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

export const openGpusDialog = () => {
  return {
    type: OPEN_GPUS_DIALOG,
  }
}

export const closeGpusDialog = () =>{
  return {
    type: CLOSE_GPUS_DIALOG,
  }
}

export const changeGpusDialogFilters = (filters) => {
  return {
    type: CHANGE_GPUS_DIALOG_FILTERS,
    filters,
  }
}

export const openPsusDialog = () => {
  return {
    type: OPEN_PSUS_DIALOG,
  }
}

export const closePsusDialog = () =>{
  return {
    type: CLOSE_PSUS_DIALOG,
  }
}

export const openMotherboardsDialog = () => {
  return {
    type: OPEN_MOTHERBOARDS_DIALOG,
  }
}

export const closeMotherboardsDialog = () => {
  return {
    type: CLOSE_MOTHERBOARDS_DIALOG,
  }
}

export const openLoadDefaultDialog = () => {
  return {
    type: OPEN_LOAD_DEFAULT_DIALOG,
  }
}

export const closeLoadDefaultDialog = () => {
  return {
    type: CLOSE_LOAD_DEFAULT_DIALOG,
  }
}

export const loadDefaultConf = () =>{
  return {
    type: LOAD_DEFAULT_CONF,
  }
}
