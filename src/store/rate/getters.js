/*
export function someGetter (state) {
}
*/
export function regionList(state) {
  if (state.region === null) return null;
  return state.region.map(el => ({ label: el.name, ...el }));
}

export function importantList(state) {
  if (state.important === null) return null;
  return state.important.map(el => ({ label: el.name, ...el }));
}

export function tableList(state) {
  if (state.tableList) {
    return state.tableList;
  }
}
